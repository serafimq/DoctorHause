import {Col, Rate } from 'antd';
import style from './FeedBack.module.css'
export const FeedBack = ({ feedBack }) => {

  return (
    <div className={style.col} >
      <Col >
       <span className={style.autor}> {feedBack.author} </span> 
      </Col>
      <Col>
        <Rate disabled defaultValue={feedBack.stars} />
      </Col>
      <span className={style.text}> {feedBack.text} </span> 
    </div>
  )
}

