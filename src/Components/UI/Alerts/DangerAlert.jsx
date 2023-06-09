import React from 'react';
import { Alert, Space } from 'antd';
const DangerAlert = ({ open }) => {
  if (!open) return null
  return (
    <div>
      <Space
        direction="vertical"
        style={{
          width: '100%',
          position: 'sticky',
          top: '0',
          left: '0'

        }}
      >
        <Alert message="Ошибка попробуйте снова"
          style={{
            width: '100%',
            position: 'sticky',
            top: '0',
            left: '0'

          }}
          type="error"
          showIcon
          closable />
      </Space>
    </div>

  );
};

export default DangerAlert;