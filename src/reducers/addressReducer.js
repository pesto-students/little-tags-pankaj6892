import * as ACTIONS from '../Constants/actionTypes';

const initialState = {
  address: [],
};

export default function addressReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.ADD_ADDRESS:
      console.log('adding to session');
      const { enteredAddress } = action;
      const result = { ...state, address: [...state.address, enteredAddress] };

      return result;
    default:
      return state;
  }
}
