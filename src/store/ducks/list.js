// Types
export const types = {
  ASYNC_GET_PRODUCTS: 'ASYNC_GET_PRODUCTS',
  ASYNC_GET_PRODUCTS_PAGINATE: 'ASYNC_GET_PRODUCTS_PAGINATE',
  ASYNC_GET_PRODUCTS_SEARCH: 'ASYNC_GET_PRODUCTS_SEARCH',

  GET_PRODUCTS: 'GET_PRODUCTS',
  GET_PRODUCTS_FAIL: 'GET_PRODUCTS_FAIL',
  GET_PRODUCTS_PAGINATE: 'GET_PRODUCTS_PAGINATE',
};

// Reducers
const INITIAL_STATE = {
  list: null,
  toggleList: false,
  loadingNew: false,
  pullRefresh: false,
  loadFail: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ASYNC_GET_PRODUCTS:
      return {
        ...state,
        toggleList: true,
        reloadButton: false,
        pullRefresh: true,
      };
    case types.ASYNC_GET_PRODUCTS_PAGINATE:
      return {...state, loadingNew: true};
    case types.GET_PRODUCTS:
      return {
        ...state,
        list: action.payload,
        toggleList: false,
        pullRefresh: false,
        loadFail: false,
      };
    case types.GET_PRODUCTS_PAGINATE:
      return {
        ...state,
        list: action.payload,
        toggleList: false,
        loadingNew: false,
        loadFail: false,
      };
    case types.GET_PRODUCTS_FAIL:
      return {
        ...state,
        toggleList: false,
        loadFail: true,
      };
    default:
      return {...state};
  }
};

// Actions Creators

export const getProductList = () => ({
  type: types.ASYNC_GET_PRODUCTS,
});

export const getProductListPaginate = page => ({
  type: types.ASYNC_GET_PRODUCTS_PAGINATE,
  payload: {page},
});

export const getProductsByCategories = search => ({
  type: types.ASYNC_GET_PRODUCTS_SEARCH,
  payload: {search},
});

export const getProductsBySearch = search => ({
  type: types.ASYNC_GET_PRODUCTS_SEARCH,
  payload: {search},
});
