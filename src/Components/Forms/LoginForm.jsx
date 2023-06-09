import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import style from './Form.module.css'
import { Link } from 'react-router-dom';
import regImg from '../img/png.png'
import Loader from '../UI/Loader/Loader';

const LoginForm = ({ inputValue, setInputValue, login, loading, props }) => {
  const [rememberMe, setRemamberMe] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
    setRemamberMe(event.target.checked);
  };

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const isFormValid = () => {
    return inputValue.userName.trim() !== '' && inputValue.password.trim() !== '' && checked;
  };

  return (
    <>
      <div className={style.autorization__container}>
        <Form
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          style={{ background: '#F6F6F6', padding: '70px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <h1 style={{ color: 'black', fontSize: '62px', fontWeight: '700' }}>Войдите</h1>
          <p style={{ color: 'black', fontSize: '30px', marginBottom: '50px', fontWeight: '700' }}>В свой аккаунт</p>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input
              style={{ width: '450px' }}
              prefix={<UserOutlined className="site-form-item-icon" />}
              onChange={e => setInputValue({ ...inputValue, userName: e.target.value })}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input.Password
              placeholder="input password"
              style={{ width: '450px' }}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              onChange={e => setInputValue({ ...inputValue, password: e.target.value })}
            />
          </Form.Item>

          <Form.Item>
            {loading ? <Loader /> : ''}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 20px 0 0' }}>
              <div className="">
                <input
                  style={{ marginRight: "10px" }}
                  type="checkbox"
                  checked={checked}
                  onChange={handleCheckboxChange}
                  name='valid'
                />
                <label>Я не робот</label>
              </div>
              {props}
            </div>
          </Form.Item>

          <Form.Item>
            <Button
              disabled={!isFormValid()}
              htmlType="submit"
              style={!isFormValid() ? { width: '100%', background: 'gray', color: 'white' } : { width: '100%', background: '#85233E', color: 'white' }}
              onClick={() => login()}
            >
              Войти
            </Button>
          </Form.Item>
          <Link to='/Register'>Нет аккаунта? Зарегистрируйтесь!</Link>
        </Form>
        <div className={style.img}>
          <img src={regImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default LoginForm;
