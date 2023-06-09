import { Button, message } from 'antd';
import axios from 'axios';
import React from 'react';

const DeleteQuestion = ({ id }) => {
  const deleteAns = async () => {
    try {
      const resp = await axios.delete(`http://frez773-001-site1.atempurl.com/api/Question/delete-question?questionId=${id}`, {
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

export default DeleteQuestion;