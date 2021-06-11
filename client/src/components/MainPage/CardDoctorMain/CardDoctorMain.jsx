/* eslint-disable jsx-a11y/img-redundant-alt */

import style from './CardDoctorMain.module.css'
import { Modal, Col, Row, Rate, Button, Input, List, Skeleton, Avatar } from 'antd';
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFeedBackThunk, setOneDoctorThunk } from '../../../redux/actionCreators/doctorAC'
import { FeedBack } from '../../cardDoctorPage/FeedBack/FeedBack';
import { addNewAvatarAxios, setAvatarAxios } from '../../../redux/actionCreators/avatarAC';
import { Chat } from '../../cardDoctorPage/Chat/Chat';
import { ModalChat } from '../../cardDoctorPage/ModalChat';
import { addFeedBackDoctorThunk } from '../../../redux/actionCreators/doctorsAC';
import styleBtn from '../../General/AddButton/AddButton.module.scss'

const CardDoctorMain = ({closeModal,doctor}) => {
  
  const user = useSelector(state => state.user)
  // const doctor = useSelector(state => state.doctor)
  const [text, setText] = useState('')
  const [stars, setStars] = useState(3)

  console.log(doctor, 'doctordoctordoctor')
  const dispatch = useDispatch()

  useEffect(() => {
    if (user.role === 'doctor' || user.role === 'admin') {
      
      dispatch(setOneDoctorThunk(doctor._id))
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
      // dispatch(addFeedBackThunk(feedBack, doctor._id, user.id))
      dispatch(addFeedBackDoctorThunk(feedBack, doctor._id, user.id))
      setText('')
      setStars(0)
      // closeModal()
    }
  }

  const desc = ['Ужасно', 'Плохо', 'Нормально', 'Хорошо', 'Отлично'];
  const handleChange = (value) => {
    setStars({ value });
  };
  const { value } = stars;

  const currentRating = Math.round((doctor.feedBack?.reduce((acc, cur) => acc + cur.stars, 0))/doctor.feedBack.length)

  const onChangeSwitch = () => {
    setLoading(!loading)
  }

  const [loading, setLoading] = useState(true)

  return (
    <div>
      <Col span={24} >
        <List className={style.list} >
        <List.Item className={style.property}>
        
          <Avatar src={`http://localhost:3006/${doctor.avatar}`} size={150}/>
        
        </List.Item>
        <List.Item className={style.feedBack}>
          <Rate disabled defaultValue={currentRating} />
          </List.Item>
        <div className={style.row} >
            <List.Item className={style.property}>
              ФИО:
          </List.Item>
            <List.Item className={style.info}>
              {doctor.name}
            </List.Item>
          </div>
          <div className={style.row} >
            <List.Item className={style.property}>
              Специализация:
          </List.Item>
            <List.Item className={style.info}>
              {doctor.spec}
            </List.Item>
          </div>
          <div className={style.row}>
            <List.Item className={style.property}>
              Стаж:
          </List.Item>
            <List.Item className={style.info}>
              {doctor.stage} лет
            </List.Item>
          </div>
          <div className={style.row}>
            <List.Item className={style.property}>
              Телефон для записи:
          </List.Item>
            <List.Item className={style.info}>
              +7 {doctor.phone}
            </List.Item>
          </div>
          <div className={style.row}>
            <List.Item className={style.property}>
              email:
          </List.Item>
            <List.Item className={style.info}>
              {doctor.email}
            </List.Item>
          </div>
          <div className={style.row}>
            <List.Item className={style.property}>
              Метро:
          </List.Item>
            <List.Item className={style.info}>
              {doctor.metro}
            </List.Item>
          </div>
          <div className={style.row}>
            <List.Item className={style.property}>
              Стоимость приемa:
          </List.Item>
            <List.Item className={style.info}>
              {doctor.price} p.
          </List.Item>
          
          </div>
          <div className={style.row}>
          <ModalChat/>
          </div>  
            <List.Item className={style.property}>
            Сертификаты:
          </List.Item>
            <List.Item className={style.info}>
              {
              doctor.imageCertificate && doctor.imageCertificate.map(img => 
                <img style={{ marginTop: 5, width: 400, height: 400 }} src={`http://localhost:3006/public/img/${img}`} alt="SERTIFICAT NE OTOBRACHAETSYA"/>
                )
                
            }
          </List.Item>
          {/* </div> */}
        </List>
        <Row className={style.feedBack}>
          {doctor.feedBack?.length > 0 ? doctor.feedBack?.map(feedBack => <FeedBack className={style.feedBack} feedBack={feedBack} > {feedBack} <hr/> </FeedBack>)
            : <p className={style.feedBack}>Отзывы об этом враче отсутствуют</p>}
        </Row>
        {user && user.id === doctor._id ?
          ''
          :
          <>
            <hr />
            <Row >
              <div>
                <form className={style.feedback} onSubmit={e => submitHandler(e)} >
                    <div className={style.input}>
                    <Input value={text} name='text' placeholder="Оставить новый отзыв" onChange={e => setText(e.target.value)}></Input>
                    </div>
                  
                    <div >
                    <Rate className={style.rate} tooltips={desc} onChange={handleChange} value={value} />
                    {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                    <Button className={styleBtn.button} type="primary" htmlType="submit">Отправить отзыв</Button>
                    </div>
                </form>
              </div>
            </Row>
          </>
        }
      </Col>
    </div>
  )
}

export default CardDoctorMain
