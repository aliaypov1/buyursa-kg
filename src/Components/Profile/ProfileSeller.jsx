import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { Card, Skeleton, Menu, Button } from 'antd';
import Search from 'antd/es/transfer/search';
import ProfileNavigate from '../Header/ProfileHeader';
import CourseDelete from '../Course/CourseDelete';
import SellerAppruved from '../Sellercreate/SellerAppruved';
const ProfileSeller = () => {
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(false)
  const [sortByPrice, setSortByPrice] = useState(null);
  const [sellerId, setSellerId] = useState([])

  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {

    const getSeller = async () => {
      const resp = await axios(`http://frez773-001-site1.atempurl.com/api/Auth/GetCurrentUser`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      console.log(resp)
      setSellerId(resp.data.sellerId)
    }
    getSeller()
  }, [])
  useEffect(() => {

    const getData = async () => {
      setLoading(true)
      const resp = await axios(
        'http://frez773-001-site1.atempurl.com/api/Course/courses?PageNumber=1&PageSize=100',

        {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
          }
        }
      );
      console.log(resp);
      console.log(result);
      setResult(resp.data)
      setLoading(false)
    };
    getData();
  }, []);
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };


  const handleSortByAsc = () => {
    setSortByPrice('asc');
  };

  const handleSortByDesc = () => {
    setSortByPrice('desc');
  };

  let sortedAndFilteredCourses = [...result];
  if (searchValue) {
    sortedAndFilteredCourses = sortedAndFilteredCourses.filter(item =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }


  if (sortByPrice === 'asc') {
    sortedAndFilteredCourses.sort((a, b) => a.price - b.price);
  } else if (sortByPrice === 'desc') {
    sortedAndFilteredCourses.sort((a, b) => b.price - a.price);
  }
  const items = [

    {
      label: 'сортировать по',
      key: 'SubMenu',
      children: [
        {
          type: 'group',
          children: [
            {
              label: (
                <p onClick={handleSortByDesc}>по возрастанию</p>
              ),
              key: 'setting:1',
            },
            {
              label: (
                <p onClick={handleSortByAsc}>по убыванию</p>
              ),
              key: 'setting:1',
            },

          ],
        },
      ],
    },

  ];
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div>

      <Header props={<Search
        placeholder="input search text"
        onChange={handleSearchChange}
        value={searchValue}
        style={{
          width: 200,
        }}
      />} />
      <ProfileNavigate />

      <div className='container'>
        <Menu style={{ marginBottom: "40px" }} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        <SellerAppruved  setLoading={setLoading}/>
        <br />
      </div>
      <div className="container" style={{ gap: '20px' }}>
        {loading ?
          <div className="" style={{}}>
            <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
            <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
            <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
            <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
            <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
          </div> :
          sortedAndFilteredCourses.length > 0 ? sortedAndFilteredCourses.map((item) =>
          (

            sellerId === item.sellerId ?
              <Card key={item.id} title={item.title} style={{ marginBottom: '18px', boxShadow: ' -1px -1px 5px 0px rgba(0,0,0,0.75)' }} extra={<div style={{ display: 'flex', alignItems: 'center' }}> <p style={{ marginRight: '18px' }} name={item.title} id={item.id} children={item.isFree ? 'Бесплатно' : item.price + 'сом'} /><CourseDelete id={item.id} /></div>}>

                <p style={{ textAlign: 'right', margin: '8px', }}><Link to={`/Course/${item.id}`} style={{ color: "blue" }}>деталии</Link> </p>
                <Card type="inner" title={item.description} extra=''>
                  <div className="" style={{ background: '#85233E', width: '100%', height: '100%', borderRadius: '3px', color: "white", textAlign: 'center', fontSize: "20px" }}>{sellerId === item.sellerId ? <Link to={`/ChangeCourse/${item.id}`}>Коректировать</Link> : <></>}</div>
                </Card>
              </Card>
              :
              ''


          )
          )
            :
            ''

        }
      </div>
    </div>
  );
};

export default ProfileSeller;