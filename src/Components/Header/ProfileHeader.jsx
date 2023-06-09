import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { seller } from '../Token/Token';
const items = [
  {
    label:  <Link to='/Profile'>Профиль</Link>,
    key: 'mail',
    icon: <MailOutlined />,
  },
  
  {
    label: 'Настройки',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        children: [
          {
            label: (
                <Link to='/Security'><i className="fa-solid fa-lock"></i> Безопасность</Link>
            ),
            key: 'setting:1',
          },
          {
            label: (
              <Link to='/Favorites'><i className="fa-sharp fa-solid fa-bookmark"></i> Избранные</Link> 
            ),
          },
          {
            label: seller ? <Link to='/ProfileSeller'><i className="fa-solid fa-shop"></i> Продавец</Link>:'',
            key: 'Продавец',
          },
         
          
         
         
        ],
      },
    ],
  },
  {
    label: (
     <Link to='/MyCourse'>Мои курсы</Link>
    ),
    key: 'alipay',
  },
  {
    label: (
      <Link to='/Favorites'><i style={{fontSize:"24px",color:'black'}} className="fa-sharp fa-solid fa-bookmark"></i></Link> 
    ),
    key: 'alipays',
  },
];
const ProfileNavigate = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu style={{marginBottom:'20px'}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default ProfileNavigate;