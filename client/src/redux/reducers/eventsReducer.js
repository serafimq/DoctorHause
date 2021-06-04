import { SET_EVENTS, ADD_EVENT } from '../types/eventsTypes';


function eventsReducer(state = [], action) {
  switch (action.type) {
    case SET_EVENTS:
      return action.payload
    case ADD_EVENT:
      return [...state, action.payload]

    default:
      return state;
  }
}

export default eventsReducer
