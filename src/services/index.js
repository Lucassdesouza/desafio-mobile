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

export const getProductsListPaginate = page =>
  api().request({
    url: '/Search/Criteria',
    method: 'POST',
    data: {
      Offset: page,
      Size: 10,
    },
  });

export const getProductsListSearch = (search, page) =>
  api().request({
    url: '/Search/Criteria',
    method: 'POST',
    data: {
      Query: search,
      Offset: page,
      Size: 10,
    },
  });

export const getCategoriesList = () =>
  api().request({
    url: '/StorePreference/CategoryTree',
    method: 'GET',
  });
