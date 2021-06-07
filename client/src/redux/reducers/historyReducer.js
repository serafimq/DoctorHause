import { ADD_HISTORY, SET_HISTORY } from '../types/historyTypes';


const historyReducer = (state = [], action) => {
  console.log(action.payload, 'action.payload');
  switch (action.type) {
    case SET_HISTORY:
      return action.payload
    case ADD_HISTORY:
      return [...state, action.payload]
    default:
      return state;
  }
}

export default historyReducer
