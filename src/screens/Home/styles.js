import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_MD,
  FONT_SIZE_XL,
  FONT_SIZE_XS,
  POPPINS_REGULAR,
  SCREEN_WIDTH,
  STANDARD_BORDER_WIDTH,
  STANDARD_FLEX,
  STANDARD_SPACING,
} from '../../config/Constants';
import {scale} from 'react-native-size-matters';
import {DarkThemeColors} from '../../config/Colors';

// Creating & exporting stylesheet
export default StyleSheet.create({
  mainWrapper: {
    flex: STANDARD_FLEX,
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: STANDARD_SPACING * 6,
  },
  separatingLine: {
    width: SCREEN_WIDTH * 0.8,
    borderBottomColor: DarkThemeColors.darkYellow,
    borderBottomWidth: STANDARD_BORDER_WIDTH,
    margin: STANDARD_SPACING * 4,
  },
  brandName: {
    fontWeight: '900',
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_XL,
    color: DarkThemeColors.darkYellow,
  },
  brandSlogan: {
    fontWeight: '100',
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_MD,
    color: DarkThemeColors.darkYellow,
  },
  verticalSpacer: {
    marginVertical: STANDARD_SPACING * 1.5,
  },
  sectionTitleAndLinkWrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: STANDARD_SPACING * 3,
  },
  categoryLabelWrapper: {
    padding: STANDARD_SPACING * 2,
    borderRadius: STANDARD_SPACING,
    marginHorizontal: STANDARD_SPACING * 1.5,
  },
  categoryLabel: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_XS,
  },
  horizontalScrollViewContentContainerStyle: {
    marginHorizontal: STANDARD_SPACING * 1.5,
  },
  bannerImageWrapper: {
    height: scale(171),
    marginHorizontal: STANDARD_SPACING * 3,
  },
  bannerImage: {
    width: null,
    height: null,
    flex: STANDARD_FLEX,
    resizeMode: 'cover',
  },
  productWrapper: {
    marginHorizontal: STANDARD_SPACING * 3,
    paddingVertical: STANDARD_SPACING * 3,
    width: scale(130),
  },
  fullWidthBannerImageWrapper: {
    height: scale(171),
  },
});
