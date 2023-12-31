import {useContext} from 'react';
import {View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Button from '../../components/buttons/Button';
import TextInput from '../../components/inputs/TextInput';
import Link from '../../components/links/Link';
import {ThemeContext} from '../../contexts';
import SvgMan2 from '../../assets/avatars/svg/av_man_2.svg';
import EditDarkGreen from '../../assets/icons/svg/ic_edit_dark_green.svg';
import {
  STANDARD_USER_AVATAR_WRAPPER_SIZE,
  STANDARD_VECTOR_ICON_SIZE,
} from '../../config/Constants';
import styles from './styles';

// Functional component
const EditProfile = ({navigation}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: theme.white}]}>
      {/* Form wrapper */}
      <Animatable.View
        animation="fadeInUp"
        delay={100}
        style={[styles.formWrapper, {backgroundColor: theme.black}]}>
        {/* Avatar wrapper */}
        <Animatable.View
          animation="fadeInUp"
          delay={300}
          style={styles.avatarWrapper}>
          {/* Avatar */}
          <SvgMan2
            width={STANDARD_USER_AVATAR_WRAPPER_SIZE * 2}
            height={STANDARD_USER_AVATAR_WRAPPER_SIZE * 2}
          />

          {/* Camera icon wrapper */}
          <Animatable.View
            animation="bounceIn"
            delay={1700}
            style={[
              styles.cameraIconWrapper,
              {backgroundColor: theme.accentLightest},
            ]}>
            <EditDarkGreen
              width={STANDARD_VECTOR_ICON_SIZE}
              height={STANDARD_VECTOR_ICON_SIZE}
            />
          </Animatable.View>
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Text input component */}
        <Animatable.View animation="fadeInUp" delay={700}>
          <TextInput label="Name" placeholder="Enter your name" />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Text input component */}
        <Animatable.View animation="fadeInUp" delay={900}>
          <TextInput label="Email" placeholder="Enter your email" />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Text input component */}
        <Animatable.View animation="fadeInUp" delay={1100}>
          <TextInput
            label="Phone number"
            placeholder="Enter your phone number"
          />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Link component */}
        <Animatable.View animation="fadeInUp" delay={1300}>
          <Link label="Want to change password?" />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Button component */}
        <Animatable.View animation="fadeInUp" delay={1500}>
          <Button label="Submit & Save" />
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};

// Exporting
export default EditProfile;
