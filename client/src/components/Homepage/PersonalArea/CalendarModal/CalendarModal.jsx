import React, { useState } from 'react'
import style from './CalendarModal.module.css'
import useFormModal from "../../../hooks/useForm"
import {
  Modal,
  Button,
} from 'antd';
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import { addEventsAxiox } from '../../../../redux/actionCreators/eventsAC';
import CalendarForm from './CalendarForm/CalendarForm';
import AddButton from '../../../General/AddButton/AddButton';

const  CalendarModal = () => {
  const [modal1Visible, setModal1Visible] = useState(false)

  function visibleModal() {
    setModal1Visible(!modal1Visible)
  }

  return (
    <>
      <AddButton visibleModal={visibleModal}  title={'Добавить в календарь'} />
      <Modal
        title="Введите данные в календарь"
        style={{ top: 20 }}
        visible={modal1Visible}
        onOk={() => visibleModal()}
        onCancel={() => visibleModal()}
        width={800}
        footer={null}
      >
        <CalendarForm visibleModal={visibleModal}/>
      </Modal >
    </>
  );
}

export default CalendarModal
