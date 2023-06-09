import axios from 'axios';
import React, { useState } from 'react';
import { BASE_URL } from '../BASE_URL/BASE_URL';
import ForgotPasswordForm from '../Forms/ForgotPasswordForm';
import SuccessAlert from '../UI/Alerts/SuccessAlert';
import DangerAlert from '../UI/Alerts/DangerAlert';
import { message } from 'antd';

const ForgotPassword = () => {
  const [dangerAlert, setDangerAlert] = useState(false)
  const [successAlert, setSuccessAlert] = useState(false)
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState({
    recipientEmail: ""
  })
  const forgotPassword = async () => {
    try {
      setLoading(true)
      const res = await axios.post(`${BASE_URL}ForgotPassword`, { ...value })
      console.log(res)
      if (res.data.statusCode == 200) {
        message.success('Пароль успешно отправлен на почту')
      }
      else {

        message.error(res.data.message)
      }
    } catch (error) {
      if (error) {
        message.error(error.response.data.Message)
      }

      setLoading(false)
    }
    setLoading(false)

  }
  return (
    <div>
      <SuccessAlert open={successAlert} />
      <DangerAlert open={dangerAlert} />
      <ForgotPasswordForm value={value} setValue={setValue} loading={loading} forgotPassword={forgotPassword} />
    </div>
  );
};

export default ForgotPassword;