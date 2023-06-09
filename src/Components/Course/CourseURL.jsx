import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../UI/Loader/Loader';
import { Image } from 'antd';

const CourseURL = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false)
  const {id} = useParams()

  useEffect(() => {
    const getImg = async () => {
      try {
        setLoading(true)
        const resp = await axios.get(`http://frez773-001-site1.atempurl.com/api/Course/course/${id}/image`, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
          },
          responseType: 'arraybuffer'
        });

        const blob = new Blob([resp.data], { type: 'image/jpeg' });
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
        setLoading(false)
      } catch (error) {
        console.error(error);
        setLoading(false)
      }
    };

    getImg();
  }, []);

  return (
    <div>
        {loading? <Loader/> :
      <Image src={imageUrl} width='100px' alt="Изображение" />
  }
    </div>
  );
};

export default CourseURL;
