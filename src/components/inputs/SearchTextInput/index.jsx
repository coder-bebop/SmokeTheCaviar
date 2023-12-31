import {memo, useContext} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';
import {ThemeContext} from '../../../contexts';
import SvgSearch from '../../../assets/icons/svg/ic_search_dark_green.svg';
import styles from './styles';

// Functional component
const SearchTextInput = () => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <View
      style={[
        styles.textInputWrapper,
        {
          borderColor: theme.darkYellow,
          backgroundColor: theme.darkYellow,
          color: theme.textHighContrast,
        },
      ]}>
      {/* Text input */}
      <TextInput
        placeholder="Search here..."
        placeholderTextColor={theme.textLowContrast}
        style={[styles.textInput, {color: theme.textHighContrast}]}
      />

      {/* Search icon */}
      <TouchableOpacity style={styles.searchIconWrapper}>
        <SvgSearch
          width={STANDARD_VECTOR_ICON_SIZE}
          height={STANDARD_VECTOR_ICON_SIZE}
        />
      </TouchableOpacity>
    </View>
  );
};

// Exporting
export default memo(SearchTextInput);
