import React, { Component } from 'react'
import { Table } from 'antd'

export default class ComTable extends Component {
    render() {
        const { data, columns } = this.props
        return (
            <div>
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    scroll={{ x: 1500 }} />
            </div>
        )
    }
}
