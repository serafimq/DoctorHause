import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAllHistoryThunk } from '../../redux/actionCreators/historyAC'
import { Card, Switch, Skeleton, Avatar } from 'antd';
import styleHistory from './History.module.css'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

const History = () => {

  const id = useSelector(state => state.user.id)
  const history = useSelector(state => state.history)
  const dispatch = useDispatch()

  console.log(history, 'history');

  useEffect(() => {
    dispatch(setAllHistoryThunk(id))
  }, [])

  const [loading, setLoading] = useState(true)

  // onChange = checked => {
  //   this.setState({ loading: !checked });
  // };

  const onChangeSwitch = () => {
    setLoading(!loading)
  }

  console.log(loading);

  return (
    <>
    <div className={styleHistory.switch_right}> Показывать загруженные файлы? &nbsp;
      <Switch checked={!loading}  onChange={onChangeSwitch} checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} defaultChecked/>
    </div>
    
    <div className={styleHistory.list}>
      {
        history ? history.map(el =>

          <Card
            style={{ marginTop: 16, width: 700 }}
            type="inner"
            // ${el.events[0].problem}
            title={`Жалоба:`}
            extra={<a href="#">More</a>}
            >
            {/* <div> Показывать файлы:   
            
            </div> */}
            <div >Выписанные рецепты: {el.prescription}  </div>
            <div >Требуемые анализы: {el.analyzes}</div>
            <div >{el.prescription}</div>
              {
              el.imagePath && el.imagePath.map(imgP => <Skeleton loading={loading}><Avatar  shape="square" loading={loading} style={{marginTop: 5, width: 500, height: 500}} src={`/img/${imgP}`} alt="FOTO NE OTOBRACHAETSYA"></Avatar></Skeleton>)
              } 
          </Card>
        )
          :
          <p>Истории болезней пока нет</p>
      }
    </div>
    </>
  )
}

export default History
