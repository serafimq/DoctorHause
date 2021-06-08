import React from 'react'
import style from './News.module.css'

const News = () => {
  return (
    
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
    
  )
}

export default News
