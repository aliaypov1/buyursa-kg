import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Result, Typography } from 'antd';
import { Link } from 'react-router-dom';
const { Paragraph, Text } = Typography;
const SellerRejected = () => (
  <Result
    status="error"
    title="Ваша заявка была отмененна"
    subTitle="Please check and modify the following information before resubmitting."
    extra={[
      <Link to='/About' style={{ color: 'blue' }} key="console">
        Go Back
      </Link>,
    ]}
  >
    <div className="desc">
      <Paragraph>
        <Text
          strong
          style={{
            fontSize: 16,
          }}
        >
          The content you submitted has the following error:
        </Text>
      </Paragraph>
      <Paragraph>
        <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account has been
        frozen. <a>Thaw immediately &gt;</a>
      </Paragraph>
      <Paragraph>
        <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account is not yet
        eligible to apply. <a>Apply Unlock &gt;</a>
      </Paragraph>
    </div>
  </Result>
);
export default SellerRejected;