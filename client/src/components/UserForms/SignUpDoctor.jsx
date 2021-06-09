import { Form, Input, Button, Select, Row, Divider } from 'antd';
import { Typography } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router';
import { signup, succesGoogle } from '../../redux/actionCreators/userAC';
import GoogleLogin from 'react-google-login';
import style from './SignUp.module.scss'

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
    values.role = 'doctor'
    dispatch(signup(values))
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [form] = Form.useForm();

  const isAuth = useSelector(state => state.user.isAuth) 

  const responseSuccesGoogle = async (response) => {
    dispatch(succesGoogle({tokenId: response.tokenId, role: 'doctor'}))
  }

  const responseErrorGoogle = (response) => {
    console.log(response);
  }

  return (
    isAuth ?
    <Redirect to="/"/>
    :
    <>


    <Row className={style.main}>
      
      <Form {...layout} className={style.form} form={form} name="basic control-hooks" initialValues={{ remember: true, }} onFinish={onFinish} onFinishFailed={onFinishFailed} >
    
      <h2 className={style.form_title, style.title}>Создайте аккаунт доктору</h2>
      <div className={style.form__icons}>
      <GoogleLogin
        clientId="841640719406-h6m0ejjq4i5gs63dnahqd1ss9mpu6b42.apps.googleusercontent.com"
        buttonText="Через Google Email"
        onSuccess={responseSuccesGoogle}
        onFailure={responseErrorGoogle}
        cookiePolicy={'single_host_origin'}
        render = {renderProps =>(

          <img onClick={renderProps.onClick} disabled={renderProps.disabled}  className={style.google} src="https://image.flaticon.com/icons/png/512/270/270014.png" alt="goggle" />
           )}
      />
      </div><span className={style.form__span} >или используйте регистрацию по  email</span>

      <Form.Item
        name="name" rules={[
          {
            required: true,
          },
        ]}
      >
        <Input className={style.form__input} placeholder="Введите ваше имя"/>
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите электронную почту!',
          },
        ]}
      >
        <Input className={style.form__input} placeholder="Введите вашу электронную почту"  />
      </Form.Item>

      <Form.Item
        name="pass"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите пароль!',
          },
        ]}
      >
        <Input.Password className={style.form__input} placeholder="Придумайте пароль"/>
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
