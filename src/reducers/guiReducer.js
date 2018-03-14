import * as types from '../actions/actionTypes';

const initialState = [
  { position: 0, feedUrl: 'https://www.aftonbladet.se/rss.xml', details: true },
  { position: 1, feedUrl: 'https://www.dn.se/nyheter/m/rss', details: true },
  { position: 2, feedUrl: 'https://feeds.expressen.se', details: true },
  { position: 3, feedUrl: 'https://www.svt.se/nyheter/rss.xml', details: true },
  { position: 4, feedUrl: 'https://www.svd.se/?service=rss', details: true },
  {
    position: 5,
    feedUrl: 'https://api.sr.se/api/rss/program/83?format=145',
    details: true,
  },
];

const guiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_POSITION: {
      const i = state.findIndex(s => s.position === action.position);
      return [
        ...state.slice(0, i),
        {
          ...state[i],
          position: action.position,
          feedUrl: action.feedUrl,
        },
        ...state.slice(i + 1),
      ];
    }
    case types.ENABLE_DETAILS: {
      const i = state.findIndex(s => s.feedUrl === action.feedUrl);
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
      const i = state.findIndex(s => s.feedUrl === action.feedUrl);
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

export default guiReducer;
