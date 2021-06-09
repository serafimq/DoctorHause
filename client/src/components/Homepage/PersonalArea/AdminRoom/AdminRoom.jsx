import { Card, Button, List } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeAccessThunk } from '../../../../redux/actionCreators/doctorAC';
import { setAllDoctorThunk } from '../../../../redux/actionCreators/doctorsAC';
import { deleteUserThunk } from '../../../../redux/actionCreators/userAC';

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
    <div>
      <Card title='Активные врачи'>
        {doctors.map(item => item.approved ? <List> <List.Item>
          {item.name} <Button onClick={() => changeAccess(item._id)}>Отозвать</Button>
        </List.Item> </List>
          : ''
        )}
      </Card>
      <hr></hr>
      <Card title='Заявки на доступ'>
        {doctors.map(item => item.approved ? ''
          : <List> <List.Item>
            {item.name} <Button onClick={() => changeAccess(item._id)}>Добавить в активные врачи</Button > <Button onClick={() => deleteUser(item._id)} >Удалить</Button>
          </List.Item> </List>
        )}
      </Card>
    </div>
  )
}

