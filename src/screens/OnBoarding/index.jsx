import {useContext} from 'react';
import {
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import OnBoardingData from '../../data/OnBoardingData';
import OnBoardingItem from '../../components/sliders/OnBoardingItem';
import {ThemeContext} from '../../contexts';
import styles from './styles';

// Functional component
const OnBoarding = () => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <ImageBackground
      source={require('../../assets/images/backgrounds/on_boarding_pattern.png')}
      style={[styles.mainWrapper, {backgroundColor: theme.black}]}>
      {/* Flastlist */}
      <FlatList
        data={OnBoardingData}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        style={styles.flatlist}
        renderItem={({item, index}) => (
          <OnBoardingItem
            image={item.image}
            title={item.title}
            info={item.info}
          />
        )}
      />

      {/* Skip button */}
      <TouchableOpacity
        style={[
          styles.skipButton,
          {
            backgroundColor: theme.accentLightest,
            borderColor: theme.white,
          },
        ]}>
        <Text style={[styles.skipLabel, {color: theme.white}]}>Skip</Text>
      </TouchableOpacity>

      {/* Pagination indicators */}
      <View style={[styles.paginationIndicatorsWrapper]}>
        {OnBoardingData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationIndicator,
              {backgroundColor: theme.white},
            ]}
          />
        ))}
      </View>
    </ImageBackground>
  );
};

// Exporting
export default OnBoarding;
