import {memo, useContext} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import {ThemeContext} from '../../../contexts';
import styles from './styles';

// Functional component
const Coupon = ({offer, code, logo}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <ImageBackground
      source={
        isLightTheme
          ? require('../../../assets/images/backgrounds/coupon_bg.png')
          : require('../../../assets/images/backgrounds/coupon_bg_dark.png')
      }
      style={styles.couponImageBackground}>
      <Text style={[styles.offer, {color: theme.textHighContrast}]}>
        {offer}
      </Text>
      <Text style={[styles.brand, {color: theme.white}]}>{code}</Text>
      <View style={[styles.brandLogoWrapper]}>
        <Image style={styles.brandLogo} source={logo} />
      </View>
    </ImageBackground>
  );
};

// Exporting
export default memo(Coupon);
