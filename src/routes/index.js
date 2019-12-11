import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import MainScreen from '~/pages/Main';
import MenuScreen from '~/pages/Menu';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {screen: MainScreen},
      Menu: {screen: MenuScreen},
    },
    {
      initialRouteName: 'Main',
      defaultNavigationOptions: {
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
      // transitionConfig: () => fromLeft(500),
    },
  ),
);

export default Routes;
