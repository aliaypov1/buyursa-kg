import { Link } from 'react-router-dom';
import style from './Form.module.css';
import { Input, Button } from 'antd';
import Header from '../Header/Header';
import regImg from '../img/png.png';
import Loader from '../UI/Loader/Loader';

const RegisterForm = ({ value, setValue, createUser, loading }) => {
  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    return password.length >= 8 && password.length <= 16;
  };

  const isPasswordMatch = () => {
    return value.password === value.confirmPassword;
  };

  const isFormValid = () => {
    return (
      isEmailValid(value.email) &&
      isPasswordValid(value.password) &&
      isPasswordMatch() &&
      value.userName.trim() !== ''
    );
  };

  const getEmailValidationMessage = () => {
    if (value.email && !isEmailValid(value.email)) {
      return 'Некорректный email';
    }
    return null;
  };

  const getPasswordValidationMessage = () => {
    if (value.password && !isPasswordValid(value.password)) {
      return 'Пароль должен содержать от 8 до 16 символов';
    }
    return null;
  };

  const getConfirmPasswordValidationMessage = () => {
    if (value.confirmPassword && !isPasswordMatch()) {
      return 'Пароли не совпадают';
    }
    return null;
  };

  return (
    <>
      <div className={style.autorization__container}>
        <form
          style={{ background: '#F6F6F6', padding: '70px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          className={style.inputs}
        >
          <h1 style={{ color: 'black', fontSize: '62px', fontWeight: '700' }}>Регистрация</h1>
          <p style={{ color: 'black', fontSize: '30px', fontWeight: '700' }}>Добро пожаловать!</p>
          <label htmlFor="">
            <Input
              style={{ width: '450px' }}
              type="email"
              placeholder='Email'
              onChange={e => setValue({ ...value, email: e.target.value })}
              className={!isEmailValid(value.email) ? style.invalid : ''}
            />
            {getEmailValidationMessage() && <span className={style.validationMessage}>{getEmailValidationMessage()}</span>}
          </label>
          <label htmlFor="">
            <Input
              style={{ width: '450px' }}
              type="text"
              placeholder='Username'
              onChange={e => setValue({ ...value, userName: e.target.value })}
              className={value.userName.trim() === '' ? style.invalid : ''}
            />
            {value.userName.trim() === '' && <span className={style.validationMessage}></span>}
          </label>
          <label htmlFor="">
            <Input
              style={{ width: '450px' }}
              type="password"
              placeholder='Password'
              onChange={e => setValue({ ...value, password: e.target.value })}
              className={!isPasswordValid(value.password) ? style.invalid : ''}
            />
            {getPasswordValidationMessage() && <span className={style.validationMessage}>{getPasswordValidationMessage()}</span>}
          </label>
          <label htmlFor="">
            <Input
              style={{ width: '450px' }}
              type="password"
              placeholder='Confirm Password'
              onChange={e => setValue({ ...value, confirmPassword: e.target.value })}
              className={!isPasswordMatch() ? style.invalid : ''}
            />
            {getConfirmPasswordValidationMessage() && <span className={style.validationMessage}>{getConfirmPasswordValidationMessage()}</span>}
          </label>
          
          {loading ? <Loader /> : ''}
          <Button
            style={{ width: '450px', background: isFormValid() ? '#85233E' : 'gray', color: 'white' }}
            onClick={e => e.preventDefault(e) & createUser(e)}
            disabled={!isFormValid()}
          >
            Зарегистрироваться
          </Button>
          <Link to='/Login' style={{ color: 'black' }} >Уже зарегистрированы? Войти</Link>
        </form>
        <div className={style.img}>
          <img src={regImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
