import {useContext, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import SvgStar from '../../assets/icons/svg/ic_star.svg';
import LocationDarkGreen from '../../assets/icons/svg/ic_location_dark_green.svg';
import Mastercard from '../../assets/icons/svg/ic_mastercard.svg';
import ArrowRightDarkGreen from '../../assets/icons/svg/ic_arrow_right_dark_green.svg';
import PaperDarkGreen from '../../assets/icons/svg/ic_paper_dark_green.svg';
import CheckmarkWhite from '../../assets/icons/svg/ic_checkmark_white.svg';
import {ThemeContext} from '../../contexts';

import {
  POPPINS_REGULAR,
  POPPINS_SEMIBOLD,
  STANDARD_VECTOR_ICON_SIZE,
} from '../../config/Constants';
import SectionTitle from '../../components/headings/SectionTitle';
import HorizontalDivider from '../../components/dividers/HorizontalDivider';
import Button from '../../components/buttons/Button';
import styles from './styles';
import {IndependentColors} from '../../config/Colors';

// Functional component
const Order = ({navigation}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Local states
  const [statusStepsProgressPercentage, setStatusStepsProgressPercentage] =
    useState('55%');
  const [statusSteps, setStatusSteps] = useState([
    {
      stepNumber: 1,
      stepLabel: 'Order placed',
      date: 'Apr 24 2023',
      time: '10:40 am',
      isDone: true,
    },
    {
      stepNumber: 2,
      stepLabel: 'Item(s) packed',
      date: 'Apr 24 2023',
      time: '12:15 pm',
      isDone: true,
    },
    {
      stepNumber: 3,
      stepLabel: 'Shipped',
      date: 'Apr 24 2023',
      time: '06:29 pm',
      isDone: true,
    },
    {
      stepNumber: 4,
      stepLabel: 'Out for delivery',
      date: null,
      time: null,
      isDone: false,
    },
    {
      stepNumber: 5,
      stepLabel: 'Delivered',
      date: null,
      time: null,
      isDone: false,
    },
  ]);

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: theme.black}]}>
      {/* Scroll View */}
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContentContainerStyle}>
        <Animatable.View
          animation="fadeInUp"
          delay={100}
          style={styles.productCard}>
          {/* Product image wrapper */}
          <View
            style={[
              styles.productImageWrapper,
              {backgroundColor: theme.lightYellow},
            ]}>
            {/* Product image */}
            <Image
              source={require('../../assets/images/products/300_x_400.png')}
              style={styles.productImage}
            />

            {/* More items count */}
            <TouchableOpacity
              activeOpacity={1}
              style={[
                styles.moreProductsCountWrapper,
                {backgroundColor: theme.black},
              ]}>
              <Text
                style={[
                  styles.moreProductsCount,
                  {color: theme.textHighContrast},
                ]}>
                +3
              </Text>
            </TouchableOpacity>
          </View>

          {/* Order details wrapper */}
          <View style={styles.orderDetailsWrapper}>
            <View>
              <Text
                numberOfLines={1}
                style={[styles.productTitle, {color: theme.textHighContrast}]}>
                Strelitza Nicolai
              </Text>
              <View style={styles.productStatusAndRatingWrapper}>
                <View
                  style={[
                    styles.statusWrapper,
                    {backgroundColor: '#00a89610'},
                  ]}>
                  <Text style={[styles.status, {color: '#00a896'}]}>
                    On the way
                  </Text>
                </View>

                <View style={styles.starAndRatingWrapper}>
                  <SvgStar
                    width={STANDARD_VECTOR_ICON_SIZE * 0.75}
                    height={STANDARD_VECTOR_ICON_SIZE * 0.75}
                  />
                  <Text style={[styles.rating, {color: theme.white}]}>
                    5.0
                  </Text>
                </View>
              </View>
            </View>

            {/* Date */}
            <View style={styles.datesWrapper}>
              <Text style={[styles.date, {color: theme.textLowContrast}]}>
                25 April, 2023
              </Text>
              <Text
                style={[styles.dateDivider, {color: theme.textLowContrast}]}>
                |
              </Text>
              <Text style={[styles.date, {color: theme.textLowContrast}]}>
                29 April, 2023
              </Text>
            </View>
          </View>
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Section title component */}
        <Animatable.View animation="fadeInUp" delay={300}>
          <SectionTitle title="Track your order" />
        </Animatable.View>

        {/* Horizontal divider component */}
        <Animatable.View animation="fadeInUp" delay={500}>
          <HorizontalDivider />
        </Animatable.View>

        {/* Order tracking link */}
        <Animatable.View animation="fadeInUp" delay={700}>
          <TouchableOpacity style={styles.linkWrapper}>
            <View style={styles.linkIconAndLabelsWrapper}>
              {/* Link icon wrapper */}
              <View
                style={[
                  styles.linkIconWrapper,
                  {backgroundColor: theme.lightYellow},
                ]}>
                <LocationDarkGreen
                  width={STANDARD_VECTOR_ICON_SIZE}
                  height={STANDARD_VECTOR_ICON_SIZE}
                />
              </View>

              {/* Link labels */}
              <View style={styles.linkLabelsWrapper}>
                <Text
                  style={[styles.linkLabel, {color: theme.textHighContrast}]}
                  numberOfLines={1}>
                  Your order is out for delivery
                </Text>
                <Text
                  style={[styles.linkSubLabel, {color: theme.textLowContrast}]}
                  numberOfLines={1}>
                  Current location: 3A street, Rama complex
                </Text>
              </View>
            </View>

            {/* Arrow icon */}
            <ArrowRightDarkGreen
              width={STANDARD_VECTOR_ICON_SIZE}
              height={STANDARD_VECTOR_ICON_SIZE}
            />
          </TouchableOpacity>
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Section title component */}
        <Animatable.View animation="fadeInUp" delay={900}>
          <SectionTitle title="Payment method" />
        </Animatable.View>

        {/* Horizontal divider component */}
        <Animatable.View animation="fadeInUp" delay={1100}>
          <HorizontalDivider />
        </Animatable.View>

        {/* Payment method link */}
        <Animatable.View animation="fadeInUp" delay={1300}>
          <TouchableOpacity style={styles.linkWrapper}>
            <View style={styles.linkIconAndLabelsWrapper}>
              {/* Link icon wrapper */}
              <View
                style={[
                  styles.linkIconWrapper,
                  {backgroundColor: theme.lightYellow},
                ]}>
                <Mastercard
                  width={STANDARD_VECTOR_ICON_SIZE}
                  height={STANDARD_VECTOR_ICON_SIZE}
                />
              </View>

              {/* Link labels */}
              <View style={styles.linkLabelsWrapper}>
                <Text
                  style={[styles.linkLabel, {color: theme.textHighContrast}]}
                  numberOfLines={1}>
                  Master card
                </Text>
                <Text
                  style={[styles.linkSubLabel, {color: theme.textLowContrast}]}>
                  ********8926
                </Text>
              </View>
            </View>

            {/* Arrow icon */}
            <ArrowRightDarkGreen
              width={STANDARD_VECTOR_ICON_SIZE}
              height={STANDARD_VECTOR_ICON_SIZE}
            />
          </TouchableOpacity>
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Section title component */}
        <Animatable.View animation="fadeInUp" delay={1500}>
          <SectionTitle title="Invoice" />
        </Animatable.View>

        {/* Horizontal divider component */}
        <Animatable.View animation="fadeInUp" delay={1700}>
          <HorizontalDivider />
        </Animatable.View>

        {/* Payment method link */}
        <Animatable.View animation="fadeInUp" delay={1900}>
          <TouchableOpacity
            style={styles.linkWrapper}
            onPress={() => navigation.navigate('Invoice')}>
            <View style={styles.linkIconAndLabelsWrapper}>
              {/* Link icon wrapper */}
              <View
                style={[
                  styles.linkIconWrapper,
                  {backgroundColor: theme.lightYellow},
                ]}>
                <PaperDarkGreen
                  width={STANDARD_VECTOR_ICON_SIZE}
                  height={STANDARD_VECTOR_ICON_SIZE}
                />
              </View>

              {/* Link labels */}
              <View style={styles.linkLabelsWrapper}>
                <Text
                  style={[styles.linkLabel, {color: theme.textHighContrast}]}
                  numberOfLines={1}>
                  Invoice No.
                </Text>
                <Text
                  style={[styles.linkSubLabel, {color: theme.textLowContrast}]}>
                  INV#61727478
                </Text>
              </View>
            </View>

            {/* Arrow icon */}
            <ArrowRightDarkGreen
              width={STANDARD_VECTOR_ICON_SIZE}
              height={STANDARD_VECTOR_ICON_SIZE}
            />
          </TouchableOpacity>
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Section title component */}
        <Animatable.View animation="fadeInUp" delay={2100}>
          <SectionTitle title="Order total" />
        </Animatable.View>

        {/* Horizontal divider component */}
        <Animatable.View animation="fadeInUp" delay={2300}>
          <HorizontalDivider />
        </Animatable.View>

        {/* Subtotal wrapper */}
        <Animatable.View animation="fadeInUp" delay={2500} style={styles.row}>
          <Text style={[styles.rowLabel, {color: theme.textLowContrast}]}>
            Subtotal
          </Text>
          <Text style={[styles.rowAmount, {color: theme.textHighContrast}]}>
            $60.57
          </Text>
        </Animatable.View>

        {/* Spacer */}
        <View style={styles.verticalSpacer} />

        {/* Shipping cost wrapper */}
        <Animatable.View animation="fadeInUp" delay={2700} style={styles.row}>
          <Text
            style={[
              styles.rowLabel,
              {
                color: theme.textLowContrast,
              },
            ]}>
            Shipping cost
          </Text>
          <Text style={[styles.rowAmount, {color: theme.textHighContrast}]}>
            $10.07
          </Text>
        </Animatable.View>

        {/* Spacer */}
        <View style={styles.verticalSpacer} />

        {/* Total payable wrapper */}
        <Animatable.View animation="fadeInUp" delay={2900} style={styles.row}>
          <Text style={[styles.rowLabel, {color: theme.textLowContrast}]}>
            Total payable
          </Text>
          <Text style={[styles.rowAmount, {color: theme.textHighContrast}]}>
            $70.64
          </Text>
        </Animatable.View>

        {/* Spacer */}
        <View style={styles.verticalSpacer} />

        {/* Section title component */}
        <Animatable.View animation="fadeInUp" delay={3100}>
          <SectionTitle title="Order status" />
        </Animatable.View>

        {/* Horizontal divider component */}
        <Animatable.View animation="fadeInUp" delay={3300}>
          <HorizontalDivider />
        </Animatable.View>

        {/* Order status wrapper */}
        <Animatable.View
          animation="fadeInUp"
          delay={3500}
          style={styles.orderStatusWrapper}>
          <View style={styles.orderStatusStepsWrapper}>
            <View
              style={[
                styles.orderStatusStepsVerticalLine,
                {backgroundColor: theme.lightYellow},
              ]}>
              <View
                style={[
                  styles.orderStatusStepsVerticalLineProgressBar,
                  {
                    height: statusStepsProgressPercentage,
                    backgroundColor: theme.white,
                  },
                ]}
              />
            </View>
            <View style={styles.orderStatusStepsVerticalWrapper}>
              {statusSteps.map((item, index) => (
                <View style={styles.orderStatusStepWrapper} key={index}>
                  <View
                    style={[
                      styles.orderStatusStepNumberWrapper,
                      {
                        backgroundColor: item.isDone
                          ? theme.white
                          : theme.lightYellow,
                      },
                    ]}>
                    {!item.isDone ? (
                      <Text
                        style={[
                          styles.orderStatusStepNumber,
                          {
                            color: item.isDone
                              ? IndependentColors.white
                              : theme.textLowContrast,
                          },
                        ]}>
                        {item.stepNumber}
                      </Text>
                    ) : (
                      <CheckmarkWhite
                        width={STANDARD_VECTOR_ICON_SIZE * 0.65}
                        height={STANDARD_VECTOR_ICON_SIZE * 0.65}
                      />
                    )}
                  </View>
                  <View style={styles.orderStatusStepLabelWrapper}>
                    <Text
                      style={[
                        styles.orderStatusStepLabel,
                        {
                          color: item.isDone
                            ? theme.textHighContrast
                            : theme.textLowContrast,
                          fontFamily: item.isDone
                            ? POPPINS_SEMIBOLD
                            : POPPINS_REGULAR,
                        },
                      ]}>
                      {item.stepLabel}
                    </Text>
                    {item.date && item.time !== null ? (
                      <Text style={[styles.dateTime, {color: theme.white}]}>
                        {item.date}, {item.time}
                      </Text>
                    ) : null}
                  </View>
                </View>
              ))}
            </View>
          </View>
        </Animatable.View>

        {/* Spacer */}
        <View style={styles.verticalSpacer} />

        {/* Button component */}
        <Animatable.View animation="fadeInUp" delay={3700}>
          <Button label="Cancel order" />
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

// Exporting
export default Order;
