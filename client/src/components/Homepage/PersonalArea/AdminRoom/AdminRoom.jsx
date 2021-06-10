import { Card,  List } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeAccessThunk } from '../../../../redux/actionCreators/doctorAC';
import { setAllDoctorThunk } from '../../../../redux/actionCreators/doctorsAC';
import { deleteUserThunk } from '../../../../redux/actionCreators/userAC';
import style from './AdminRoom.module.css'
import Button from "antd-button-color";

export const AdminRoom = () => {
  const dispatch = useDispatch()
  const doctors = useSelector(state => state.doctors)
  const doctor = useSelector(state => state.doctor)
  useEffect(() => {
    dispatch(setAllDoctorThunk())
  }, [doctor])
  const changeAccess = (id) => {
    dispatch(changeAccessThunk(id))

  }
  const deleteUser = (id) => {
    dispatch(deleteUserThunk(id))
  }

  return (
    <div className={style.admin_panel}>
      <Card className={style.card} title='Активные врачи'>
        {doctors.map(item => item.approved ? <List > <List.Item className={style.item}>
          {item.name} <Button type="warning"  onClick={() => changeAccess(item._id)}>Отозвать</Button>

        </List.Item></List>
          : ''
        )}
      </Card>
      
      <Card className={style.ant_card_bordered} title='Заявки на доступ'>
        {doctors.map(item => item.approved ? '' : <List > <List.Item className={style.item_access}>
            {item.name}
            <div className={style.button}> <Button type="success"  onClick={() => changeAccess(item._id)}>Добавить в активные врачи</Button > <Button type="primary" danger onClick={() => deleteUser(item._id)} >Удалить</Button></div>
          </List.Item> </List>
        )}
      </Card>
    </div>
  )
}

