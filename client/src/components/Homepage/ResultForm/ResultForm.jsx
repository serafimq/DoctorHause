import React, { useState } from 'react'
import {
  Form,
  Input,
  Button,
  Upload,
  InputNumber,
  DatePicker
} from 'antd';

import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import moment from 'moment'

function ResultForm({visibleModal}) {


  const [componentSize, setComponentSize] = useState('default');

  const [inputPrescription, setInputPrescription] = useState("")
  const [inputDateTime, setInputDateTime] = useState("")
  const [inputAnalyzes, setInputAnalyzes] = useState("")
  const [inputPrice, setInputPrice] = useState("")
  const [inputComment, setInputComment] = useState("")

  const resultHandler = (e) => {
    console.log('eeeee', e);
    e.preventDefault()
    console.log(inputPrescription, 'inputPrescription');
    console.log(inputDateTime, 'inputDateTime');
    console.log(inputAnalyzes, 'inputAnalyzes');
    console.log(inputPrice, 'inputPrice');
    console.log(inputComment, 'inputComment');
    console.log(formData.dateTime, 'formData');
    visibleModal()
  }

  const normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const checkPrice = (_, value) => {
    if (value.number > 0) {
      return Promise.resolve();
    }

    return Promise.reject(new Error('Сумма должна быть больше 0'));
  };

  const [formData, setFormData] = useState({});

  console.log(formData);

  function onChange(value, dateString) {
    if (value) {
      console.log(value, 'value');
      setFormData({
        ...formData,
        "dateTime": value.toISOString(true)
      });
    }
  }



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
      onFinish={resultHandler}
    >
      <Form.Item label="Рецепты врача">
        <Input.TextArea value={inputPrescription} onChange={(e) => setInputPrescription(e.target.value)} name="prescription" placeholder="Рецепты" />
      </Form.Item>
      {/* <Form.Item label="Загрузка результатов">
        <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Нажать или перетащить файл</p>
            <p className="ant-upload-hint">Поддержка одиночной или массовой загрузки</p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item> */}
      <Form.Item label="Дата и время следющего посещения" >
        <DatePicker
          name="dateTime"
          format={"YYYY/MM/DD HH:mm"}
          showTime
          defaultValue={moment([])}
          onChange={onChange}
          showNow={true}
        />
        {/* <input type="datetime-local" value={inputDateTime} onChange={(e) => setInputDateTime(e.target.value)} name="dateTime" /> */}
      </Form.Item>
      <Form.Item label="Перечень необходимых анализов">
        <Input.TextArea value={inputAnalyzes} onChange={(e) => setInputAnalyzes(e.target.value)} name="analyzes" placeholder="Рецепты" />
      </Form.Item>
      <Form.Item
        // name="price"
        label="Сумма приема"
        rules={[
          {
            validator: checkPrice,
          },
        ]}
      >
        <InputNumber value={inputPrice} onChange={(e) => setInputPrice(e)} name="price" />
      </Form.Item>
      <Form.Item label="Комментарий к записи">
        <Input.TextArea value={inputComment} onChange={(e) => setInputComment(e.target.value)} name="comment" placeholder="Комментарий" />
      </Form.Item>
      {/* onClick={submitHandler} */}
      <Button onClick={resultHandler} type="primary" htmlType="submit" >
        Добавить результат
          </Button>
    </Form>
  )
}

export default ResultForm
