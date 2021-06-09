import React from 'react'
import style from './News.module.css'

const News = () => {
  return (
        <div className={style.scrollableContainer}>
          <p></p>
          <div className={style.cardNews}>
            <img className={style.cardImg} src="http://localhost:3006/public/img/depositphotos_13724305-stock-photo-stethoscope-on-clipboard.jpg" ></img>
            <div className="card-body">
              <h5 className={style.title}>Справочник популярных, неработающих лекарств.</h5>
              <p className="card-text"> здесь представлены средства, потенциально относящиеся к фармакологической группе «фуфломицины».</p>
              <a href="https://www.who.int/selection_medicines/list/ru/" className={style.link}>READ MORE</a>
            </div>
          </div>
          
          <div className={style.cardNews}>
            <img className={style.cardImg} src="http://localhost:3006/public/img/depositphotos_69165197-stock-photo-medicine-doctor-hand-working-with.jpg" ></img>
            <div className="card-body">
              <h5 className={style.title}>Некоммерческий проект медицинских знаний.</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://medspecial.ru/" className={style.link}>READ MORE</a>
            </div>
          </div>
          <div className={style.cardNews}>
            <img className={style.cardImg} src="http://localhost:3006/public/img/depositphotos_23805293-stock-photo-medicine-doctor-hand-working-with.jpg" ></img>
            <div className="card-body">
              <h5 className={style.title}>Самый авторитетный англоязычный международный справочник для врачей.</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://www.wolterskluwer.com/en/solutions/uptodate" className={style.link}>READ MORE</a>
            </div>
          </div>
          <div className={style.cardNews}>
            <img className={style.cardImg} src="http://localhost:3006/public/img/depositphotos_69165197-stock-photo-medicine-doctor-hand-working-with.jpg" ></img>
            <div className="card-body">
              <h5 className={style.title}>Международный медицинский справочник.</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://www.msdmanuals.com/ru/%D0%B4%D0%BE%D0%BC%D0%B0" className={style.link}>READ MORE</a>
            </div>
          </div>
        </div>
    
  )
}

export default News
