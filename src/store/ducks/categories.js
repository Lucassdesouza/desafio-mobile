// Types
export const types = {
  ASYNC_GET_CATEGORIES: 'ASYNC_GET_CATEGORIES',

  GET_CATEGORIES: 'GET_CATEGORIES',
};

// Reducers
const INITIAL_STATE = {
  categories: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_CATEGORIES:
      return {...state, list: action.payload};
    default:
      return {...state};
  }
};

// Actions Creators

export const getCategoriestList = () => ({
  type: types.ASYNC_GET_CATEGORIES,
});
