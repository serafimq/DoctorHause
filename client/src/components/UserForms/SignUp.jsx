import { Form, Input, Button, Select } from 'antd';
import { Typography } from 'antd';
import { useDispatch } from "react-redux"
import { signup } from '../../redux/actionCreators/userAC';

const { Title } = Typography;
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const SignUp = () => {

  const dispatch = useDispatch()

  const onFinish = (values) => {
    console.log('Success:', values);
    dispatch(signup(values))
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [form] = Form.useForm();

  const onGenderChange = (value) => {
    switch (value) {
      case 'doctor':
        form.setFieldsValue({
          note: 'Привет врач!',
        });
        return;

      case 'patient':
        form.setFieldsValue({
          note: 'Привет пациент!',
        });
        return;
    }
  };

  return (
    <>
    <Title>Форма регистрации</Title>
    <Form {...layout} form={form} name="basic control-hooks" initialValues={{ remember: true, }} onFinish={onFinish} onFinishFailed={onFinishFailed} >

      <Form.Item
        name="name"
        label="ФИО"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="role"
        label="Кто Вы?"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Выберите из списка"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="doctor">Врач</Option>
          <Option value="patient">Пациент</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="E-mail"
        name="email"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите электронную почту!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="pass"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите пароль!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Зарегестрироваться
        </Button>
      </Form.Item>

    </Form>
    </>
  );
};

export default SignUp
