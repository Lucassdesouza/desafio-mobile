import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from '~/pages/Main';
import Menu from '~/pages/Menu';

const Routes = createAppContainer(
  createStackNavigator(
    {Main, Menu},
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
