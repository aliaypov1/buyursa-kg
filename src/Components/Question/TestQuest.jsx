import React from 'react';
import { useParams } from 'react-router-dom';
import GetQuestion from './GetTestQuestion';

const Question = () => {
  const { id } = useParams()
  return (
    <div>
      <GetQuestion id={id} />
    </div>
  );
};

export default Question;