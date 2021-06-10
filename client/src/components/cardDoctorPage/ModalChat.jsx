import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { Chat } from './Chat/Chat';
import WebSock from './Chat/Socket';

export const ModalChat = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Чат
      </Button>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {/* <Chat/> */}
        <WebSock/>
      </Modal>
    </>
  );
};