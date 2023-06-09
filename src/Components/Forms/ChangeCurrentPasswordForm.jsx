import React from 'react';
import style from './Form.module.css'
import { Button, Input } from 'antd';
const UpdatePass = ({ value, setValue, update }) => {

  return (
    <div className={style.modal}>
      <div className={style.modal__content}>
        <Input style={{ width: '400px' }} type="password" placeholder='старый пароль' onChange={e => setValue({ ...value, currentPassword: e.target.value })} />
        <Input style={{ width: '400px' }} type="password" placeholder='новый пароль' onChange={e => setValue({ ...value, newPassword: e.target.value })} />
        <Button style={{ width: '400px' }} onClick={update}>изменить пароль</Button>
      </div>
    </div>
  );
};

export default UpdatePass;