import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';

const Status = () => {
  const [result, setResult] = useState([])
  useEffect(() => {
    const getStatus = async () => {
      const res = await axios('http://frez773-001-site1.atempurl.com/api/SellerApplication/status', {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      console.log(res)
      setResult(res.data)
      console.log(result)
    }
    getStatus()
  }, [])
  return (
    <div>
      <Header />
      {
        result && (
          <div className="" style={{ display: 'flex', columnGap: '40px' }}>
            <p style={{ color: 'black' }}>{result.message} :</p>
            <p style={{ color: 'black' }}>{result.applicationStatus}</p>
          </div>

        )
      }
    </div>
  );
};

export default Status;