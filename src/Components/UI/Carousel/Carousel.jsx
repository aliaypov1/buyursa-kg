import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CourseVideo from '../../Pages/CourseVideo';
const contentStyle = {
  padding: '20px',
  background: 'aliceblue',
  marginTop: '40px',
  borderRadius: ' 17px',
};

const Carousel1 = () => {
  const { id } = useParams()
  const [result, setResult] = useState([])
  useEffect(() => {
    const getPages = async () => {
      const res = await axios(`http://frez773-001-site1.atempurl.com/api/Page/course/${id}/pages`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      console.log(res)
      setResult(res.data)
    }
    getPages()
  }, [])
  return (
    <>

      {result.map(item =>
        <div key={item.id}>
          <h3 style={contentStyle}>
            <b style={{ marginBottom: '25px', fontSize: '40px' }}>{item.title}</b>
            <p style={{ marginBottom: '25px', fontSize: '30px' }}>{item.description}</p>
            <p style={{ fontSize: '20px' }}>{item.content}</p>
            <CourseVideo id={item.id} />
          </h3>
        </div>
      )
      }

    </>
  )
};
export default Carousel1;