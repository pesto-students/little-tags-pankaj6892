import {
  ADD_TO_CART,
  SET_AUTH_USER,
  ADD_ADDRESS,
} from '../Constants/actionTypes';

export const setAuthUser = (authUser) => ({
  type: SET_AUTH_USER,
  authUser,
});

export const addToBasket = (item) => {
  return {
    type: ADD_TO_CART,
    item,
  };
};

export const addAddress = (enteredAddress) => {
  console.log(enteredAddress);
  return {
    type: ADD_ADDRESS,
    enteredAddress,
  };
};
