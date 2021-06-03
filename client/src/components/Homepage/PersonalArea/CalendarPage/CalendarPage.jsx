import React, { useState } from 'react'
import { Calendar, Badge, Row, Col } from 'antd';
import style from './CalendarPage.module.css'
import { Button } from 'antd';
import CalendarModal from '../CalendarModal/CalendarModal';


const CalendarPage = () => {

  const [event, setEvent] = useState({})
  console.log(event); 
  function getListData(value) {

    const one = [{ type: 'warning', content: 'Первый' }]
    
    
    let listData;
    switch (value.date()) {

      case 8:
        listData = one;
        break;
      

      default:
    }
    return listData || [];
  }
  
  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className={style.events}>
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }
  
  const clickDate = (value) => {
    console.log(value.date(), value.month(), value.year());
    
  }

  return (
    <div className={style.calendar_box}>
      <Calendar 
      dateCellRender={dateCellRender}  
      onChange={clickDate} />
      <Row >
        <Col className={style.button_form} span={6} >

          <CalendarModal setEvent={setEvent}/>
        </Col>
      </Row>
    </div>
  )
}

export default CalendarPage


