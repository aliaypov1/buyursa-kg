import React from 'react';
import Loader from '../UI/Loader/Loader';
import VideoCourse from './VideoCourse';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const Video = ({ size, loading }) => {
  if (loading) return <div className="container"><Loader /></div>
  return (
    <div className='container'>
      {
        size.length > 0 ? size.map((item, i) => (
          <div className="" style={{ background: 'white', padding: '10px' }}>
            <VideoCourse id={item.id} />
            <div className="" style={{ textAlign: "center", margin: '30px 0' }}>

              <Link to={`/Test/${item.id}`}><Button>Тесты</Button></Link>
            </div>
          </div>
        ))
          :
          <p style={{ fontSize: '44px', textAlign: 'center', margin: "80px 0" }}>Нечего не найденно</p>
      }
    </div>
  );
};

export default Video;