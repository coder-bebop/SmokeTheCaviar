import {memo, useContext} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {IndependentColors} from '../../../config/Colors';
import {ThemeContext} from '../../../contexts';
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
      style={[styles.button, {backgroundColor: theme.white}]}
      onPress={onPress}>
      <Text style={[styles.buttonLabel, {color: IndependentColors.white}]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

// Exporting
export default memo(Button);
