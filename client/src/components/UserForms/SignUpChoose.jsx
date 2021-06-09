import { Button, Row, Divider, Col} from 'antd';
import {useSelector } from "react-redux";
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom';
import { Typography } from 'antd';
import { useState } from 'react';
const { Title } = Typography;

const SignUpChoose = () => {
  const isAuth = useSelector(state => state.user.isAuth) 

  const [showLogin, setShowLogin] = useState('')
  return (
    isAuth ?
    <Redirect to="/"/>
    :
    <>
    <Row justify="center">
      <Title>Форма регистрации</Title>
    </Row>
       
    <Row justify="center">
      <Col span={3}>
        <Link to='/signupdoctor'><Button type="primary" block>Регистрация врача</Button></Link>
      </Col>
      <Col span={3}>
        <Link to='/signuppatient'><Button block>Регистрация пациента</Button></Link>
      </Col>
    </Row>
    
  
    </>
  );
};

export default SignUpChoose

