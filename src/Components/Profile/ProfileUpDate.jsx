
import { Button, Col, Drawer, Form, Input, Row, Select, Space, message } from 'antd';
import axios from 'axios';
import { useState } from 'react';
const { Option } = Select;
const ProfileUpDate = ({setLoading}) => {
  const [open, setOpen] = useState(false);
  
  const [value, setValue] = useState({
    aboutMe: "",
    city: "",
    country: "",
    firstName: "",
    lastName: ""
  })

  const upDateProfile = async () => {
    try {
      setLoading(true)
      const res = await axios.put('http://frez773-001-site1.atempurl.com/api/Profile/profile/update', { ...value }, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      console.log(res)
      message.success(res.data.message)
      setLoading(false)
    } catch (error) {
      message.error(error.response.data.message)
      setLoading(false)
    }

  }
  const handleClick = () => {
    return (
      upDateProfile()
    )
  }
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button type="primary" style={{ background: '#85233E', color: 'white', padding: '20px 40px', borderRadius: '7px' }} onClick={showDrawer} >
        Редактировать профиль
      </button>
      <Drawer
        title="Профиль"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <button onClick={handleClick} style={{ background: '#85233E', color: 'white', padding: '4.5px 40px', borderRadius: '7px' }}>
              Обновить
            </button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Имя"
                rules={[
                  {
                    required: true,
                    message: 'Please enter user name',
                  },
                ]}
              >
                <Input placeholder="Имя" value={value.firstName} onChange={e => setValue({ ...value, firstName: e.target.value })} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="last"
                label="Фамилия"
                rules={[
                  {
                    required: true,
                    message: 'Please enter url',
                  },
                ]}
              >
                <Input
                  style={{
                    width: '100%',
                  }}
                  onChange={e => setValue({ ...value, lastName: e.target.value })}
                  placeholder="Фамилия"
                  value={value.lastName}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="city"
                label="Город"
                rules={[
                  {
                    required: true,
                    message: 'Please enter url',
                  },
                ]}
              >
                <Input
                  style={{
                    width: '100%',
                  }}
                  onChange={e => setValue({ ...value, city: e.target.value })}
                  placeholder="Город"
                  value={value.city}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="url"
                label="Страна"
                rules={[
                  {
                    required: true,
                    message: 'Please enter url',
                  },
                ]}
              >
                <Input
                  style={{
                    width: '100%',
                  }}
                  onChange={e => setValue({ ...value, country: e.target.value })}
                  placeholder="Страна"
                  value={value.country}
                />
              </Form.Item>
            </Col>

          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="О себе"
                rules={[
                  {
                    required: true,
                    message: 'please enter url description',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="О себе" onChange={e => setValue({ ...value, aboutMe: e.target.value })} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
export default ProfileUpDate;