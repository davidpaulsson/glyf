import { combineReducers } from 'redux';
import newsReducer from './newsReducer';

const rootReducer = combineReducers({
  news: newsReducer,
});

export default rootReducer;
