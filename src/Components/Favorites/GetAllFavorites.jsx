import { Card, Skeleton } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Buy from '../Forms/Buy';
import Header from '../Header/Header';
import ProfileNavigate from '../Header/ProfileHeader';
import RemoveFavorites from './RemoveFavorites';
import style from './Favorites.module.css'
import Footer from '../Footer/Footer';

const GetAllFavorites = () => {
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(false)
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
    const getData = async () => {
      try {
        setLoading(true)
        const resp = await axios('http://frez773-001-site1.atempurl.com/api/Student/GetFavourites', {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        setResult(resp.data)
        setLoading(false)
      } catch (err) {
        console.log(err.response.message)
        setLoading(false)
      }
    }
    getData()
  }, [])
  return (
    <div>
      <Header />
      <ProfileNavigate />
      <h1 style={{textAlign:'center',margin:'40px 0'}}>Избранные <i className="fa-sharp fa-solid fa-bookmark"></i></h1>
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
                        
                      <RemoveFavorites id={item.id} />
                      <br />
                      <Link to={`/Course/${item.id}`} style={{ color: "blue",marginRight:'9px',marginTop:'20px' }}>Более</Link>
                        <Buy

                          name={item.title}
                          id={item.id}
                          children={item.isFree ? 'Бесплатно' : item.price + 'сом'}
                        />
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

export default GetAllFavorites;