import { Card, Col, Row, message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import ProfileNavigate from '../Header/ProfileHeader';
import { Link } from 'react-router-dom';
import Loader from '../UI/Loader/Loader';

const GetTest = ({ id, props }) => {
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const resp = await axios(`http://frez773-001-site1.atempurl.com/api/Test/get-all-tests-by-page-id?pageId=${id}`, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        setResult(resp.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getData()
  }, [])
  if (loading) return <div className="container"><Loader /></div>
  return (
    <>
      <div className='container'>
        {
          result.length > 0 ? result.map((item) => (
            <Card extra={<> <Link to={`/Question/${item.id}`}>Перейти к задачам</Link> {props} </>} style={{ marginTop: '40px' }} title={item.title} bordered={false}>
              <p>{item.description}</p>
            </Card>
          ))
            :
            <p>тестов нет</p>
        }
      </div>
    </>
  );
};

export default GetTest;