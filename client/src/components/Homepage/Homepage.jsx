import React from 'react'
// import style from './Homepage.model.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CardDoctorPage from '../cardDoctorPage/cardDoctorPage'

import PersonalArea from './PersonalArea/PersonalArea'

const Homepage = () => {
  const role = useSelector(state => state.user.role)
  return (
    <div>
      {role !== 'doctor' ?

        <PersonalArea />
        :
        <CardDoctorPage />
      }
    </div>
  )
}


export default Homepage
