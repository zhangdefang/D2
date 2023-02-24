import React, { Component } from 'react'
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd'
const { Option } = Select;

export default class Draw extends Component {
  formRef = React.createRef()
  state = {
    visible: false,
    flag: false,
    formData: {}
  }

  componentDidMount() {
    this.props.onRef(this)
  }

  componentDidUpdate() {
    const { formData } = this.state
    const { deleteFla } = this.props
    const { account, key, name, remark, sex, lastTime } = formData
    if (deleteFla) return
    this.formRef.current.setFieldsValue({
      account,
      key,
      name,
      remark,
      sex,
      lastTime
    });
  }

  showDrawer = (record) => {
    this.setState({
      visible: true,
      flag: record ? true : false,
      formData: { ...record }
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    })
  }

  onFinish = values => {
    const { sendFn, editFn } = this.props
    const { key } = this.state.formData
    const { visible } = this.state
    if (key) { editFn({ ...values, key, visible }) } else {
      sendFn(values)
    }
    this.setState({
      visible: false,
    })
  };

  onFinishFailed = errorInfo => {
  };

  render() {
    const { visible, flag } = this.state
    return (
      <>
        <Drawer
          title={flag ? '编辑' : '新建'}
          width={720}
          onClose={this.onClose}
          visible={visible}
          destroyOnClose
          bodyStyle={{ paddingBottom: 80 }}
        >
          <Form
            layout="vertical"
            ref={this.formRef}
            onFinish={this.onFinish}
            initialValues={{ remember: false }}
            onFinishFailed={this.onFinishFailed}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="姓名"
                  rules={[{ required: true, message: '请输入姓名' }]}
                >
                  <Input
                    placeholder="请输入姓名"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="account"
                  label="账户"
                  rules={[{ required: true, message: '请输入账户' }]}
                >
                  <Input
                    style={{ width: '100%' }}
                    placeholder="请输入账户"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="sex"
                  label="性别"
                  rules={[{ required: true, message: '请选择性别' }]}
                >
                  <Select placeholder="请选择性别">
                    <Option value="man">男</Option>
                    <Option value="female">女</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="lastTime"
                  label="最后时间"
                  rules={[{ required: true, message: '请选择日期' }]}
                >
                  <DatePicker
                    style={{ width: '100%' }}
                    placeholder="请选择日期"
                    format="YYYY-MM-DD hh:ss"
                    getPopupContainer={trigger => trigger.parentElement}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="remark"
                  label="备注"
                  rules={[
                    {
                      required: true,
                      message: '请输入',
                    },
                  ]}
                >
                  <Input.TextArea rows={4} placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item style={{ textAlign: 'right' }}>
                  <Button onClick={this.onClose} style={{ marginRight: '10px' }}>
                    取消
                  </Button>
                  <Button type="primary" htmlType="submit">
                    提交
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
      </>
    )
  }
}
