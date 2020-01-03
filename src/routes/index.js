import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import MainScreen from '~/pages/Main';
import CategoriesScreen from '~/pages/Menu/categories';
import SubCategoriesScreen from '~/pages/Menu/subcategories';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {screen: MainScreen},
      Categories: {
        screen: CategoriesScreen,
        routeName: 'Categories',
        navigationOptions: ({navigation}) => ({
          title: 'Categorias',
        }),
      },
      SubCategories: {
        screen: SubCategoriesScreen,
        routeName: 'SubCategories',
        navigationOptions: ({navigation}) => ({
          title: navigation.getParam('subcategorie', 'SubCategorias'),
        }),
      },
    },
    {
      initialRouteName: 'Main',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#E81C0D',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
  ),
);

export default Routes;
