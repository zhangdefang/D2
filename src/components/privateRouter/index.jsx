import React from "react";
import { Route, Redirect } from "react-router-dom";
//获取token
// import { getToken } from "../../utils/session";

const PrivateRouter = ({ component: Component, ...rest }) => {
  const username = localStorage.getItem("name")
  return (
    <Route
      {...rest}
      render={
        (routePrpos) =>
          username ? <Component {...routePrpos} /> : <Redirect to="/" /> //判断token，是否重定向到登录页
      }
    />
  );
};

export default PrivateRouter;