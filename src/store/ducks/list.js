// Types
export const types = {
  ASYNC_GET_PRODUCTS: 'ASYNC_GET_PRODUCTS',
  ASYNC_GET_PRODUCTS_PAGINATE: 'ASYNC_GET_PRODUCTS_PAGINATE',

  GET_PRODUCTS: 'GET_PRODUCTS',
  GET_PRODUCTS_FAIL: 'GET_PRODUCTS_FAIL',
  GET_PRODUCTS_PAGINATE: 'GET_PRODUCTS_PAGINATE',
};

// Reducers
const INITIAL_STATE = {
  list: null,
  toggleList: false,
  reloadButton: false,
  loadingNew: false,
  pullRefresh: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ASYNC_GET_PRODUCTS:
      return {
        ...state,
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
      };
    case types.GET_PRODUCTS_PAGINATE:
      return {
        ...state,
        list: action.payload,
        loadingNew: false,
      };
    case types.GET_PRODUCTS_FAIL:
      return {
        ...state,
        toggleList: false,
        reloadButton: true,
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
