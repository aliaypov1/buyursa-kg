import { Card } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';

const PagesDetails = () => {
  const [result, setResult] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      const res = await axios(`http://frez773-001-site1.atempurl.com/api/Page/course/page/${id}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      console.log(res)
      setResult(res.data.pageDTO)
    }
    getData()
  }, [])
  return (
    <div>
      <Header />
      <Card style={{ marginTop: '120px' }}>
        {
          result &&
          <Card style={{ marginBottom: "40px" }} key={result.id}>
            <b style={{ marginBottom: '25px', fontSize: '40px' }}>{result.title}</b>
            <p style={{ marginBottom: '25px', fontSize: '30px' }}>{result.description}</p>
            <p style={{ fontSize: '20px' }}>{result.content}</p>
          </Card>

        }
      </Card>
    </div>
  );
};

export default PagesDetails;