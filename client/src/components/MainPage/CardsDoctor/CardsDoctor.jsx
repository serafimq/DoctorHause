/* eslint-disable jsx-a11y/img-redundant-alt */
import Modal from 'antd/lib/modal/Modal'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAvatarAxios } from '../../../redux/actionCreators/avatarAC'
import { setOneDoctorThunk } from '../../../redux/actionCreators/doctorAC'
import CardDoctorPage from '../../cardDoctorPage/cardDoctorPage'
import CardDoctorMain from '../CardDoctorMain/CardDoctorMain'
import style from './CardsDoctor.module.css'

const CardsDoctor = ({item, id}) => {

  const [modal1Visible, setModal1Visible] = useState(false)

  function visibleModal(id) {
    setModal1Visible(!modal1Visible)
  }
  const dispatch = useDispatch()

  const avatar = useSelector(state => state.avatar)

  const openModal = (e) => {
    console.log(e);
    dispatch(setOneDoctorThunk(e.id))
    dispatch(setAvatarAxios(e.id))
    visibleModal()
  }
  
  const closeModal = () => {
    visibleModal()
  }

  return (
    <div className={style.one_card}>
      <div className={style.radius} id={id} onClick={(e) => {openModal(e.target)}} > 
     
      <div className={style.avatar}> 
          <img 
          src={`http://localhost:3006/${item.avatar}`}
          // src={avatar?.avatar ?
          //   `http://localhost:3006/${avatar.avatar}` 
          //   :
          //   'http://cs319323.vk.me/v319323049/70e1/2gddfIt0mvc.jpg'
          //   } 
            className={style.img} alt="Card image"/>
      </div>
            <h2 className={style.name}>Доктор: <span>{item.name}</span> </h2>
       {item.spec} 
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
      <CardDoctorMain />
    </Modal>
    </div>
  )
}

export default CardsDoctor
