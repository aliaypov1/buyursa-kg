import { Card } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DeleteAnswer from './DeleteAnswer';
import Loader from '../UI/Loader/Loader';

const GetAllAnswer = ({ id }) => {
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const getAnswer = async () => {
      setLoading(true)
      const resp = await axios(`http://frez773-001-site1.atempurl.com/api/Answer/get-all-answers-by id?questionId=${id}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      setResult(resp.data)
      setLoading(false)
    }
    getAnswer()
  }, [])

 
  return (
    <div>
      {
        loading ? <div className="container"><Loader /></div> :
        result.length > 0 ? result.map((item) => (
          <Card style={{ marginTop: '40px' }} extra={<DeleteAnswer id={item.id} />} key={item.id} title='Ответ : '>
            {item.text}
          </Card>
        ))
          :
          <p>Ответов нет</p>
      }
    </div>
  );
};

export default GetAllAnswer;