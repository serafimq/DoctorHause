/* eslint-disable jsx-a11y/img-redundant-alt */
import Modal from 'antd/lib/modal/Modal'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAvatarAxios } from '../../../redux/actionCreators/avatarAC'
import { setOneDoctorThunk } from '../../../redux/actionCreators/doctorAC'
import CardDoctorMain from '../CardDoctorMain/CardDoctorMain'
import { Rate } from 'antd';
import style from './CardsDoctor.module.css'

const CardsDoctor = ({item, id}) => {

  const [modal1Visible, setModal1Visible] = useState(false)

  function visibleModal(id) {
    setModal1Visible(!modal1Visible)
  }
  const dispatch = useDispatch()

  const openModal = (e) => {
    dispatch(setAvatarAxios(e.id))
    visibleModal()
  }
  
  const closeModal = () => {
    visibleModal()
  }
  return (
    <div className={style.one_card}>

      <div className={style.radius} id={id} onClick={(e) => {openModal(e.target)}} > 
        <div className={style.header}>
          <div className={style.avatar}> 
              <img src={`http://localhost:3006/${item.avatar}`}
              className={style.img} 
              alt="Card image"/>
          </div>
          <h2 className={style.name}>Доктор: <span>{item.name}</span> </h2>
          <Rate disabled defaultValue={4}  /> 
          <span>4.1</span>
        </div>
        <div className={style.body}>
          <div>
          <div className={style.specialist}>
            <h3>Специальность: <br /> <span> {item.spec}</span></h3> </div>
            <div className={style.price}>
            <h3>Стоимость приема: <span> {item.price} руб</span></h3> </div>
          </div>
          <div className={style.ask}>
            <img className={style.ask_img} src="http://localhost:3006/public/logo/comments.svg" alt="" />
           <p className={style.callMe} > Оставить заявку </p>
          </div>
        </div>
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
      <CardDoctorMain doctor={item} />
    </Modal>
    </div>
  )
}

export default CardsDoctor
