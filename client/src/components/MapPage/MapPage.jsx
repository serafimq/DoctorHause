import React, { useEffect } from 'react'
// import pic from '../../../public/plas.svg'

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import style from './mapPage.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setAllUserAddressThunk, getCountUserAddressThunk } from '../../redux/actionCreators/addressAC';
import { EnvironmentOutlined } from '@ant-design/icons';
import mapStyle from "./mapStyle"
import {
  Form,
  InputNumber,
  Button
} from 'antd';
import styleButton from '../General/AddButton/AddButton.module.scss'

const containerStyle = {
  width: '700px',
  height: '700px'
};

const center = {
  lat: 55.75222,
  lng: 37.61556,
};

const layout = {
  labelCol: {
    span: 17,
  },
  wrapperCol: {
    span: 7,
  },
};

const MapPage = () => {

  const id = useSelector(state => state.user.id)
  const dispatch = useDispatch()
  const address = useSelector(state => state.address)
  console.log('address', address);

  useEffect(() => {
    dispatch(setAllUserAddressThunk(id))
  }, [])
  console.log();

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBrCV2mahsSsU2ZCwJcFTyx8EIT0oEqlj4"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const options = {
    styles: mapStyle,
    // disableDefaultUI: true,
    zoomControl: true,
  }

  const onFinish = (values) => {
    console.log(values.count, '<<<<<<');
    dispatch(getCountUserAddressThunk(id, values.count))
  }

  const returnHandler = () => {
    dispatch(setAllUserAddressThunk(id))
  }

  return isLoaded ? (
    <>
      <div className={style.maps_orientation} >
        <h2>Карта с отметками посещенных адресов</h2>
        <Form {...layout} className={style.form_orientation} name="nest-messages" onFinish={onFinish}>
          <Form.Item name="count" label="Введите количество последних посещений">
            <InputNumber style={{ width: 150 }} placeholder="Количество " />
          </Form.Item>
          <Button  className={styleButton.button} type="primary" style={{ marginLeft: 30 }} htmlType="submit" >
            Изменить количество
          </Button>
          <Button className={styleButton.button__del} type="danger" style={{ marginLeft: 50 }} onClick={() => returnHandler()} htmlType="submit" >
            Вернуть все посещения
          </Button>
        </Form>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{
            lat: 55.75222,
            lng: 37.61556
          }}
          zoom={13}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={options}
        >
          {
            address ? address.map(el =>
              <Marker
                position={{ lat: el.location.lat, lng: el.location.lng }}
                // label={el.hospital}
                title={el.hospital + "\n" + el.address + "\n" + el.date}
                icon={{
                  url: '/medical.png',
                  scaledSize: new window.google.maps.Size(37, 37)
                  // size: 1
                }}
              >

              </Marker>)
              : null
          }
          <></>
        </GoogleMap>
      </div >
    </>
  ) : <></>
}

export default React.memo(MapPage)
