import VerifyCode from '@/components/verify-code'
import { Button, Checkbox, Col, Form, Input, Row } from 'antd'
import React from 'react'

export default function LoginForm() {
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
        label="图形验证码"
        name="code"
        rules={[{ required: true }]}
      >
        <Row gutter={12}>
          <Col span={14}>
            <Input />
          </Col>
          <Col span={10}>
            <VerifyCode type="login" />
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

      <Button type="primary" block>登录</Button>
    </Form>
  )
}
