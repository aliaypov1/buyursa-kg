import { Card } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DeleteVideoPage from './DeleteVideoPage';

const CourseVideo = ({ id, props }) => {
  const [result, serResult] = useState([])
  useEffect(() => {
    const getData = async () => {
      const resp = await axios(`http://frez773-001-site1.atempurl.com/api/VideoLesson/page/${id}/videos`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      console.log(resp)
      serResult(resp.data)
    }
    getData()
  }, [])
  return (
    <div style={{ marginTop: '80px' }}>
      {
        result.map(item =>
          <Card style={{ margin: '80px 0', padding: '0 0 0 60px  ' }} extra={props} key={item.id}>
            <p style={{ fontSize: '28px' }}>{item.title}</p>
            <p style={{ fontSize: '38px' }}>{item.description}</p>
            <iframe width="1000" height="605" src={`https://www.youtube.com/embed/${item.videoUrl}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          </Card>
        )
      }
    </div>
  );
};

export default CourseVideo;
