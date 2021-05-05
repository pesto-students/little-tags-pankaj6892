import { ADD_TO_CART, SET_AUTH_USER } from '../Constants/actionTypes';

export const setAuthUser = (authUser) => ({
  type: SET_AUTH_USER,
  authUser,
});

export const addToBasket = (cartData) => {
  console.log(cartData);
  return {
    type: ADD_TO_CART,
    cartData,
  };
};
