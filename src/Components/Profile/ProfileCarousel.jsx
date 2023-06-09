
import { Button, Card } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CreatePages from '../Pages/CreatePages';
import PageDelete from '../Pages/PageDelete';
import { Link } from 'react-router-dom';
import CourseVideoPage from '../Pages/CourseVideoPage';
import ProfileTest from './ProfileTest';


const ProfileCarousel = ({ courseId }) => {
  const [result, setResult] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios(`http://frez773-001-site1.atempurl.com/api/Page/course/${courseId}/pages`, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        console.log(res.data)
        setResult(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <>
      <br />
      <br />
      <CreatePages courseId={courseId} />
      <br />
      <br />
      {result.length > 0 ? <p style={{ textAlign: 'center', fontSize: '32px' }}>Ваши Страницы</p> : <p style={{ textAlign: 'center', fontSize: '32px' }}>У вас нет страниц</p>}
      <br />
      <br />
      {result.map((item) => (
        <Card style={{ marginBottom: "40px" }} key={item.id} extra={<Link to={`/ChangePage/${item.id}`}>Коректировать страницу</Link>}>
          <div className="" style={{ display: 'flex', justifyContent: 'space-between', }}>
            <b style={{ marginBottom: '25px', fontSize: '40px' }}>{item.title}</b>
            <PageDelete id={item.id} />
          </div>
          <p style={{ marginBottom: '25px', fontSize: '30px' }}>{item.description}</p>
          <p style={{ fontSize: '20px' }}>{item.content}</p>
          <CourseVideoPage id={item.id} />
          <h1 style={{ textAlign: 'center', fontSize: '30px' }}>Тесты данного курса</h1>
          <ProfileTest id={item.id} />

        </Card>
      ))}
    </>
  )
};
export default ProfileCarousel;