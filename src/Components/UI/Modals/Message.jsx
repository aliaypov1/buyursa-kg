import { Button, message } from 'antd';
const Message = ({Children,props}) => {
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.info(props);
  };
  return (
    <>
      {contextHolder}
      <a onClick={info}>
        {Children}
      </a>
    </>
  );
};
export default Message;