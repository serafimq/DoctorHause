import { SET_EVENTS } from '../types/eventsTypes';
import axios from 'axios'

const setAllEvents = () => async (dispatch) => {
  const response = await axios('http://localhost:3006/api/v1/user/signup')
  dispatch(setEvents(response.data))
}

const setEvents = (events) => {
  return {
    type: SET_EVENTS,
    payload: events
  }
}

export {
  setAllEvents,
  setEvents,
}
