import initState from '../initState'
import { SIGNIN, SIGNIN_GOOGLE, SIGNOUT, SIGNUP, SIGNUP_GOOGLE, DELETE } from '../types/userTypes'

function userReducer(state = initState, action) {
  switch (action.type) {
    case  SIGNUP:
      return action.payload
    case  SIGNUP_GOOGLE:
      return action.payload
    case  SIGNIN:
      return action.payload
    case  SIGNIN_GOOGLE:
        return action.payload
    case  SIGNOUT:
      return action.payload
      case  DELETE:
      return action.payload
    default:
      return state;
  }
}

export default userReducer
