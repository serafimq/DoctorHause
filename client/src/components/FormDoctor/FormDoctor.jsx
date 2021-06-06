import { Form, Input, Select, InputNumber, Button } from 'antd'
import { useState } from 'react';
import { useDispatch} from 'react-redux'
import { useParams } from 'react-router';
import { updateDoctorThunk } from '../../redux/actionCreators/doctorAC';


const FormDoctor = () => {
  // const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const { id } = useParams()

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
    required: 'Обязательно для заполнения',
    types: {

      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */
  const { Option } = Select;
  const onFinish = (values) => {
    dispatch(updateDoctorThunk(values, id))
    // console.log('VAAAAAAAAAAAAAAALLLUUES',values);

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
        rules={[{ required: true }]} name='spec'>
          <Select showSearch style={{ width: '100%' }} placeholder="Ваша специализация" optionFilterProp="children" filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
            }
          >
            <Option value="Мануальный терапевт">Мануальный терапевт</Option>
            <Option value="Акушер">Акушер</Option>
            <Option value="Аллерголог">Аллерголог</Option>
            <Option value="Патологоанатом">Патологоанатом</Option>
            <Option value="Ортопед">Ортопед</Option>
            <Option value="Диетолог">Диетолог</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name='name' label="ФИО" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name='stage' label="Стаж" style={{ width: '100%' }} rules={[{ type: 'number', min: 0, max: 99, required: true},]}>
          <InputNumber />
        </Form.Item>
        <Form.Item name="phone" label="Phone Number" rules={[{ required: true }]}>
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item label="Метро" name="metro" rules={[{ required: true }]}> 
          <Input />
        </Form.Item>
        <Form.Item label="Стоимость приема" name="price" rules={[{ required: true }]}> 
          <Input />
        </Form.Item>
        <Button htmlType='submit'>
          Ok
        </Button>
      </Form>
    </>
  )
}

export default FormDoctor
