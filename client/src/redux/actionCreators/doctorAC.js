import {SET_DOCTORS, ADD_DOCTOR} from '../types/doctorTypes'
import axios from 'axios'

const setAllDoctors = (doctors) => {
  return {
    type: SET_DOCTORS,
    payload: doctors
  }
}

const addDoctor = (doctor) => {
  return {
    type: ADD_DOCTOR,
    payload: doctor
  }
}

export const setAllDoctorsThunk = () => async (dispatch) => {
  const result = await axios('http://localhost:3006/api/v1/user/doctors');
  dispatch(setAllDoctors(result.data))
}

export const addDoctorThunk = (doctor) => async (dispatch) => {
  console.log(doctor);
  const result = await axios.post('http://localhost:3006/api/v1/user/doctors',  doctor );
  dispatch(addDoctor(result.data))
}
