import * as types from './types';

export const showOwl = owlName => ({
  type: types.SHOW_OWL,
  owlName,
})

export const closeOwl = () => ({
  type: types.CLOSE_OWL,
})

export const setOwls = owls => ({
 type: types.SET_OWLS,
 owls,
})
