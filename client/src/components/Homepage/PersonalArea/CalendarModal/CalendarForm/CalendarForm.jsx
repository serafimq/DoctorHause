import React, { useState } from 'react'

import {
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  Checkbox
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
    console.log('Success:', beforeSent);

    // if (checkNick === true) {
    //   const response = await fetch(`https://calendar.google.com/calendar/render?action=TEMPLATE&amp;text=${beforeSent.problem}&amp;date=${beforeSent.dateTime}&amp;details=${beforeSent.problem}&amp;location=${appointment[0]['branch_name']}`)
    // }

    // https://calendar.google.com/calendar/render?action=TEMPLATE&amp;text=CarPrice.+Аукцион.&amp;dates=${app_time}&amp;details=Не+забудьте+взять+с+собой+полный+пакет+документов,+второй+комплект+ключей,+комплект+сменной+резины,+а+также+помыть+авто+перед+продажей.&amp;src=qmindhd%40gmail.com;
    // https://calendar.google.com/calendar/render?action=TEMPLATE&amp;location=г.Москва,+Шоссе+Энтузисастов,д.+100,+к.+1`
    // https://calendar.google.com/calendar/u/0/r/eventedit&amp;dates=20210608T224000Z/20210609T221500Z


    
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
    // onSubmit={submitHandler}
    >
      <Form.Item name="problem" label="Причина обращения">
        <Input placeholder="Причина обращения" />
      </Form.Item>
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
          <Option value="Стоматолог">Стоматолог</Option>
          <Option value="Мануальный терапевт">Мануальный терапевт</Option>
          <Option value="Акушер">Акушер</Option>
          <Option value="Аллерголог">Аллерголог</Option>
          <Option value="Патологоанатом">Патологоанатом</Option>
          <Option value="Ортопед">Ортопед</Option>
          <Option value="Диетолог">Диетолог</Option>
          <Option value="Терапевт">Терапевт</Option>
          <Option value="Офтальмолог">Офтальмолог</Option>
          <Option value="Дерматолог">Дерматолог</Option>
        </Select>
      </Form.Item>
      <Form.Item name="address" label="Адрес клиники">
        <Input placeholder="Адрес начиная с города"  defaultValue="г. Москва, "/> 
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
  )
}

export default CalendarForm
