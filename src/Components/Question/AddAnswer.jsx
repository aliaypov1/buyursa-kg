
import React, { useState } from 'react';
import ProfileNavigate from '../Header/ProfileHeader';
import Header from '../Header/Header';
import { Button, Input, message } from 'antd';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import GetAllAnswer from './GetAllAnswer';
import ChangeQuestion from './ChangeQuestion';
import Loader from '../UI/Loader/Loader';

const AddAnswer = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [answer, setAnswer] = useState(
    {
      questionId: id,
      text: "",
      isCorrect: true
    }
  )
  const AddAnswer = async () => {
    try {
      setLoading(true)
      const resp = await axios.post('http://frez773-001-site1.atempurl.com/api/Answer/Create-answer', { ...answer }, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      message.success(resp.data.message)
      setLoading(false)
    } catch (error) {
      message.error(error.response.message)
      setLoading(false)
    }
  }
  return (
    <div>
      <Header />
      <ProfileNavigate />
      <div className="container">

        <ChangeQuestion id={id} />


        <h1 style={{ textAlign: 'right', margin: '40px 0', fontSize: '29px' }}>Добавить ответ</h1>
        <Input placeholder='Add answer' onChange={e => setAnswer({ ...answer, text: e.target.value })} />
        <Button onClick={AddAnswer}>Добавить</Button>
        <br />
        <br />
        <br />
        <br />
        <h1 style={{ textAlign: 'center', fontSize: '32px' }}>Ответы</h1>
        {loading ? <Loader/> :
        <GetAllAnswer id={id} />
  }
      </div>
    </div>
  );
};

export default AddAnswer;