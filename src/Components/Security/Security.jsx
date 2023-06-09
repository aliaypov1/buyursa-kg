import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import ProfileNavigate from '../Header/ProfileHeader';
const Security = () => (
  <>
    <Header />
    <ProfileNavigate />
    <Result
      status="warning"
      title="Измените пароль если через ваш аккаунт заходят чужие лица"
      extra={
        <Link to='/ChangePassword' style={{ color: 'blue' }} key="console">
          Изменить Пароль
        </Link>

      }
    />
  </>
);
export default Security;