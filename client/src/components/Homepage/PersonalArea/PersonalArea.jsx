import React from 'react'
import style from './PersonalArea.module.css'
import { Row, Col } from 'antd';
import CalendarPage from './CalendarPage/CalendarPage';
import CardProfile from './CardProfile/CardProfile';
import ResultModal from '../ResultModal/ResultModal';



const PersonalArea = () => {

  return (
    <>
      <div className={style.calendar}>
        <Row>
            <Col className={style.right_col} span={18} push={6}>
              <CalendarPage /> 
            </Col>
            <Col className={style.left_col}  span={6} pull={18}>
              <CardProfile />  
            </Col>
        </Row>
      </div>
    </>
  )
}

export default PersonalArea
