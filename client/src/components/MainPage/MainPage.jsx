import React, { useEffect } from 'react'
import { Row, Col  } from 'antd';
import style from './MainPage.module.css'
import { useDispatch, useSelector } from 'react-redux';

import { setAllDoctorThunk } from '../../redux/actionCreators/doctorsAC'
import CardsDoctor from './CardsDoctor/CardsDoctor';

export default function MainPage() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setAllDoctorThunk())
  }, [])

  const doctors = useSelector(state => state.doctors)

  

  return (
    <Row>
      <Col span={6} push={18}>
        <div className={style.scrollableContainer}>
          <div className={style.news}>
            <a className={style.card} href='https://encyclopatia.ru/wiki/%D0%A0%D0%B0%D1%81%D1%81%D1%82%D1%80%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BF%D1%80%D0%B5%D0%BF%D0%B0%D1%80%D0%B0%D1%82%D0%BE%D0%B2' className={style.card} >Расстрельный список препаратов</a><br /><br />
            <p className={style.text}>Справочник популярных, но при этом неработающих лекарств и методов диагностики, который ведет врач-невролог Никита Жуков.</p>
          </div>
          <div className={style.news}>
            <a href='https://www.msdmanuals.com/ru/%D0%B4%D0%BE%D0%BC%D0%B0' className={style.card} >Справочник MSD</a><br /><br />
            <p className={style.text}>Международный медицинский справочник, версия которого существует в том числе и на русском языке. Проект финансирует американская фармацевтическая компания Merck, однако справочник составляют независимые эксперты, которые не имеют права работать на фармкорпорацию и рекламировать ее продукты.</p>
          </div>
          <div className={style.news}>
            <a href='https://medspecial.ru/' className={style.card}>Medspecial</a><br /><br />
            <p className={style.text}>Некоммерческий проект по популяризации медицинских знаний. Его создали российские врачи, которые придерживаются принципов доказательной медицины. В разделе «Для пациентов» есть грамотные и понятные статьи про наше здоровье: с какого возраста начинать говорить с детьми о вреде алкоголя, зачем нужны прививки и как развивается пневмония.</p>
          </div>
          <div className={style.news}>
            <a href='https://www.wolterskluwer.com/en/solutions/uptodate' className={style.card} >UpToDate</a><br /><br />
            <p className={style.text}>Самый авторитетный англоязычный международный справочник для врачей. Его составляют медицинские специалисты на основе статей из научных журналов. Большая часть «врачебных» статей доступна только за деньги. «Пациентский» раздел бесплатный. Чтобы узнать главное о болезнях и методах их лечения. В каждой пациентской статье есть советы по профилактике болезни и рекомендации по здоровому образу жизни.</p>
          </div>
        </div>
      </Col>
      <Col span={18} pull={6} className={style.colCentre}>
          
           {doctors.map(item => <CardsDoctor 
           id={item._id} 
           key={item._id}
           item={item}
           />)}
          
      </Col>
    </Row>

  )
}

