import { Card } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import VideoCourse from '../VideoLesson/VideoCourse';

const GetPage = ({ id }) => {
  const [page, setPage] = useState([])
  useEffect(() => {
    const getPage = async () => {
      const resp = await axios(`http://frez773-001-site1.atempurl.com/api/Page/course/page/${id}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      setPage(resp.data.pageDTO)

    }
    getPage()
  }, [])
  return (
    <div>
      {
        page &&
        <div className="container">
          <Card style={{ marginBottom: "40px" }} key={page.id}>
            <b style={{ marginBottom: '25px', fontSize: '40px' }}>{page.title}</b>
            <p style={{ marginBottom: '25px', fontSize: '30px' }}>{page.description}</p>
            <p style={{ fontSize: '20px' }}>{page.content}</p>
            <VideoCourse id={page.id} />
          </Card>
        </div>

      }
    </div>
  );
};

export default GetPage;