import React, { useEffect } from 'react'
import { Calendar, Badge, Row, Col, Button, Modal, Card, Switch, Skeleton, } from 'antd';
import style from './CalendarPage.module.css'
import CalendarModal from '../CalendarModal/CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { setAllEvents, getOneEventThunk } from '../../../../redux/actionCreators/eventsAC';
import { useState } from 'react';
import ResultModal from '../../ResultModal/ResultModal'
import { setAllHistoryThunk } from '../../../../redux/actionCreators/historyAC';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';


const CalendarPage = () => {

  const events = useSelector(state => state.events)
  const history = useSelector(state => state.history)
  const id = useSelector(state => state.user.id)
  console.log(events, 'events');
  console.log(new Date(), 'new Date()');


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setAllEvents(id))
    dispatch(setAllHistoryThunk(id))
  }, [])

  function dateCellRender(value) {
    const listData = events.filter(i => i.date === value.format('YYYY-MM-DD'));
    const listHistory = history.filter(i => i.date === value.format('YYYY-MM-DD'));

    return (
      <ul >
        {listData.map((item, index) => (
          <li className={Date.parse(item.dateTime) > new Date() ? style.events : style.no_events} key={item._id}>
            <div>
              <span className={style.doIt}>{index + 1}.{item.problem} </span>
              {/* <Badge status={item._id} text={item.problem} /> */}
            </div>
          </li>
        ))}
        {listHistory.map((item, index) => (
          <li className={Date.parse(item.nextDateTime) > new Date() ? style.nextGo : style.no_Go } key={item._id}>
            <div>
              <span >{index + 1}.{item.date} </span>
              {/* <Badge status={item._id} text={item.problem} /> */}
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

  const [loading, setLoading] = useState(true)

  const onChangeSwitch = () => {
    setLoading(!loading)
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
            <CalendarModal />
          </Col>
        </Row>

      </div >
      {
        showModal ?

          < Modal
            title="Запись дня"
            style={{ top: 20 }}
            width={800}
            visible={showModal}
            onOk={() => modalCardClose()}
            onCancel={() => modalCardClose()}
          >
            <><p className={style.switch_left}>Показать результаты посещений? <Switch checked={!loading} onChange={onChangeSwitch} checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} defaultChecked /></p></>
            {
              events
                ?
                events.map(el =>
                  <>
                    <Card className={style.card_styles} title={`Дата и время приема: ${el.dateTime.toString().replace('-', '/').replace('-', '/').replace('T', ' ').substring(0, 16)}`} 
                    style={{ width: 700 }}>
                      <h3 className={style.h3}>Причина обращения: {el.problem}</h3>
                      <p>Клиника: {el.hospital}</p>
                      <p>Имя и Фамилия врача: {el.firstLastName}</p>
                      <p>Специализация: {el.specialization}</p>
                      <p>Адрес: {el.address}</p>
                      <ResultModal modalCardClose={modalCardClose} idEvent={el._id} />
                      {
                        el?.history ? el?.history?.map(hist =>
                          <><Skeleton loading={loading}>
                            <Card className={style.cardContainer} title={'Результат посещения'}>
                              <p>{`Дата следущуго приема: ${hist?.nextDateTime?.toString()?.replace('-', '/')?.replace('-', '/')?.replace('T', ' ')?.substring(0, 16)}`}</p>
                              <p>{`Выписанные рецепты: ${hist?.prescription}`}</p>
                              <p>{`Выписанные анализы: ${hist?.analyzes}`}</p>
                              <p>{`Потраченная сумма: ${hist?.price}`}</p>
                            </Card>
                          </Skeleton></>)
                          :
                          null
                      }
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


