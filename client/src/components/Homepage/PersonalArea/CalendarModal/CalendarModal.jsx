import React, { useState } from 'react'
import useFormModal from "../../../hooks/useForm"
import {
  Modal,
  Form,
  Input,
  Button,
  DatePicker,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addEventsAxiox } from '../../../../redux/actionCreators/eventsAC';

const config = {
  rules: [
    {
      type: 'object',
      required: true,
      message: 'Please select time!',
    },
  ],
};


const  CalendarModal = () => {

  const dispatch = useDispatch()
  const [values, changeHandler] = useFormModal()
  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addEventsAxiox(values))
    
    visibleModal()
  }

  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const [modal1Visible, setModal1Visible] = useState(false)

  function visibleModal() {
    setModal1Visible(!modal1Visible)
  }

  return (
    <>
      <Button type="primary" onClick={() => visibleModal()}>
        Add for Calendar
      </Button>
      <Modal
        title="Введите данные в календарь"
        style={{ top: 20 }}
        visible={modal1Visible}
        onOk={() => visibleModal()}
        onCancel={() => visibleModal()}    
      >
        <Form
          labelCol={{
            span: 9,
          }}
          wrapperCol={{
            span: 16,
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
          value="default"
          // onFinish={submitHandler}
          // onSubmit={submitHandler}
        >
          <Form.Item label="Клиника">
            <Input value={values.hospital || ""} onChange={changeHandler} name="hospital" placeholder="Введите название клиники"  />
          </Form.Item>
          <Form.Item label="Имя Фамилия врача">
            <Input value={values.firstLastName || ""} onChange={changeHandler} name="firstLastName" placeholder="Имя Фамилия" />
          </Form.Item>
          <Form.Item label="Специализация врача">
            <Input value={values.specialization || ""} onChange={changeHandler} name="specialization" placeholder="Специализация" />
          </Form.Item>
          <Form.Item label="Адрес клиники">
            <Input value={values.address || ""} onChange={changeHandler} name="address"  placeholder="Адрес" />
          </Form.Item>
          <Form.Item label="Комментарий к записи">
            <Input.TextArea value={values.comment || ""} onChange={changeHandler} name="comment" placeholder="Комментарий" />
          </Form.Item>
          <Form.Item  label="Дата и время посещения" >
            {/* <DatePicker value={values.dateTime || ""} onChange={changeHandler} name="dateTime" showTime format="YYYY-MM-DD HH:mm" /> */}
            <input type="datetime-local" value={values.dateTime || ""} onChange={changeHandler} name="dateTime" />
          </Form.Item>
          
          {/* onClick={submitHandler} */}
          <Button onClick={submitHandler}  type="primary" htmlType="submit" >
            Добавить в календарь
          </Button>
        </Form>
      </Modal>
    </>
  );
}

export default CalendarModal
