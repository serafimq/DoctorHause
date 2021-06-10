import { ADD_DOCTOR, CLEAR_DOCTOR, SET_ONEDOCTOR, ADD_FEEDBACK, CHANGE_ACCESS } from '../types/doctorTypes'

export default function doctorReducer(state = {}, action) {
  console.log(action.payload, '-----------');
  switch (action.type) {

    case ADD_DOCTOR:
      return {...state, ...action.payload}

    case CLEAR_DOCTOR:
      return action.payload

    case SET_ONEDOCTOR:
      return action.payload

    case ADD_FEEDBACK:
      return {...state, ...action.payload}

    case CHANGE_ACCESS:
      return action.payload

    default:
      return state
  }
}
