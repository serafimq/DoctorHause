import { ADD_DOCTOR, CLEAR_DOCTOR, SET_ONEDOCTOR, ADD_FEEDBACK, CHANGE_ACCESS } from '../types/doctorTypes'
import axios from 'axios'



export const setOneDoctorThunk = (id) => async (dispatch) => {
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

export const addFeedBackThunk = (feedBack, id) => async (dispatch) => {
  console.log(feedBack, id, 'feedBack, id');
  const result = await axios.put(`http://localhost:3006/api/v1/doctors/${id}`, { feedBack, id });
  dispatch({
    type: ADD_FEEDBACK,
    payload: result
  })
}

export const changeAccessThunk = (id) => async (dispatch) => {
  console.log(id);
  const result = await axios.patch(`http://localhost:3006/api/v1/homepage/${id}`, {id});
  dispatch({
    type: CHANGE_ACCESS,
    payload: result.data
  })
}
