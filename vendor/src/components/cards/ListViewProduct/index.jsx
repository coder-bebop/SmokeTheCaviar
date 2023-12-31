import {memo, useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ThemeContext} from '../../../contexts';
import SvgStar from '../../../assets/icons/svg/ic_star.svg';
import SvgBagWhite from '../../../assets/icons/svg/ic_bag_white.svg';
import {
  STANDARD_SPACING,
  STANDARD_VECTOR_ICON_SIZE,
} from '../../../config/Constants';
import styles from './styles';

// Functional component
const ListViewProduct = ({
  productImage,
  productTitle,
  productPrice,
  rating,
  isLastItem,
  onPress,
}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <TouchableOpacity
      style={[
        styles.productCard,
        {
          backgroundColor: theme.lightYellow,
          marginBottom: isLastItem ? 0 : STANDARD_SPACING * 3,
        },
      ]}
      onPress={onPress}>
      {/* Product image wrapper */}
      <View
        style={[styles.productImageWrapper, {backgroundColor: theme.black}]}>
        <Image source={productImage} style={styles.productImage} />
      </View>

      {/* Product details wrapper */}
      <View style={styles.productDetailsWrapper}>
        {/* Product title, price & rating wrapper */}
        <View>
          <Text
            style={[styles.productTitle, {color: theme.textHighContrast}]}
            numberOfLines={1}>
            {productTitle}
          </Text>
          <View style={styles.productPriceAndRatingWrapper}>
            <Text style={[styles.productPrice, {color: theme.white}]}>
              {productPrice}
            </Text>
            <View style={styles.starAndRatingWrapper}>
              <SvgStar
                width={STANDARD_VECTOR_ICON_SIZE * 0.75}
                height={STANDARD_VECTOR_ICON_SIZE * 0.75}
              />
              <Text style={[styles.rating, {color: theme.white}]}>
                {rating}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Bag icon wrapper */}
      <TouchableOpacity
        style={[styles.bagIconWrapper, {backgroundColor: theme.white}]}>
        <SvgBagWhite
          width={STANDARD_VECTOR_ICON_SIZE}
          height={STANDARD_VECTOR_ICON_SIZE}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

// Exporting
export default memo(ListViewProduct);
