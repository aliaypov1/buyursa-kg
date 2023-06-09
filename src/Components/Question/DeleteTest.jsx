import { Button, message } from 'antd';
import axios from 'axios';
import React from 'react';

const DeleteTest = ({ id }) => {
  const deletes = async () => {
    try {
      const resp = await axios.delete(`http://frez773-001-site1.atempurl.com/api/Test/delete-test?testId=${id}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      message.success(resp.data.message)
    } catch (error) {
      message.error(error.response.message)
    }
  }
  return (

    <Button style={{ background: 'red', color: "white", marginRight: '20px' }} onClick={deletes}>Удалить</Button>

  );
};

export default DeleteTest;