// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import Header from '../Header/Header';
// import { Card, Image, Skeleton } from 'antd';
// import style from './Profile.module.css'
// const { Meta } = Card;


// const ProfileSearch = () => {
//   const { id } = useParams()
//   const { studentId } = useParams()
//   const [result, setResult] = useState([])
//   const [response, serResponse] = useState([])
//   const [loading, setLoading] = useState([])
//   const [images, setImages] = useState({});

//   useEffect(() => {
//     const getImg = async (id) => {
//       try {
//         const resp = await axios(
//           `http://frez773-001-site1.atempurl.com/api/Course/course/${id}/image`,
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//             },
//             responseType: 'blob',
//           }
//         );
//         const imageUrl = URL.createObjectURL(resp.data);
//         setImages((prevImages) => ({
//           ...prevImages,
//           [id]: imageUrl,
//         }));
//       } catch (error) {
//       }
//     };

//     const loadImages = async () => {
//       setLoading(true);
//       await Promise.all(response.map((item) => getImg(item.id)));
//       setLoading(false);
//     };

//     loadImages();
//   }, [response]);

//   useEffect(() => {
//     const getUser = async () => {
//       setLoading(true)
//       const resp = await axios(`http://frez773-001-site1.atempurl.com/api/Auth/users/${id}`, {
//         headers: {
//           "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
//         }
//       })
//       console.log(resp)
//       setResult(resp.data)
//       setLoading(false)
//     }
//     getUser()
//   }, [])
//   useEffect(() => {
//     const getData = async () => {
//       setLoading(true)
//       const resp = await axios(`http://frez773-001-site1.atempurl.com/api/Course/students/${studentId}/courses`, {
//         headers: {
//           "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
//         }
//       })
//       console.log(resp)
//       serResponse(resp.data)
//       setLoading(false)
//     }
//     getData()
//   }, [])
//   return (
//     <div>
//       <Header />
//       <Card title="" style={{ padding: '80px', margin: '50px' }}>
//         {result &&
//           <Card key={result.id}
//             style={{
//               width: 300,
//               marginTop: 16,
//             }}
//           >
//             <Meta
//               avatar={<Image width='60px' src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${result.id}`} />}
//               title={result.userName}
//               description={result.email}
//             />

//           </Card>

//         }
//         <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
//           {loading ? (
//             <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr ', }}>
//               <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
//               <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
//               <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
//               <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
//               <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
//               <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
//             </div>
//           ) : (
//             response.length > 0 ? (
//               response.map((item) => (

//                 <>
//                   {(
//                     <div key={item.id}  className={style.card}>
//                       <div className={style.card__cont}>
//                         <h3><Link to={`/Course/${item.id}`}>{item.title}</Link></h3>
//                         <p>{item.description}</p>
//                         <div className={style.card__price}>
//                           <Link to={`/Course/${item.id}`} style={{ color: "blue", marginRight: '9px', marginTop: '20px' }}>Более</Link>
//                         </div>
//                       </div>
//                       {images[item.id] ? (
//                         <img src={images[item.id]} alt="" />
//                       ) : (
//                         <img src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo-available_87543-11093.jpg" alt="" />
//                       )}
//                     </div>
//                   )}
//                 </>

//               ))
//             ) : (
//               <p style={{ color: 'black', fontSize: '60px', textAlign: 'center', padding: '50px', height: '100vh' }}>ничего не найдено</p>
//             )
//           )}
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default ProfileSearch;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import { Avatar, Card, Image } from 'antd';
import Item from 'antd/es/list/Item';
import Loader from '../UI/Loader/Loader';
const { Meta } = Card;

const ProfileSearch = () => {
  const { id } = useParams()
  const { studentId } = useParams()
  const [result, setResult] = useState([])
  const [response, serResponse] = useState([])
  const [loading, setLoading] = useState([])
  useEffect(() => {
    const getUser = async () => {
      setLoading(true)
      const resp = await axios(`http://frez773-001-site1.atempurl.com/api/Auth/users/${id}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      console.log(resp)
      setResult(resp.data)
      setLoading(false)
    }
    getUser()
  }, [])
  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const resp = await axios(`http://frez773-001-site1.atempurl.com/api/Course/students/${studentId}/courses`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      console.log(resp)
      serResponse(resp.data)
      setLoading(false)
    }
    getData()
  }, [])
  return (
    <div>
      <Header />
      <Card title="" style={{ padding: '80px', margin: '50px' }}>
        {result &&
          <Card key={result.id}
            style={{
              width: 300,
              marginTop: 16,
            }}
          >
            <Meta
              avatar={<Image width='60px' src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${result.id}`} />}
              title={result.userName}
              description={result.email}
            />

          </Card>

        }
        {loading ? <Loader /> :
          <>
            <h1 style={{ margin: "40px", fontSize: '29px', color: 'black' }}>Курсы данного пользователя</h1>
            {
              response.length > 0 ? response.map((item) =>

                <Card key={item.id} title={item.title} style={{ marginBottom: '30px' }}>
                  <p style={{ textAlign: 'right', margin: '8px', }}></p>
                  <Card type="inner" title={item.description} >
                    <div className="" style={{ background: 'rgb(173, 215, 20)', width: '100%', height: '100%', borderRadius: '3px', color: "white", textAlign: 'center', fontSize: "20px" }}></div>
                  </Card>
                </Card>
              )
                :
                <p>пусто</p>
            }</>
        }

      </Card>
    </div>
  );
};

export default ProfileSearch;