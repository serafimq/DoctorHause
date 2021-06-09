import {Col, Rate } from 'antd';
export const FeedBack = ({ feedBack }) => {
  return (
    <Col>
      <Col>
        {feedBack.author}
      </Col>
      <Col>
        <Rate disabled defaultValue={feedBack.stars} />
      </Col>
      {feedBack.text}
    </Col>
  )
}

