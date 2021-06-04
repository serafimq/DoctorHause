import { Form, Input, Select, InputNumber } from 'antd'

const FormDoctor = () => {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  /* eslint-disable no-template-curly-in-string */

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */
  const { Option } = Select;
  const onFinish = (values) => {
    console.log('VAAAAAAAAAAAAAAALLLUUES',values);
  }
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="+7">+7</Option>
      </Select>
    </Form.Item>
  );

  return (
    <>
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item label="Специализация"
          name={['user', 'spec']}
        >
          <Select
            showSearch
            style={{ width: '100%' }}
            placeholder="Ваша специализация"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
            }
          >
            <Option value="1">Мануальный терапевт</Option>
            <Option value="2">Акушер</Option>
            <Option value="3">Аллерголог</Option>
            <Option value="4">Патологоанатом</Option>
            <Option value="5">Ортопед</Option>
            <Option value="6">Диетолог</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={['user', 'name']}
          label="ФИО"

        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label="Email"
          rules={[
            {
              type: 'email',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'stage']}
          label="Стаж"
          style={{ width: '100%' }}
          rules={[
            {
              type: 'number',
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
        >
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item label="Метро" name="metro">
          <Input />
        </Form.Item>
      </Form>
    </>
  )
}

export default FormDoctor