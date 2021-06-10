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
    case ACTIONS.REMOVE_FROM_CART:
      console.log('removing from CART');
      const { item1 } = action;
      // const result = { ...state, cart: [...state.cart, item] };
      let result1 = { ...state };

      console.log(result1.cart[0]);

      let productId1 = item1.productId;
      let productSize1 = item1.productSize;

      // let existingItem1 = result1.cart.find(
      //   (cartItem) =>
      //     cartItem.productId === Number(productId1) &&
      //     cartItem.productSize === productSize1
      // );
      let deleteFlag = -1;
      for (let i = 0; i < result1.cart.length; i++) {
        console.log(result1.cart[i].productId);
        console.log(productId1);
        if (
          result1.cart[i].productId === Number(productId1) &&
          result1.cart[i].productSize === productSize1
        )
          deleteFlag = i;
      }

      if (deleteFlag >= 0) {
        result1.cart.splice(deleteFlag, 1);
      }

      // if (existingItem1) {
      //   console.log('test');
      //   result1 = result1.filter((e) => e !== existingItem1); //update item
      // } else {
      //   //if item doesn't exist, simply add it
      // }
      return result1;
    default:
      return state;
  }
}
