import {
  ADD_TO_CART,
  SET_AUTH_USER,
  REMOVE_FROM_CART,
  ADD_ADDRESS,
} from '../Constants/actionTypes';

export const setAuthUser = (authUser) => ({
  type: SET_AUTH_USER,
  authUser,
});

export const addToBasket = (item) => {
  console.log(item);
  return {
    type: ADD_TO_CART,
    item,
  };
};

export const removeFromCart = (item1) => {
  console.log(item1);
  return {
    type: REMOVE_FROM_CART,
    item1,
  };
};

export const addAddress = (enteredAddress) => {
  console.log(enteredAddress);
  return {
    type: ADD_ADDRESS,
    enteredAddress,
  };
};
