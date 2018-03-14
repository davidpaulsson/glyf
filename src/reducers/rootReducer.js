import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import guiReducer from './guiReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  gui: guiReducer,
});

export default rootReducer;
