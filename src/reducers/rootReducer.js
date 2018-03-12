import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import positionReducer from './positionReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  position: positionReducer,
});

export default rootReducer;
