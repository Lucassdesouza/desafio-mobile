import {all, takeLatest, call} from 'redux-saga/effects';

import {types} from '../ducks/categories';
import * as service from '~/services/';

function* getCategories() {
  try {
    const {data} = yield call(service.getCategoriesLists);
    console.tron.log(data);
    // yield put({type: types.GET_PRODUCTS, payload: products});
    // const defaultSettings = {fontSize: 2, notificationOption: true};
    // yield all([
    //   call(service.setStorageSettings, defaultSettings),
    //   put({type: types.SETTINGS_CHANGED, payload: defaultSettings}),
    // ]);s
  } catch (error) {
    console.tron.log(error);
  }
}

export default function* categoriesSaga() {
  yield all([takeLatest(types.ASYNC_GET_CATEGORIES, getCategories)]);
}
