import * as types from '../actions/actionTypes';

const initialState = 'light';

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ENABLE_THEME_DARK: {
      return 'dark';
    }
    case types.ENABLE_THEME_LIGHT: {
      return 'light';
    }
    default:
      return state;
  }
};

export default themeReducer;
