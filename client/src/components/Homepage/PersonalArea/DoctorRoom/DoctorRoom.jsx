import style from './DoctorRoom.module.css'
import styleBtn from '../../../General/AddButton/AddButton.module.scss'
import { Modal, Col, Row, Rate, Button, Input, List, Skeleton, Avatar, Switch, Collapse } from 'antd';
import { ModalChat } from '../../../cardDoctorPage/Chat/ModalChat';
import { useEffect, useRef, useState } from 'react'
import FormDoctor from '../../../FormDoctor/FormDoctor';
import { useDispatch, useSelector } from 'react-redux';
import { addFeedBackThunk, setOneDoctorThunk } from '../../../../redux/actionCreators/doctorAC'
import { FeedBack } from '../../../cardDoctorPage/FeedBack/FeedBack';
import { addNewAvatarAxios, setAvatarAxios } from '../../../../redux/actionCreators/avatarAC';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

export const DoctorRoom = () => {
  const user = useSelector(state => state.user)
  const doctor = useSelector(state => state.doctor)
  const [text, setText] = useState('')
  const [stars, setStars] = useState(3)
  const avatar = useSelector(state => state.avatar)
  const { Panel } = Collapse;
  console.log(doctor, 'doctor');
  
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

  const onChangeSwitch = () => {
    setLoading(!loading)
  }

  const [loading, setLoading] = useState(true)
  return (
    <>
    <div className={style.switch_right}> Показывать загруженные сертификаты? &nbsp;
      <Switch checked={!loading} onChange={onChangeSwitch} checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} defaultChecked />
      </div>
    <div className={style.radius}>
      <Col span={24} >
        <List className={style.list} >
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
            <List.Item className={style.property}>
            Сертификаты:
          
          </List.Item>
            <List.Item className={style.info}>
            <Skeleton loading={loading}>
              {
              doctor.imageCertificate && doctor.imageCertificate.map(img => 
                <img style={{ marginTop: 5, width: 400, height: 400 }} src={`http://localhost:3006/public/img/${img}`} alt="SERTIFICAT NE OTOBRACHAETSYA"/>
                )
            }</Skeleton>
          </List.Item>
          </div>
        </List>
        <ModalChat/>
        <Row className={style.feedBack}>
        <Collapse className={style.collapse} defaultActiveKey={['1']}>
          {doctor.feedBack?.length > 0 ? doctor.feedBack.map((feedBack, key) => <Panel header={`Посмотреть отзыв пользователя: ${feedBack.author}`} key={key}>     <FeedBack feedBack={feedBack} > {feedBack}     </FeedBack>    </Panel> )
            : <p>Отзывы об этом враче отсутствуют</p>}
            </Collapse>
        </Row>
        <br></br>
        {user.id === doctor._id ?
          <Button className={styleBtn.button} type="primary" htmlType="submit" onClick={() => visibleModal()}>Редактировать</Button>
          :
          ''
        }
        <Modal
          title="Редактировать данные"
          style={{ top: 20}}
          width={800}
          visible={modal1Visible}
          onClick={(e) => console.log(e)}
          onOk={() => visibleModal()}
          onCancel={() => visibleModal()}
          footer={null}
        >
          <FormDoctor visibleModal={visibleModal}/>
        </Modal>
      </Col>
    </div>
    </>
  )
}
