import React, { Component, Fragment } from 'react'
import { Input, Button, Popconfirm } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import data from './useData/data.js'
import ComTable from '@/components/common/comTable.jsx';
import Model from './component/model'
import Draw from './component/draw.jsx';
import moment from 'moment';
import './css/user.less'
export default class UserOption extends Component {
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
        key: 'lastTime',
        render: val => (
          <span>{moment(val.lastTime).format('YYYY-MM-DD HH:mm')}</span>
        )
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
    addList: {
      key: undefined,
      name: undefined,
      account: undefined,
      sex: undefined,
      remark: undefined,
      lastTime: undefined,
    },
    deleteFlag: false
  }

  handleAdd = (res) => {
    this.childRef.showDrawer()
    if (!res.name) return
    let { data, addList } = this.state
    addList = {
      key: new Date(),
      name: res.name,
      account: res.account,
      sex: res.sex === 'man' ? '男' : '女',
      remark: res.remark,
      lastTime: res.lastTime,
    }
    this.setState({ data: [...data, addList] })
  }

  handleDelete = (key) => {
    const data1 = [...this.state.data];
    this.setState({
      data: data1.filter((item) => item.key !== key),
      deleteFlag: true
    });
  }

  edit = (record) => {
    this.childRef.showDrawer(record)
    const { visible } = record
    if (!record) return
    if (visible) {
      data.forEach((item, index) => {
        if (item.key === record.key) {
          item.key = record.key;
          item.account = record.account;
        }
      })
      this.setState({ data: data, deleteFlag: false })
    }
  }


  search = () => {
    console.log('ddddddd');
  }

  onModelRef = ref => {
    this.childModelRef = ref
  }

  onDrawRef = ref => {
    this.childRef = ref
  }

  render() {
    const { columns, data, deleteFlag } = this.state
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
        <Model onRef={this.onModelRef} />
        <Draw onRef={this.onDrawRef} sendFn={this.handleAdd} editFn={this.edit} deleteFla={deleteFlag} />
      </Fragment>
    )
  }
}
