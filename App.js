import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import { Font, AppLoading } from 'expo';
import { Root } from 'native-base';
import { createLogicMiddleware } from 'redux-logic';
import { AsyncStorage } from 'react-native';

import allOwls from './data/owls';
import reducers from './state/reducers';
import operations from './state/operations';
import AppLayout from './components/AppLayout/container';

const initialState = {
  owlCollection: {
    all: allOwls,
    catched: [],
  },
};

const deps = { AsyncStorage };
const logic = createLogicMiddleware(operations, deps);
const middlewares = [logic, logger];

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares),
);

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
        <Root>
          {this.state.loading ? <AppLoading /> : <AppLayout />}
        </Root>
      </Provider>
    );
  }
}

export default App;
