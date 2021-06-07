import { Card, Modal, Col, Row, Rate, Button, Form, Input } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import style from './cardDoctorPage.module.css'
import { UserOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import FormDoctor from '../FormDoctor/FormDoctor';
import { useDispatch, useSelector } from 'react-redux';
import { setOneDoctorThunk } from '../../redux/actionCreators/doctorAC'
import { FeedBack } from './FeedBack/FeedBack';

const CardDoctorPage = () => {
  // console.log(id);
  const user = useSelector(state => state.user)
  const doctor = useSelector(state => state.doctor)
  // const id = useSelector(state => state.user.id)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setOneDoctorThunk(user.id))
  }, [])

  const [modal1Visible, setModal1Visible] = useState(false)
  function visibleModal() {
    setModal1Visible(!modal1Visible)
  }

  return (
    <div className="site-card-wrapper">
      <Row align="middle" justify="center" gutter={1}>
        <Col span={6}>
          <Card title={doctor.name} bordered={false}>
            <Avatar src='http://cdn.fishki.net/upload/post/2019/07/15/3032379/tn/5823b4c01cefdd7191cb68ad0ec11dca.jpg' size={150} icon={<UserOutlined />} />
            <Row></Row>
            <Rate allowHalf defaultValue={2.5} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Информация" bordered={false}>
            <ul >
              <li className={style.lishka}>
                Специализация: {doctor.spec}
              </li >
              <li className={style.lishka}>
                Стаж: {doctor.stage}
              </li>
              <li className={style.lishka}>
                Телефон для записи: +7 {doctor.phone}
              </li>
              <li className={style.lishka}>
                email: {doctor.email}
              </li>
              <li className={style.lishka}>
                Метро: {doctor.metro}
              </li>
              <li className={style.lishka}>
                Стоимость приемa: {doctor.price} p.
            </li>
            </ul>
            <Button type="primary" htmlType="submit" onClick={() => visibleModal()}>Редактировать</Button>
            <Card title="Отзывы о враче" bordered={false}>
              <Row className={style.feedback}>
                {/* {doctor.feedback.map(feedBack => <FeedBack feedBack={feedBack} > {feedBack} </FeedBack>)} */}
                {doctor.feedback?.length > 0 ? doctor.feedback.map(feedBack => <FeedBack feedBack={feedBack} > {feedBack} </FeedBack>)
                  : <p>Отзывы об этом враче отсутствуют</p>}
              </Row>
              <hr />
              <Row className={style.feedback}>
                <Form >
                  <Input placeholder="Оставить новый отзыв"></Input>
                  <Rate allowHalf defaultValue={0.0} /> <br /> <br />
                  <Button type="primary" htmlType="submit">Отправить отзыв</Button>
                </Form>
              </Row>

            </Card>
            <Modal
              title="Редактировать данные"
              style={{ top: 20 }}
              visible={modal1Visible}
              onOk={() => visibleModal()}
              onCancel={() => visibleModal()}
            >
              <FormDoctor />
            </Modal>
          </Card>
        </Col>
      </Row>
    </div>

  )
}

export default CardDoctorPage;

