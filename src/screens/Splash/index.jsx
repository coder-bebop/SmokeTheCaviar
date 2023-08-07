import {ImageBackground, Image} from 'react-native';
import styles from './styles';

// Functional components
const Splash = () => {
  // Returning
  return (
    <ImageBackground
      source={require('../../assets/images/logos/smokethecaviar_logo.jpg')}
      style={styles.imageBackground}
      blurRadius={40}
      >
      <Image
        animation="fadeInUp"
        delay={100}
        source={require('../../assets/images/logos/smokethecaviar_logo.jpg')}
        style={styles.logo}
      />
    </ImageBackground>
  );
};

// Exporting
export default Splash;
