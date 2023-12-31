import {memo, useContext} from 'react';
import {View, Text} from 'react-native';
import {
  STANDARD_SPACING,
  STANDARD_VECTOR_ICON_SIZE,
} from '../../../config/Constants';
import StarSvg from '../../../assets/icons/svg/ic_star.svg';
import {ThemeContext} from '../../../contexts';
import styles from './styles';

// Functional component
const BuyerReview = ({
  buyerAvatarSvg,
  buyerName,
  reviewAge,
  rating,
  review,
  isLastItem,
}) => {
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
    <View
      style={[
        styles.buyerReviewCard,
        {
          backgroundColor: theme.lightYellow,
          marginBottom: isLastItem ? 0 : STANDARD_SPACING * 3,
        },
      ]}>
      <View style={styles.buyerReviewCardHeader}>
        <View style={styles.buyerAvatarSvgNameWrapper}>
          {buyerAvatarSvg}
          <View style={styles.buyerNameAndReviewAgeWrapper}>
            <Text style={[styles.buyerName, {color: theme.textHighContrast}]}>
              {buyerName}
            </Text>
            <Text style={[styles.reviewAge, {color: theme.white}]}>
              ({reviewAge})
            </Text>
          </View>
        </View>
        <View style={styles.ratingStarsWrapper}>
          {/* Displaying rating stars */}
          {getRatingStars(rating)}
        </View>
      </View>
      <Text style={[styles.review, {color: theme.textLowContrast}]}>
        {review}
      </Text>
    </View>
  );
};

// Exporting
export default memo(BuyerReview);
