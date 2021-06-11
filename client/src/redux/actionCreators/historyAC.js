import { ADD_HISTORY, SET_HISTORY, CLEAR_HISTORY, FILTER_PRICE_HISTORY, FILTER_PROBLEM_HISTORY, SORT_DATE_HISTORY } from '../types/historyTypes'
import axios from 'axios'

const setAllHistoryThunk = (id) => async (dispatch) => {
  const response = await axios(`http://localhost:3006/api/v1/history/${id}`)
  console.log('response.dataGETHISTORY', response.data);
  dispatch(setAllHistory(response.data))
}

const setAllHistory = (history) => {
  return {
    type: SET_HISTORY,
    payload: history
  }
}

const addOneHistoryThunk = (history, id, idEvent, imagePath) => async (dispatch) => {
  const response = await axios.post(`http://localhost:3006/api/v1/history/${id}`, { history, idEvent, imagePath })
  dispatch(addOneHistory(response.data))
}

const addOneHistory = (history) => {
  return {
    type: ADD_HISTORY,
    payload: history
  }
}

const sortPriceHistoryThunk = (id, history) => async (dispatch) => {
  console.log(history, 'historystatet')
  // const response = await axios.patch(`http://localhost:3006/api/v1/history/${id}`)
  // console.log(response.data, 'res');
  // dispatch(sortPriceHistory(response.data))
  
  const sortHis = [...history].sort((a,b) => b.price - a.price)
  dispatch(sortPriceHistory(sortHis))
}

const sortPriceHistory = (history) => {
  console.log(history, 'historyhistoryhistory');
  return {
    type: FILTER_PRICE_HISTORY,
    payload: history
  }
}

const sortDateHistoryThunk = (id, history) => async (dispatch) => {
  console.log(history, 'historystatet')
  // const response = await axios.patch(`http://localhost:3006/api/v1/history/${id}`)
  // console.log(response.data, 'res');
  // dispatch(sortPriceHistory(response.data))
  
  const sortDateHis = [...history].sort((a,b) => Date.parse(b.nextDateTime) - Date.parse(a.nextDateTime))
  dispatch(sortDateHistory(sortDateHis))
}

const sortDateHistory = (history) => {
  console.log(history, 'historyhistoryhistory');
  return {
    type: SORT_DATE_HISTORY,
    payload: history
  }
}


const filterProblemHistoryThunk = (id, problem) => async (dispatch) => {
  const response = await axios.put(`http://localhost:3006/api/v1/history/${id}`, {problem})
  console.log(response.data, 'responseresponseresponse');
  dispatch(filterProblemHistory(response.data))
}

const filterProblemHistory = (history) => {
  console.log(history, 'historyhistoryhistory');
  return {
    type: FILTER_PROBLEM_HISTORY,
    payload: history
  }
}

const clearHistory = () => {
  return {
    type: CLEAR_HISTORY,
    payload: []
  }
}

export {
  addOneHistoryThunk,
  addOneHistory,
  clearHistory,
  setAllHistoryThunk,
  setAllHistory,
  sortPriceHistoryThunk,
  filterProblemHistoryThunk,
  sortDateHistoryThunk
}
