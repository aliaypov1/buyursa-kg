import { Card } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CoursePaginate from '../Course/CoursePaginate';

const VideoCourse = ({ id, props }) => {
  const [result, serResult] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [videoPerPage] = useState(1)
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
  const lastVideoIndex = currentPage * videoPerPage;
  const firstVideoIndex = lastVideoIndex - videoPerPage;
  const currentVideo = result.slice(firstVideoIndex, lastVideoIndex)
  const paginate = pageNumber => setCurrentPage(pageNumber)
  return (
    <div style={{ marginTop: '80px', background: 'white', padding: '5px' }}>
      {
        currentVideo.map((item) => (
          <Card style={{ margin: '80px 0', padding: '0 0 0 60px', border: 'none' }} extra={props} key={item.id}>
            <p style={{ fontSize: '28px' }}>Описание : {item.title}</p>
            <div style={{ fontSize: '20px' }}> Заголовок : {item.description} </div>
            <iframe width="1000" height="605" src={`https://www.youtube.com/embed/${item.videoUrl}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          </Card>
        )
        )
      }
      <div className="" style={{ textAlign: 'center', margin: "60px 0" }}>
        <CoursePaginate
          videoPerPage={videoPerPage}
          totalSize={result.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default VideoCourse;
