import React from 'react'
import { Calendar, Badge, Row, Col } from 'antd';
import style from './CalendarPage.module.css'
import { Button } from 'antd';


const CalendarPage = () => {

  function getListData(value) {

    const one = [{ type: 'warning', content: 'Первый' }]
    const two = [{ type: 'warning', content: 'Второй' }]
    const three = [{ type: 'warning', content: 'Третий' }]
    const four = [{ type: 'warning', content: 'Четвертый' }]
    
    let listData;
    switch (value.date()) {

      case 8:
        listData = one;
        break;
      case 3:
        listData = two;
        break;
      case 5:
        listData = three;
        break;
      case 6:
        listData = four;
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
      <Calendar dateCellRender={dateCellRender} dateCellRender={dateCellRender}  onChange={clickDate} />
      <Row >
        <Col className={style.button_form} span={6} >

          <Button>Default Button</Button>
        </Col>
      </Row>
    </div>
  )
}

export default CalendarPage


