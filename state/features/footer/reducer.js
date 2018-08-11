import * as types from './types';

const initialState = {
  activeTab: 'catch',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_ACTIVE_TAB:
			return { activeTab: action.tabName };
		default:
			return state
	}
};

export default reducer;
