import Input from 'antd/es/input/Input';
import React, { useState } from 'react';
import Header from '../Header/Header';
import ProfileNavigate from '../Header/ProfileHeader';
import { Button, message } from 'antd';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import GetAllquest from './GetAllquest';
import ChangeTest from './ChangeTest';
import Loader from '../UI/Loader/Loader';

const QuestionAdd = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [question, setQuestion] = useState({
    text: "",
    testId: id
  })
  const addQuest = async () => {
    try {
      setLoading(true)
      const resp = await axios.post('http://frez773-001-site1.atempurl.com/api/Question/Create-question', { ...question }, {
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
    <div className=''>
      <Header />
      <ProfileNavigate />
      <div className="container">
        <ChangeTest id={id} />
        <Input onChange={e => setQuestion({ ...question, text: e.target.value })} placeholder='New question' />
        <Button onClick={addQuest}>Создать</Button>
        {loading ? <Loader/> :
        <GetAllquest id={id} />
  }
      </div>
    </div>
  );
};

export default QuestionAdd;