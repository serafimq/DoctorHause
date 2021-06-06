import React, { useState } from 'react'
import style from './CalendarModal.module.css'
import useFormModal from "../../../hooks/useForm"
import {
  Modal,
  Form,
  Input,
  Button,
  DatePicker,
  Select,
} from 'antd';
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import { addEventsAxiox } from '../../../../redux/actionCreators/eventsAC';

const { Option } = Select;


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

  const user = useSelector(state => state.user)

  const dispatch = useDispatch()
  const [values, changeHandler] = useFormModal()

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   visibleModal()
  //   console.log(values)
  //   setEvent(values)
  // }

  // const resetFields = (values) => {
  //   values = " "
  // }

  const onFinish = (values) => {
    console.log(values, '<<<<<<');
    let beforeSent;
    if (values['dateTime']) {
      beforeSent = { ...values, dateTime: values.dateTime.format('YYYY/MM/DD HH:mm') }
    }
    console.log('Success:', beforeSent);
    
    dispatch(addEventsAxiox(beforeSent, user.id))
    visibleModal()
  };

  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const [modal1Visible, setModal1Visible] = useState(false)

  function visibleModal() {
    setModal1Visible(!modal1Visible)
  }

  const [formData, setFormData] = useState({});

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
          onFinish={onFinish}
        // onSubmit={submitHandler}
        >
          <Form.Item name="hospital" label="Клиника">
            <Input placeholder="Введите название клиники" />
          </Form.Item>
          <Form.Item name="firstLastName" label="Имя Фамилия врача">
            <Input placeholder="Имя Фамилия" />
          </Form.Item>
          <Form.Item name="specialization" label="Cпециализация">
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Специализация врача"
              optionFilterProp="children"
            // onChange={changeHandler}
            >
              <Option value="manual">Мануальный терапевт</Option>
              <Option value="acuher">Акушер</Option>
              <Option value="allergoloc">Аллерголог</Option>
              <Option value="patologoanatom">Патологоанатом</Option>
              <Option value="orthoped">Ортопед</Option>
              <Option value="dietolog">Диетолог</Option>
            </Select>
          </Form.Item>
          <Form.Item name="address" label="Адрес клиники">
            <Input placeholder="Адрес" />
          </Form.Item>
          <Form.Item name="comment" label="Комментарий к записи">
            <Input.TextArea placeholder="Комментарий" />
          </Form.Item>
          <Form.Item name="dateTime" label="Дата и время посещения" >
            {/* <DatePicker value={values.dateTime || ""} onChange={changeHandler} name="dateTime" showTime format="YYYY-MM-DD HH:mm" /> */}
            {/* <input type="datetime-local" value={values.dateTime || ""} onChange={changeHandler} name="dateTime" /> */}
            <DatePicker
              format={"YYYY/MM/DD HH:mm"}
              showTime
              // defaultValue={moment([])}
              // onChange={onChange}
              showNow={true}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit" >
            Добавить в календарь
          </Button>
        </Form>
      </Modal>
    </>
  );
}

export default CalendarModal
