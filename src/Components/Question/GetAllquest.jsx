import { Card } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteQuestion from './DeleteQuestion';
import Loader from '../UI/Loader/Loader';

const GetAllquest = ({ id }) => {
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const resp = await axios(`http://frez773-001-site1.atempurl.com/api/Question/get-all-questions-by id?testId=${id}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      setResult(resp.data)
      setLoading(false)

    }
    getData()
  }, [])
  if (loading) return <div className="container"><Loader /></div>
  return (
    <div>
      {
        result.length > 0 ? result.map((item) => (
          <Card title={item.text} style={{ marginTop: '40px' }} extra={<DeleteQuestion id={item.id} />} key={item.id}>
            <Link to={`/AddAnswer/${item.id}`}>Коректировать задание</Link>
          </Card>
        ))
          :
          <p>Заданий нет</p>
      }
    </div>
  );
};

export default GetAllquest;