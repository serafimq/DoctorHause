import React from 'react'
import style from './AddButton.module.scss'
import {
  Button,
} from 'antd';
const AddButton = ({title, visibleModal}) => {
  return (
      <Button onClick={() => visibleModal()} className={style.button}>
        {title}
      </Button>
  )
}

export default AddButton
