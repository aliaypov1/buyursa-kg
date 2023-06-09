import { Space, Spin } from 'antd';
const Loader = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <div className="example">
      <Spin />
    </div>

  </Space>
);
export default Loader;