import React from 'react';
import { Button, Form, Input } from 'antd';
import style from './Form.module.css'
import Header from '../Header/Header';
import regImg from '../img/png.png'
import { Link } from 'react-router-dom';
import Loader from '../UI/Loader/Loader';
const ForgotPasswordForm = ({ value, setValue, forgotPassword, loading }) => {
  return (
    <>
      <Header />

      <div className={style.autorization__container}>
        <div style={{ background: '#F6F6F6', padding: '70px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
          <h1 style={{ width: '450px', color: 'black', fontSize: '62px', fontWeight: '700' }}>Забыли свой пароль?</h1>
          <p style={{ color: 'black', fontSize: '20px', marginBottom: '50px', fontWeight: '700' }}>Введите свой e-mail адрес, и мы отправим вам письмо со ссылкой для сброса пароля.</p>
          <Input style={{ marginBottom: '20px' }} type="email" placeholder='recipientEmail' onChange={e => setValue({ ...value, recipientEmail: e.target.value })} />
          {loading ? <Loader /> : ''}
          <Button style={{ width: '100%', background: '#85233E', color: 'white' }} onClick={forgotPassword}>отправить пароль на почту</Button>

          <Link style={{ color: 'black', marginTop: '20px' }} to='/Register'>Нет аккаунта? Зарегестрируйтесь!</Link>
        </div>
        <div className={style.img} >
          <img src={regImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordForm;