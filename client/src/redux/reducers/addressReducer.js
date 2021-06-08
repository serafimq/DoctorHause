import { SET_USER_ADDRESS } from "../types/addressTypes";

function addressReducer(state = [], action) {
  console.log(action.payload, 'action.payloadADRESSS');
  switch (action.type) {
    case SET_USER_ADDRESS:
      return action.payload
    default:
      return state;
  }
}

export default addressReducer