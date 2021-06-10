import { Button, Row, Divider, Col} from 'antd';
import {useSelector } from "react-redux";
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom';
import { Typography } from 'antd';
import { useState } from 'react';
import SignUpPatient from './SignUpPatient';
import SignUpDoctor from './SignUpDoctor';
import style from './SignUpChoose.module.css'
const { Title } = Typography;

const SignUpChoose = () => {
  const isAuth = useSelector(state => state.user.isAuth) 

  const [showLogin, setShowLogin] = useState('1')
  return (
    isAuth ?
    <Redirect to="/"/>
    :
    <div className={style.reg_box}>       
    <Row className={style.controller} justify="center">
      <Col >
        <Button onClick={() => {setShowLogin('1')}}  
        type="primary" block>Регистрация врача</Button>
      </Col>
      <Col >
        <Button onClick={() => {setShowLogin('2')}} 
        block>Регистрация пациента</Button>
      </Col>
    </Row>
    
    {showLogin === '2' ? <SignUpPatient /> : ''}
    {showLogin === '1' ? <SignUpDoctor /> : ''}
    
  
    </div>
  );
};

export default SignUpChoose

