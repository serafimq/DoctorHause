import React, { useEffect, useState } from 'react'
import { Row, Col } from 'antd';
import style from './MainPage.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setAllDoctorThunk, sortDoctors,  } from '../../redux/actionCreators/doctorsAC'
import CardsDoctor from './CardsDoctor/CardsDoctor';
import News from './News/News';


export default function MainPage() {
  const doctors = useSelector(state => state.doctors)
  const doctor = useSelector(state => state.doctor)
  console.log(doctors, 'doctors');
  console.log(doctor, 'doctor');

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setAllDoctorThunk())
  }, [])

  //для сортировки

  const [sortedField, setSortedField] = useState(false)
  const handleSort = (e, sorted) => {
    dispatch(sortDoctors(e, sorted))
    setSortedField(!sortedField);
  }

  return (
    <Row className={style.main_page}>
      <Col span={6} push={18}>
        <News />
      </Col>
      <Col span={18} pull={6} className={style.colCentre}>
        <div className={style.input_sort}>
          <span className={style.span}><input onChange={(e) => handleSort(e, sortedField)} type='radio' name='sort' value='spec' ></input> По специализации </span>
          <span className={style.span}><input onChange={(e) => handleSort(e, sortedField)} type='radio' name='sort' value='rating' ></input> По рейтингу</span>
          <span className={style.span}><input onChange={(e) => handleSort(e, sortedField)} type='radio' name='sort' value='price' ></input> По стоимости приёма</span>
        </div>
        <Row justify="center">
          <Col className={style.card_doc} span={12} pull={0} justify="center">
            {doctors.map(item => item.approved ? <CardsDoctor
              id={item._id}
              key={item._id}
              item={item}
            />
              :
              ''
            )}

          </Col>
        </Row>
      </Col>

    </Row>
  )
}

