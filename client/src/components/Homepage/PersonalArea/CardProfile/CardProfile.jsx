/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import style from './CardProfile.module.css'
import Foto from './Foto/Foto'
import NavProfile from './NavProfile/NavProfile'

const CardProfile = ({setVisibleComponents}) => {
  return (
    <div>
        <Foto />
        <NavProfile setVisibleComponents={setVisibleComponents}/>
    </div>
  )
}

export default CardProfile
