import { Form, Input, Button, Select, Row, Divider } from 'antd';
import { Typography } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router';
import { signup, succesGoogle } from '../../redux/actionCreators/userAC';
import GoogleLogin from 'react-google-login';
import Yandex from './Yandex';

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

const SignUpDoctor = () => {

  const dispatch = useDispatch()

  const onFinish = (values) => {
    values.role = 'Доктор'
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
  const isAuth = useSelector(state => state.user.isAuth) 

  const responseSuccesGoogle = async (response) => {
    dispatch(succesGoogle({tokenId: response.tokenId, role: 'Доктор'}))
  }

  const responseErrorGoogle = (response) => {
    console.log(response);
  }

  return (
    isAuth ?
    <Redirect to="/"/>
    :
    <>
    <Row justify="center">
      <Title>Регистрация врача</Title>
    </Row>

    // <Row justify="center">
    //   <Yandex/>
    // </Row>

    <Row justify="center">
      <GoogleLogin
        clientId="841640719406-h6m0ejjq4i5gs63dnahqd1ss9mpu6b42.apps.googleusercontent.com"
        buttonText="Через Google Email"
        onSuccess={responseSuccesGoogle}
        onFailure={responseErrorGoogle}
        cookiePolicy={'single_host_origin'}
      />,
    </Row>

    <Divider/>
    
    <Row justify="center">
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
    </Row>
    </>
  );
};

export default SignUpDoctor
