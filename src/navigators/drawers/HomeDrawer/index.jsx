import {useContext} from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import HomeBottomTab from '../../tabs/HomeBottomTab';
import AuthStack from '../../stacks/AuthStack';
import SupportStack from '../../stacks/SupportStack';
import PoliciesStack from '../../stacks/PoliciesStack';
import {ThemeContext} from '../../../contexts';
import HomeLightGreySvg from '../../../assets/icons/svg/ic_home_light_grey.svg';
import HomeDarkGoldSvg from '../../../assets/icons/svg/ic_home_dark_gold.svg';
import CallLightGreySvg from '../../../assets/icons/svg/ic_call_light_grey.svg';
import CallDarkGoldSvg from '../../../assets/icons/svg/ic_call_dark_gold.svg';
import PaperLightGreySvg from '../../../assets/icons/svg/ic_paper_light_grey.svg';
import PaperDarkGoldSvg from '../../../assets/icons/svg/ic_paper_dark_gold.svg';
import LoginLightGreySvg from '../../../assets/icons/svg/ic_login_light_grey.svg';
import LoginDarkGoldSvg from '../../../assets/icons/svg/ic_login_dark_gold.svg';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';
import styles from './styles';
import {IndependentColors} from '../../../config/Colors';

// Creating drawer navigator
const Drawer = createDrawerNavigator();

// Custom drawer content component
const CustomDrawerContent = props => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: theme.black}]}>
      {/* Header image background */}
      <ImageBackground
        source={require('../../../assets/images/backgrounds/drawer-background.png')}
        style={styles.drawerHeaderImageBackground}>
        <View style={[styles.logoWrapper, {backgroundColor: theme.black}]}>
          <Image
            source={require('../../../assets/images/logos/smokethecaviar_logo.jpg')}
            style={styles.logo}
          />
        </View>
        <View>
          <Text style={styles.brandName}>Smoke The Caviar</Text>
          <Text style={styles.brandSlogan}>Happiness is now a choice!</Text>
        </View>
      </ImageBackground>

      {/* Drawer item list */}
      <DrawerContentScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/*
      // Custom drawer item
      <View>
        <DrawerItem
          label="App Version 1.0.0 - May, 2023"
          labelStyle={[
            styles.drawerItemLabel,
            {color: theme.textLowContrast, alignSelf: 'center'},
          ]}
        />
      </View>
      */}
    </View>
  );
};

// Home drawer
const HomeDrawer = () => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Retuning
  return (
    <Drawer.Navigator
      screenOptions={({navigation}) => ({
        headerShown: false,
        drawerActiveTintColor: theme.lightYellow,
        drawerInactiveTintColor: theme.darkYellow,
        drawerInactiveBackgroundColor: theme.black,
        drawerStyle: styles.drawer,
        drawerItemStyle: styles.drawerItem,
        swipeEdgeWidth: 0,
        headerTitleAlign: 'center',
        headerTitleStyle: [styles.headerTitle],
        headerTintColor: theme.white,
        headerStyle: [
          {
            backgroundColor: theme.white,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
        ],
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.leftArrowIcon}>
            <ArrowLeftWhiteSvg
              name="arrow-left"
              width={STANDARD_VECTOR_ICON_SIZE}
              height={STANDARD_VECTOR_ICON_SIZE}
            />
          </TouchableOpacity>
        ),
      })}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="HomeBottomTab"
        component={HomeBottomTab}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({focused}) =>
            focused ? (
              <HomeDarkGoldSvg
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            ) : (
              <HomeLightGreySvg
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            ),
          drawerLabelStyle: styles.drawerItemLabel,
        }}
      />

      <Drawer.Screen
        name="SupportStack"
        component={SupportStack}
        options={{
          drawerLabel: 'Help & Support',
          drawerIcon: ({focused}) =>
            focused ? (
              <CallDarkGoldSvg
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            ) : (
              <CallLightGreySvg
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            ),
          drawerLabelStyle: styles.drawerItemLabel,
        }}
      />

      <Drawer.Screen
        name="PoliciesStack"
        component={PoliciesStack}
        options={{
          drawerLabel: 'Legal Policies',
          drawerIcon: ({focused}) =>
            focused ? (
              <PaperDarkGoldSvg
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            ) : (
              <PaperLightGreySvg
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            ),
          drawerLabelStyle: styles.drawerItemLabel,
        }}
      />

      <Drawer.Screen
        name="AuthStack"
        component={AuthStack}
        options={{
          drawerLabel: 'Account Login',
          drawerIcon: ({focused}) =>
            focused ? (
              <LoginDarkGoldSvg
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            ) : (
              <LoginLightGreySvg
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            ),
          drawerLabelStyle: styles.drawerItemLabel,
        }}
      />

      {/*
      <Drawer.Screen
        name="Contacts"
        component={Contacts}
        options={{
          headerShown: true,
          drawerLabel: 'Contacts',
          drawerIcon: ({focused}) =>
            focused ? (
              <UsersDarkGoldSvg
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            ) : (
              <UsersLightGreySvg
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            ),
          drawerLabelStyle: styles.drawerItemLabel,
        }}
      />
      */}
    </Drawer.Navigator>
  );
};

// Exporting
export default HomeDrawer;
