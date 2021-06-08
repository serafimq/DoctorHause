import { Form, Input, Button, Select, Row, Divider } from 'antd';
import { Typography } from 'antd';
import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from 'react-router';
import { signin, succesSignInGoogle } from '../../redux/actionCreators/userAC';

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

const SignIn = () => {

  const dispatch = useDispatch()

  const onFinish = (values) => {
    console.log('Success:', values);
    dispatch(signin(values))
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [form] = Form.useForm();

  const responseSuccesGoogle = async (response) => {
    dispatch(succesSignInGoogle({tokenId: response.tokenId}))
  }

  const responseErrorGoogle = (response) => {
    console.log(response);
  }

  const isAuth = useSelector(state => state.user.isAuth) 

  return (
    isAuth ?
    <Redirect to="/"/>
    :
    <>
    <Row justify="center">
      <Title>Форма авторизации</Title>
    </Row>
        <Row justify="center">
        <GoogleLogin
          clientId="841640719406-h6m0ejjq4i5gs63dnahqd1ss9mpu6b42.apps.googleusercontent.com"
          buttonText="Sign Up with Google"
          onSuccess={responseSuccesGoogle}
          onFailure={responseErrorGoogle}
          cookiePolicy={'single_host_origin'}
        />,
      </Row>
  
      <Divider/>
    <Row justify="center">
    <Form {...layout} form={form} name="basic control-hooks" initialValues={{ remember: true, }} onFinish={onFinish} onFinishFailed={onFinishFailed} >

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
          Войти!
        </Button>
      </Form.Item>

    </Form>
    </Row>
    </>
  );
};

export default SignIn
