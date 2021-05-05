import * as ACTIONS from '../Constants/actionTypes';

const initialState = {
  cart: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      console.log('adding to session');
      const { cartData } = action;
      return { ...state, cart: [...state.cart, { cartData }] };
    default:
      return state;
  }
}
