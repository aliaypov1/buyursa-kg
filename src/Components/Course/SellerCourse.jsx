import { Card, Image } from 'antd';
import Meta from 'antd/es/card/Meta';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SellerCourse = ({ id }) => {
  const [result, setResult] = useState([])
  useEffect(() => {
    const getData = async () => {
      const resp = await axios(`http://frez773-001-site1.atempurl.com/api/Seller/Get-Seller-By-Id?id=${id}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      setResult(resp.data)
    }
    getData()
  }, [])
  return (
    <div>
      {
        result &&
        <Card key={result.id}
          hoverable
          style={{
            width: 240,
          }}
          cover={<Image alt="example" src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />}
        >
          <Meta title={result.firstName} description={result.lastName} />
        </Card>

      }
    </div>
  );
};

export default SellerCourse;