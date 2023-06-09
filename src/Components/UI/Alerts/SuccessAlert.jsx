import React from 'react';
import { Alert, Space } from 'antd';
const SuccessAlert = ({ open }) => {
  if (!open) return null
  return (
    <div>
      <Space
        direction="vertical"
        style={{
          width: '100%',
        }}
      >
        <Alert message="Операция успешно проведина"
          type="success"
          showIcon
          closable />
      </Space>
    </div>

  );
};

export default SuccessAlert;