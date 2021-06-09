import { Form, Input, Button, Row, Col, Divider, Space } from 'antd';

const layout = {
  labelCol: {
    span: 16,
  },
  wrapperCol: {
    span: 35,
  },
};

export const InputField = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
    <Row>
    <Form {...layout} name="nest-messages" onFinish={onFinish} >
      <Row>
        <Col>
          <Form.Item name={['user', 'website']}>
            <Input />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 18 }}>
            <Button type="primary" htmlType="submit">Отправить</Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
    </Row>
    </>
  );
};