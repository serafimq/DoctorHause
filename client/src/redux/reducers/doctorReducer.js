import {SET_DOCTORS, ADD_DOCTOR} from '../types/doctorTypes'

export default function doctorReducer (state = [], action) {
  switch (action.type) {

    case SET_DOCTORS:
      return action.payload;

    case ADD_DOCTOR:
      return [...state, action.payload]

    default:
      return state
  }
}
