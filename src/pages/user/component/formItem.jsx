import React, { Component } from 'react'
import { Form, Input, Select } from 'antd';
import store from '../../../store'
import { PicLeftOutlined, PicRightOutlined } from '@ant-design/icons';

import '../css/formItem.less'
import { withRouter } from 'react-router-dom';

const { Option } = Select;
class FormItem extends Component {
    formRef = React.createRef();
    constructor(props) {
        super(props)
        const storeState = store.getState()
        this.state = {
            node: storeState.node
        }
        store.subscribe(() => {
            this.setState({
                node: store.getState().node
            })
        })
    }
    componentDidUpdate() {
        const { describe,email,fatherNode,icon,key,sord,type,afterStr} = this.state.node
        this.formRef.current.setFieldsValue({
            email,
            afterStr,
            fatherNode,
            icon,
            key,
            sord,
            type,
            describe,
        });
    }
    render() {
        return (
            <>
                <div className='form_item'>
                    <Form
                        name="basic"
                        labelCol={{ span: 3 }}
                        wrapperCol={{ span: 20 }}
                        initialValues={{ remember: true }}
                        autoComplete="off"
                        ref={this.formRef}
                    >
                        <Form.Item
                            label="邮政编码"
                            name="email"
                        >
                            <Input disabled />
                        </Form.Item>

                        <Form.Item
                            label="标题"
                            name="afterStr"
                        >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            label="父节点"
                            name="fatherNode"
                        >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            label="图标"
                            name="icon"
                        >
                            <Input style={{ width: '50%' }} addonBefore={<PicLeftOutlined />} addonAfter={<PicRightOutlined />} disabled />
                        </Form.Item>
                        <Form.Item
                            label="资源路径"
                            name="key"
                        >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            label="类型"
                            name="type"
                        >
                            <Select
                                allowClear
                                disabled
                                style={{ width: '20%' }}
                            >
                                <Option value="子">子</Option>
                                <Option value="父">父</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="排序"
                            name="sord"
                        >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            label="描述"
                            name="describe"
                        >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            label="路由组件"
                            name="key"
                        >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            label="路由路径"
                            name="key"
                        >
                            <Input disabled />
                        </Form.Item>
                    </Form>
                </div>
            </>
        )
    }
}
export default withRouter(FormItem)