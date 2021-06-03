import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {Link} from 'react-router-dom'
// import style from './NavBar.module.css'
const { Header, Content, Footer } = Layout;

export default function NavBar() {


  return (

    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']} >
          {/* <Menu.Item key="1"><Link to='/registration'>Регистрация</Link></Menu.Item>
          <Menu.Item key="2"><Link to=''>Авторизация </Link></Menu.Item>
          <Menu.Item key="3"><Link to=''>Выйти</Link></Menu.Item>
          <Menu.Item key="3"><Link to=''>Личный кабинет</Link></Menu.Item> */}
        </Menu>
      </Header>
    </Layout>
  
     
  )
}

