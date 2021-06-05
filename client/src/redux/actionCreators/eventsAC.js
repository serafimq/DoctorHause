import { SET_EVENTS, ADD_EVENT } from '../types/eventsTypes';
import axios from 'axios'

const setAllEvents = () => async (dispatch) => {
  const response = await axios('http://localhost:3006/api/v1/events')
  dispatch(setEvents(response.data))
}

const setEvents = (events) => {
  return {
    type: SET_EVENTS,
    payload: events
  }
}

const addEventsAxiox = (event) => async (dispatch) => {
  console.log(event)

  const response = await axios.post('http://localhost:3006/api/v1/events', { event })
  dispatch(addEvents(response.data))
}

const addEvents = (events) => {
  return {
    type: ADD_EVENT,
    payload: events
  }
}

export {
  setAllEvents,
  setEvents,
  addEventsAxiox,
  addEvents
}
