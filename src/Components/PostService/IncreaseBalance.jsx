import { Button, Input, message, Modal } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';

const IncreaseBalance = () => {
  const [money, setMoney] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const incBalance = async () => {
    try {
      const resp = await axios.post(`http://frez773-001-site1.atempurl.com/api/Student/IncreaseMoneyBalance?money=${money}`, {}, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      message.success(resp.data.message)
    } catch (error) {
      message.error(error.response.message)
    }
  }
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    incBalance()
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button onClick={showModal}>
        Пополнить баланс
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} okType='default' okText='Пополнить' onOk={handleOk} onCancel={handleCancel}>
        <Input onChange={e => setMoney(e.target.value)} type='number' />
      </Modal>
    </>
  );
};

export default IncreaseBalance;