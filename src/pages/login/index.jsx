import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { getScurry } from '@/services/upload'
import md5 from 'js-md5'
import { Form, Input, Button } from 'antd';
import './index.less'


class Login extends Component {
  state = {
    scurryFlag: false,
    scurryNum: undefined
  }
  formRef = React.createRef();
  onFinish = (values) => {
    let { username, password } = values
    localStorage.setItem("name", username)
    localStorage.setItem("password", md5(password))
    let { history } = this.props
    history.push("/home/user/userOption")
  };

  onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
  };

  onReset = () => {
    this.formRef.current.resetFields();
    this.setState({ scurryFlag: false })
  }

  scurry = async () => {
    const { scurryFlag } = this.state
    const res = await getScurry()
    const { scurry } = res.data
    if (res.code !== 200) return
    this.setState({ scurryFlag: !scurryFlag, scurryNum: scurry })
  }

  add = () => {
    let allMax = {
      aa: 24848.65,
      bb: 21484.90,
      cc: 2462.70,
      dd: 100000,
      mux: 13155.89
    }
    let { aa, bb, cc, dd, mux } = allMax
    return Number(aa) + Number(bb) + Number(cc) + Number(dd) + Number(mux)
  }

  mid = () => {
    let date = new Date()
    let month = date.getMonth() + 2
    switch (month) {
      case 7:
        return Number(12119.31) + (Number(15000) * 5)
      case 8:
        return Number(15000)
      case 9:
        return Number(15000)
      case 10:
        return Number(15000)
      case 11:
        return Number(15000)
      case 12:
        return Number(15000)
      case '':
      default:
    }
  }

  render() {
    const { scurryFlag, scurryNum } = this.state
    return (
      <>
        <div className='bac'>
          <div className='login_item'>
            {/* <div>{this.add() + this.mid()}</div> */}
            <div className="imgs"><span>D2模拟登录</span></div>
            <div className="fomt">
              <div className="btn" onClick={this.scurry}> <Button>{scurryFlag ? scurryNum : '获取验证码'}</Button> </div>
              <Form
                ref={this.formRef}
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="用户名"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: '请输入用户名',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="密码"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: '请输入密码',
                    },
                  ]}
                >
                  <Input.Password maxLength={8} />
                </Form.Item>

                <Form.Item
                  label="验证码"
                  name="scurrys"
                  rules={[
                    {
                      required: true,
                      message: '请输入验证码',
                    },
                  ]}
                >
                  <Input maxLength={8} disabled={!scurryFlag} style={{
                    width: '58%',
                  }} />
                </Form.Item>
                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    登录
                  </Button>
                  <Button htmlType="button" onClick={this.onReset} style={{ marginLeft: '18px' }}>
                    取消
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default withRouter(Login)