import * as types from './types';

export const setActiveTab = tabName => ({
  type: types.SET_ACTIVE_TAB,
  tabName,
});
