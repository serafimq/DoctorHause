import { Button, Row, Divider, Col} from 'antd';
import {useSelector } from "react-redux";
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom';
import { Typography } from 'antd';
import { useState } from 'react';
import SignUpPatient from './SignUpPatient';
import SignUpDoctor from './SignUpDoctor'
import style from './SignUpChoose.module.css'
const { Title } = Typography;

const SignUpChoose = () => {
  const isAuth = useSelector(state => state.user.isAuth) 

  const [showLogin, setShowLogin] = useState('1')
  return (
    isAuth ?
    <Redirect to="/"/>
    :
    <>       
    <Row className={style.controller} justify="center">
      <Col span={3}>
        
        <Button onClick={() => {setShowLogin('2')}}  type="primary" block>Регистрация врача</Button>
      </Col>
      <Col span={3}>
        
        <Button onClick={() => {setShowLogin('3')}} block>Регистрация пациента</Button>
      </Col>
    </Row>
    
    {showLogin === '3' ? <SignUpPatient /> : ''}
    {showLogin === '2' ? <SignUpDoctor /> : ''}
  
    </>
  );
};

export default SignUpChoose

