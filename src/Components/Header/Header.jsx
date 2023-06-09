import React, { useState } from 'react';
import style from './Heade.module.css'
import { Link } from 'react-router-dom';
import { accessToken, parsedRoles } from '../Token/Token';
import HeaderNavigate from './HeaderNavigate';
import { UserOutlined } from '@ant-design/icons';
import Message from '../UI/Modals/Message';
import { Button, notification } from 'antd';
import Balance from '../PostService/Balance';
const Header = ({ props }) => {
  const [api, contextHolder] = notification.useNotification();
  const logout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('seller')
    localStorage.removeItem('role')
    localStorage.removeItem('student')
    window.location.href = 'http://localhost:3000/'
  }

  const openNotification = (placement) => {
    api.info({
      message: `Наши контакты`,
      description:
        '📱  WhatsApp - 996 707 707',
      placement,
    });
  };
  return (

    <header className={style.header}>
      <div className={style.container}>

        {accessToken ? (<>
          <nav>
            <Link to='/' className={style.header__link}>О нас</Link>
            <Link to='/Course' className={style.header__link}><Message props='вы перешли на страницу курсов' Children='Курсы'></Message></Link>
            <a
              className={style.header__link}
              onClick={() => openNotification('bottomRight')}
            >
              Контакты
            </a>
            {parsedRoles.includes('Manager') ?
              <Link to='/DashBoard' className={style.header__link}><Message props='Добро пожаловать продавец' Children='Заявки на продавца' /></Link>
              :
              ''
            }
          </nav>
          <nav>{props}</nav>
          <nav style={{display: 'flex', alignItems: "center"}}>
            <Balance/>
            <HeaderNavigate children={<UserOutlined  className={style.header__svg} />} />
            <a onClick={logout} className={style.header__link}>Выйти</a></nav>
        </>)
          :
          (<>
            <nav>
              <Link to='/' className={style.header__link}>О нас</Link>
            </nav>
            <nav>
              <Link to='/Register' className={style.header__link}>Регистрация</Link>
              <Link to='/Login' className={style.header__link}>Вход</Link>
            </nav>
          </>)}

      </div>
      {contextHolder}
    </header>

  );
};

export default Header;