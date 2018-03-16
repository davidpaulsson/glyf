import * as types from './actionTypes';

export const changePosition = (position, sourceId) => ({
  type: types.CHANGE_POSITION,
  position,
  sourceId,
});

export const enableDetails = sourceId => ({
  type: types.ENABLE_DETAILS,
  sourceId,
});

export const disableDetails = sourceId => ({
  type: types.DISABLE_DETAILS,
  sourceId,
});
