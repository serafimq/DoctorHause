import { SET_EVENTS, ADD_EVENT, GET_ONE_EVENT } from '../types/eventsTypes';
import axios from 'axios'

const setAllEvents = (id) => async (dispatch) => {
  const response = await axios(`http://localhost:3006/api/v1/events/${id}`)
  // console.log('response.data', response.data);
  dispatch(setEvents(response.data))
}

const setEvents = (events) => {
  return {
    type: SET_EVENTS,
    payload: events
  }
}

const addEventsAxiox = (event, id) => async (dispatch) => {

  const response = await axios.post(`http://localhost:3006/api/v1/events/${id}`, { event, id })
  dispatch(addEvents(response.data))
}

const addEvents = (events) => {
  return {
    type: ADD_EVENT,
    payload: events
  }
}

const getOneEventThunk = ({ date, id }) => async (dispatch) => {
  console.log(date, 'date');
  const response = await axios.post(`http://localhost:3006/api/v1/events/${id}/oneEvent`, { date: date })
  console.log('response.data', response.data);
  dispatch(getEvents(response.data.arr))
}

const getEvents = (events) => {
  console.log(events, 'events');
  return {
    type: GET_ONE_EVENT,
    payload: events
  }
}

export {
  setAllEvents,
  setEvents,
  addEventsAxiox,
  addEvents,
  getOneEventThunk
}
