import { SET_AVATAR, ADD_AVATAR, UPLOAD_AVATAR, CLEAR_AVATAR } from '../types/avatarTypes';

function avatarReducer(state = null, action) {
  switch (action.type) {
    case SET_AVATAR:
      return action.payload
    case ADD_AVATAR:
      return action.payload
    case CLEAR_AVATAR:
      return action.payload
    case UPLOAD_AVATAR:
      return action.payload
    default:
      return state;
  }
}

export default avatarReducer
