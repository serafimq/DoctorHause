import React, { useState } from 'react'
import style from './PersonalArea.module.css'
import { Row, Col } from 'antd';
import CalendarPage from './CalendarPage/CalendarPage';
import ResultModal from '../ResultModal/ResultModal';
import { useSelector } from 'react-redux';


const PersonalArea = () => {

  const user = useSelector(state => state.user)
  console.log(user.id, 'user.id')
  console.log(user._id, 'user._id')

  return (
    <>
      <div>
        <Row>
          <Col className={style.right_col} span={18} push={6}>
            <CalendarPage />
          </Col>
          <Col className={style.left_col} span={6} pull={18}>

          </Col>
        </Row>
      </div>
      <ResultModal />
    </>
  )
}

export default PersonalArea
