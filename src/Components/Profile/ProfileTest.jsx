import { Card, } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteTest from '../Question/DeleteTest';

const ProfileTest = ({ id, props }) => {
  const [result, setResult] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await axios(`http://frez773-001-site1.atempurl.com/api/Test/get-all-tests-by-page-id?pageId=${id}`, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        setResult(resp.data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])
  return (
    <>
      <div className='container'>
        {
          result.length > 0 ? result.map((item) => (
            <Card extra={<> <DeleteTest id={item.id} /> <Link to={`/Question/${item.id}`}>Зайти</Link> <Link to={`/QuestionAdd/${item.id}`} style={{ marginLeft: '12px' }}>Добавить задание</Link>  </>} style={{ marginTop: '40px' }} title={item.title} bordered={false}>
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

export default ProfileTest;