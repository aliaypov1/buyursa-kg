import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
const App = () => (
  <Result
    status="success"
    title="Мы приняли вышу заявку ждите ответа"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[

      <Link to='/About' style={{ color: 'blue' }} >Back to home</Link>,
    ]}
  />
);
export default App;