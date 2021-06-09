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

// const { Option } = Select;


// const config = {
//   rules: [
//     {
//       type: 'object',
//       required: true,
//       message: 'Please select time!',
//     },
//   ],
// };


const  CalendarModal = () => {

  const user = useSelector(state => state.user)

  const [modal1Visible, setModal1Visible] = useState(false)

  function visibleModal() {
    setModal1Visible(!modal1Visible)
  }

  // console.log(modal1Visible, 'modal1Visible')
  // const [formData, setFormData] = useState({});

  // console.log(formData);

  // function onChange(value, dateString) {

  //   if (value) {
  //     console.log(value.format('YYYY/MM/DD HH:mm'), 'value');
  //     setFormData({
  //       ...formData,
  //       "dateTime": value.format('YYYY/MM/DD HH:mm')
  //     });
  //     onFinish(formData)
  //   }
  // }

  return (
    <>
      <Button className={style.button} type="primary" onClick={() => visibleModal()}>
        Add for Calendar
      </Button>
      <Modal
        title="Введите данные в календарь"
        style={{ top: 20 }}
        visible={modal1Visible}
        onOk={() => visibleModal()}
        onCancel={() => visibleModal()}
        width={800}
      >
        <CalendarForm visibleModal={visibleModal}/>
      </Modal >
    </>
  );
}

export default CalendarModal
