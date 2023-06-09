
import { Button, Input, Modal, message } from 'antd';
import axios from 'axios';
import { useState } from 'react';
const ChangeTest = ({ id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState({
    testId: id,
    title: "",
    description: ""
  })
  const putTest = async () => {
    try {
      const resp = await axios.put('http://frez773-001-site1.atempurl.com/api/Test/update-test', { ...value }, {
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
    putTest()
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button style={{ margin: "50px 0" }} onClick={showModal}>
        Изменить тест
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} okText='Обновить' okType='default' onOk={handleOk} onCancel={handleCancel}>
        <Input placeholder='Title' onChange={e => setValue({ ...value, title: e.target.value })} />
        <Input placeholder='Description' onChange={e => setValue({ ...value, description: e.target.value })} />
      </Modal>
    </>
  );
};
export default ChangeTest;