import { Card, Button, List } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeAccessThunk } from '../../../../redux/actionCreators/doctorAC';
import { setAllDoctorThunk } from '../../../../redux/actionCreators/doctorsAC';

export const AdminRoom = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setAllDoctorThunk())
  }, [])
  const doctors = useSelector(state => state.doctors)
  const changeAccess = (id) => {
    dispatch(changeAccessThunk(id))

  }

  return(
    <div>
      <Card title='Активные врачи'>
    {doctors.map(item => item.approved ?  <List> <List.Item>
      {item.name} <Button onClick={() => changeAccess(item._id)}>Отозвать</Button>
      </List.Item> </List>
: ''
)}

      </Card>
      <Card title='Заявки на доступ'>
    {doctors.map(item => item.approved ? ''
:   <List> <List.Item> 
  {item.name} <Button onClick={() => changeAccess(item._id)}>Добавить в активные врачи</Button> <Button >Удалить</Button>
  </List.Item> </List>
)}
      </Card>
    </div>
  )
}

