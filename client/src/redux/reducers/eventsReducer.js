import initState from '../initState'
import { SET_EVENTS } from '../types/eventsTypes';


function userReducer(state = initState, action) {
  switch (action.type) {
    case SET_EVENTS:
      return action.payload

    default:
      return state;
  }
}

export default userReducer
