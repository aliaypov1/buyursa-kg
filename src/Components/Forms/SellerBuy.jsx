import { Button, Modal } from 'antd';
const SellerBuy = () => {
  const [modal, contextHolder] = Modal.useModal();
  const countDown = () => {
    let secondsToGo = 3;
    const instance = modal.error({
      content: `Вы не можете купить этот курс так как вы являетесь его владельцем ${secondsToGo}s`,
      okType: 'default'
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      instance.update({

        content: `Вы не можете купить этот курс так как вы являетесь его владельцем ${secondsToGo}s`,
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      instance.destroy();
    }, secondsToGo * 1000);
  };
  return (
    <>
      <Button style={{ color: 'white' }} onClick={countDown}>Мой курс</Button>
      {contextHolder}

    </>
  );
};
export default SellerBuy;