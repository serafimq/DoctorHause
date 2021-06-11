import { ADD_HISTORY, SET_HISTORY, CLEAR_HISTORY, FILTER_PRICE_HISTORY, FILTER_PROBLEM_HISTORY, SORT_DATE_HISTORY } from '../types/historyTypes';

const historyReducer = (state = [], action) => {
  console.log(action.payload, 'asdsdf')
  switch (action.type) {
    case SET_HISTORY:
      return action.payload
    case CLEAR_HISTORY:
      return action.payload
    case ADD_HISTORY:
      return [...state, action.payload]
    case FILTER_PRICE_HISTORY:
      return action.payload
    case FILTER_PROBLEM_HISTORY:
      return action.payload
      case SORT_DATE_HISTORY:
      return action.payload
    default:
      return state;
  }
}

export default historyReducer
