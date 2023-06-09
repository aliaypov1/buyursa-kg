import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Menu } from 'antd';
import Loader from '../UI/Loader/Loader';
import DashBoardPaginate from './DashBoardPaginate';

const Dashboard = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortStatus, setSortStatus] = useState(null);
  const [currentPage, setCurrentPage] = useState(1)
  const [videoPerPage] = useState(4)

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const res = await axios(`http://frez773-001-site1.atempurl.com/api/SellerApplication/get-all-applications`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      console.log(res.data);
      setResult(res.data);
      console.log(result);
      setLoading(false)
    };
    getData();
  }, []);

  const handleSort = (status) => {
    setSortStatus(status);
    const sortedResult = [...result].sort((a, b) => {
      const statusA = Number(a.status);
      const statusB = Number(b.status);
      return statusA - statusB;
    });
    setResult(sortedResult);
  };

  const filteredData = sortStatus ? result.filter(item => item.status === sortStatus) : result;

  const handleViewAll = () => {
    setSortStatus(null);
  };
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
                <p onClick={() => handleSort(0)}>не просмотренные</p>
              ),
              key: 'setting:1',
            },
            {
              label: (
                <p onClick={() => handleSort(1)}>отказаные</p>
              ),
              key: 'setting:1',
            },
            {
              label: (
                <p onClick={() => handleSort(2)}>принетые</p>
              ),
              key: 'setting:1',
            },
            {
              label: (
                <p onClick={() => handleViewAll()}>показать все</p>
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
  const lastVideoIndex = currentPage * videoPerPage;
  const firstVideoIndex = lastVideoIndex - videoPerPage;
  const currentVideo = filteredData.slice(firstVideoIndex, lastVideoIndex)
  const paginate = pageNumber => setCurrentPage(pageNumber)
  return (
    <div>
      <Header />

      <div
        id='start'
        className="container"
        style={{ padding: '20px', marginTop: '80px', borderRadius: '16px', maxWidth: '1400px' }}

      >
        {loading ? (
          <Loader />
        ) : (
          <div className="">
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            <br />
            <br />

            {currentVideo.map((item) => (
              <div key={item.id}>
                <Card title={'Компания : ' + item.companyName} style={{ marginBottom: '30px' }}>
                  <Card
                    type="inner"
                    title={'Описание : ' + item.companyDescription}
                    extra={<Link to={`/Details/${item.id}`}>Детали</Link>}
                  >
                    <div
                      className=""
                      style={{
                        background: 'rgb(173, 215, 20)',
                        width: '100%',
                        height: '100%',
                        borderRadius: '3px',
                        color: 'white',
                        textAlign: 'center',
                        fontSize: '20px',
                      }}
                    >
                      {item.status === 0 ? (
                        <p>не просмотренно</p>
                      ) : item.status === 1 ? (
                        <p style={{ background: 'red', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          отказано
                        </p>
                      ) : (
                        <p style={{ background: 'green', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px' }}>
                          принято
                        </p>
                      )}
                    </div>
                  </Card>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="" style={{ textAlign: 'center', margin: "60px 0" }}>
        <DashBoardPaginate
          videoPerPage={videoPerPage}
          totalSize={filteredData.length}
          paginate={paginate}
        />

      </div>
    </div>
  );
};

export default Dashboard;