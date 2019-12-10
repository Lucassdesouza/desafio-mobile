import React from 'react';

import '~/config/ReactotronConfig';

import {Provider} from 'react-redux';
import store from './store';

import SnackBarRedux from '~/components/Snackbar';

import Routes from '~/routes/';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

const App = () => (
  <Provider store={store}>
    <PaperProvider theme={theme}>
      <Routes />
      <SnackBarRedux />
    </PaperProvider>
  </Provider>
);

export default App;
