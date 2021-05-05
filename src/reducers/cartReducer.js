import * as ACTIONS from '../Constants/actionTypes';

const initialState = {
  cart: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      console.log('adding to session');
      const { item } = action;
      // const result = { ...state, cart: [...state.cart, item] };
      let result = { ...state };

      console.log(typeof result);

      let { productId } = item;
      let { productSize } = item;

      let existingItem = result.cart.find(
        (cartItem) =>
          cartItem.productId === Number(productId) &&
          cartItem.productSize === productSize
      );

      if (existingItem) {
        existingItem.productQuantity += item.productQuantity; //update item
      } else {
        //if item doesn't exist, simply add it
        result = { ...state, cart: [...state.cart, item] };
      }
      return result;
    default:
      return state;
  }
}
