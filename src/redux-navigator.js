import {createReduxContainer} from 'react-navigation-redux-helpers';

import {connect} from 'react-redux';
import {compose} from 'redux';

import Routes from './routes';

export const AppWithNavigationState = compose(
  connect(state => ({state: state.nav})),
)(createReduxContainer(Routes, 'root'));
