import React, { useState } from 'react';
import axios from 'axios';
import { Button, message } from 'antd';

const CreateCourse = ({ close, setLoading }) => {
  const [isFree, setIsFree] = useState(true)
  const [value, setValue] = useState({
    title: 'Title',
    description: 'Desc',
    isFree: isFree,
    price: 0
  })
  const handleClick = () => {
    setValue(prevState => ({
      ...prevState,
      isFree: !prevState.isFree
    }));
  };
  console.log(value)
  const createCourse = async () => {
    try {
      const resp = await axios.post('http://frez773-001-site1.atempurl.com/api/Course/create-course', { ...value }, {

        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      message.success(resp.data.message)
      window.location.reload()
    } catch (error) {
      message.error(error.response.message)
    }
  }
  return (
    <div>
      <Button onClick={createCourse}  >Создать курс</Button>
    </div>
  );
};

export default CreateCourse;