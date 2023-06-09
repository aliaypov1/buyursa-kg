import { Card } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CoursePages = () => {
  const { id } = useParams()
  const [result, setResult] = useState([])
  useEffect(() => {
    const getPages = async () => {
      const res = await axios(`http://frez773-001-site1.atempurl.com/api/Page/course/${id}/pages`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      console.log(res)
      setResult(res.data)
    }
    getPages()
  }, [])
  return (
    <div>
      <Card style={{ display: 'flex', marginTop: '40px' }}>
        {result.map(item =>
          <Link to={`/PageDetail/${item.id}`} style={{ cursor: 'pointer', marginRight: '20px' }} key={item.id}>{item.title}</Link>

        )}
      </Card>
    </div>
  );
};

export default CoursePages;