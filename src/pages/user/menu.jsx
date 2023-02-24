import React, { Component } from 'react'
import Trees from './component/tree'
import FormItem from './component/formItem'
import { Button } from 'antd'
import './css/menu.less'

export default class Menu extends Component {
  render() {
    return (
      <>
        <div className='menu'>
          <Button
          style={{marginRight:'10px'}}
            type="primary"
          >
            编辑
          </Button>
          <Button
            type="primary"
          >
            删除
          </Button>
        </div>
        <div className='header'>
          <div className='tree'><Trees /></div>
          <div style={{width:'70%'}}><FormItem/></div>
        </div>
      </>

    )
  }
}
