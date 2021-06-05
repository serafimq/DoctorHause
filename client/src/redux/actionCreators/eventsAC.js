import { SET_EVENTS, ADD_EVENT } from '../types/eventsTypes';
import axios from 'axios'

const setAllEvents = () => async (dispatch) => {
  const response = await axios('http://localhost:3006/api/v1/events')
  console.log('response.data', response.data);
  dispatch(setEvents(response.data))
}

const setEvents = (events) => {
  return {
    type: SET_EVENTS,
    payload: events
  }
}

const addEventsAxiox = (event, id) => async (dispatch) => {
  console.log(event, '----------')

  const response = await axios.post('http://localhost:3006/api/v1/events', { event, id })
  dispatch(addEvents(response.data))
}

const addEvents = (events) => {
  return {
    type: ADD_EVENT,
    payload: events
  }
}

const getOneEventThunk = ({ date }) => async (dispatch) => {
  console.log(date, 'date');
  const response = await axios.post('http://localhost:3006/api/v1/events/oneEvent', { date: date })
  // console.log('response.data', response.data);
  // dispatch(getEvents(response.data))
}

export {
  setAllEvents,
  setEvents,
  addEventsAxiox,
  addEvents,
  getOneEventThunk
}
