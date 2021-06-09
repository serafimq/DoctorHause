import React, { useEffect } from 'react'

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import style from './mapPage.module.css'
import { useSelector } from 'react-redux';

const containerStyle = {
  width: '700px',
  height: '700px'
};

const center = {
  lat: 55.75,
  lng: 37.6167,
};

const MapPage = () => {

  const id = useSelector(state => state.user.id)

  // let map;
  // const maps1 = document.querySelector('.maps')
  // console.log(resultCoordination)

  // function initMap() {
  //   console.log(231564);
  //   map = new google.maps.Map(document.querySelector('#map'), {
  //     center: { lat: 10.397, lng: 70.644 },
  //     zoom: 2
  //   });
  // }

  // function addMarker(map, arrLocation = []) {
  //   arrLocation.forEach(el => {
  //     new google.maps.Marker({
  //       position: el.cood,
  //       title: el.name,
  //       map: map
  //     })
  //   })
  // }

  // useEffect(() => {
  //   dispatch(setAllHistoryThunk(id))
  // }, [])


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

  return isLoaded ? (
    <div className={style.maps_orientation} >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </div>
  ) : <></>

}

export default React.memo(MapPage)
