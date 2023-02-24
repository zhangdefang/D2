
import React, { Component } from "react";
import LayoutAside from "./components/aside";
import LayoutHeader from "./components/header";
import Right from "./components/right";
import ContainerMain from "@/components/containerMain";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';


import './layout.less'
import { Layout, Breadcrumb } from "antd";
import { withRouter } from "react-router-dom";
const { Sider, Header, Content } = Layout;

class Home extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  getBreadcrumbs = ({ flattenRoutes, location }) => {
    let matches = [];
    location.pathname
      .split('?')[0]
      .split('/')
      .reduce((prev, curSection) => {
        const pathSection = `${prev}/${curSection}`;
        const breadcrumb = this.getBreadcrumb({
          flattenRoutes,
          curSection,
          pathSection,
        });
        matches.push(breadcrumb);
        return pathSection;
      });
    return matches;
  };
  getBreadcrumb = ({ flattenRoutes, curSection, pathSection }) => {
    const matchRoute = flattenRoutes.find(ele => {
      const { path } = ele;
      // exact 为 react router4 的属性，用于精确匹配路由
      return path;
    });
    if (matchRoute) {
      return {
        content: matchRoute.breadcrumb || decodeURI(curSection),
        path: matchRoute.path,
      };
    }
    return {
      content: pathSection === '/' ? '业务受理' : curSection,
      path: pathSection,
    };
  };

  bread = () => {
    const { pathname } = this.props.location
    switch (pathname) {
      case '/home/user/userOption':
        return ['基础配置管理', '用户管理'];
      case '/home/user/menu':
        return ['基础配置管理', '菜单管理'];
      case '/home/user/roleAuthorization':
        return ['基础配置管理', '角色权限管理'];
      case '/home/user/userType':
        return ['基础配置管理', '角色类型管理'];
      case '/home/user/actionLog':
        return ['基础配置管理', '操作日志'];
      case '/home/user/onlineUser':
        return ['基础配置管理', '在线用户'];
      case '/home/navigation/dropdown':
        return ['服务权限管理', '服务管理'];
      case '/home/entry/form/basic-form':
        return ['监控模块管理', '服务注册中心'];
      case '/home/entry/form/step-form1':
        return ['监控模块管理', '服务状态监控'];
      case '/home/entry/form/step-form2':
        return ['监控模块管理', '服务链路监控'];
      case '':
      default:
    }
  }


  render() {
    return (
      <Layout className="layout-wrap">
        <Header className="layout-header">
          <LayoutHeader />
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: this.toggle,
          })}
          <Right />
        </Header>
        <Layout>
          <Sider className="layout-side" trigger={null} collapsible collapsed={this.state.collapsed}>
            <LayoutAside />
          </Sider>
          <Content className="layout-main">
            <div>
              <Breadcrumb className="bread-style" separator=">">
                {
                  this.bread() && this.bread().length !== 0 ? this.bread().map((item, index) => {
                    return (<Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>)
                  }) : ''
                }
              </Breadcrumb>
            </div>
            <div>
              <ContainerMain />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(Home)