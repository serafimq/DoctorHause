import {SET_DOCTORS} from '../types/doctorTypes'

export default function doctorsReducer (state = [], action) {
  switch (action.type) {

    case SET_DOCTORS:
      return action.payload;

    default:
      return state
  }
}
