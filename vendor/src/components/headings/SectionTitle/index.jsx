import {memo, useContext} from 'react';
import {Text} from 'react-native';
import {ThemeContext} from '../../../contexts';
import styles from './styles';

// Functional component
const SectionTitle = ({title}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <Text style={[styles.sectionTitle, {color: theme.white}]}>{title}</Text>
  );
};

// Exporting
export default memo(SectionTitle);
