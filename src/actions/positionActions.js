import * as types from './actionTypes';

export const changePosition = (position, feedUrl) => ({
  type: types.CHANGE_POSITION,
  position,
  feedUrl,
});
