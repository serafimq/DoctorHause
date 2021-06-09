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

  return (
    <>
      <div className={style.calendar_box}>
        <Calendar
          dateCellRender={dateCellRender}
          // onClick={modalCardOpen}
          onSelect={clickDate}
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
                    <Card title={el.dateTime.toString().replace('-', '/').replace('-', '/').replace('T', ' ').substring(0,16)} extra={<a href="#">More</a>} style={{ width: 500 }}>
                      <p>Клиника: {el.hospital}</p>
                      <p>Имя и Фамилия врача: {el.firstLastName}</p>
                      <p>Специализация: {el.specialization}</p>
                      <p>Адрес: {el.address}</p>
                      <ResultModal modalCardClose={modalCardClose} idEvent={el._id} />
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


