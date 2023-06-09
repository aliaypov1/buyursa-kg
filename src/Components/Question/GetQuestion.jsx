import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GetQuestion = ({ id }) => {
  const [result, setResult] = useState([])
  useEffect(() => {
    const getData = async () => {
      const resp = await axios(`http://frez773-001-site1.atempurl.com/api/Question/get-question-by-id?questionId=${id}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      setResult(resp.data.questionDTO)
    }
    getData()
  }, [])
  return (
    <div>
      {
        result &&
        <p key={result.id} style={{ margin: "40px", textAlign: 'center' }}>{result.text}</p>

      }
    </div>
  );
};

export default GetQuestion;