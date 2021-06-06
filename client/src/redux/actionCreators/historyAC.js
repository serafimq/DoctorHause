import { ADD_HISTORY, SET_HISTORY } from '../types/historyTypes'
import axios from 'axios'

// const setAllHistoryThunk = (id) => async (dispatch) => {
//   const response = await axios(`http://localhost:3006/api/v1/history/${id}`)
//   console.log('response.data', response.data);
//   dispatch(setAllHistory(response.data))
// }

// const setAllHistory = (history) => {
//   return {
//     type: SET_HISTORY,
//     payload: history
//   }
// }

const addOneHistoryThunk = (history, id, idEvent) => async (dispatch) => {
  const response = await axios.post(`http://localhost:3006/api/v1/history/${id}`, { history, idEvent })
  dispatch(addOneHistory(response.data))
}

const addOneHistory = (history) => {
  return {
    type: ADD_HISTORY,
    payload: history
  }
}

export {
  addOneHistoryThunk,
  addOneHistory
}
