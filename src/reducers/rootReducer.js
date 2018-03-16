import { combineReducers } from 'redux';
import sourcesReducer from './sourcesReducer';
import sourcesLayoutReducer from './sourcesLayoutReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  sources: sourcesReducer,
  sourcesLayout: sourcesLayoutReducer,
  theme: themeReducer,
});

export default rootReducer;
