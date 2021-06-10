import {Col, Rate } from 'antd';
import style from './FeedBack.module.css'
export const FeedBack = ({ feedBack }) => {

  return (
    <Col >
      {/* <Col>
        {feedBack.author}
      </Col> */}
      <Col>
        <Rate disabled defaultValue={feedBack.stars} />
      </Col>
      {feedBack.text}
    </Col>
  )
}

