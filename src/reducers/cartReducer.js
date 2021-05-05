import * as ACTIONS from '../Constants/actionTypes';

const initialState = {
  cart: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      console.log('adding to session');
      const { item } = action;
      const result = { ...state, cart: [...state.cart, item] };
      return result;
    default:
      return state;
  }
}
