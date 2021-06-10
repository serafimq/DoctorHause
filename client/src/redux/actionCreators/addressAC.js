import axios from 'axios'
import Login from '../../components/UserForms/Login/Login';
import { GET_COUNT_USER_ADDRESS, SET_USER_ADDRESS } from '../types/addressTypes';

const setAllUserAddressThunk= (id) => async (dispatch) => {
  const response = await axios(`http://localhost:3006/api/v1/map/${id}`)
  console.log('response.dataCOOOOOOORDINATION', response.data);
  dispatch(setAllUserAddress(response.data))
}


const getCountUserAddressThunk = (id, count) => async (dispatch) => {
  const response = await axios.post(`http://localhost:3006/api/v1/map/${id}`, {count})
  console.log('response.dataCOOOOOOORDINATION', response.data);
  dispatch(getCountUserAddress(response.data))
}

const setAllUserAddress = (address) => {
  return {
    type: SET_USER_ADDRESS,
    payload: address
  }
}

const getCountUserAddress = (address) => {
  return {
    type: GET_COUNT_USER_ADDRESS,
    payload: address
  }
}


export {
  setAllUserAddressThunk,
  setAllUserAddress,
  getCountUserAddressThunk
}
