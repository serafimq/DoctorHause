import {SET_DOCTORS, ADD_DOCTOR, SET_ONEDOCTOR} from '../types/doctorTypes'
import axios from 'axios'

export const setAllDoctorThunk = () => async (dispatch) => {
  const result = await axios(`http://localhost:3006/api/v1`);
  dispatch({
    type: SET_DOCTORS,
    payload: result.data
    
  })
}

export const setOneDoctorThunk = (id) => async (dispatch) => {
  const result = await axios(`http://localhost:3006/api/v1/homepage/${id}`);
  console.log('==========>>>>>>>>',result.data);
  dispatch({
    type: SET_ONEDOCTOR,
    payload: result.data
  })
}

export const updateDoctorThunk = (doctor, id) => async (dispatch) => {
  const result = await axios.post(`http://localhost:3006/api/v1/homepage/${id}`, {doctor, id} );
  dispatch ({
    type: ADD_DOCTOR,
    payload: result
  })
}
