import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
const App = ({navigate,children}) => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Link to={navigate}><Button type="primary">{children}</Button></Link>}
  />
);
export default App;