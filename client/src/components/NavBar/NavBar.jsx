import React from 'react'
import { Layout, Menu } from 'antd';
import {Link} from 'react-router-dom'
import { signout } from '../../redux/actionCreators/userAC';
import { useDispatch, useSelector } from 'react-redux';

export default function NavBar() {
  const { Header } = Layout;
  const id = useSelector(state => state.user._id)

  const dispatch = useDispatch()

  const deleteHandler = async (id) => {
    dispatch(signout(id))
  }

  const isAuth = useSelector(state => state.user.isAuth)
  const name = useSelector(state => state.user.name)
  const role = useSelector(state => state.user.role) 

  return (
    isAuth ?
    <Layout className="layout">
      <Header>
        <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']} >
          <Menu.Item key="0"><Link to='/'>Главная</Link></Menu.Item>
          <Menu.Item key="1">{name}</Menu.Item>
          <Menu.Item key="1">{role}</Menu.Item>
          <Menu.Item key="3"><Link onClick={() => deleteHandler(id)} to='/'>Выйти</Link></Menu.Item>
          <Menu.Item key="4"><Link to='/homepage'>Личный кабинет</Link></Menu.Item>
        </Menu>
      </Header>
    </Layout>
    :
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']} >
          <Menu.Item key="0"><Link to='/'>Главная</Link></Menu.Item>
          <Menu.Item key="1"><Link to='/signup'>Регистрация</Link></Menu.Item>
          <Menu.Item key="2"><Link to='/signin'>Авторизация </Link></Menu.Item>
        </Menu>
      </Header>
    </Layout>
  )
}
