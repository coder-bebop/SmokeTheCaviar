import {useContext} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {ThemeContext} from '../../contexts';
import SectionTitle from '../../components/headings/SectionTitle';
import Link from '../../components/links/Link';
import GridViewProduct from '../../components/cards/GridViewProduct';
import GridViewProductsData from '../../data/GridViewProductsData';
import styles from './styles';

// Functional component
const Home = ({navigation}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: theme.black}]}>
      <Animatable.View animation="fadeInUp" delay={100}>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.brandName}>Smoke The Caviar</Text>
            <Text style={styles.brandSlogan}>Happiness is now a choice!</Text>
            <View style={styles.separatingLine} />
            
          {/*
            // Hamburger menu
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <SvgDrawerMenu
                width={STANDARD_VECTOR_ICON_SIZE * 2}
                height={STANDARD_VECTOR_ICON_SIZE * 2}
              />
            </TouchableOpacity>

            // Avatar
            <SvgMan2
              width={STANDARD_USER_AVATAR_WRAPPER_SIZE}
              height={STANDARD_USER_AVATAR_WRAPPER_SIZE}
            />
            */}
          </View>

          {/*
          // Search text input component
          <SearchTextInput />

          // Vertical spacer
          <View style={styles.verticalSpacer} />

          // Section title & link wrapper
          <View style={styles.sectionTitleAndLinkWrapper}>
            // Section title component
            <SectionTitle title="Categories" />

            // Link component
            <Link
              label="See all"
              onPress={() => navigation.navigate('Categories')}
            />
          </View>

          // Vertical spacer
          <View style={styles.verticalSpacer} />

          // Categories label scrollview wrapper
          <View>
            // Categories label scrollview
            <ScrollView
              horizontal
              bounces={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={
                styles.horizontalScrollViewContentContainerStyle
              }>
              {CategoriesData.map((item, index) => {
                {
                  return index === 0 ? (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.categoryLabelWrapper,
                        {backgroundColor: theme.darkYellow},
                      ]}
                      onPress={() => navigation.navigate('List View Products')}>
                      <Text
                        style={[
                          styles.categoryLabel,
                          {color: theme.textLowContrast},
                        ]}>
                        View All
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.categoryLabelWrapper,
                        {backgroundColor: theme.darkYellow},
                      ]}
                      onPress={() => navigation.navigate('List View Products')}>
                      <Text
                        style={[
                          styles.categoryLabel,
                          {color: theme.textLowContrast},
                        ]}>
                        {item.categoryName}
                      </Text>
                    </TouchableOpacity>
                  );
                }
              })}
            </ScrollView>
          </View>
           */}

          {/* Banner 1 */}
          <View style={styles.bannerImageWrapper}>
            <Image
              source={require('../../assets/images/banners/home/556_x_287.png')}
              style={styles.bannerImage}
            />
          </View>

          {/* Vertical spacer */}
          <View style={styles.verticalSpacer} />

          {/* Section title & link wrapper */}
          <View style={styles.sectionTitleAndLinkWrapper}>
            {/* Section title component */}
            <SectionTitle title="Most popular" />

            {/* Link component */}
            <Link
              label="See all"
              onPress={() => navigation.navigate('List View Products')}
            />
          </View>

          {/* Horizontal scroll view */}
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              bounces={false}
              contentContainerStyle={
                styles.horizontalScrollViewContentContainerStyle
              }>
              {GridViewProductsData.map((product, index) => (
                <View key={index} style={styles.productWrapper}>
                  <GridViewProduct
                    productImage={product.productImage}
                    productTitle={product.productTitle}
                    productPrice={product.productPrice}
                    rating={product.rating}
                    onPress={() => navigation.navigate('Product')}
                  />
                </View>
              ))}
            </ScrollView>
          </View>

          {/* Banner 1 */}
          <View style={styles.bannerImageWrapper}>
            <Image
              source={require('../../assets/images/banners/home/556_x_287.png')}
              style={styles.bannerImage}
            />
          </View>

          {/* Vertical spacer */}
          <View style={styles.verticalSpacer} />

          {/* Section title & link wrapper */}
          <View style={styles.sectionTitleAndLinkWrapper}>
            {/* Section title component */}
            <SectionTitle title="New arrivals" />

            {/* Link component */}
            <Link label="See all" />
          </View>

          {/* Horizontal scroll view */}
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              bounces={false}
              contentContainerStyle={
                styles.horizontalScrollViewContentContainerStyle
              }>
              {GridViewProductsData.map((product, index) => (
                <View key={index} style={styles.productWrapper}>
                  <GridViewProduct
                    productImage={product.productImage}
                    productTitle={product.productTitle}
                    productPrice={product.productPrice}
                    rating={product.rating}
                    onPress={() => navigation.navigate('Product')}
                  />
                </View>
              ))}
            </ScrollView>
          </View>

          {/* Banner 3 */}
          <View style={styles.fullWidthBannerImageWrapper}>
            <Image
              source={require('../../assets/images/banners/home/808_x_338.png')}
              style={styles.bannerImage}
            />
          </View>

          {/* Vertical spacer */}
          <View style={styles.verticalSpacer} />
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

// Exporting
export default Home;
