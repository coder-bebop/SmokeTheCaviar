import {memo, useContext} from 'react';
import {View, Text, Image} from 'react-native';
import {ThemeContext} from '../../../contexts';
import StarSvg from '../../../assets/icons/svg/ic_star.svg';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';
import styles from './styles';

// Functional component
const OutletCard = ({outletImage, outletName, rating, priceRange}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Getting rating stars
  const getRatingStars = count => {
    // Declaring an empty array
    const stars = [];

    // Iterating
    for (let index = 0; index < count; index++) {
      // Pushing into array
      stars.push(
        <View key={index}>
          <StarSvg
            width={STANDARD_VECTOR_ICON_SIZE * 0.65}
            height={STANDARD_VECTOR_ICON_SIZE * 0.65}
          />
        </View>,
      );
    }

    // Returning
    return stars;
  };

  // Returning
  return (
    <View style={styles.outletWrapper}>
      <View style={styles.outletImageWrapper}>
        <Image source={outletImage} style={styles.outletImage} />
      </View>

      <View
        style={[
          styles.outletDetailsWrapper,
          {backgroundColor: theme.lightYellow},
        ]}>
        {/* Outlet name */}
        <Text
          style={[styles.outletName, {color: theme.textHighContrast}]}
          numberOfLines={1}>
          {outletName}
        </Text>

        {/* Rating wrapper */}
        <View style={styles.outletRatingWrapper}>
          <View style={styles.outletRatingStarsWrapper}>
            {/* Displaying rating stars */}
            {getRatingStars(rating)}
          </View>
          <Text style={[styles.outletRating, {color: theme.white}]}>
            {rating.toFixed(1)}
          </Text>
        </View>

        {/* Price range */}
        <View style={styles.outletPriceRangeWrapper}>
          <Text style={[styles.outletPriceRangeLabel, {color: theme.white}]}>
            Price range:
          </Text>
          <Text
            style={[styles.outletPriceRange, {color: theme.textHighContrast}]}>
            {priceRange}
          </Text>
        </View>
      </View>
    </View>
  );
};

// Exporting
export default memo(OutletCard);
