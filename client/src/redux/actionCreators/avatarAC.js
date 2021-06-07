
import { SET_AVATAR, ADD_AVATAR, UPLOAD_AVATAR } from '../types/avatarTypes';
import axios from 'axios'

const setAvatarAxios = (id) => async (dispatch) => {
  const response = await axios(`http://localhost:3006/api/v1/homepage/${id}`)
  dispatch(setAvatar(response.data))
}

const setAvatar = (avatar) => {
  return {
    type: UPLOAD_AVATAR,
    payload: avatar
  }
}

const uploadAvatar = (avatar) => {
  return {
    type: SET_AVATAR,
    payload: avatar
  }
}

const addNewAvatarAxios = (avatar, id) => async (dispatch) => {
  const fd = new FormData()

  fd.append('image', avatar, avatar.name)

  const response = await axios.post(`http://localhost:3006/api/v1/homepage/${id}`, fd)
  console.log('response.data', response.data);
  // dispatch(addNewAvatar(response.data))
}

const addNewAvatar = (avatar) => {
  return {
    type: ADD_AVATAR,
    payload: avatar
  }
}


export {
  setAvatarAxios,
  setAvatar,
  addNewAvatarAxios,
  addNewAvatar,
  uploadAvatar
}
