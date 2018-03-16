import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import guiReducer from './guiReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  gui: guiReducer,
  theme: themeReducer,
});

export default rootReducer;
