import React from 'react'
import style from './News.module.css'
import {
  ArrowRightOutlined, 
} from '@ant-design/icons';

const News = () => {
  return (
        <div className={style.scrollableContainer}>
          <p></p>
          <div className={style.cardNews}>
            <img className={style.cardImg} src="http://localhost:3006/public/img/depositphotos_13724305-stock-photo-stethoscope-on-clipboard.jpg" ></img>
            <div className="card-body">
              <h5 className={style.title}>Справочник популярных, неработающих лекарств.</h5>
              <p className={style.text}> здесь представлены средства, потенциально относящиеся к фармакологической группе «фуфломицины».</p>
              <a href="https://www.who.int/selection_medicines/list/ru/" className={style.link}>READ MORE <ArrowRightOutlined style={{ fontSize: '16px', color: '#08c' }} /></a>
            </div>
          </div>
          
          <div className={style.cardNews}>
            <img className={style.cardImg} src="http://localhost:3006/public/img/depositphotos_69165197-stock-photo-medicine-doctor-hand-working-with.jpg" ></img>
            <div className="card-body">
              <h5 className={style.title}>Некоммерческий проект медицинских знаний.</h5>
              <p className={style.text}>База знаний проекта MedSpecial.Ru содержит фундаментальную и редко изменяемую информацию по медицинским и смежным специальностям. Для удобства использования перейдите к выбору категорий или воспользуйтесь поиском.</p>
              <a href="https://medspecial.ru/" className={style.link}>READ MORE <ArrowRightOutlined style={{ fontSize: '16px', color: '#08c' }} /></a>
            </div>
          </div>
          <div className={style.cardNews}>
            <img className={style.cardImg} src="http://localhost:3006/public/img/depositphotos_23805293-stock-photo-medicine-doctor-hand-working-with.jpg" ></img>
            <div className="card-body">
              <h5 className={style.title}>Самый авторитетный англоязычный международный справочник для врачей.</h5>
              <p className={style.text}>When you care for patients, the stakes are high and every decision counts. You need the best evidence and clinical guidance at your fingertips to answer even the most complex questions with confidence.</p>
              <a href="https://www.wolterskluwer.com/en/solutions/uptodate"  className={style.link}>READ MORE <ArrowRightOutlined style={{ fontSize: '16px', color: '#08c' }} /></a> 
            </div>
          </div>
          <div className={style.cardNews}>
            <img className={style.cardImg} src="http://localhost:3006/public/img/depositphotos_69165197-stock-photo-medicine-doctor-hand-working-with.jpg" ></img>
            <div className="card-body">
              <h5 className={style.title}>Международный медицинский справочник.</h5>
              <p className={style.text}>Справочники MSD представляют собой исчерпывающий источник медицинской информации, охватывающий тысячи тем по всем областям медицины. Они доступны в виде бесплатного общедоступного сервиса для медицинских работников и широкой публики.</p>
              <a href="https://www.msdmanuals.com/ru/%D0%B4%D0%BE%D0%BC%D0%B0" className={style.link}>READ MORE <ArrowRightOutlined style={{ fontSize: '16px', color: '#08c' }} /></a>
            </div>
          </div>
        </div>
    
  )
}

export default News
