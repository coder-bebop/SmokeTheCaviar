import {memo, useContext} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {IndependentColors} from '../../../config/Colors';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const Button = ({label, onPress}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: theme.darkYellow}]}
      onPress={onPress}>
      <Text style={[styles.buttonLabel, {color: theme.black}]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

// Exporting
export default memo(Button);
