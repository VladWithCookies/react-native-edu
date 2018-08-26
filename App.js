import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import { Font, AppLoading } from 'expo';
import { Root } from 'native-base';
import { createLogicMiddleware } from 'redux-logic';
import { AsyncStorage } from 'react-native';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'

import reducers from './state/reducers';
import operations from './state/operations';
import AppLayout from './components/AppLayout/container';

const persistConfig = {
  key: 'root',
  storage,
};

const logic = createLogicMiddleware(operations, {});
const middlewares = [logic, logger];
const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, {}, applyMiddleware(...middlewares));
const persistor = persistStore(store);

class App extends React.Component {
  state = {
    loading: true,
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });
    this.setState({ loading: false });
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Root>
            {this.state.loading ? <AppLoading /> : <AppLayout />}
          </Root>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
