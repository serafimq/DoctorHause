import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAllHistoryThunk } from '../../redux/actionCreators/historyAC'
import { Card, Switch, Skeleton, Avatar, Col, Row } from 'antd';
import styleHistory from './History.module.css'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { setAllEvents } from '../../redux/actionCreators/eventsAC';
const { Meta } = Card;

const History = () => {

  const id = useSelector(state => state.user.id)
  const history = useSelector(state => state.history)
  const events = useSelector(state => state.events)

  const dispatch = useDispatch()

  console.log(history, 'history');
  console.log(events, 'events');

  useEffect(() => {
    dispatch(setAllHistoryThunk(id))
    dispatch(setAllEvents(id))
  }, [])

  const [loading, setLoading] = useState(true)
  const [filteredHistory, setFilteredHistory] = useState(history)

  // onChange = checked => {
  //   this.setState({ loading: !checked });
  // };

  const onChangeSwitch = () => {
    setLoading(!loading)
  }

  const style = { background: '#0092ff', padding: '8px 0' };
  const filterHandler = (id, problem) => {
    // const filtHistory = history.reduce((acc, el) => {
    //   const currentEl = el.events.filter(event => {
    //     console.log({ problem });
    //     console.log(event.problem);
    //     return event.problem === problem
    //   })
    //   el.events = currentEl;
    //   if (currentEl.length) {
    //     acc.push(el)
    //   }
    //   return acc
    // }, [])
    const result = []
    const newHistory = JSON.parse(JSON.stringify(history)) 
    const filtHistory = newHistory?.map(el => {
      const currentEl = el.events?.filter(event => event.problem === problem)
      el.events = currentEl
      console.log(el.events);
      return el
    })
    filtHistory?.forEach(el => {
      if (el.events.length) result.push(el)
    })
    console.log({ result });
    setFilteredHistory(result)
    console.log(filteredHistory, 'filteredHistory');
  }


  return (
    <div className={styleHistory.historyBox}>
      <div className={styleHistory.switch_right}> Показывать загруженные файлы? &nbsp;
      <Switch checked={!loading} onChange={onChangeSwitch} checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} defaultChecked />
      </div>
      <div>

        <Row className={styleHistory.row}>
          <Col >
            <div>
              {
                events.length ? events.map(el =>
                  <div onClick={() => filterHandler(id, el.problem)}>
                    <Card
                      style={{ marginTop: 16, width: 600 }}
                      type="inner"
                      //
                      title={`Жалоба: ${el.problem}`}
                    >

                      <div>Поликлинника: {el.hospital}</div>
                      <div>Имя и Фамилия врача: {el.firstLastName}</div>
                      <div>Специальность врача: {el.specialization}</div>
                      <Meta className={styleHistory.date_description} description={`Дата приема: ${el.dateTime.replace('-', '/').replace('-', '/').replace('T', ' ').substring(0, 16)}`} />
                    </Card>
                  </div>
                )
                  :
                  <p> Никаких запесей в календаре нет</p>

              }
            </div>

          </Col>
          <Col >
            <div>
              {
                filteredHistory ? filteredHistory.map(el =>

                  <Card

                    type="inner"
                    // 
                    style={{ marginTop: 16, width: 400 }}
                    title={`Жалоба:${el.events[0].problem}`}
                    extra={<a href="#">More</a>}
                  >
                    <div >Выписанные рецепты: {el.prescription}  </div>
                    <div >Требуемые анализы: {el.analyzes}</div>
                    <div >{el.prescription}</div>
                    {
                      el.imagePath && el.imagePath.map(imgP => <Skeleton loading={loading}><Avatar shape="square" loading={loading} style={{ marginTop: 5, width: 400, height: 400 }} src={`/img/${imgP}`} alt="FOTO NE OTOBRACHAETSYA"></Avatar></Skeleton>)
                    }
                  </Card>
                )
                  :
                  <p>Истории болезней пока нет</p>
              }
            </div>

          </Col>
        </Row>
      </div>


      {/* <div className={styleHistory.list}> */}

    </div>
  )
}

{/* <Row>
          <Col className={style.right_col} span={18} push={6}>
            {visibleComponents === 0 && <CalendarPage /> }
            {visibleComponents === 1 && <History /> }
            {visibleComponents === 3 && <MapPage /> }
            {/* {visibleComponents === 4 && <CalendarPage /> } */}
//   </Col>
//   <Col className={style.left_col} span={6} pull={18}>
//     <CardProfile setVisibleComponents={setVisibleComponents}/>
//   </Col>
// </Row> */}

export default History
