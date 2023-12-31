import {useContext} from 'react';
import {View, FlatList} from 'react-native';
import * as Animatable from 'react-native-animatable';
import CategoriesData from '../../data/CategoriesData';
import {ThemeContext} from '../../contexts';
import Category from '../../components/cards/Category';
import styles from './styles';

// Functional component
const Categories = ({navigation}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: theme.black}]}>
      {/* Flatlist */}
      <Animatable.View
        animation="fadeInUp"
        delay={100}
        style={styles.flatListWrapper}>
        <FlatList
          data={CategoriesData}
          bounces={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.flatListContentContainerStyle}
          renderItem={({item}) => (
            <Category
              id={item.id}
              categoryImage={item.categoryImage}
              categoryName={item.categoryName}
              onPress={() => navigation.navigate('List View Products')}
            />
          )}
        />
      </Animatable.View>
    </View>
  );
};

// Exporting
export default Categories;
