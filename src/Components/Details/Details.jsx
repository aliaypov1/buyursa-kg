import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import style from './Details.module.css'
import { Card, message } from 'antd';
import Approve from '../Sellercreate/Approve';
import Reject from '../Sellercreate/Reject';
import Loader from '../UI/Loader/Loader';
const Details = () => {
  const { id } = useParams()
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(false)
  const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };



  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const res = await axios(`http://frez773-001-site1.atempurl.com/api/SellerApplication/seller-app/${id}`, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        console.log(res)
        console.log(result)
        setResult(res.data)
        message.success('Вы успешно получили все заявки')
        setLoading(false)
      } catch (erorr) {
        message.error(erorr.response.message)
        setLoading(false)
      }
    }
    getData()
  }, [])
  return (
    <>
      <Header />
      <div className={style.container}>
        <div style={{ color: "#000" }} className={style.modal}>
          {loading ? <div className="container"><Loader /></div> : result ? <>
            <Card style={{ width: '800px', display: 'flex', flexDirection: 'column', textAlign: "start", fontSize: '23px', }} title={result.companyName}>
              {/* <Link to='/DashBoard' style={gridStyle}>вернуться назад</Link> */}
              <p> имя : {result.firstName ? result.firstName : 'пусто'}</p>
              <p hoverable={false} >фамилия : {result.lastName ? result.lastName : 'пусто'}</p>
              <p>Компания : {result.companyName ? result.companyName : 'пусто'}</p>
              <p>О компании :{result.companyDescription ? result.companyDescription : 'пусто'}</p>
              <p>почта : {result.email ? result.email : 'пусто'}</p>
              <p>телефон : {result.phone ? result.phone : 'пусто'}</p>

              <p style={{ display: 'flex', columnGap: "20px" }}><Approve id={result.id} /> / <Reject id={result.id} /></p>
            </Card>

          </> : "ниче нет"}

        </div>
      </div>
    </>
  );
};

export default Details;