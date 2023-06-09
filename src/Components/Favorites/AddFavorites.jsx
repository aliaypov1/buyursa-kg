import { message } from 'antd';
import axios from 'axios';
import React from 'react';

const AddFavorites = ({ id }) => {
  const addFavorites = async () => {
    try {
      const resp = await axios.post(`http://frez773-001-site1.atempurl.com/api/Student/AddToFavourites?courseId=${id}`, {}, {
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
      <i style={{ cursor: 'pointer' ,fontSize:'28px',marginBottom:"20px"}} onClick={addFavorites} className="fa-sharp fa-solid fa-bookmark"></i>
    </div>
  );
};

export default AddFavorites;