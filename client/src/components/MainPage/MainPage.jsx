import React, { useEffect, useState } from 'react'
import { Row, Modal, Col, Card } from 'antd';
import style from './MainPage.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setOneDoctorThunk } from '../../redux/actionCreators/doctorAC'
import { setAllDoctorThunk, sortDoctors } from '../../redux/actionCreators/doctorsAC'
import CardsDoctor from './CardsDoctor/CardsDoctor';
import News from './News/News';

const { Meta } = Card;

export default function MainPage() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setAllDoctorThunk())
  }, [])

  const doctors = useSelector(state => state.doctors)

  //для сортировки

  const [sortedField, setSortedField] = useState(false)
  console.log(sortDoctors, 'sortdoctors');
  const handleSort = (e, sorted) => {
    dispatch(sortDoctors(e, sorted))
    setSortedField(!sortedField);
  }
  // console.log(sortedField, 'sorted');


  return (
    <Row className={style.main_page}>
      <Col span={6} push={18}>
        <News />
      </Col>
      
      <Col span={18} pull={6} className={style.colCentre}>
         <div className={style.input_sort}>
         <select onChange={(e) => handleSort(e, sortedField)} class="form-select" aria-label="Default select example">
          <option selected>Sort By:</option>
          <option value="spec">По специализации</option>
          <option value="rating">По рейтингу</option>
          <option value="price">По стоимости</option>
        </select>
        </div> 
        <div className={style.doctors}>
          
        {doctors.map(item => item.approved ? <CardsDoctor 
           id={item._id} 
           key={item._id}
           item={item}
           />
           :
           ''
           )}
        </div>
          
      </Col>
    </Row>

  )
}

