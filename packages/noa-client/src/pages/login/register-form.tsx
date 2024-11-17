import VerifyCode from '@/components/verify-code'
import { Button, Checkbox, Col, Form, Input, Row } from 'antd'
import React from 'react'

export default function RegisterForm() {
  return (
    <Form
      name="layout-multiple-horizontal"
      layout="horizontal"
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      variant="filled"
      labelAlign="left"
    >
      <Form.Item label="邮箱" name="email" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="确认密码"
        name="repeatPassword"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="验证码"
        name="code"
        rules={[{ required: true }]}
      >
        <Row gutter={12}>
          <Col className="gutter-row" span={14}>
            <Input />
          </Col>
          <Col className="gutter-row" span={10}>
            <VerifyCode type="register" />
          </Col>
        </Row>
      </Form.Item>

      <Form.Item
        name="agree"
        valuePropName="agree"
        wrapperCol={{ offset: 7, span: 17 }}
      >
        <Checkbox>同意软件使用协议</Checkbox>
      </Form.Item>

      <Button type="primary" block>注册</Button>
    </Form>
  )
}
