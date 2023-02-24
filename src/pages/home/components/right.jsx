import React from 'react'
import { Popconfirm } from 'antd'
import { GithubOutlined } from '@ant-design/icons';
import './css/right.less'
import { withRouter } from 'react-router-dom';

const Right = (props) => {
    const turnOut = () => {
        localStorage.removeItem("name")
        localStorage.removeItem("password")
        props.history.push('/')
    }
    return (
        <>
            <div className='icons'>
                <Popconfirm placement="bottom" title='确定退出？' onConfirm={turnOut} okText="确定" cancelText="取消">
                    <span style={{ paddingRight: '10px' }}>{localStorage.getItem("name")}</span>
                    <GithubOutlined style={{ fontSize: '26px', paddingTop: '20px' }} />
                </Popconfirm>
            </div>
        </>
    )
}

export default withRouter(Right) 