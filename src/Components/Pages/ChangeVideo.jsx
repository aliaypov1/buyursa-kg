import React, { useState } from 'react';
import Header from '../Header/Header';
import ProfileNavigate from '../Header/ProfileHeader';
import { Button, Input, message, Form } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ChangeVideo = () => {
  const { id } = useParams()
  const [value, setValue] = useState({
    videoId: id,
    title: "",
    description: "",
    videoUrl: "",
    pageId: id
  })
  const changeVideo = async () => {
    try {
      const res = await axios.put(`http://frez773-001-site1.atempurl.com/api/VideoLesson/video/${id}/update`, { ...value }, {
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
    <div >
      <Header />
      <ProfileNavigate />
      <div className="container">
        <Form>
          <Form.Item>
            <Input placeholder='Title' onChange={e => setValue({ ...value, title: e.target.value })} />
          </Form.Item>
          <Form.Item>
            <Input placeholder='videoUrl' onChange={e => setValue({ ...value, videoUrl: e.target.value })} />
          </Form.Item>
          <Form.Item>
            <TextArea placeholder='Description' onChange={e => setValue({ ...value, description: e.target.value })} />
          </Form.Item>
          <Form.Item>
            <Button onClick={changeVideo}>Изменить урок</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ChangeVideo;
