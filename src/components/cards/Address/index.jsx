import {memo, useContext} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  STANDARD_SPACING,
  STANDARD_VECTOR_ICON_SIZE,
} from '../../../config/Constants';
import {ThemeContext} from '../../../contexts';
import SvgCheckmarkWhite from '../../../assets/icons/svg/ic_checkmark_white.svg';
import SvgCheckmarkBlack from '../../../assets/icons/svg/ic_checkmark_black.svg';
import styles from './styles';

// Functional component
const Address = ({
  avatarImage,
  addressTitle,
  address,
  isChecked,
  isLastItem,
}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <TouchableOpacity
      style={[
        styles.addressCard,
        {
          backgroundColor: isChecked ? theme.accentLightest : theme.lightYellow,
          borderColor: isChecked ? theme.white : theme.darkYellow,
          marginBottom: isLastItem ? 0 : STANDARD_SPACING * 3,
        },
      ]}>
      {/* Avatar image, title & address wrapper */}
      <View style={styles.avatarImageAndAddressWrapper}>
        <Image style={styles.avatarImage} source={avatarImage} />
        <View style={styles.titleAndAddressWrapper}>
          <Text
            style={[
              styles.addressTitle,
              {
                color: isChecked
                  ? theme.textHighContrast
                  : theme.textLowContrast,
              },
            ]}>
            {addressTitle}
          </Text>
          <Text
            style={[
              styles.address,
              {
                color: isChecked
                  ? theme.textHighContrast
                  : theme.textLowContrast,
              },
            ]}>
            {address}
          </Text>
        </View>
      </View>

      {/* Checkbox */}
      <View
        style={[
          styles.checkedIconWrapper,
          {backgroundColor: isChecked ? theme.white : theme.black},
          {borderColor: isChecked ? theme.white : theme.darkYellow},
        ]}>
        {isLightTheme ? (
          <SvgCheckmarkWhite
            width={STANDARD_VECTOR_ICON_SIZE * 0.5}
            height={STANDARD_VECTOR_ICON_SIZE * 0.5}
          />
        ) : (
          <SvgCheckmarkBlack
            width={STANDARD_VECTOR_ICON_SIZE * 0.5}
            height={STANDARD_VECTOR_ICON_SIZE * 0.5}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

// Exporting
export default memo(Address);
