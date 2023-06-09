import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Balance = () => {
  const [result, setResult] = useState([])
  useEffect(() => {
    const getData = async () => {
      const resp = await axios('http://frez773-001-site1.atempurl.com/api/Student/Balance', {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      setResult(resp.data)
    }
    getData()
  }, [])
  return (
    <>
      {
        result &&
        <a style={{ marginRight: "23px",color:'white' }}>{result.moneyAmount ? result.moneyAmount + 'сом' : ''}</a>

      }
    </>
  );
};

export default Balance;