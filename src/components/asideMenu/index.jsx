import React, { Component, Fragment } from "react";
import { Link,withRouter } from "react-router-dom";

//antd
import * as Icon from '@ant-design/icons';
import { Menu } from "antd";

//路由
import Router from "../../router";
const { SubMenu } = Menu;

const addIcon = (name) => {
  return React.createElement(Icon[name]);
}


class AsideMenu extends Component {
  // 无子级菜单处理
  renderMenu = ({ title, icon, key }) => {
    return (
      <Menu.Item key={key} icon={addIcon(icon)}>
        <Link to={key}>{title}</Link>
      </Menu.Item>
    );
  };

  // 子级判断处理(递归)
  renderSubMenu = ({ title, icon, key, children }) => {
    return (
      <SubMenu key={key} icon={addIcon(icon)} title={title}>
        {children &&
          children.map((item) => {
            return item.children && item.children.length > 0
              ? this.renderSubMenu(item)
              : this.renderMenu(item);
          })}
      </SubMenu>
    );
  };

  render() {
    const { pathname } = this.props.location 
    return (
      <Fragment>
        <Menu
          mode="inline"
          defaultSelectedKeys={pathname}
          selectedKeys={pathname}
          defaultOpenKeys={["/home/user"]}
          style={{ height: "100%", borderRight: 0 }}
          theme="dark"
        >
          {Router &&
            Router.map((firstItem) => {
              return firstItem.children && firstItem.children.length > 0
                ? this.renderSubMenu(firstItem)
                : this.renderMenu(firstItem);
            })}
        </Menu>
      </Fragment>
    );
  }
}
export default  withRouter(AsideMenu)