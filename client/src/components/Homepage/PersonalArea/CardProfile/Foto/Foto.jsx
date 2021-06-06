/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react'
import style from './Foto.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addNewAvatarAxios, setAvatarAxios, uploadAvatar } from '../../../../../redux/actionCreators/avatarAC'

const Foto = () => {
  
  const user = useSelector(state => state.user)
  const avatar = useSelector(state => state.avatar)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setAvatarAxios(user.id))
  }, [])

  const fileSelectedHandler = e => {
    dispatch(uploadAvatar(e.target.files[0]))
  }
  const fileUploadHandler = (e) => {
    dispatch(addNewAvatarAxios(avatar, user.id))
  }

  return (
      <div class="card profile-card">
              <figure>
                <img src="https://i.ibb.co/hghhKRN/jp-00158-x-UAMV.jpg" className="img-fluid img-profile" alt="Card image"/>
              </figure>
              <input type='file' onChange={(e) => fileSelectedHandler(e)}/>
              <button onClick={(e) => fileUploadHandler(e)}>Upload</button>
              <div className={style.user_profile}>
                <div className={style.user_name}>{user.name}</div>
                <div className={style.user_email}>{user.email}</div>
              </div>
        </div> 
    
  )
}

export default Foto
