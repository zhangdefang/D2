
import React, { Component, Fragment } from "react";
import './css/header.less'
export default class Header extends Component {
    render() {
        return (
            <Fragment>
                <div className="title">
                    <div className="imgs"></div>
                    <div className="child-title">D2模拟</div>
                </div>
            </Fragment>
        );
    }
}