import React from 'react';

import '~/config/ReactotronConfig';

import {Provider} from 'react-redux';
import store from './store';

import SnackBarRedux from '~/components/Snackbar';
import {AppWithNavigationState} from '~/redux-navigator';

import Routes from '~/routes/';

console.disableYellowBox = true;

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fff',
  },
};

const App = () => (
  <Provider store={store}>
    <PaperProvider theme={theme}>
      <AppWithNavigationState />
      <SnackBarRedux />
    </PaperProvider>
  </Provider>
);

export default App;
