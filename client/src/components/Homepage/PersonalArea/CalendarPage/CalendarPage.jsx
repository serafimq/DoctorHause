import React, { useEffect } from 'react'
import { Calendar, Badge, Row, Col, Button, Modal, Card } from 'antd';
import style from './CalendarPage.module.css'
import CalendarModal from '../CalendarModal/CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { setAllEvents, getOneEventThunk } from '../../../../redux/actionCreators/eventsAC';
import { useState } from 'react';
import ResultModal from '../../ResultModal/ResultModal'
const CalendarPage = () => {

  const events = useSelector(state => state.events)
  const id = useSelector(state => state.user.id)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setAllEvents(id))
  }, [])


  function name(params) {

    //  let arr =[]
    //  for (let i = 1; i <= 31; i++) {
    //    arr.push({i: events.filter(el => el.num === 1)})
    //  }

    // const filter = Array(12).fill(Array(31).fill([])) 

    // events.forEach(el => {
    //   if (el.month) {
    //     filter[el.month][el.day - 1] = [...filter[el.month][el.day - 1], el]
    // console.log(filter[el.month], el.month, "this month");
    // console.log(filter[el.month][el.day - 1], el.month, el.day - 1);
    //   }
    // })
    // const filter1 = events.filter(el => el.num === 1)
    // const filter2  

    // function getListData(value) {
    //   if (filter[value.month()]) {
    //     // console.log(value.month(), value.date(), "aaaaaa", filter[value.month()][value.date() - 1]);
    //     return filter[value.month()][value.date() - 1]
    //   } 
    //   return []
    // console.log(value.date(), value.month());
    // let listData;
    // switch (value.date()) {
    //   case 1: listData = filter1 
    //   break;
    //   case 2: listData = filter2
    //     break;
    //   case 3: listData = filter3
    //     break;
    //   case 4: listData = filter4
    //     break;
    //   case 5: listData = filter5
    //     break;
    //   case 6: listData = filter6
    //     break;
    //   case 7: listData = filter7
    //     break;
    //   case 8: listData = filter8
    //     break;
    //   case 9: listData = filter9
    //     break;
    //   case 10: listData = filter10
    //     break;
    //   case 11: listData = filter11
    //     break;
    //   case 12: listData = filter12
    //     break;
    //   case 13: listData = filter13
    //     break;
    //   case 14: listData = filter14
    //     break;
    //   case 15: listData = filter15
    //     break;
    //   case 16: listData = filter16
    //     break;
    //   case 17: listData = filter17
    //     break;
    //   case 18: listData = filter18
    //     break;
    //   case 19: listData = filter19
    //     break;
    //   case 20: listData = filter20
    //     break;
    //   case 21: listData = filter21
    //     break;
    //   case 22: listData = filter22
    //     break;
    //   case 23: listData = filter23
    //     break;
    //   case 24: listData = filter24
    //     break;
    //   case 25: listData = filter25
    //     break;
    //   case 26: listData = filter26
    //     break;
    //   case 27: listData = filter27
    //     break;
    //   case 28: listData = filter28
    //     break;
    //   case 29: listData = filter29
    //     break;
    //   case 30: listData = filter30
    //     break;
    //   case 31: listData = filter31
    //     break;

    //     default:
    //     }
    //     return listData || [];

    // }
  }

  function dateCellRender(value) {
    const listData = events.filter(i => i.date === value.format('YYYY-MM-DD'));

    return (
      <ul className={style.events}>

        {listData.map(item => (
          <li key={item._id}>
            <div>
              <Badge status={item.hospital} text={item.hospital} />
            </div>
            <div>
              <Badge status={item.hospital} text={item.specialization} />
            </div>
          </li>
        ))}

      </ul>
    );
  }

  const [showModal, setShowModal] = useState(false)

  console.log(showModal, 'showModal');

  const modalCardOpen = () => {
    setShowModal(!showModal)
  }

  const modalCardClose = () => {
    setShowModal(!showModal)
    dispatch(setAllEvents(id))
  }

  const clickDate = (value) => {
    console.log(value.date(), value.month(), value.year());

    let monthStr = value.month() + 1
    const yearStr = value.year().toString()
    monthStr = monthStr.toString()
    const dateStr = value.date().toString()

    let fullDate;
    if (monthStr.length === 1 && dateStr.length === 1) {
      fullDate = yearStr + '/0' + monthStr + '/0' + dateStr
      dispatch(getOneEventThunk({ date: fullDate, id: id }))
    }
    if (monthStr.length === 2 && dateStr.length === 1) {
      fullDate = yearStr + '/' + monthStr + '/0' + dateStr
      dispatch(getOneEventThunk({ date: fullDate, id: id }))
    }
    if (monthStr.length === 1 && dateStr.length === 2) {
      fullDate = yearStr + '/0' + monthStr + '/' + dateStr

      dispatch(getOneEventThunk({ date: fullDate, id: id }))
    }
    if (monthStr.length === 2 && dateStr.length === 2) {
      fullDate = yearStr + '/' + monthStr + '/' + dateStr
      dispatch(getOneEventThunk({ date: fullDate, id: id }))
    }
    modalCardOpen()
  }

  console.log(events, 'events');

  return (
    <>
      <div className={style.calendar_box}>
        <Calendar
          dateCellRender={dateCellRender}
          onChange={clickDate}
          onClick={modalCardOpen}
        />
        <Row >
          <Col className={style.button_form} span={6} >

            <CalendarModal setEvent={(e) => console.log(e)} />
          </Col>
        </Row>

      </div >
      {
        showModal ?

          < Modal
            title="Введите данные в календарь"
            style={{ top: 20 }}
            width={800}
            visible={showModal}
            onOk={() => modalCardClose()}
            onCancel={() => modalCardClose()}
          >
            {
              events
                ?
                events.map(el =>
                  <>
                    <Card title={el.dateTime.toString().slice(0, 10).replace('-', '/').replace('-', '/') + ' ' + el.dateTime.toString().slice(11)} extra={<a href="#">More</a>} style={{ width: 500 }}>
                      <p>Клиника: {el.hospital}</p>
                      <p>Имя и Фамилия врача: {el.firstLastName}</p>
                      <p>Специализация: {el.specialization}</p>
                      <p>Адрес: {el.address}</p>
                      <ResultModal idEvent={el._id} />
                    </Card>

                  </>)
                :
                <div>На текущую дату посещений не запланировано</div>
            }
          </Modal>
          :
          null
      }
    </>
  )
}

export default CalendarPage


