import React from 'react'
import style from './NavProfile.module.css'
import { Menu, Switch, Divider } from 'antd';
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LinkOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const NavProfile = () => {

  const [mode, setMode] = React.useState('inline');
  const [theme, setTheme] = React.useState('light');

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
        <Menu.Item className={style.item} key="1" icon={<MailOutlined />}>
          Календарь
        </Menu.Item>
        <Menu.Item className={style.item} key="2" icon={<CalendarOutlined />}>
          История
        </Menu.Item>
        <Menu.Item className={style.item} key="3" icon={<CalendarOutlined />}>
          Курс лечения
        </Menu.Item>
        <Menu.Item className={style.item} key="4" icon={<CalendarOutlined />}>
          Карта
        </Menu.Item>
      </Menu>
    </>
 
  )
}

export default NavProfile


