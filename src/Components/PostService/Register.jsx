import axios from 'axios';
import React, { useState } from 'react';
import { BASE_URL } from '../BASE_URL/BASE_URL';
import RegisterForm from '../Forms/RegisterForm';
import Header from '../Header/Header';
import DangerAlert from '../UI/Alerts/DangerAlert';
import { message } from 'antd';
import { getUser } from './Login';

const Register = () => {
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(false)
  const [value, setValue] = useState({
    email: '',
    password: '',
    userName: ''

  })
  const createUser = async () => {
    try {
      setLoading(true)
      const res = await axios.post(`${BASE_URL}Register`, { ...value })
      localStorage.setItem('accessToken', res.data.accessToken)
      getUser()
    } catch (error) {
      if (error) {
        message.error(error.response.data.Message)
      }
      setLoading(false)
    }
    setLoading(false)

  }
  return (
    <>
      <Header />
      <DangerAlert open={alert} />
      <RegisterForm value={value} setValue={setValue} createUser={createUser} loading={loading} />
    </>
  );
};

export default Register;