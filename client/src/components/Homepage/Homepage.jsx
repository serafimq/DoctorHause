import React from 'react'
import CardDoctorPage from '../cardDoctorPage/cardDoctorPage'
import FormDoctor from '../FormDoctor/FormDoctor'

import PersonalArea from './PersonalArea/PersonalArea'

const Homepage = () => {
  return (
    <div>
      <PersonalArea />
      <FormDoctor/>
      <CardDoctorPage/>
         
      
    </div>
  )
}

export default Homepage
