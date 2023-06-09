import { message } from 'antd';
import React from 'react';

const Reject = ({ id }) => {
  const reject = async () => {
    try {
      const res = await fetch(`http://frez773-001-site1.atempurl.com/api/SellerApplication/${id}/reject`, {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      const data = await res.json()
      console.log(data)
      message.success(data.message)
    } catch (erorr) {
      message.error(erorr.response.message)
    }
  }
  return (
    <div>
      <a style={{ color: 'red' }} onClick={reject}>Reject</a>
    </div>
  );
};

export default Reject;