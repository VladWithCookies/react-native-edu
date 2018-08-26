import { combineReducers } from 'redux';

import footerReducer from './features/footer/reducer';
import owlCollectionReducer from './features/owlCollection/reducer';
import owlTrapReducer from './features/owlTrap/reducer';

export default combineReducers({
  footer: footerReducer,
  owlCollection: owlCollectionReducer,
  owlTrap: owlTrapReducer,
});
