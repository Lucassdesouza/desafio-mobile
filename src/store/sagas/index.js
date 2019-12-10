import {all, fork} from 'redux-saga/effects';

import listSaga from './list';
import categoriesSaga from './categories';

export default function* rootSaga() {
  yield all([listSaga(), categoriesSaga()]);
}
