import React, { Component, Fragment } from 'react'
import { Input, Button, Popconfirm } from 'antd';
import actionData from './useData/actionData'
import ComTable from '@/components/common/comTable';
import { PlusOutlined } from '@ant-design/icons';
import './css/user.less'
export default class ActionLog extends Component {
    state = {
        columns: [
            {
                title: 'id',
                render: (text, record, index) =>
                    `${index + 1}`
            },
            {
                title: '编码',
                dataIndex: 'code',
                key: 'code'
            },
            {
                title: '类型名称',
                dataIndex: 'typeName',
                key: 'typeName'
            },
            {
                title: '描述',
                dataIndex: 'describe',
                key: 'describe'
            },
            {
                title: '最后更新时间',
                dataIndex: 'lastTime',
                key: 'lastTime'
            },
            {
                title: '最后更新人',
                dataIndex: 'male',
                key: 'male'
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
        data: actionData
    }
    handleAdd = () => {

    }
    search = () => {
        console.log('ddddddd');
    }

    handleDelete = (key) => {
    }

    edit = (record) => {
    }


    render() {
        const { columns, data } = this.state
        return (
            <Fragment>
                <header className='header'>
                    <Input placeholder='  操作人姓名' className='input-search' />
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
            </Fragment>
        )
    }
}

