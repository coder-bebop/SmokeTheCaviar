import {memo, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ThemeContext} from '../../../contexts';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';
import ArrowRightDarkGreen from '../../../assets/icons/svg/ic_arrow_right_dark_green.svg';
import styles from './styles';

// Functional component
const NavigationLink = ({leftIcon, label, onPress}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <TouchableOpacity style={styles.link} onPress={onPress}>
      <View style={styles.linkIconAndLabelWrapper}>
        <View
          style={[styles.linkIconWrapper, {backgroundColor: theme.lightYellow}]}>
          {leftIcon}
        </View>
        <Text style={[styles.linkLabel, {color: theme.white}]}>
          {label}
        </Text>
      </View>

      {/* Arrow icon */}
      <ArrowRightDarkGreen
        width={STANDARD_VECTOR_ICON_SIZE}
        height={STANDARD_VECTOR_ICON_SIZE}
      />
    </TouchableOpacity>
  );
};

// Exporting
export default memo(NavigationLink);
