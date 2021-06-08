import React, { useEffect, useState } from 'react'
import { Row, Modal, Col, Card } from 'antd';
import style from './MainPage.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setOneDoctorThunk } from '../../redux/actionCreators/doctorAC'
import { setAllDoctorThunk, sortDoctors } from '../../redux/actionCreators/doctorsAC'
import CardsDoctor from './CardsDoctor/CardsDoctor';

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
    <Row>
      <Col span={6} push={18}>
        <div className={style.scrollableContainer}>
          <p></p>
          <div className={style.cardNews}>
            <img className={style.cardImg} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" ></img>
            <div className="card-body">
              <h5 className={style.title}>Справочник популярных, неработающих лекарств.</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://encyclopatia.ru/wiki/%D0%A0%D0%B0%D1%81%D1%81%D1%82%D1%80%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BF%D1%80%D0%B5%D0%BF%D0%B0%D1%80%D0%B0%D1%82%D0%BE%D0%B2" className={style.link}>READ MORE</a>
            </div>
          </div>
          
          <div className={style.cardNews}>
            <img className={style.cardImg} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" ></img>
            <div className="card-body">
              <h5 className={style.title}>Некоммерческий проект медицинских знаний.</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://medspecial.ru/" className={style.link}>READ MORE</a>
            </div>
          </div>
          <div className={style.cardNews}>
            <img className={style.cardImg} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" ></img>
            <div className="card-body">
              <h5 className={style.title}>Самый авторитетный англоязычный международный справочник для врачей.</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://www.wolterskluwer.com/en/solutions/uptodate" className={style.link}>READ MORE</a>
            </div>
          </div>
          <div className={style.cardNews}>
            <img className={style.cardImg} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" ></img>
            <div className="card-body">
              <h5 className={style.title}>Международный медицинский справочник.</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://www.msdmanuals.com/ru/%D0%B4%D0%BE%D0%BC%D0%B0" className={style.link}>READ MORE</a>
            </div>
          </div>
        </div>
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
           {doctors.map(item => <CardsDoctor 
           id={item._id} 
           key={item._id}
           item={item}
           />)}
        </div>
          
      </Col>
    </Row>

  )
}

