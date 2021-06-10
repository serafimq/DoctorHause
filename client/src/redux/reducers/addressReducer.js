import { GET_COUNT_USER_ADDRESS, SET_USER_ADDRESS } from "../types/addressTypes";

function addressReducer(state = [], action) {
  switch (action.type) {
    case SET_USER_ADDRESS:
      return action.payload
    case GET_COUNT_USER_ADDRESS:
      return action.payload
    default:
      return state;
  }
}

export default addressReducer
