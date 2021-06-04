import React from 'react'
import { List, Avatar } from 'antd';
import { Row, Col } from 'antd';
import style from './MainPage.module.css'

const data = [
  {
    id: 1,
    title: 'Карточка врача',
    spetialization: 15,

  },
  {
    id: 2,
    title: 'Карточка врача',
    spetialization: 17,

  },
  {
    id: 3,
    title: 'Карточка врача',
    spetialization: 5,

  },
  {
    id: 4,
    title: 'Карточка врача',
    spetialization: 20,
  },
];

const news = [
  {
    title: 'news 1',
  },
  {
    title: 'news 2',
  },
  {
    title: 'news 3',
  },
  {
    title: 'news 4',
  },
];


export default function MainPage() {


  return (

    <Row>
      <Col span={13}>

        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta

                title={<a href="https://ant.design">{item.title}</a>}

                description={<li  > {<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />} <br /> {item.title}<br /> {item.spetialization} </li>}


              />
            </List.Item>
          )}
        />
      </Col>


      <Col span={11}>
        <List
          itemLayout="horizontal"
          dataSource={news}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta

                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
      </Col>
    </Row>











    // <Row>
    //   <Col className={style.right_col} span={6} push={18}>
    //     <List

    //       itemLayout="horizontal"
    //       dataSource={news}
    //       renderItem={item => (
    //         <List.Item>
    //           <List.Item.Meta
    //             avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
    //             title={<a href="https://ant.design">{item.title}</a>}
    //             description="Ant Design, a design language for background applications, is refined by Ant UED Team"
    //           />
    //         </List.Item>
    //       )}
    //     />
    //   </Col>
    //   <Col className={style.left_col} span={18} pull={6}>
    //     <List
    //     className={style.margin}
    //       itemLayout="horizontal"
    //       dataSource={data}
    //       renderItem={item => (
    //         <List.Item>
    //           <List.Item.Meta
    //             avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
    //             title={<a href="https://ant.design">{item.title}</a>}
    //             description="Ant Design, a design language for background applications, is refined by Ant UED Team"
    //           />
    //         </List.Item>
    //       )}
    //     />
    //   </Col>
    // </Row>



  )
}

