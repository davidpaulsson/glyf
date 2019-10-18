import { compose, createStore, applyMiddleware } from 'redux';
import persistState from 'redux-localstorage';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

// eslint-disable-next-line no-undef
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancer(
  applyMiddleware(thunk),
  persistState(['sourcesLayout', 'theme'])
);

const configureStore = () => {
  return createStore(
    rootReducer,
    enhancer
  );
};

export default configureStore;
