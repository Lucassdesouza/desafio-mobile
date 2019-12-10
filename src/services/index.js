import api from './api';

import AsyncStorage from '@react-native-community/async-storage';

export const getProductsList = () =>
  api().request({
    url: '/Search/Criteria',
    method: 'POST',
    data: {
      Offset: 0,
      Size: 10,
    },
  });

export const getProductsListPaginate = () =>
  api().request({
    url: '/Search/Criteria',
    method: 'POST',
    data: {
      Offset: 0,
      Size: 10,
    },
  });

export const getCategoriesList = () =>
  api().request({
    url: '/StorePreference/CategoryTree',
    method: 'GET',
  });
