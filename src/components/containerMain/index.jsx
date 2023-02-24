import React, { Component, Fragment } from "react";
import { Switch } from "react-router-dom";
//私有路由组件
//私有组件方法
import PrivateRouter from "../privateRouter";
import routes from './routes'

export default class ContainerMain extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          {
            routes.map(item => { return <PrivateRouter exact key={item.path} path={item.path} component={item.component}></PrivateRouter> })
          }
        </Switch>
      </Fragment>
    );
  }
}
