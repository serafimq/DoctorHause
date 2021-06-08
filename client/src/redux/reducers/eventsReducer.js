import { SET_EVENTS, ADD_EVENT, GET_ONE_EVENT, CLEAR_EVENT } from '../types/eventsTypes';


function eventsReducer(state = [], action) {

  switch (action.type) {
    case SET_EVENTS:
      return action.payload

    case CLEAR_EVENT:
      return action.payload

    case ADD_EVENT:
      return [...state, action.payload]

    case GET_ONE_EVENT:
      return action.payload

    default:
      return state;
  }
}

export default eventsReducer
