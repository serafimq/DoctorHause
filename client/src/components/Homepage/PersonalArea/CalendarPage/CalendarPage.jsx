import React, { useEffect } from 'react'
import { Calendar, Badge, Row, Col } from 'antd';
import style from './CalendarPage.module.css'
import CalendarModal from '../CalendarModal/CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { setAllEvents } from '../../../../redux/actionCreators/eventsAC';

const CalendarPage = () => {

  const events = useSelector(state => state.events) 

  const dispatch = useDispatch()
   useEffect(() => {
    dispatch(setAllEvents())
   }, [])
 
    const filter1 = events.filter(el => el.num === 1)
    const filter2 = events.filter(el => el.num === 2)
    const filter3 = events.filter(el => el.num === 3)
    const filter4 = events.filter(el => el.num === 4)
    const filter5 = events.filter(el => el.num === 5)
    const filter6 = events.filter(el => el.num === 6)
    const filter7 = events.filter(el => el.num === 7)
    const filter8 = events.filter(el => el.num === 8)
    const filter9 = events.filter(el => el.num === 9)
    const filter10 = events.filter(el => el.num === 10)
    const filter11 = events.filter(el => el.num === 11)
    const filter12 = events.filter(el => el.num === 12)
    const filter13 = events.filter(el => el.num === 13)
    const filter14 = events.filter(el => el.num === 14)
    const filter15 = events.filter(el => el.num === 15)
    const filter16 = events.filter(el => el.num === 16)
    const filter17 = events.filter(el => el.num === 17)
    const filter18 = events.filter(el => el.num === 18)
    const filter19 = events.filter(el => el.num === 19)
    const filter20 = events.filter(el => el.num === 20)
    const filter21 = events.filter(el => el.num === 21)
    const filter22 = events.filter(el => el.num === 22)
    const filter23 = events.filter(el => el.num === 23)
    const filter24 = events.filter(el => el.num === 24)
    const filter25 = events.filter(el => el.num === 25)
    const filter26 = events.filter(el => el.num === 26)
    const filter27 = events.filter(el => el.num === 27)
    const filter28 = events.filter(el => el.num === 28)
    const filter29 = events.filter(el => el.num === 29)
    const filter30 = events.filter(el => el.num === 30)
    const filter31 = events.filter(el => el.num === 31)  

  function getListData(value) {

      let listData;
      switch (value.date()) {
        case 1: listData = filter1 
        break;
        case 2: listData = filter2
          break;
        case 3: listData = filter3
          break;
        case 4: listData = filter4
          break;
        case 5: listData = filter5
          break;
        case 6: listData = filter6
          break;
        case 7: listData = filter7
          break;
        case 8: listData = filter8
          break;
        case 9: listData = filter9
          break;
        case 10: listData = filter10
          break;
        case 11: listData = filter11
          break;
        case 12: listData = filter12
          break;
        case 13: listData = filter13
          break;
        case 14: listData = filter14
          break;
        case 15: listData = filter15
          break;
        case 16: listData = filter16
          break;
        case 17: listData = filter17
          break;
        case 18: listData = filter18
          break;
        case 19: listData = filter19
          break;
        case 20: listData = filter20
          break;
        case 21: listData = filter21
          break;
        case 22: listData = filter22
          break;
        case 23: listData = filter23
          break;
        case 24: listData = filter24
          break;
        case 25: listData = filter25
          break;
        case 26: listData = filter26
          break;
        case 27: listData = filter27
          break;
        case 28: listData = filter28
          break;
        case 29: listData = filter29
          break;
        case 30: listData = filter30
          break;
        case 31: listData = filter31
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

          <CalendarModal setEvent={(e) => console.log(e)}/>
        </Col>
      </Row>
    </div>
  )
}

export default CalendarPage


