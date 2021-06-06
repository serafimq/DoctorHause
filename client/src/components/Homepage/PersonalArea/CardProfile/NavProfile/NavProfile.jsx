import React from 'react'
import style from './NavProfile.module.css'
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import {
  CalendarOutlined,
  HistoryOutlined,
  FileTextOutlined,
  CompassOutlined
} from '@ant-design/icons';
import { useSelector } from 'react-redux';

const { SubMenu } = Menu;

const NavProfile = () => {

  const [mode, setMode] = React.useState('inline');
  const [theme, setTheme] = React.useState('light');
  const id = useSelector(state => state.user.id)

  return (
    <>
      <br />
      <br />
      <Menu
        className={style.menu}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={mode}
        theme={theme}
      >
        <Menu.Item className={style.item} key="1" icon={<CalendarOutlined />}>
          <Link className={style.link} to={`/homepage/${id}`}>Календарь</Link>
        </Menu.Item>
        <Menu.Item className={style.item} key="2" icon={<HistoryOutlined /> }>
          История
        </Menu.Item>
        <Menu.Item className={style.item} key="3" icon={<FileTextOutlined />}>
          Курс лечения
        </Menu.Item>
        <Menu.Item className={style.item} key="4" icon={<CompassOutlined />}>
          Карта
        </Menu.Item>
      </Menu>
    </>
 
  )
}

export default NavProfile

