
import { Avatar, Button, Card, Col, Image, Row } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Carousel1 from '../UI/Carousel/Carousel';
import Loader from '../UI/Loader/Loader';
const { Meta } = Card;

const CourseDetails = () => {
  const [result, setResult] = useState([])
  const [title, setTitle] = useState([])
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const getCourse = async () => {
      const res = await axios(`http://frez773-001-site1.atempurl.com/api/Course/course/${id}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      setTitle(res.data)
    }
    getCourse()
  }, [])
  const [imageUrl, setImageUrl] = useState('');

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
  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const resp = await axios(`http://frez773-001-site1.atempurl.com/api/Course/courses/${id}/students`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      console.log(resp)
      setResult(resp.data)
      setLoading(false)
    }
    getData()
  }, [])

  return (
    <div>
      <Header />

      {loading ? <div style={{ textAlign: 'center', marginTop: '90px' }}><Loader /></div> :
        <>
          <div className="" style={{ padding: ' 10px 62px' }}>
            <div className="" style={{ width: '100%', height: '330px', background:imageUrl.length > 0 ?`url(${imageUrl})center/cover fixed` : '#85233E', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              {
                title &&
                <>
                  <p style={{ fontSize: '70px', color: 'white', fontWeight: '900' }} key={title.id}>{title.title}</p>

                </>
              }

            </div>
          </div>
          <div className="" style={{ padding: '10px 62px' }}>
            <div className="" style={{ width: '100%', height: '150px', background: 'white', borderRadius: '20px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <div>
                <li style={{ fontSize: '25px', fontWeight: '700' }}>
                  Отзывы
                  <p>7</p>
                </li>
              </div>
              <div>
                <li style={{ fontSize: '25px', fontWeight: '700' }}>
                  Стоимость
                  {
                    title &&
                    <>
                      <p key={title.id}>{title.price} сом</p>

                    </>
                  }
                </li>
              </div>
              <div>
                <li style={{ fontSize: '25px', fontWeight: '700' }}>
                  Рейтинг курса
                  <p>9</p>
                </li>
              </div>
            </div>
          </div>
          <Card title="Студенты этого Курса" style={{ padding: '80px', margin: '50px' }}>
            <div className="" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>

              {result.length > 0 ?
                result.map((item) =>
                  <Card key={item.id}
                    style={{
                      width: 300,
                      marginTop: 16,
                    }}
                  >
                    <Meta
                      avatar={<Image width='60px' src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${item.studentId}`} />}
                      title={item.userName}
                      description={<Link to={`/ProfileSearch/${item.id}/${item.studentId}`}>Профиль</Link>}
                    />
                  </Card>


                )
                :
                <p>нечего не найденно</p>}
            </div>
            {/* <CoursePages/> */}
            {/* <div className="">
              <h1 style={{fontSize:'40px',margin:'80px 0'}}>Содержание курса</h1>
              <div className="">
                <p style={{fontSize:'29px',borderBottom:'2px solid black',margin:'40px 0'}}>Figma</p>
                <p style={{fontSize:'29px',borderBottom:'2px solid black',margin:'40px 0'}}>Photoshop</p>
                <p style={{fontSize:'29px',borderBottom:'2px solid black',margin:'40px 0'}}>After Effects</p>
                <p style={{fontSize:'29px',borderBottom:'2px solid black',margin:'40px 0'}}>Cinema 4d</p>
                <p style={{fontSize:'29px',borderBottom:'2px solid black',margin:'40px 0'}}>Cinema 3d</p>
              </div>
            </div> */}
            <h1 style={{ fontSize: '35px', textAlign: 'center', margin: '80px 0' }}>Авторы данного Курса</h1>
            <Row gutter={16}>
              <Col span={8}>
                <Card title={<Image width='100%' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-EVV7TMrQBesP4-wonkx2KpLleanEk7slVg&usqp=CAU' />} bordered={false}>
                  <p style={{ fontSize: "22px", textAlign: 'center' }}>Аликсей Александрович</p>
                </Card>
              </Col>
              <Col span={8}>
                <Card title={<Image width='100%' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfqLazs8SdFQ5lgB0ZlwpoX70M2PBrB54wZJAmGyhDWp9Sqrhhy-LTaiCm5rMaWMhVr_g&usqp=CAU' />} bordered={false}>
                  <p style={{ fontSize: "22px", textAlign: 'center' }}>Михаил Палкин</p>
                </Card>
              </Col>
              <Col span={8}>
                <Card title={<Image width='100%' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrRujl1av0hM1hJwFlPCOtMdhydG9hZGaPHRq2GQvR71Cpqdnal_6w5KgHsqFiBgC7rk8&usqp=CAU' />} bordered={false}>
                  <p style={{ fontSize: "22px", textAlign: 'center' }}>Дарья Дорована</p>
                </Card>
              </Col>
            </Row>
           

          </Card>
        </>}

    </div>
  );
};

export default CourseDetails;