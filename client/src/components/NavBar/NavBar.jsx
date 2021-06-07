import React from 'react'
import style from './NavBar.module.css'
import { Layout, Menu } from 'antd';
import {Link} from 'react-router-dom'
import { signout } from '../../redux/actionCreators/userAC';
import { useDispatch, useSelector } from 'react-redux';
import { clearAvatar } from '../../redux/actionCreators/avatarAC';
import { clearHistory } from '../../redux/actionCreators/historyAC';
import { clearEvents } from '../../redux/actionCreators/eventsAC';

export default function NavBar() {
  const { Header } = Layout;
  const id = useSelector(state => state.user.id)
  
  const dispatch = useDispatch()

  const deleteHandler = async (id) => {
    dispatch(signout(id))
    dispatch(clearEvents())
    dispatch(clearAvatar())
    dispatch(clearHistory())
  }

  const isAuth = useSelector(state => state.user.isAuth)

  return (
    isAuth ?
    <Layout className="layout">
      <Header className={style.header}>
      <div className={style.logo} >
        <Link to='/'>DHouse</Link>
      </div >
      <div className="menu" >
          <Menu mode="horizontal" defaultSelectedKeys={['0']} >
          <Menu.Item key="0"><Link to='/'>Главная</Link></Menu.Item>
          <Menu.Item key="1"><Link onClick={() => deleteHandler(id)} to='/'>Выйти</Link></Menu.Item>
          <Menu.Item key="2"><Link to={`/homepage/${id}`}>Личный кабинет</Link></Menu.Item>
        </Menu>
      </div >
      </Header>
    </Layout>
    :
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu mode="horizontal" defaultSelectedKeys={['0']} >
          <Menu.Item key="0"><Link to='/'>Главная</Link></Menu.Item>
          <Menu.Item key="1"><Link to='/signup'>Регистрация</Link></Menu.Item>
          <Menu.Item key="2"><Link to='/signin'>Авторизация </Link></Menu.Item>
        </Menu>
      </Header>
    </Layout>
  )
}
