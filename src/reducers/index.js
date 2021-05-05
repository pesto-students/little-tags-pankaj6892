import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import cartReducer from './cartReducer';
import addressReducer from './addressReducer';
// import { loadState, saveState } from './localStorageReducer';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  cartState: cartReducer,
  addressState: addressReducer,
  // loadState: loadState,
  // saveState: saveState,
});

export default rootReducer;
