// Types
export const types = {
  ASYNC_GET_CATEGORIES: 'ASYNC_GET_CATEGORIES',

  GET_CATEGORIES: 'GET_CATEGORIES',
  GET_SUB_CATEGORIES: 'GET_SUB_CATEGORIES',
};

// Reducers
const INITIAL_STATE = {
  categories: null,
  subCategories: null,
  toggleCategories: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ASYNC_GET_CATEGORIES:
      return {...state, toggleCategories: true};
    case types.GET_CATEGORIES:
      return {...state, categories: action.payload, toggleCategories: false};
    case types.GET_SUB_CATEGORIES:
      return {
        ...state,
        subCategories: action.payload,
      };
    default:
      return {...state};
  }
};

// Actions Creators

export const getCategoriestList = () => ({
  type: types.ASYNC_GET_CATEGORIES,
});
