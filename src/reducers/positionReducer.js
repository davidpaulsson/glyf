import * as types from '../actions/actionTypes';

const initialState = [
  { position: 0, feedUrl: 'https://www.aftonbladet.se/rss.xml' },
  { position: 1, feedUrl: 'https://www.dn.se/nyheter/m/rss' },
  { position: 2, feedUrl: 'https://feeds.expressen.se' },
  { position: 3, feedUrl: 'https://www.svt.se/nyheter/rss.xml' },
  { position: 4, feedUrl: 'https://www.svd.se/?service=rss' },
  { position: 5, feedUrl: 'https://api.sr.se/api/rss/program/83?format=145' },
];

const positionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_POSITION: {
      const i = state.findIndex(s => s.position === action.position);
      const newState = [
        ...state.slice(0, i),
        {
          position: action.position,
          feedUrl: action.feedUrl,
        },
        ...state.slice(i + 1),
      ];
      return newState;
    }
    default:
      return state;
  }
};

export default positionReducer;
