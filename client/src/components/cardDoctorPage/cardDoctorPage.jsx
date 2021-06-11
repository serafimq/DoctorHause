/* eslint-disable jsx-a11y/img-redundant-alt */
import { Card, Modal, Col, Row, Rate, Button, Input, List, Divider, Skeleton, Avatar, Switch } from 'antd';
import style from './cardDoctorPage.module.css'

import { useEffect, useRef, useState } from 'react'
import FormDoctor from '../FormDoctor/FormDoctor';
import { useDispatch, useSelector } from 'react-redux';
import { addFeedBackThunk, setOneDoctorThunk } from '../../redux/actionCreators/doctorAC'
import { FeedBack } from './FeedBack/FeedBack';
import { addNewAvatarAxios, setAvatarAxios } from '../../redux/actionCreators/avatarAC';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

const CardDoctorPage = () => {
  const user = useSelector(state => state.user)
  const doctor = useSelector(state => state.doctor)
  const [text, setText] = useState('')
  const [stars, setStars] = useState(3)
  const avatar = useSelector(state => state.avatar)


  const inputFile = useRef(null)

  const dispatch = useDispatch()
  useEffect(() => {
    if (user.role === 'doctor') {
      dispatch(setOneDoctorThunk(user.id))
      dispatch(setAvatarAxios(user.id))
    }
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
  const fileSelectedHandler = e => {
    console.log('Start foto');
    dispatch(addNewAvatarAxios(e.target.files[0], user.id))
  }

  const [modal1Visible, setModal1Visible] = useState(false)

  function visibleModal() {

    setModal1Visible(!modal1Visible)
  }

  //stars
  const desc = ['Ужасно', 'Плохо', 'Нормально', 'Хорошо', 'Отлично'];
  const handleChange = (value) => {
    setStars({ value });
  };
  const { value } = stars;

  const currentRating = doctor.feedBack?.reduce((acc, cur) => acc + cur.stars, 0)

  const onChangeSwitch = () => {
    setLoading(!loading)
  }

  const [loading, setLoading] = useState(true)


  return (
    <>
      <div className={style.switch_right}> Показывать загруженные сертификаты? &nbsp;
      <Switch checked={!loading} onChange={onChangeSwitch} checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} defaultChecked />
      </div>
      <div className="site-card-wrapper">
        <Card align="middle" justify="center" title={doctor.name} bordered={false}>
          <Col span={6}>
            <figure>
              <img
                className={style.avatar}
                onClick={user.id === doctor._id ?
                  () => { inputFile.current.click() }
                  :
                  (e) => { console.log(e); }
                }
                src={avatar?.avatar ?
                  `http://localhost:3006/${avatar.avatar}`
                  :
                  'http://cs319323.vk.me/v319323049/70e1/2gddfIt0mvc.jpg'
                } alt="Card image" />
            </figure>
            <input className={style.input} type='file' name='image'
              ref={inputFile} onChange={(e) => fileSelectedHandler(e)} />
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
            <Divider />
            <Row className={style.lishka}>
              <List.Item className={style.lishka}>
                
              </List.Item>
            </Row>
            <Divider />
            <Row className={style.feedBack}>
              {doctor.feedBack?.length > 0
                ?
                doctor.feedBack.map(feedBack => <FeedBack feedBack={feedBack} > {feedBack} </FeedBack>)
                : <p>Отзывы об этом враче отсутствуют</p>}
            </Row>
            {user.id === doctor._id
              ?
              <Button type="primary" htmlType="submit" onClick={() => {
                visibleModal()
              }}>Редактировать</Button>
              :
              <>
                <hr />
                <Row className={style.feedback}>
                  <form className={style.form_feedback} onSubmit={e => submitHandler(e)} >
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

              onOk={() => {
                visibleModal()
                dispatch(setOneDoctorThunk(user.id))
              }}
              onCancel={() => {
                visibleModal()
                dispatch(setOneDoctorThunk(user.id))
              }}
            >
              <FormDoctor />
            </Modal>
          </Col>

        </Card>
      </div>
    </>
  )
}

export default CardDoctorPage;






