import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import ProfileNavigate from '../Header/ProfileHeader';
import { Button, Result, message } from 'antd';
import GetQuestion from './GetQuestion';
import TextArea from 'antd/es/input/TextArea';
import Loader from '../UI/Loader/Loader';

const Answers = () => {
  const { id } = useParams()
  const [result, setResult] = useState([]);
  const [userAnswer, setUserAnswer] = useState('');
  const [answer, setAnswer] = useState('')
  const [correctCount, setCorrectCount] = useState(0);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getAnswers = async () => {
      try {
        setLoading(true)
        const resp = await axios(`http://frez773-001-site1.atempurl.com/api/Answer/get-all-answers-by id?questionId=${id}`, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
          }
        });
        setResult(resp.data);
        setLoading(false)
      } catch (error) {
        console.error(error);
        setLoading(false)
      }
    };

    getAnswers();
  }, []);

  const handleAnswerChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const checkAnswer = () => {
    const isCorrect = result.some(answer => answer.text === userAnswer);
    setCorrectCount(isCorrect ? 1 : 0);
    setAnswer(userAnswer)
  };
  if (loading) return <div className="container" style={{ textAlign: "center", margin: '140px 0 0 40px' }}><Loader /></div>
  return (
    <>
      {result.length > 0 ?
        <div>
          <Header />
          <ProfileNavigate />
          <div className="container">
            <GetQuestion id={id} />
            {result.map(answer => (
              <div key={answer.id}>
              </div>
            ))}
            <TextArea
              type="text"
              value={userAnswer}
              placeholder='Введите свой ответ'
              onChange={handleAnswerChange}
            />
            <Button onClick={checkAnswer}>Проверить ответ</Button>
            {correctCount > 0 ? <Result
              status="success"
              title="Вы успешно решили задачу"
              subTitle={`Ваш ответ ${answer}`}
              extra={[
              ]}
            /> :

              <Result
                status="error"
                title="Задача не решена"
                subTitle="Дайти верный ответ"
              >
              </Result>}
          </div>
        </div>
        :
        <p>пусто</p>
      }

    </>
  );
};

export default Answers;
