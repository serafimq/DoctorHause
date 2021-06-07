import { Button, Row, Divider, Col} from 'antd';
import {useSelector } from "react-redux";
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom';
import { Typography } from 'antd';
const { Title } = Typography;

const SignUpChoose = () => {
  const isAuth = useSelector(state => state.user.isAuth) 
  return (
    isAuth ?
    <Redirect to="/"/>
    :
    <>
    <Row justify="center">
      <Title>Форма регистрации</Title>
    </Row>
    <Divider/>    
    <Row justify="center">
      <Col span={3}>
        <Link to='/signupdoctor'><Button type="primary" block>Регистрация врача</Button></Link>
      </Col>
    </Row>
    <Divider/>
    <Row justify="center">
      <Col span={3}>
        <Link to='/signuppatient'><Button block>Регистрация пациента</Button></Link>
      </Col>
    </Row>
    </>
  );
};

export default SignUpChoose

