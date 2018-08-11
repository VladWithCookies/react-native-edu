import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'

import reducers from './state/reducers';
import AppLayout from './components/AppLayout/container';

const initialState = {};
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(logger),
);

const App = () => (
  <Provider store={store}>
    <AppLayout />
  </Provider>
);

export default App;
