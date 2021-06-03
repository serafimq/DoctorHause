import initState from '../initState'
import { SIGNIN, SIGNOUT, SIGNUP } from '../types/userTypes'

function userReducer(state = initState, action) {
  switch (action.type) {
    case  SIGNUP:
      return action.payload.id
      case  SIGNIN:
        return action.payload      
    case  SIGNOUT:
      return action.payload
    default:
      return state;
  }
}

export default userReducer
