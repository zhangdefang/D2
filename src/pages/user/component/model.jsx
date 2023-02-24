import React, { Component } from 'react'
import { Modal } from 'antd'

export default class Model extends Component {
  state = {
    visible: false
  }

  componentDidMount() {
    this.props.onRef(this)
  }

  handleVis = () => {
    this.setState({ visible: true })
  }

  handleOk = () => {
    this.setState({ visible: false })
  }

  cancel = () => {
    this.setState({ visible: false })
  }

  render() {
    const { visible } = this.state
    return (
      <>
        <Modal
          title="新增"
          okText="确认"
          cancelText="取消"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.cancel}
        >
          <p>ddddddd</p>
        </Modal>
      </>
    )
  }
}
