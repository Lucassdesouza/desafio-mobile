const types = {
  SNACKBAR_SHOW: 'SNACKBAR_SHOW',
  SNACKBAR_DISMISS: 'SNACKBAR_DISMISS',
};

const INITIAL_STATE = {options: {}, showed: false, text: ''};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SNACKBAR_SHOW:
      return {
        ...state,
        options: action.payload.options,
        showed: true,
        text: action.payload.text,
      };
    case types.SNACKBAR_DISMISS:
      return {...state, ...INITIAL_STATE};
    default:
      return {...state};
  }
};

export const snackbarShow = (text = '') => {
  return {
    type: types.SNACKBAR_SHOW,
    payload: {
      options: {style: 'warn'},
      text,
    },
  };
};

export const snackbarShowError = (text = '') => {
  return {
    type: types.SNACKBAR_SHOW,
    payload: {
      options: {style: 'danger'},
      text,
    },
  };
};

export const snackbarDismiss = () => {
  return {type: types.SNACKBAR_DISMISS};
};
