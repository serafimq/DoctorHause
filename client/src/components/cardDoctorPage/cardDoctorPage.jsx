import { Card, Modal, Col, Row, Rate, Button, Form, Input, List, Divider } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import style from './cardDoctorPage.module.css'
import { UserOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import FormDoctor from '../FormDoctor/FormDoctor';
import { useDispatch, useSelector } from 'react-redux';
import { setOneDoctorThunk } from '../../redux/actionCreators/doctorAC'
import { FeedBack } from './FeedBack/FeedBack';
import { useParams } from 'react-router';
import { RegistrationForm } from './Mail';
const nodemailer = require('nodemailer');

const CardDoctorPage = () => {
  const user = useSelector(state => state.user)
  const doctor = useSelector(state => state.doctor)
  // const [feedBack, setFeedBack] = useState ({})

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setOneDoctorThunk(user.id))
  }, [])

  // const { id } = useParams()
  // useEffect(() => {
    
  //   dispatch(setOneDoctorThunk(feedBack))
  // }, [])


  const [modal1Visible, setModal1Visible] = useState(false)
  function visibleModal() {
    setModal1Visible(modal1Visible)
  }

  const output = `
  <p>Срочно регистрируйся! 🤓</p>
  <label>Вот тебе ссылка</label>
  
  `;
  
  // Опции отправки почты
  let mailOptions = {
      from: 'example@yandex.ru', // почта отправителя
      to: 'example@yandex.ru', // лист адресов получателей через запятую
      subject: 'Срочное оповещение', // Заголовок письма
      text: 'Срочно регистрируйся! 😨', // Текст письма если нет тела письма в html
      html: output // html тело письма
  };
  
// Отправляет письмо
function sendMail(mailOptions) {
  // Создаем обьект транспортера
  // Авторизируемся
  let smtpTransport;
  try {
    smtpTransport = nodemailer.createTransport({
      host: 'smtp.yandex.ru',
      port: 465,
      secure: true, // true для 465, false для других портов 587
      auth: {
        user: "example@yandex.ru", // почта пользователя для авторизации
        pass: "secretPassword" // пароль пользователя
      }
    });
  }catch (e) {
    return console.log('Ошибка: ' + e.name + ":" + e.message);
  }
  
  // Отправляем письмо
  smtpTransport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log('Ошибка');
    }else {
      console.log('Сообщение отправлено: %s', info.messageId);
    }
  });
}

const maleSubmit =(e) => {
  console.log('Привет');
  e.preventDefault();
  sendMail(mailOptions);
}



  return (
    <div className="site-card-wrapper">
      <Card align="middle" justify="center" title={doctor.name} bordered={false}>
        <Col span={6}>
          <Avatar src='http://cdn.fishki.net/upload/post/2019/07/15/3032379/tn/5823b4c01cefdd7191cb68ad0ec11dca.jpg' size={150} icon={<UserOutlined />} />
          <Row></Row>
          <Rate allowHalf defaultValue={2.5} />
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
          <Divider/>          
          <Row className={style.lishka}>
            <RegistrationForm/>
          </Row>
          <Divider/>
          <Row className={style.feedBack}>
            {doctor.feedBack?.length > 0 
              ? 
              doctor.feedBack.map(feedBack => <FeedBack feedBack={feedBack} > {feedBack} </FeedBack>)
              : <p>Отзывы об этом враче отсутствуют</p>}
          </Row>
          {user.id === doctor._id
            ?
            <Button type="primary" htmlType="submit" onClick={() => visibleModal()}>Редактировать</Button>
            :
            <>
              <hr />
              <Row className={style.feedback}>
                <Form >
                  <Input name='feedBack' rules={[{ required: true }]} placeholder="Оставить новый отзыв"></Input>
                  <Rate name='stars' rules={[{ required: true }]} allowHalf defaultValue={0.0} /> <br /> <br />
                  <Button type="primary" htmlType="submit">Отправить отзыв</Button>
                </Form>
              </Row>
            </>
          }
          <Modal
            title="Редактировать данные"
            style={{ top: 20 }}
            visible={modal1Visible}
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
