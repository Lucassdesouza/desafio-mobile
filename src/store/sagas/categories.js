import {all, put, takeLatest, call, select} from 'redux-saga/effects';

import {types} from '../ducks/categories';
import * as service from '~/services/';

import {NavigationActions} from 'react-navigation';

function* loadCategories() {
  try {
    const {data} = yield call(service.getCategoriesList);
    yield put({type: types.GET_CATEGORIES, payload: data});
  } catch (error) {}
}

function* loadSubCategories(action) {
  const list = action.payload.list;
  const name = action.payload.name;

  yield put({type: types.GET_SUB_CATEGORIES, payload: list});

  yield put(
    NavigationActions.navigate({
      routeName: 'SubCategories',
      params: {
        subcategorie: name,
      },
    }),
  );
}

export default function* categoriesSaga() {
  yield call(loadCategories);
  yield all([
    takeLatest(types.ASYNC_GET_CATEGORIES, loadCategories),
    takeLatest(types.ASYNC_GET_SUB_CATEGORIES, loadSubCategories),
  ]);
}
