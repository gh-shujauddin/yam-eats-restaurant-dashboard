import React from "react";
import { Form, Input, Button, Card, InputNumber } from "antd";

const { TextArea } = Input;

function CreateMenuItem() {
  return (
    <Card title="New Menu Item" style={{ margin: 20 }}>
      <Form layout="vertical" wrapperCol={{ span: 8 }}>
        <Form.Item label="Dish name" required>
          <Input placeholder="Enter dish name" />
        </Form.Item>
        <Form.Item label="Dish description" required>
          <TextArea rows={4} placeholder="Enter dish description" />
        </Form.Item>
        <Form.Item label="Price ($)" required>
          <InputNumber />
        </Form.Item>
        <Form.Item label="Price ($)" required>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default CreateMenuItem;
