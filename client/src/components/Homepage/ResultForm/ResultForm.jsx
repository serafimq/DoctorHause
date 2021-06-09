import React, { useState } from 'react'
import {
  Form,
  Input,
  Button,
  Upload,
  InputNumber,
  DatePicker,
  Progress,
  message,
  Checkbox,

} from 'antd';

import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { addOneHistoryThunk } from '../../../redux/actionCreators/historyAC';

function ResultForm({ visibleModal, idEvent }) {

  const id = useSelector(state => state.user.id)
  console.log('idididid', id);


  const [componentSize, setComponentSize] = useState('default');

  // const [inputPrescription, setInputPrescription] = useState("")
  // const [inputDateTime, setInputDateTime] = useState("")
  // const [inputAnalyzes, setInputAnalyzes] = useState("")
  // const [inputPrice, setInputPrice] = useState("")
  // const [inputComment, setInputComment] = useState("")

  // const resultHandler = (e) => {
  //   console.log('eeeee', e);
  //   e.preventDefault()
  //   console.log(inputPrescription, 'inputPrescription');
  //   console.log(inputDateTime, 'inputDateTime');
  //   console.log(inputAnalyzes, 'inputAnalyzes');
  //   console.log(inputPrice, 'inputPrice');
  //   console.log(inputComment, 'inputComment');
  //   console.log(formData.dateTime, 'formData');
  //   visibleModal()
  // }

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

  // const checkPrice = (_, value) => {
  //   if (value.number > 0) {
  //     return Promise.resolve();
  //   }

  //   return Promise.reject(new Error('Сумма должна быть больше 0'));
  // };

  // const [formData, setFormData] = useState({});

  // function onChange(value, dateString) {
  //   if (value) {
  //     setFormData({
  //       ...formData,
  //       "dateTime": value.toISOString(true)
  //     });
  //   }
  // }

  const dispatch = useDispatch()

  const onFinish = (values) => {
    let beforeSent;
    if (values['nextDateTime']) {
      beforeSent = { ...values, nextDateTime: values.nextDateTime.format('YYYY/MM/DD HH:mm') }
    }
    console.log('Success:', beforeSent);
    
    dispatch(addOneHistoryThunk(beforeSent, id, idEvent, imagePath))
    visibleModal()
  };

  const onSuccess = (result, file) => {
    console.log(file, 'file');
  }

  const [defaultFileList, setDefaultFileList] = useState([]);
  const [progress, setProgress] = useState(0);

  const uploadImage = async (options) => {
    const { onSuccess, onError, file, onProgress } = options;
    console.log('file', file);
    const fmData = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" },

      onUploadProgress: event => {
        const percent = Math.floor((event.loaded / event.total) * 100);
        console.log('percent', percent);
        setProgress(percent);
        if (percent === 100) {
          console.log('percent222', percent);

          setTimeout(() => setProgress(0), 1000);
        }
        onProgress({ percent: (event.loaded / event.total) * 100 });
      }
    };
    fmData.append("image", file);

    try {
      const response = await axios.post("http://localhost:3006/file", fmData, config);

      if (response.status === 200) {
        message.success(`file uploaded successfully.`);
        onSuccess("Ok");
        console.log("server res: ", response);
      } else {
        message.error(`file upload failed.`);
      }

    } catch (err) {
      console.log("Eroor: ", err);
      const error = new Error("Some error");
      onError({ err });
    }
  };

  // const onChangeFile = (info) => {
  //   console.log('info', info);
  //   const { status } = info.file;
  //   if (status !== 'uploading') {
  //     console.log(123);
  //     console.log(info.file, info.fileList);
  //   }
  //   if (status === 'done') {
  //     console.log('infoDONE');
  //     message.success(`${info.file.name} file uploaded successfully.`);
  //   } else if (status === 'error') {
  //     message.error(`${info.file.name} file upload failed.`);
  //   }
  // }
  const [imagePath, setImagePath] = useState([])
  
  const handleOnChange = (e) => {
    if (e.event) {
      setImagePath(prev => [...prev, e.file.name])
    }
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
    >
      <Form.Item name="prescription" label="Рецепты врача" rules={[{ required: true, message: 'Заполните необходимые рецепты!' }]}>
        <Input.TextArea placeholder="Рецепты" />
      </Form.Item>
      <Form.Item label="Загрузка результатов">
        <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
          <Upload
            accept="image/*"
            customRequest={uploadImage}
            onChange={handleOnChange}
            listType="picture-card"
            defaultFileList={defaultFileList}
            className="image-upload-grid"
          >
            {defaultFileList.length >= 1 ? null : <div>Upload Button</div>}
          </Upload>
          {progress > 0 ? <Progress percent={progress} /> : null}
          {/* <Upload.Dragger
            {...props}
            name="files"
            onSuccess={onSuccess}
            customRequest={uploadImage}
            defaultFileList={defaultFileList}
            className="image-upload-grid"
            onChange={onChangeFile}
            accept="image/*"
            listType="picture-card"
          >
            {defaultFileList.length >= 1 ? <p className="ant-upload-drag-icon"></p> : <div>Upload Button</div>}
            <InboxOutlined />
            {progress > 0 ? <Progress percent={progress} /> : null}
            <p className="ant-upload-text">Нажать или перетащить файл</p>
            <p className="ant-upload-hint">Поддержка одиночной или массовой загрузки</p>
          </Upload.Dragger> */}
        </Form.Item>
      </Form.Item>
      <Form.Item name="nextDateTime" label="Дата и время следующего посещения" >
        <DatePicker
          format={"YYYY/MM/DD HH:mm"}
          showTime
          // defaultValue={moment([])}
          // onChange={onChange}
          showNow={true}
        />
      </Form.Item>
      <Form.Item name="analyzes" label="Перечень необходимых анализов" rules={[{ required: true, message: 'Заполните необходимые анализы!' }]}>
        <Input.TextArea placeholder="Рецепты" />
      </Form.Item>
      <Form.Item
        name="price"
        label="Сумма приема"
        rules={[{ required: true }]}
      // rules={[
      //   {
      //     validator: checkPrice,
      //   },
      // ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name="comment" label="Комментарий к записи">
        <Input.TextArea placeholder="Комментарий" />
      </Form.Item>
      <Button type="primary" htmlType="submit" >
        Добавить результат
          </Button>
    </Form>
  )
}

export default ResultForm
