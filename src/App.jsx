import React from 'react';
import AppRouter from './Components/AppRouter/AppRouter';
import axios from 'axios';


const App = () => {
  const tokens = {
    refreshToken: localStorage.getItem('refreshToken'),
    accessToken: localStorage.getItem('accessToken')
  }
  const refreshTokenFunc = async (tokens) => {
    try {
      const resp = await axios.post('http://frez773-001-site1.atempurl.com/api/Auth/Refresh-Token', {...tokens})
      .then((resp) => localStorage.setItem('accessToken', resp.data.accessToken))
      .then((resp) => localStorage.setItem('refreshToken', resp.data.refreshToken))
    } catch (error) {
      console.log(error);
    }
  }

  const intervalTime = 20 * 60 * 1000

  const interval = setInterval(() => {
    refreshTokenFunc(tokens)
  }, intervalTime);
  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;