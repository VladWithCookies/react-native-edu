import * as types from './types';

export const setTrap = () => ({
  type: types.SET_TRAP,
});

export const catchOwl = () => ({
  type: types.CATCH_OWL,
});

export const selectBaid = baid => ({
  type: types.SELECT_BAID,
  baid,
})
