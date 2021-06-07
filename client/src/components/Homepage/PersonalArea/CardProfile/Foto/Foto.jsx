/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useRef, useState } from 'react'
import style from './Foto.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addNewAvatarAxios, setAvatarAxios, uploadAvatar } from '../../../../../redux/actionCreators/avatarAC'
import Drop from './Drop/Drop'

const Foto = () => {
  
  const user = useSelector(state => state.user)
  const avatar = useSelector(state => state.avatar)
  const inputFile = useRef(null) 

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setAvatarAxios(user.id))
  }, [])

  const fileSelectedHandler = e => {
    // dispatch(uploadAvatar(e.target.files[0]))
    dispatch(addNewAvatarAxios(e.target.files[0], user.id))
  }
  // const fileUploadHandler = (e) => {
  // }

  return (
      <div class="card profile-card">
              <figure>
                <img onClick={() => {inputFile.current.click()}} src={avatar?.avatar ?
                 `http://localhost:3006/${avatar.avatar}` 
                :
                'http://cs319323.vk.me/v319323049/70e1/2gddfIt0mvc.jpg'
                } className="img-fluid img-profile" alt="Card image"/>
              </figure>
              <input className={style.input} type='file' name='image'  ref={inputFile} onChange={(e) => fileSelectedHandler(e)}/>
              {/* <button onClick={(e) => fileUploadHandler(e)}>Upload</button> */}
              
              <div className={style.user_profile}>
                <div className={style.user_name}>{user.name}</div>
                <div className={style.user_email}>{user.email}</div>
              </div>
        </div> 
    
  )
}

export default Foto
