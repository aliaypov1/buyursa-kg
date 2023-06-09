
import React, { useState } from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import { Button, Form, Input, message } from 'antd';

const Sellercreatecurs = () => {
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    companyName: "",
    companyDescription: "",
    email: ""
  })
  const postCurs = async () => {
    try {
      const res = await axios.post('http://frez773-001-site1.atempurl.com/api/SellerApplication/create-seller-application', { ...value }, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      if (res.data.statusCode === 200) {
        message.success(res.data.message)
      } else {
        message.error(res.data.message)
      }

    } catch (error) {
      message.error(error.response.message)
    }
  }
  return (
    <div>
      <Header />
      <Form className='container' style={{ padding: '90px', background: 'white', margin: ' 30px 150px ', borderRadius: '8px' }}>
        <h1 style={{ margin: '40px 0', textAlign: 'center', fontSize: '40px' }}>Заполните форму </h1>
        <Input type="text" placeholder='firstName' onChange={e => setValue({ ...value, firstName: e.target.value })} />
        <br />
        <br />
        <Input type="text" placeholder='lastName' onChange={e => setValue({ ...value, lastName: e.target.value })} />
        <br />
        <br />
        <Input type="number" placeholder='phone' onChange={e => setValue({ ...value, phone: e.target.value })} />
        <br />
        <br />
        <Input type="text" placeholder='companyName' onChange={e => setValue({ ...value, companyName: e.target.value })} />
        <br />
        <br />
        <Input type="text" placeholder='companyDescription' onChange={e => setValue({ ...value, companyDescription: e.target.value })} />
        <br />
        <br />
        <Input type="email" placeholder='email' onChange={e => setValue({ ...value, email: e.target.value })} />
        <br />
        <br />
        <Button onClick={postCurs}>Отправить заявку</Button>
      </Form>

    </div>
  );
};

export default Sellercreatecurs;