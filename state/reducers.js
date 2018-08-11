import { combineReducers } from 'redux';

import footerReducer from './features/footer/reducer';
import owlCollectionReducer from './features/owlCollection/reducer';

export default combineReducers({
  footer: footerReducer,
  owlCollection: owlCollectionReducer,
});
