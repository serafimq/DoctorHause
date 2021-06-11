import React, { useState } from 'react'
import styleButton from '../../../../General/AddButton/AddButton.module.scss'
import {
  Form,
  Input,
  Button,
  DatePicker,
  Select
} from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { addEventsAxiox } from '../../../../../redux/actionCreators/eventsAC';

const { Option } = Select;

function CalendarForm({ visibleModal }) {

  const user = useSelector(state => state.user)

  const dispatch = useDispatch()
  // const [values, changeHandler] = useFormModal()

  const onFinish = (values) => {
    console.log(values, '<<<<<<');
    let beforeSent;
    if (values['dateTime']) {
      beforeSent = { ...values, dateTime: values.dateTime.format('YYYY/MM/DD HH:mm') }
    }

    dispatch(addEventsAxiox(beforeSent, user.id))
    visibleModal()
  };

  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  

  return (
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
    >
      <Form.Item name="problem" label="Причина обращения" rules={[{ required: true, message: 'Укажите причину обращения' }]}>
        <Input placeholder="Причина обращения" />
      </Form.Item>
      <Form.Item name="hospital" label="Клиника" rules={[{ required: true, message: 'Укажите клинику' }]}>
        <Input placeholder="Введите название клиники" />
      </Form.Item>
      <Form.Item name="firstLastName" label="Имя Фамилия врача" rules={[{ required: true, message: 'Укажите имя и фамилию врача' }]}>
        <Input placeholder="Имя Фамилия" />
      </Form.Item>
      <Form.Item name="specialization" label="Cпециализация" rules={[{ required: true, message: 'Укажите специализацию врача' }]}>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Специализация врача"
          optionFilterProp="children"
        >
          <Option value="Мануальный терапевт">Мануальный терапевт</Option>
            <Option value="Акушер">Акушер</Option>
            <Option value="Аллерголог">Аллерголог</Option>
            <Option value="Патологоанатом">Патологоанатом</Option>
            <Option value="Ортопед">Ортопед</Option>
            <Option value="Диетолог">Диетолог</Option>
            <Option value="Лазерный хирург">Лазерный хирург</Option>
            <Option value="Логопед">Логопед</Option>
            <Option value="Паразитолог">Паразитолог</Option>
            <Option value="Психолог">Психолог</Option>
            <Option value="Семейный врач">Семейный врач</Option>
            <Option value="Филиппинский хиллер">Филиппинский хиллер</Option>
            <Option value="Сибирский шаман">Сибирский шаман</Option>
        </Select>
      </Form.Item>
      <Form.Item name="address" label="Адрес клиники">
        <Input placeholder="Адрес начиная с города"  defaultValue="г. Москва, "/> 
      </Form.Item>
      <Form.Item name="comment" label="Комментарий к записи">
        <Input.TextArea placeholder="Комментарий" />
      </Form.Item>
      <Form.Item name="dateTime" label="Дата и время посещения" rules={[{ required: true }]}>

        <DatePicker
          format={"YYYY/MM/DD HH:mm"}
          showTime
          showNow={true}
        />
      </Form.Item>
      <Button className={styleButton.button} type="primary" htmlType="submit" >
        Добавить в календарь
          </Button>
    </Form>
  )
}

export default CalendarForm
