import Modal from 'antd/lib/modal/Modal'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { clearDoctor, setOneDoctorThunk } from '../../../redux/actionCreators/doctorAC'
import CardDoctorPage from '../../cardDoctorPage/cardDoctorPage'
import style from './CardsDoctor.module.css'

const CardsDoctor = ({item, id}) => {

  const [modal1Visible, setModal1Visible] = useState(false)

  function visibleModal(id) {
    setModal1Visible(!modal1Visible)
  }
  const dispatch = useDispatch()

  const openModal = (e) => {
    console.log(e);
    dispatch(setOneDoctorThunk(e.id))
    visibleModal()
  }

  const closeModal = () => {
    visibleModal()
  }

  return (
    <>
    <div className={style.radius} id={id} onClick={(e) => {openModal(e.target)}} >  
     {item.name} {item.spec} 
    </div>
    <Modal
         justify="center"
         title="Информация о враче"
         style={{ top: 20 }}
         visible={modal1Visible}
         onOk={(e) => openModal(e)}
         onCancel={() => closeModal()}
         width={900}
       >
     <CardDoctorPage />
   </Modal>
    </>
  )
}

export default CardsDoctor
