// Types
export const types = {
  ASYNC_GET_PRODUCTS: 'ASYNC_GET_PRODUCTS',

  GET_PRODUCTS: 'GET_PRODUCTS',
};

// Reducers
const INITIAL_STATE = {
  list: null,
  toggleList: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ASYNC_GET_PRODUCTS:
      return {...state, toggleList: true};
    case types.GET_PRODUCTS:
      return {...state, list: action.payload, toggleList: false};
    default:
      return {...state};
  }
};

// Actions Creators

export const getProductList = () => ({
  type: types.ASYNC_GET_PRODUCTS,
});
