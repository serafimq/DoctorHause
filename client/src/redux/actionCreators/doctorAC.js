import { ADD_DOCTOR, CLEAR_DOCTOR, SET_ONEDOCTOR } from '../types/doctorTypes'
import axios from 'axios'



export const setOneDoctorThunk = (id) => async (dispatch) => {
  console.log(id, 'dadadad')

  const result = await axios(`http://localhost:3006/api/v1/doctors/${id}`);
  dispatch({
    type: SET_ONEDOCTOR,
    payload: result.data
  })
}

export const updateDoctorThunk = (doctor, id) => async (dispatch) => {
  const result = await axios.post(`http://localhost:3006/api/v1/doctors/${id}`, { doctor, id });
  dispatch({
    type: ADD_DOCTOR,
    payload: result
  })
}

export const clearDoctor = () => {
  return {
    type: CLEAR_DOCTOR,
    payload: {}
  }
}
