import {memo, useContext} from 'react';
import {View} from 'react-native';
import {ThemeContext} from '../../../contexts';
import styles from './styles';

// Functional component
const HorizontalDivider = () => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <View style={[styles.dividerLine, {backgroundColor: theme.lightYellow}]} />
  );
};

// Exporting
export default memo(HorizontalDivider);
