import React, { useState } from 'react'
import ResultForm from '../ResultForm/ResultForm';
import {
  Modal,
  Button,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEventAxios } from '../../../redux/actionCreators/eventsAC';
import styleButton from '../../General/AddButton/AddButton.module.scss'

function ResultModal({ idEvent, modalCardClose }) {

  const dispatch = useDispatch()
  const id = useSelector(state => state.user.id)

  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const [modal1Visible, setModal1Visible] = useState(false)

  function visibleModal() {
    setModal1Visible(!modal1Visible)
  }
  

  const deleteHandler = (id, idEvent) => {
    dispatch(deleteEventAxios(id, idEvent))
    visibleModal()
    modalCardClose()
  }

  return (
    <>
      <div>
        <Button  style={{marginRight: 10}} className={styleButton.button} onClick={() => visibleModal()}>
          Добавить результат посещения
      </Button>
        <Button className={styleButton.button, styleButton.button__del} type="danger" onClick={() => deleteHandler( id, idEvent)}>
          Удалить событие из календаря
      </Button>
      </div>
      <Modal
        title="Добавить результат"
        style={{ top: 40 }}
        visible={modal1Visible}
        onOk={() => visibleModal()}
        onCancel={() => visibleModal()}
        width={800}
        footer={null}
      >
        <ResultForm idEvent={idEvent} visibleModal={visibleModal} />
      </Modal>
    </>
  )
}

export default ResultModal
