import { Card, List, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeAccessThunk, setOneDoctorThunk } from '../../../../redux/actionCreators/doctorAC';
import { setAllDoctorThunk } from '../../../../redux/actionCreators/doctorsAC';
import { deleteUserThunk } from '../../../../redux/actionCreators/userAC';
import style from './AdminRoom.module.css'
import Button from "antd-button-color";
import CardDoctorMain from '../../../MainPage/CardDoctorMain/CardDoctorMain';

export const AdminRoom = () => {
  const dispatch = useDispatch()
  const doctors = useSelector(state => state.doctors)
  const doctor1 = useSelector(state => state.doctor)
  useEffect(() => {
    dispatch(setAllDoctorThunk())
  }, [doctor1])
  const changeAccess = (id) => {
    dispatch(changeAccessThunk(id))

  }
  const deleteUser = (id) => {
    dispatch(deleteUserThunk(id))
  }

  const [modal1Visible, setModal1Visible] = useState(false)

  function visibleModal(it) {
    setModal1Visible(!modal1Visible)
    console.log(it, 'it')
    // dispatch(setOneDoctorThunk(doctor._id))
  }
  const [stateDoctor, setStateDoctor] = useState({})
  const [stateDoctor2, setStateDoctor2] = useState({})


  const [modal2Visible, setModal2Visible] = useState(false)

  function changeProb(doctor) {
    setStateDoctor(doctor)
    visibleModal()
  }

  // function changeProb2 (doctor) {
  //   setStateDoctor(doctor)
  //   visibleModal()
  // }


  function visible2Modal() {
    setModal2Visible(!modal2Visible)
  }

  return (
    <div>
      <Card className={style.ant_card_bordered} title='Активные врачи'>
        {doctors?.map(item => item?.approved
          ?
          <List  >
            <div className={style.item_box}>

            <List.Item onClick={() => changeProb(item)} className={style.item}>
              {item.name}
            </List.Item>
            <Button type="warning" onClick={() => changeAccess(item._id)}>Отозвать</Button>
            </div>
          </List>
          : ''
        )}
      </Card>
      <Modal
        justify="center"
        title="Информация о враче"
        style={{ top: 20 }}
        visible={modal1Visible}
        onOk={() => visibleModal()}
        onCancel={() => visibleModal()}
        width={900}
        footer={null}
      >
        <CardDoctorMain doctor={stateDoctor} />
      </Modal>



      <Card className={style.ant_card_bordered} title='Заявки на доступ'>
        {doctors.map(item => item.approved
          ?
          ''
          :
          <List className={style.zayavki} >
            <List.Item className={style.item_access} onClick={() => changeProb(item)}>
              {item.name}
            </List.Item>
              
              
          <div className={style.button_admin}>
            <Button  type="success" onClick={() => changeAccess(item._id)}>Добавить в активные врачи</Button >
            <Button  style={{marginLeft: 20}} type="primary" danger onClick={() => deleteUser(item._id)} >Удалить</Button>

          </div>
              
          </List>
        )}
      </Card>
      {/* <Modal
        justify="center"
        title="Информация о враче"
        style={{ top: 20 }}
        visible={modal2Visible}
        // onOk={() => visible2Modal()}
        onCancel={() => visible2Modal()}
        width={900}
      >
        <CardDoctorMain doctor={stateDoctor} />
      </Modal> */}
    </div >
  )
}
