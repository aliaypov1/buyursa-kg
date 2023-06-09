// import { Button } from 'antd';
// import axios from 'axios';
// import React, { useState } from 'react';

// const CreatePages = () => {
//     const [value,setValue] = useState([])
//     const CreatePages = async()=>{
//         const res = await axios.post(`http://frez773-001-site1.atempurl.com/api/Page/course/page/create`,{})
//     }
//     return (
//         <div>
//             <Button>Добавить страницу</Button>
//         </div>
//     );
// };

// export default CreatePages;
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space, message } from 'antd';
import axios from 'axios';
import { useState } from 'react';
const { Option } = Select;
const CreatePages = ({ courseId }) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [value, setValue] = useState({
    courseId: courseId,
    title: "title",
    description: "desc",
    content: "content"
  })
  const createPages = async () => {
    try {
      const res = await axios.post(`http://frez773-001-site1.atempurl.com/api/Page/course/page/create`, { ...value }, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      message.success(res.data.message)
    } catch (error) {
      message.error(error.response.message)
    }
  }
  return (
    <>

      <Button onClick={createPages}>
        Создать страницу
      </Button>

    </>
  );
};
export default CreatePages;