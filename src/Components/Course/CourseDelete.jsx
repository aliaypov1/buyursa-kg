import { Button, message } from 'antd';
import axios from 'axios';
import React from 'react';

const CourseDelete = ({ id }) => {
  const deleteCourse = async () => {
    try {
      const res = await axios.delete(`http://frez773-001-site1.atempurl.com/api/Course/delete-course/${id}`, {
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
      <Button onClick={deleteCourse} style={{ color: 'white', background: 'red' }}>Удалить курс</Button>
    </div>
  );
};

export default CourseDelete;