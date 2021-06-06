import React, { useState } from 'react'
import ResultForm from '../ResultForm/ResultForm';
import {
  Modal,
  Button,
} from 'antd';


function ResultModal({idEvent}) {

  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const [modal1Visible, setModal1Visible] = useState(false)

  function visibleModal() {
    setModal1Visible(!modal1Visible)
  }

  return (
    <>
      <Button type="primary" onClick={() => visibleModal()}>
        Добавить результат посещения
      </Button>
      <Modal
        title="Добавить результат"
        style={{ top: 40 }}
        visible={modal1Visible}
        onOk={() => visibleModal()}
        onCancel={() => visibleModal()}
        width={800}
      >
      <ResultForm idEvent={idEvent} visibleModal={visibleModal}/>
        </Modal>
        </>
  )
}

export default ResultModal
