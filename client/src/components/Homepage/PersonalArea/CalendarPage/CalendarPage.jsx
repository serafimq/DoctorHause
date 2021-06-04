import React, { useState } from 'react'
import { Calendar, Badge, Row, Col } from 'antd';
import style from './CalendarPage.module.css'
import CalendarModal from '../CalendarModal/CalendarModal';


const CalendarPage = () => {

  const [event, setEvent] = useState({})
  
  event.num = 4;
  console.log(event); 
  const allEvents = [
    {
      firstLastName: 'тима',
      hospital: 'Привет',
      num : 1,
    }, 
    {
      firstLastName: 'Dima',
      hospital: 'Пока',
      num : 2,
    }, 
    {
      firstLastName: 'Buba',
      hospital: 'Ура',
      num : 3,
    }, 
  ]
  allEvents.push(event)
  const filter1 = allEvents.filter(el => el.num === 1)
  const filter2 = allEvents.filter(el => el.num === 2)
  const filter3 = allEvents.filter(el => el.num === 3)
  const filter4 = allEvents.filter(el => el.num === 4)
  



  function getListData(value) {

      let listData;
      switch (value.date()) {
        
        case 1:
          listData = filter1;
          break;
        case 2:
          listData = filter2;
          break;
        case 3:
          listData = filter3;
          break;
          
        case 4:
          listData = filter4;
          break;
          
          default:
          }
          return listData || [];
        
  }
  
  function dateCellRender(value) {
    const listData = getListData(value);
    console.log('hi', listData)
    return (
      <ul className={style.events}>
        {listData.map(item => (
          <li key={item.content}>
            <div>

            <Badge status={item.hospital} text={item.firstLastName} />
            </div>
            <div>

            <Badge status={item.hospital} text={item.hospital} />
            </div>
            
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


