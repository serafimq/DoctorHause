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
      <div className={styleHistory.switch_right}> Общая сумма затрат на текущую причину обращения: &nbsp;
        <span>{filteredHistory.reduce((acc, cur) => acc + +cur.price, 0)}</span>
      </div>
      <div>
        <Row className={styleHistory.row}>
          <Col>
            <div>
              {
                events.length ? events.map(el =>
                  <div onClick={() => filterHandler(id, el.problem)}>
                    <Card
                      style={{ marginTop: 16, width: 600 }}
                      type="inner"
                      //
                      title={`Причина обращения: ${el.problem}`}
                    >
                      <div>Поликлинника: {el.hospital}</div>
                      <div>Имя и Фамилия врача: {el.firstLastName}</div>
                      <div>Специальность врача: {el.specialization}</div>
                      <Meta className={styleHistory.date_description} description={`Дата приема: ${el.dateTime.replace('-', '/').replace('-', '/').replace('T', ' ').substring(0, 16)}`} />
                    </Card>
                  </div>
                )
                  :
                  <p> Никаких записей в календаре нет</p>
              }
            </div>
          </Col>
          <Col >
            <div>
              {
                filteredHistory.length ? filteredHistory.map(el =>
                  <Card
                    type="inner"
                    style={{ marginTop: 16, width: 400 }}
                    title={el?.events[0]?.problem ? `Причина обращения:${el?.events[0]?.problem}`: `Причина обращения: Болит`}
                    extra={<a href="#">More</a>}
                  >
                    <div >Выписанные рецепты: {el.prescription}  </div>
                    <div >Требуемые анализы: {el.analyzes}</div>
                    <div >Потраченные деньги: {el.price}</div>
                    <Meta className={styleHistory.date_description} description={`Дата следующего приема: ${el.nextDateTime.replace('-', '/').replace('-', '/').replace('T', ' ').substring(0, 16)}`} />
                    {
                      el.imagePath && el.imagePath.map(imgP => <Skeleton loading={loading}><Avatar shape="square" loading={loading} style={{ marginTop: 5, width: 400, height: 400 }} src={`/img/${imgP}`} alt="FOTO NE OTOBRACHAETSYA"></Avatar></Skeleton>)
                    }
                  </Card>
                )
                  :
                  <div className={styleHistory.margin_block}>Истории болезни с такой причиной обращения нет</div>
              }
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}



export default History
