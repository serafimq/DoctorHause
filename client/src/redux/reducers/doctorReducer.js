import { ADD_DOCTOR, CLEAR_DOCTOR, SET_ONEDOCTOR } from '../types/doctorTypes'

export default function doctorReducer(state = {}, action) {
  switch (action.type) {

    case ADD_DOCTOR:
      return action.payload

    case CLEAR_DOCTOR:
      return action.payload

    case SET_ONEDOCTOR:
      return action.payload

    default:
      return state
  }
}
