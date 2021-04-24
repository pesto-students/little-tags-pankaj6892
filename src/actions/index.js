import {SET_AUTH_USER} from '../Constants/actionTypes';

export const setAuthUser = (authUser) => ({
  type: SET_AUTH_USER,
  authUser,
})