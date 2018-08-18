import { createLogic } from 'redux-logic';
import uniqBy from 'lodash/uniqBy';

import * as types from './types';
import { catchOwl } from './actions';
import { setOwls } from '../owlCollection/actions';

const setTrapOperation = createLogic({
  type: types.SET_TRAP,
  latest: true,

  process(deps, dispatch, done) {
    // TODO add delayed jobs
    dispatch(catchOwl());
    done();
  },
});

const catchOwlOperation = createLogic({
  type: types.CATCH_OWL,
  latest: true,

  async process({ getState, AsyncStorage }, dispatch, done) {
    const state = getState();
    const allOwls = state.owlCollection.all;
    const catchedOwl = allOwls[Math.floor(Math.random() * allOwls.length)];

    const myOwls = await AsyncStorage.getItem('myOwls').then(res => JSON.parse(res)) || [];
    const newData = uniqBy([...myOwls, catchedOwl], owl => owl.title);

    await AsyncStorage.setItem('myOwls', JSON.stringify(newData));

    dispatch(setOwls(newData));
    done();
  },
});

export default [
  setTrapOperation,
  catchOwlOperation,
]
