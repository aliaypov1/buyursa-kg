import React from 'react';
import GetTest from './GetTest';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import ProfileNavigate from '../Header/ProfileHeader';

const Test = () => {
  const { id } = useParams()
  return (
    <div>

      <Header />
      <ProfileNavigate />
      <GetTest id={id} />
    </div>
  );
};

export default Test;