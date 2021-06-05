import React from 'react'
import { useSelector } from 'react-redux'
import CardDoctorPage from '../cardDoctorPage/cardDoctorPage'
import FormDoctor from '../FormDoctor/FormDoctor'

import PersonalArea from './PersonalArea/PersonalArea'

const Homepage = () => {
  const role = useSelector(state => state.user.role) 
  console.log(role );
  return (
    <div>

      {role !== 'doctor'  ? 
      
      <PersonalArea />
      :
      <>
        <CardDoctorPage/>
      </>
      }
      
         
      
    </div>
  )
}


export default Homepage
