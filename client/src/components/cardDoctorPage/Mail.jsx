import React from 'react';
import { Form, Input, Select, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMail } from '../../redux/actionCreators/mailAC';

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export const RegistrationForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch()
  const emailTo = useSelector(state => state.doctors[0].email)
  const emailFrom = useSelector(state => state.user.email)
  const patientName = useSelector(state => state.user.name)
  const doctortId = useSelector(state => state.doctor._id)
  
  const onFinish = (values) => {
    console.log(values);
    const data = {};
    data.patientName = patientName;
    data.prefix = values.prefix;
    data.phone = values.phone;
    data.text = values.user.introduction;
    data.emailTo = emailTo;
    data.emailFrom = emailFrom;
    data.id = doctortId;
    dispatch(fetchMail(data))
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{width: 70}}>
      <Option value="+7">+7</Option>
      <Option value="+375">+375</Option>
      <Option value="+375">+374</Option>
      <Option value="+380">+380</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form {...formItemLayout} form={form} name="register" onFinish={onFinish} initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '+7'}}
      scrollToFirstError>
      <Form.Item name="phone" label="" rules={[{required: true, message: 'Please input your phone number!'}]}>
        <Input addonBefore={prefixSelector} placeholder="Оставьте нормер телефона" style={{ width: '200%' }} />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="" style={{width: '200%'}}>
        <Input.TextArea placeholder="Сообщите о проблеме">
        </Input.TextArea> 
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form.Item>
    </Form>
  );
};
