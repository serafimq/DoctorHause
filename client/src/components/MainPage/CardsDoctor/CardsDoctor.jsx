/* eslint-disable jsx-a11y/img-redundant-alt */
import Modal from 'antd/lib/modal/Modal'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAvatarAxios } from '../../../redux/actionCreators/avatarAC'
import CardDoctorMain from '../CardDoctorMain/CardDoctorMain'
import { Rate } from 'antd';
import style from './CardsDoctor.module.css'
import { RegistrationForm } from '../../cardDoctorPage/Mail'

const CardsDoctor = ({ item, id }) => {

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
  const currentRating = item.feedBack?.reduce((acc, cur) => acc+cur.stars,0)/item.feedBack.length
  

  const [isModalVisible1, setIsModalVisible1] = useState(false);

  const showModal1 = () => {
    setIsModalVisible1(true);
  };

  const handleOk1 = () => {
    setIsModalVisible1(false);
  };

  const handleCancel1 = () => {
    setIsModalVisible1(false);
  };

  return (
    <div className={style.one_card}>
      <div className={style.radius} id={id} >
        <div onClick={(e) => { openModal(e.target) }} className={style.header}>
          <div className={style.avatar}>
            <img src={`http://localhost:3006/${item.avatar}`}
              className={style.img}
              alt="Card image" />
          </div>
          <div className={style.about}>
          <h2 className={style.name}>Доктор: <span>{item.name}</span> </h2>
          <div className={style.rating}> 
          <Rate disabled defaultValue={currentRating || 0 }  /> 
          <span className={style.rating_number}>{currentRating || 0 }</span>
          </div>
          <div className={style.specialist}>
            <h3>Специальность: <br /> <span> {item.spec}</span></h3> </div>
          </div>
        </div>
        <div className={style.body}>
            <div className={style.price}>
            <h3>Стоимость приема: </h3>
              <div>
                <span> {item.price} руб</span>
              </div> 
            </div>
          <div onClick={showModal1} className={style.ask}>
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
        <CardDoctorMain closeModal={closeModal} doctor={item} />
      </Modal>
      <Modal title="Basic Modal" visible={isModalVisible1} onOk={handleOk1} onCancel={handleCancel1}>
        <RegistrationForm />
      </Modal>
    </div>
  )
}

export default CardsDoctor
