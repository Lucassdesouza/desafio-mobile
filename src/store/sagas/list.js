import {all, takeLatest, call, put} from 'redux-saga/effects';

import {types} from '../ducks/list';
import * as service from '~/services/';

import {SnackbarShow, snackbarShowError} from '~/store/ducks/snackbar';

function* getProducts() {
  try {
    const {data} = yield call(service.getProductsList);

    console.tron.log(data.Products);

    // yield put({type: types.GET_PRODUCTS, payload: data.Products});
  } catch (error) {
    yield put(
      snackbarShowError(
        'Ocorreu um erro buscar os produtos do servidor. Tente novamente.',
      ),
    );
  }
}

export default function* listSaga() {
  yield all([takeLatest(types.ASYNC_GET_PRODUCTS, getProducts)]);
}
