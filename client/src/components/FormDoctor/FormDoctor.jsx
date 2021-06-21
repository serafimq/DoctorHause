import { Form, Input, Select, InputNumber, Button, Divider, Progress,
  message, Upload, } from 'antd'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router';
import { updateDoctorThunk } from '../../redux/actionCreators/doctorAC';
import axios from 'axios'
import styleBut from '../General/AddButton/AddButton.module.scss'

const FormDoctor = ({visibleModal}) => {
  const dispatch = useDispatch()
  const { id } = useParams()
  console.log(id, 'id');

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

  const { Option } = Select;
  const onFinish = (values) => {
    dispatch(updateDoctorThunk(values, id, imagePath))
    visibleModal()
  }
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="+7">+7</Option>
      </Select>
    </Form.Item>
  );

  const [defaultFileList, setDefaultFileList] = useState([]);
  const [progress, setProgress] = useState(0);

  const normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

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
      const response = await axios.post("http://localhost:3006/api/v1/doctors/file", fmData, config);

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
    <>
      <Form autocomplete="off" {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
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
            <Option value="Лазерный хирург">Лазерный хирург</Option>
            <Option value="Логопед">Логопед</Option>
            <Option value="Паразитолог">Паразитолог</Option>
            <Option value="Психолог">Психолог</Option>
            <Option value="Семейный врач">Семейный врач</Option>
            <Option value="Филиппинский хиллер">Филиппинский хиллер</Option>
            <Option value="Сибирский шаман">Сибирский шаман</Option>
          </Select>
        </Form.Item>
        <Form.Item name='stage' label="Стаж" style={{ width: '100%' }} rules={[{ type: 'number', min: 0, max: 99, required: true },]}>
          <InputNumber />
        </Form.Item>
        <Form.Item label="Загрузка сертификата">
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
        <Form.Item name="phone" label="Phone Number" rules={[{ required: true }]}>
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item label="Метро" name="metro" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Стоимость приема" name="price" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Button className={styleBut.button} htmlType='submit'>
          Подтвердить
        </Button>
      </Form>
    </>
  )
}

export default FormDoctor
