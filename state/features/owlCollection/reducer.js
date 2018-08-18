import * as types from './types';

const initialState = {
  catched: [],
  openedOwl: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
    case types.SHOW_OWL:
      return { ...state, openedOwl: action.owlName };
    case types.CLOSE_OWL:
      return { ...state, openedOwl: null };
    case types.SET_OWLS:
      return { ...state, catched: action.owls };
		default:
			return state
	}
};

export default reducer;
