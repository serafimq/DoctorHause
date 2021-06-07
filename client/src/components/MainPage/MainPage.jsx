import React, { useState } from 'react'
import { List, Avatar } from 'antd';
import { Row, Modal, Col, Affix, Button } from 'antd';
import style from './MainPage.module.css'
import CardDoctorPage from '../cardDoctorPage/cardDoctorPage';

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
  {
    id: 5,
    title: 'Карточка врача',
    spetialization: 285,
  },
];

export default function MainPage() {

  const [modal1Visible, setModal1Visible] = useState(false)

  function visibleModal() {
    setModal1Visible(!modal1Visible)
  }

  // const [container, setContainer] = useState(null);


  return (

    <Row>
      <Col span={18}>

        <List className={style.radius}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <>
              <List.Item  >
                <List.Item.Meta className={style.meta}

                  title={<a onClick={() => visibleModal()}> {item.title}</a>}

                  description={<li  > {<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />} <br /> {item.title}<br /> {item.spetialization} </li>}


                />
              </List.Item>
              <Modal
                title="Информация о враче"
                style={{ top: 20 }}
                visible={modal1Visible}
                onOk={() => visibleModal()}
                onCancel={() => visibleModal()}
                width={900}
              >
                <CardDoctorPage />
              </Modal>
            </>
          )}
        />
      </Col>


      <Col span={6}>
        <div className={style.scrollableContainer}>
          
          
          <div className={style.news}>
            <a href='https://encyclopatia.ru/wiki/%D0%A0%D0%B0%D1%81%D1%81%D1%82%D1%80%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BF%D1%80%D0%B5%D0%BF%D0%B0%D1%80%D0%B0%D1%82%D0%BE%D0%B2' className={style.card} >Расстрельный список препаратов</a><br /><br />
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

