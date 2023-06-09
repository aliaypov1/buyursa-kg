import { Button, message } from 'antd';
import axios from 'axios';
import React from 'react';

const PageDelete = ({ id }) => {
  const deletePages = async () => {
    try {
      const res = await axios.delete(`http://frez773-001-site1.atempurl.com/page/delete/${id}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      message.success(res.data.message)
    } catch (error) {
      message.error(error.response.message)
    }
  }
  return (
    <div>
      <Button style={{ background: 'red', color: 'white' }} onClick={deletePages}>Удалить страницу</Button>
    </div>
  );
};

export default PageDelete;