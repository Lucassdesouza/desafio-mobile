// Types
export const types = {
  ASYNC_GET_CATEGORIES: 'ASYNC_GET_CATEGORIES',
  ASYNC_GET_SUB_CATEGORIES: 'ASYNC_GET_SUB_CATEGORIES',

  GET_CATEGORIES: 'GET_CATEGORIES',
  GET_SUB_CATEGORIES: 'GET_SUB_CATEGORIES',
};

// Reducers
const INITIAL_STATE = {
  categories: null,
  subCategories: null,
  subCategoriesName: null,
  toggleCategories: false,
  toggleSubCategories: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ASYNC_GET_CATEGORIES:
      return {...state};
    case types.GET_CATEGORIES:
      return {...state, categories: action.payload};
    case types.GET_SUB_CATEGORIES:
      return {
        ...state,
        subCategories: action.payload,
        toggleSubCategories: true,
      };
    default:
      return {...state};
  }
};

// Actions Creators

export const getCategoriestList = () => ({
  type: types.ASYNC_GET_CATEGORIES,
});

export const subcategoriesList = (list, name) => ({
  type: types.ASYNC_GET_SUB_CATEGORIES,
  payload: {list, name},
});
