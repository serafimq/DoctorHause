import { List, Card, Meta, Typography, Divider, Col, Row, Rate } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import style from './cardDoctorPage.module.css'
import { UserOutlined } from '@ant-design/icons'


const CardDoctorPage = () => {


  return (
    <div className="site-card-wrapper">
      <Row align="middle" justify="center" gutter={1}>
        <Col span={6}>
          <Card title="Абрамсон Сара Вениаминовна" bordered={false}>
            <Avatar src='http://cdn.fishki.net/upload/post/2019/07/15/3032379/tn/5823b4c01cefdd7191cb68ad0ec11dca.jpg' size={150} icon={<UserOutlined />} />
            <Row></Row>
          <Rate allowHalf defaultValue={2.5} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Информация" bordered={false}>
            <ul className={style.info}>
              <li className={style.lishka}>
                Специализация: Акушер
            </li >
              <li className={style.lishka}>
                Стаж: Высшая категория
            </li>
              <li className={style.lishka}>
                Телефон для записи: +7-926-345-56-77
            </li>
            <li className={style.lishka}>
                email: sara1997@mail.ru
            </li>
              <li className={style.lishka}>
                Метро: Новокузнецкая
            </li>
            </ul>
          </Card>
        </Col>
      </Row>
    </div>

  )
}

export default CardDoctorPage;

