import React, { Component, Fragment } from 'react'
import { Input, Button, Popconfirm, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import data from './useData/data.js'
import ComTable from '../../components/common/comTable.jsx';
import './css/user.less'
export default class UserType extends Component {
  state = {
    columns: [
      {
        title: '序号',
        render: (text, record, index) =>
          `${index + 1}`
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '账户',
        dataIndex: 'account',
        key: 'account'
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex'
      },
      {
        title: '备注',
        dataIndex: 'remark',
        key: 'remark'
      },
      {
        title: '最后时间',
        dataIndex: 'lastTime',
        key: 'lastTime'
      },
      {
        title: '操作',
        key: 'action',
        fixed: 'right',
        render: (text, record) =>
          this.state.data.length >= 1 ? (
            <div size="middle">
              <Button className='table-but' onClick={() => this.edit(record)}>编辑</Button>
              <Popconfirm title="确定删除?"
                okText="确定"
                cancelText="取消" onConfirm={() => this.handleDelete(record.key)}>
                <Button className='table-delete'>删除</Button>
              </Popconfirm>
            </div>
          ) : null,
      },
    ],
    data: data,
    visible: false
  }

  handleAdd = () => {
    const { data } = this.state
    const addList = {
      key: Math.floor(Math.random() * 10 + 2),
      name: '测试用户',
      account: 32,
      sex: '男',
      remark: '1231232',
      lastTime: '2022-05-05 14:00',
    }
    this.setState({ data: [...data, addList] })
  }

  handleDelete = (key) => {
    const data1 = [...this.state.data];
    this.setState({
      data: data1.filter((item) => item.key !== key),
    });
  }

  edit = () => {
    const { visible } = this.state
    this.setState({ visible: !visible })
  }

  search = () => {
    console.log('ddddddd');
  }

  handleOk = () => {
    this.setState({ visible: false })
  }

  cancel = () => {
    this.setState({ visible: false })
  }
  render() {
    const { columns, data, visible } = this.state
    return (
      <Fragment>
        <header className='header'>
          <Input placeholder='  姓名或账号' className='input-search' />
          <Button type='primary' onClick={this.search}>搜索</Button>
        </header>
        <section className='section-table'>
          <Button
            onClick={this.handleAdd}
            type="primary"
            icon={<PlusOutlined />}
            className="bu-table"
          >
            添加
          </Button>
          <ComTable
            columns={columns}
            data={data} />
        </section>
        <Modal title="新增"
          okText="确认"
          cancelText="取消"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.cancel}>
          <p>Some contents...</p>
        </Modal>
      </Fragment>
    )
  }
}
