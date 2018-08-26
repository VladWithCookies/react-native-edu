import * as types from './types';

const initialState = {
	selectedBaid: 'mouse',
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
    case types.SELECT_BAID:
      return { ...state, selectedBaid: action.baid };
		default:
			return state
	}
};

export default reducer;
