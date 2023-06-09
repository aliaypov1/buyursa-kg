import { Card, Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';

const ChangeUrl = () => {
  return (
    <div>
      <Card>
        <Form>
          <Input placeholder='Title' />
          <Input placeholder='videoUrl' />
          <TextArea placeholder='Description' />
        </Form>
      </Card>
    </div>
  );
};

export default ChangeUrl;