import * as types from './actionTypes';

export const changePosition = (position, feedUrl) => ({
  type: types.CHANGE_POSITION,
  position,
  feedUrl,
});

export const enableDetails = feedUrl => ({
  type: types.ENABLE_DETAILS,
  feedUrl,
});

export const disableDetails = feedUrl => ({
  type: types.DISABLE_DETAILS,
  feedUrl,
});
