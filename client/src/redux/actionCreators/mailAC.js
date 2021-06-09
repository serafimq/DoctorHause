import axios from 'axios'
import { SET_ONEDOCTOR } from '../types/doctorTypes';

export const fetchMail= ({phone, text, emailTo, emailFrom, prefix, patientName, id}) => async (dispatch) => {
  const response = await axios.post(`http://localhost:3006/api/v1/mailer`,
    {
      phone,
      text,
      emailTo,
      emailFrom,
      prefix,
      patientName,
      id,
    }
  )
  console.log('Current Doctor', response.data);
  dispatch(setCurrentDoctor(response.data))
}

const setCurrentDoctor = (currentDoctor) => {
  return {
    type: SET_ONEDOCTOR,
    payload: currentDoctor
  }
}
