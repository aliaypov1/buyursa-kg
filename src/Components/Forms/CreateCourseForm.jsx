import { Button, Checkbox, Form, Input } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const CreateCourseForm = ({ value, setValue, start, isFree, handleClick, close }) => (
  <div className="" style={{ display: 'flex', position: 'fixed', justifyContent: 'center', top: '0', left: "0", width: '100%', height: '100vh', alignItems: 'center', background: '#0000004d' }}>
    <Form
      name="basic"
      style={{
        width: 900,
        background: 'white',
        padding: '40px'

      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="title"
        onChange={e => setValue({ ...value, title: e.target.value })}
        placeholder='Title'
        rules={[
          {
            required: true,
            message: 'Please input your title',
          },
        ]}
      >
        <p style={{ textAlign: 'right', fontSize: '32px', marginBottom: '13px', color: 'red' }} onClick={close}>x</p>
        <Input placeholder='Title' />
      </Form.Item>

      <Form.Item
        name="description"
        placeholder='Description'
        onChange={e => setValue({ ...value, description: e.target.value })}
        rules={[
          {
            required: true,
            message: 'Please input your description!',
          },
        ]}
      >
        <Input placeholder='Description' />
      </Form.Item>
      {isFree ?


        <p></p>
        :
        <Form.Item
          name="price"
          onChange={e => setValue({ ...value, price: e.target.value })}
          rules={[
            {
              required: true,
              message: 'Please input your price!',
            },
          ]}
        >
          <Input />
        </Form.Item>
      }


      <Form.Item
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
      </Form.Item>

      <Form.Item

      >
        <Button onClick={start}>
          опубликовать
        </Button>
        <Button htmlType="submit" onClick={handleClick}>
          {isFree ? <p>Бесплатный</p> : <p>Платный</p>}
        </Button>
      </Form.Item>
    </Form>
  </div>

);
export default CreateCourseForm;