import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './App';

const store = configureStore();

const Entry = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Entry />, document.getElementById('app'));
