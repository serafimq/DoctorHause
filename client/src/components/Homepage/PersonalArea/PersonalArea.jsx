import React from 'react'
import style from './PersonalArea.module.css'
import { Row, Col } from 'antd';
import CalendarPage from './CalendarPage/CalendarPage';


const PersonalArea = () => {

  
  return (
    <div>
       <Row>
          <Col className={style.right_col} span={18} push={6}>
            <CalendarPage /> 
          </Col>
          <Col className={style.left_col}  span={6} pull={18}>
            
          </Col>
      </Row>
    </div>
  )
}

export default PersonalArea
