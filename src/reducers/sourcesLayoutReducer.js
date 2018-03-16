import * as types from '../actions/actionTypes';

const initialState = [
  { position: 0, sourceId: '11', details: true },
  { position: 1, sourceId: '12', details: true },
  { position: 2, sourceId: '13', details: true },
  { position: 3, sourceId: '14', details: true },
  { position: 4, sourceId: '15', details: true },
  { position: 5, sourceId: '16', details: true },
];

const sourcesLayoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_POSITION: {
      const i = state.findIndex(s => s.position === action.position);
      return [
        ...state.slice(0, i),
        {
          ...state[i],
          position: action.position,
          sourceId: action.sourceId,
        },
        ...state.slice(i + 1),
      ];
    }
    case types.ENABLE_DETAILS: {
      const i = state.findIndex(s => s.sourceId === action.sourceId);
      return [
        ...state.slice(0, i),
        {
          ...state[i],
          details: true,
        },
        ...state.slice(i + 1),
      ];
    }
    case types.DISABLE_DETAILS: {
      const i = state.findIndex(s => s.sourceId === action.sourceId);
      return [
        ...state.slice(0, i),
        {
          ...state[i],
          details: false,
        },
        ...state.slice(i + 1),
      ];
    }
    default:
      return state;
  }
};

export default sourcesLayoutReducer;
