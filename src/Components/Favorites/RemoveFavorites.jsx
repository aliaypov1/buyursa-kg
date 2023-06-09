import { message } from 'antd';
import axios from 'axios';
import React from 'react';

const RemoveFavorites = ({ id }) => {
  const removeFavorit = async () => {
    try {
      const resp = await axios.post(`http://frez773-001-site1.atempurl.com/api/Student/RemoveFromFavourites?courseId=${id}`, {}, {
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
    <i style={{ cursor: 'pointer' }} onClick={removeFavorit} className="fa-solid fa-trash"></i>
  );
};

export default RemoveFavorites;