import React from 'react'
import style from './NavProfile.module.css'
import { Menu, Badge } from 'antd';
import { Link } from 'react-router-dom'
import {
  CalendarOutlined,
  HistoryOutlined,
  FileTextOutlined,
  CompassOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useSelector } from 'react-redux';

const { SubMenu } = Menu;
const NavProfile = ({ setVisibleComponents }) => {

  const role = useSelector(state => state.user.role)
  const [mode, setMode] = React.useState('inline');
  const [theme, setTheme] = React.useState('light');
  const user = useSelector(state => state.user)
  const doctor = useSelector(state => state.doctor)
  // console.log(doctor.messages.length, 'doctor.messages.length');
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
      > {role !== 'admin' ?
        role !== 'doctor' ?
          <>
            <Menu.Item onClick={() => setVisibleComponents(0)} className={style.item} key="1" icon={<CalendarOutlined />}>
              <div >Календарь</div>
              {/* <Link className={style.link} to={`/homepage/${id}`} >Календарь</Link> */}
            </Menu.Item>
            <Menu.Item onClick={() => setVisibleComponents(1)} className={style.item} key="2" icon={<HistoryOutlined />}>
              <div >История</div>
              {/* <Link to={`/homepage/history/${id}`}>История</Link> */}
            </Menu.Item>
            <Menu.Item className={style.item} key="3" icon={<FileTextOutlined />}>
              Курс лечения
        </Menu.Item>
            <Menu.Item onClick={() => setVisibleComponents(3)} className={style.item} key="4" icon={<CompassOutlined />}>
              <div >Карта</div>
              {/* <Link to={`/homepage/map/${id}`}>Карта</Link> */}
            </Menu.Item>
          </>
          :
          doctor.messages?.length > 0 ? 
          <Badge count={doctor.messages.length}>
            <Menu.Item onClick={() => setVisibleComponents(5)} shape="square" className={style.item} key="6" icon={<UserOutlined />}>
              <div >Личный кабинет врача</div>
            </Menu.Item>
          </Badge>
          :
          <Badge count={0}>
          <Menu.Item onClick={() => setVisibleComponents(5)} shape="square" className={style.item} key="6" icon={<UserOutlined />}>
            <div >Личный кабинет врача</div>
          </Menu.Item>
        </Badge>
        // </span>
        :
        <Menu.Item onClick={() => setVisibleComponents(4)} className={style.item} key="5" icon={<SettingOutlined />}>
          <div >Админка</div>
        </Menu.Item>
        }
      </Menu>
    </>
  )
}

export default NavProfile

