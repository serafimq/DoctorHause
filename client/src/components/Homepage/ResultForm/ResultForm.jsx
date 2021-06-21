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

} from 'antd';

import styleButton from '../../General/AddButton/AddButton.module.scss'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { addOneHistoryThunk } from '../../../redux/actionCreators/historyAC';

function ResultForm({ visibleModal, idEvent }) {

  const id = useSelector(state => state.user.id)

  const [componentSize, setComponentSize] = useState('default');
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

  const dispatch = useDispatch()

  const onFinish = (values) => {
    let beforeSent;
    if (values['nextDateTime']) {
      beforeSent = { ...values, nextDateTime: values.nextDateTime.format('YYYY/MM/DD HH:mm') }
    }
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

  const [imagePath, setImagePath] = useState([])
  
  const handleOnChange = (e) => {
    if (e.event) {
      setImagePath(prev => [...prev, e.file.name])
    }
  };

  return (
    <Form
    autocomplete="off"
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
        </Form.Item>
      </Form.Item>
      <Form.Item name="nextDateTime" label="Дата и время следующего посещения" >
        <DatePicker
          format={"YYYY/MM/DD HH:mm"}
          showTime
          showNow={true}
        />
      </Form.Item>
      <Form.Item name="analyzes" label="Перечень необходимых анализов" rules={[{ required: true, message: 'Заполните необходимые анализы!' }]}>
        <Input.TextArea placeholder="Анализы" />
      </Form.Item>
      <Form.Item
        name="price"
        label="Сумма приема"
        rules={[{ required: true }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name="comment" label="Комментарий к записи">
        <Input.TextArea placeholder="Комментарий" />
      </Form.Item>
      <Button className={styleButton.button} htmlType="submit" >
        Добавить результат
          </Button>
    </Form>
  )
}

export default ResultForm
