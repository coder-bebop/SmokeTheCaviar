import {memo, useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ThemeContext} from '../../../contexts';
import SvgStar from '../../../assets/icons/svg/ic_star.svg';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';
import styles from './styles';

// Functional component
const OrderedProduct = ({
  productImage,
  productTitle,
  moreProductsCount,
  status,
  statusTextColor,
  statusBgColor,
  rating,
  orderDate,
  deliveryDate,
  onPress,
}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <TouchableOpacity
      style={[styles.productCard, {backgroundColor: theme.lightYellow}]}
      onPress={onPress}>
      {/* Product image wrapper */}
      <View
        style={[styles.productImageWrapper, {backgroundColor: theme.black}]}>
        {/* Product image */}
        <Image source={productImage} style={styles.productImage} />

        {/* More items count */}
        <View
          style={[
            styles.moreProductsCountWrapper,
            {backgroundColor: theme.lightYellow},
          ]}>
          <Text
            style={[styles.moreProductsCount, {color: theme.textHighContrast}]}>
            +{moreProductsCount}
          </Text>
        </View>
      </View>

      {/* Order details wrapper */}
      <View style={styles.orderDetailsWrapper}>
        <View>
          <Text
            numberOfLines={1}
            style={[styles.productTitle, {color: theme.textHighContrast}]}>
            {productTitle}
          </Text>
          <View style={styles.productStatusAndRatingWrapper}>
            <View
              style={[styles.statusWrapper, {backgroundColor: statusBgColor}]}>
              <Text style={[styles.status, {color: statusTextColor}]}>
                {status}
              </Text>
            </View>
            {rating !== null ? (
              <View style={styles.starAndRatingWrapper}>
                <SvgStar
                  width={STANDARD_VECTOR_ICON_SIZE * 0.75}
                  height={STANDARD_VECTOR_ICON_SIZE * 0.75}
                />
                <Text style={[styles.rating, {color: theme.white}]}>
                  {rating.toFixed(1)}
                </Text>
              </View>
            ) : null}
          </View>
        </View>

        {/* Date */}
        <View style={styles.datesWrapper}>
          <Text style={[styles.date, {color: theme.textLowContrast}]}>
            {orderDate}
          </Text>
          <Text style={[styles.dateDivider, {color: theme.textLowContrast}]}>
            |
          </Text>
          <Text style={[styles.date, {color: theme.textLowContrast}]}>
            {deliveryDate}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// Exporting
export default memo(OrderedProduct);
