import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
//私有组件
import PrivateRouter from "./components/privateRouter";
 
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
 
  render() {
    return (
      <div style={{height:'100%'}}>
        <BrowserRouter>
          <Switch>
            <Route exact render={() => <Login />} path="/" />
            <PrivateRouter component={Home} path="/home" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}