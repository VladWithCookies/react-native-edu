import { createLogic } from 'redux-logic';
import uniqBy from 'lodash/uniqBy';

import * as types from './types';
import { catchOwl } from './actions';
import { setOwls } from '../owlCollection/actions';

const setTrapOperation = createLogic({
  type: types.SET_TRAP,
  latest: true,

  process(deps, dispatch, done) {
    // TODO add delayed job with some catch logic
    dispatch(catchOwl());
    done();
  },
});

const catchOwlOperation = createLogic({
  type: types.CATCH_OWL,
  latest: true,

  async process({ getState }, dispatch, done) {
    const state = getState();
    const allOwls = state.owlCollection.all;
    const catchedOwls = state.owlCollection.catched || []; 
    const catchedOwl = allOwls[Math.floor(Math.random() * allOwls.length)];
    const newData = uniqBy([...catchedOwls, catchedOwl], owl => owl.title);

    dispatch(setOwls(newData));
    done();
  },
});

export default [
  setTrapOperation,
  catchOwlOperation,
]
