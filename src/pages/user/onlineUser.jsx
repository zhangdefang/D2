import React, { useEffect, useState, Fragment } from 'react'
import { Input, Button } from 'antd';
import { getFiles } from '@/services/upload'
import ComTable from '@/components/common/comTable';
const columns = [
  {
    title: '序号',
    render: (text, record, index) =>
      `${index + 1}`
  },
  {
    title: '用户类型',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '描述',
    dataIndex: 'uid',
    key: 'uid'
  },
  {
    title: '登录时间',
    dataIndex: 'lastTime',
    key: 'lastTime'
  },
  {
    title: '用户',
    dataIndex: 'url',
    key: 'url'
  }
]
const OnlineUser = () => {
  const [list, setList] = useState([])
  const getFileLsit = async () => {
    const res = await getFiles()
    if (!res.data) return
    const { fileList } = res.data
    setList(fileList)
  }

  const search = () => {

  }

  useEffect(() => {
    getFileLsit()
  }, [])
  return (
    <Fragment>
      <header className='header'>
        <Input placeholder='用户姓名' className='input-search' />
        <Button type='primary' onClick={search}>搜索</Button>
      </header>
      <section className='section-table'>
        <ComTable
          columns={columns}
          data={list} />
      </section>
    </Fragment>
  )
}

export default OnlineUser