import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import cartReducer from './cartReducer';
// import { loadState, saveState } from './localStorageReducer';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  cartState: cartReducer,
  // loadState: loadState,
  // saveState: saveState,
});

export default rootReducer;
