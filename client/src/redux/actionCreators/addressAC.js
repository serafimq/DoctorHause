import axios from 'axios'
import { SET_USER_ADDRESS } from '../types/addressTypes';

const setAllUserAddressThunk= (id) => async (dispatch) => {
  const response = await axios(`http://localhost:3006/api/v1/map/${id}`)
  console.log('response.dataCOOOOOOORDINATION', response.data);
  dispatch(setAllUserAddress(response.data))
}

const setAllUserAddress = (address) => {
  return {
    type: SET_USER_ADDRESS,
    payload: address
  }
}

export {
  setAllUserAddressThunk,
  setAllUserAddress
}
