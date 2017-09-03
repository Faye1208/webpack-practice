import React from "react";
import ReactDOM from "react-dom";
// import RouteMap from "./router/routeMap";
// import { hashHistory }from "react-router";
import App from "./containers/App";
import "./static/css/common.css";

import { getData,postData } from './fetch/test.js';
getData();
// postData();


ReactDOM.render(
    <App />,
    document.getElementById("app")
);