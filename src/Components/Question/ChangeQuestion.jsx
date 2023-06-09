import { Button, Input, Modal, message } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';

const ChangeQuestion = ({ id }) => {
  const [value, setValue] = useState({
    questionId: id,
    text: ""
  })
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false)
    changeQuest()
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const changeQuest = async () => {
    try {
      const resp = await axios.put('http://frez773-001-site1.atempurl.com/api/Question/update-question', { ...value }, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      message.success(resp.data.message)
    } catch (error) {
      message.error(error.response.Message)
    }
  }
  return (
    <div>
      <Button onClick={showModal}>
        Обновить задание
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} okType='default' okText='Обновить' onOk={handleOk} onCancel={handleCancel}>

        <Input placeholder='Text' onChange={e => setValue({ ...value, text: e.target.value })} />
      </Modal>
    </div>
  );
};

export default ChangeQuestion;