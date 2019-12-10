import {combineReducers} from 'redux';

import {createNavigationReducer} from 'react-navigation-redux-helpers';

import Routes from '~/routes';
import listReducer from './list';
import categoriesReducer from './categories';
import snackbarReducer from './snackbar';

const navReducer = createNavigationReducer(Routes);

const reducers = combineReducers({
  nav: navReducer,
  list: listReducer,
  categories: categoriesReducer,
  snackbar: snackbarReducer,
});

export default reducers;
