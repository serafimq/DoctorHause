import { SET_EVENTS, ADD_EVENT, GET_ONE_EVENT, CLEAR_EVENT, DELETE_EVENT } from '../types/eventsTypes';
import axios from 'axios'
import Login from '../../components/UserForms/Login/Login';

const setAllEvents = (id) => async (dispatch) => {
  const response = await axios(`http://localhost:3006/api/v1/events/${id}`)
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

const deleteEventAxios = (id, idEvent) => async (dispatch) => {
  console.log(idEvent, 'idEvent')
  const response = await axios.delete(`http://localhost:3006/api/v1/events/${id}`, {data: {idEvent} })
  dispatch(deleteEvents(response.data))
}

const deleteEvents = (id) => {
  console.log(123);
  return {
    type: DELETE_EVENT,
    payload: id
  }
}

const getOneEventThunk = ({ date, id }) => async (dispatch) => {

  const response = await axios.post(`http://localhost:3006/api/v1/events/${id}/oneEvent`, { date: date })

  dispatch(getEvents(response.data.arr))
}

const getEvents = (events) => {

  return {
    type: GET_ONE_EVENT,
    payload: events
  }
}

const clearEvents = () => {
  return {
    type: CLEAR_EVENT,
    payload: []
  }
}

export {
  setAllEvents,
  setEvents,
  addEventsAxiox,
  addEvents,
  getOneEventThunk,
  clearEvents,
  deleteEventAxios
}
