
import style from './CardDoctorMain.module.css'
import { Modal, Col, Row, Rate, Button, Input, List } from 'antd';
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFeedBackThunk, setOneDoctorThunk } from '../../../redux/actionCreators/doctorAC'
import { FeedBack } from '../../cardDoctorPage/FeedBack/FeedBack';
import { addNewAvatarAxios, setAvatarAxios } from '../../../redux/actionCreators/avatarAC';
import { Chat } from '../../cardDoctorPage/Chat/Chat';
import { ModalChat } from '../../cardDoctorPage/ModalChat';

const CardDoctorMain = ({doctor}) => {
  const user = useSelector(state => state.user)
  // const doctor = useSelector(state => state.doctor)
  const [text, setText] = useState('')
  const [stars, setStars] = useState(3)
  // const avatar = useSelector(state => state.avatar)

  
  const dispatch = useDispatch()
  useEffect(() => {
    if (user.role === 'doctor') {
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
      dispatch(addFeedBackThunk(feedBack, doctor._id))
      setText('')
      setStars(0)
    }
  }

  const fileSelectedHandler = e => {
    console.log('Start foto');
    dispatch(addNewAvatarAxios(e.target.files[0], user.id))
  }

  const inputFile = useRef(null) 

  const desc = ['Ужасно', 'Плохо', 'Нормально', 'Хорошо', 'Отлично'];
  const handleChange = (value) => {
    setStars({ value });
  };
  const { value } = stars;

  const currentRating = doctor.feedBack?.reduce((acc, cur) => acc + cur.stars, 0)

  return (
    <div>
      
          <Col span={24} >
        <List className={style.list} >
        <List.Item className={style.property}>
        <figure>
          <img  
          className={style.avatar} 
          onClick={ user.id === doctor._id ?
            () => {inputFile.current.click()} 
            : 
            (e) => {console.log(e);} 
          } 
          src={`http://localhost:3006/${doctor.avatar}`}/>
        </figure>
        </List.Item>
        <List.Item className={style.property}>
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
        </List>
        <Row className={style.feedBack}>
          {doctor.feedBack?.length > 0 ? doctor.feedBack.map(feedBack => <FeedBack feedBack={feedBack} > {feedBack} </FeedBack>)
            : <p className={style.feedBack}>Отзывы об этом враче отсутствуют</p>}
        </Row>
        {user.id === doctor._id ?
          ''
          :
          <>
            <hr />
            <Row className={style.feedback}>
              <form className={style.feedback} onSubmit={e => submitHandler(e)} >
                <Input value={text} name='text' placeholder="Оставить новый отзыв" onChange={e => setText(e.target.value)}></Input>
                <Rate tooltips={desc} onChange={handleChange} value={value} />
                {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                <Button type="primary" htmlType="submit">Отправить отзыв</Button>
              </form>
            </Row>
          </>
        }

      </Col>
    </div>
  )
}

export default CardDoctorMain
