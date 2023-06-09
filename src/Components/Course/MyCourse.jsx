import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import ProfileNavigate from '../Header/ProfileHeader';
import { Card, Skeleton } from 'antd';
import axios from 'axios';
import { BASE_URL } from '../BASE_URL/BASE_URL';
import DeleteMyCourse from './DeleteMyCourse';
import { Link } from 'react-router-dom';
import style from './Course.module.css'
import Footer from '../Footer/Footer';

const MyCourse = () => {
  const [loading, setLoading] = useState(false);
  const [userID, setUserID] = useState([]);
  const [result, setResult] = useState([]);
  const [isFirstRequestComplete, setFirstRequestComplete] = useState(false);
  const [images, setImages] = useState({});

  useEffect(() => {
    const getImg = async (id) => {
      try {
        const resp = await axios(
          `http://frez773-001-site1.atempurl.com/api/Course/course/${id}/image`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
            responseType: 'blob',
          }
        );
        const imageUrl = URL.createObjectURL(resp.data);
        setImages((prevImages) => ({
          ...prevImages,
          [id]: imageUrl,
        }));
      } catch (error) {
      }
    };

    const loadImages = async () => {
      setLoading(true);
      await Promise.all(result.map((item) => getImg(item.id)));
      setLoading(false);
    };

    loadImages();
  }, [result]);

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      const resp = await axios(`${BASE_URL}GetcurrentUser`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      console.log(resp);
      setUserID(resp.data.studentId);
      console.log(userID);
      setLoading(false);
      setFirstRequestComplete(true);
    };
    getUser();
  }, []);

  useEffect(() => {
    const getData = async () => {
      if (!isFirstRequestComplete) {
        return;
      }
      setLoading(true)
      const resp = await axios(`http://frez773-001-site1.atempurl.com/api/Course/students/${userID}/courses`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      console.log(resp);
      setResult(resp.data);
      console.log(result);
      setLoading(false)
    };
    getData();
  }, [isFirstRequestComplete, userID]);

  const handleCourseDeleted = (deletedCourseId) => {
    setResult(prevCourses => prevCourses.filter(result => result.id !== deletedCourseId));
  };
  return (
    <div>
      <Header />
      <ProfileNavigate />
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
   
         {loading ? (
           <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr ', }}>
                    <Skeleton  paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
                    <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
                     <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
                     <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
                     <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
                   <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
                 </div>
        ) : (
          result.length > 0 ? (
            result.map((item) => (

              <>
                {(
                  <div key={item.id} className={style.card}>
                    <div className={style.card__cont}>
                      <h3><Link to={`/Course/${item.id}`}>{item.title}</Link></h3>
                      <p>{item.description}</p>
                      <div className={style.card__price}>
                      <DeleteMyCourse onCourseDeleted={handleCourseDeleted} courseId={item.id} />
                      <br />
                      <Link to={`/Course/${item.id}`} style={{ color: "blue",marginRight:'9px',marginTop:'20px' }}>Более</Link>
                      <Link to={`/VideoLesson/${item.id}`}>Смотреть</Link>
                      </div>
                    </div>
                    {images[item.id] ? (
                      <img src={images[item.id]} alt="" />
                    ) : (
                      <img src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo-available_87543-11093.jpg" alt="" />
                    )}
                  </div>
                )}
              </>

            ))
          ) : (
            <p style={{ color: 'black', fontSize: '60px', textAlign: 'center', padding: '50px', height: '100vh' }}>ничего не найдено</p>
          )
        )}

      </div>
      <Footer/>
    </div>
  );
};

export default MyCourse;