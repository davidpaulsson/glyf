import { compose, createStore, applyMiddleware } from 'redux';
import persistState from 'redux-localstorage';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

const enhancer = compose(
  applyMiddleware(thunk),
  persistState(['gui', 'theme'])
);

const configureStore = () => {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    enhancer
  );
};

export default configureStore;
