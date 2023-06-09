import { Button, message } from 'antd';
import axios from 'axios';
import React from 'react';

const DeleteAnswer = ({ id }) => {
  const deleteAns = async () => {
    try {
      const resp = await axios.delete(`http://frez773-001-site1.atempurl.com/api/Answer/delete-answer?answerId=${id}`, {
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
    <Button style={{ background: 'red', color: 'white' }} onClick={deleteAns}>Удалить</Button>
  );
};

export default DeleteAnswer;