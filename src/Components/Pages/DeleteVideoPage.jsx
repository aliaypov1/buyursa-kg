import { Button, message } from 'antd';
import axios from 'axios';
import React from 'react';

const DeleteVideoPage = ({ id }) => {
  const deleteVideo = async () => {
    try {
      const resp = await axios.delete(`http://frez773-001-site1.atempurl.com/api/VideoLesson/video/${id}/delete`, {
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
    <div>
      <Button style={{ background: 'red', color: 'white' }} onClick={deleteVideo}>Удалить</Button>
    </div>
  );
};

export default DeleteVideoPage;