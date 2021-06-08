import { Card, Modal, Col, Row, Rate, Button, Form, Input, List } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import style from './cardDoctorPage.module.css'
import { UserOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import FormDoctor from '../FormDoctor/FormDoctor';
import { useDispatch, useSelector } from 'react-redux';
import { addFeedBackThunk, setOneDoctorThunk } from '../../redux/actionCreators/doctorAC'
import { FeedBack } from './FeedBack/FeedBack';

const CardDoctorPage = () => {
  const user = useSelector(state => state.user)
  const doctor = useSelector(state => state.doctor)
  const [text, setText] = useState('')
  const [stars, setStars] = useState(3)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setOneDoctorThunk(user.id))
  }, [])

  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim()) {
      const feedBack = {
        text,
        stars
      }
      dispatch(addFeedBackThunk(feedBack, user.id))
      setText('')
      setStars(0)
    }
  }

  const [modal1Visible, setModal1Visible] = useState(false)

  function visibleModal() {
    setModal1Visible(!modal1Visible)
  }

  //stars
  const desc = ['Ужасно', 'Плохо', 'Нормально', 'Хорошо', 'Отлично'];

  
  const handleChange = (value ) => {
    setStars ({ value });
  };

  const { value } = stars;

    const currentRating = doctor.feedBack.reduce((acc, cur) => acc+cur.stars,0)
  return (
    <div className="site-card-wrapper">

      <Card align="middle" justify="center" title={doctor.name} bordered={false}>
        <Col span={6}>
          <Avatar src='http://cdn.fishki.net/upload/post/2019/07/15/3032379/tn/5823b4c01cefdd7191cb68ad0ec11dca.jpg' size={150} icon={<UserOutlined />} />
          <Row></Row>
          <Rate disabled defaultValue={currentRating} />
        </Col>
        <Col span={12}>
          <List >
            <List.Item className={style.lishka}>
              Специализация: {doctor.spec}
            </List.Item>
            <List.Item className={style.lishka}>
              Стаж: {doctor.stage}
            </List.Item>
            <List.Item className={style.lishka}>
              Телефон для записи: +7 {doctor.phone}
            </List.Item>
            <List.Item className={style.lishka}>
              email: {doctor.email}
            </List.Item>
            <List.Item className={style.lishka}>
              Метро: {doctor.metro}
            </List.Item>
            <List.Item className={style.lishka}>
              Стоимость приемa: {doctor.price} p.
            </List.Item>
          </List>
          <Row className={style.feedBack}>
            {doctor.feedBack?.length > 0 ? doctor.feedBack.map(feedBack => <FeedBack feedBack={feedBack} > {feedBack} </FeedBack>)
              : <p>Отзывы об этом враче отсутствуют</p>}
          </Row>
          {user.id === doctor._id ?
            <Button type="primary" htmlType="submit" onClick={() => visibleModal()}>Редактировать</Button>
            :
            <>
              <hr />
              <Row className={style.feedback}>
                <form onSubmit={e => submitHandler(e)} >
                  <Input value={text} name='text' placeholder="Оставить новый отзыв" onChange={e => setText(e.target.value)}></Input>
                    <Rate tooltips={desc} onChange={handleChange} value={value} />
                    {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                  <Button type="primary" htmlType="submit">Отправить отзыв</Button>
                </form>
              </Row>
            </>
          }
          <Modal
            title="Редактировать данные"
            style={{ top: 20 }}
            visible={modal1Visible}
            onClick={(e) => console.log(e)}
            onOk={() => visibleModal()}
            onCancel={() => visibleModal()}
          >
            <FormDoctor />
          </Modal>
        </Col>
      </Card>

    </div>

  )
}

export default CardDoctorPage;

