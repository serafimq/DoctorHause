import { SET_DOCTORS } from '../types/doctorsTypes'
import axios from 'axios'

export const setAllDoctorThunk = () => async (dispatch) => {
  const result = await axios(`http://localhost:3006/api/v1/doctors`);
  dispatch({
    type: SET_DOCTORS,
    payload: result.data

  })
}
