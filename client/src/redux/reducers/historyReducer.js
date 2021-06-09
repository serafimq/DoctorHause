import { ADD_HISTORY, SET_HISTORY, CLEAR_HISTORY } from '../types/historyTypes';

const historyReducer = (state = [], action) => {
  switch (action.type) {
    case SET_HISTORY:
      return action.payload
    case CLEAR_HISTORY:
      return action.payload
    case ADD_HISTORY:
      return [...state, action.payload]
    default:
      return state;
  }
}

export default historyReducer
