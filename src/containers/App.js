import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RouteMap from "../router/routeMap";

// import App from "./containers/App";
// import Detail from "./containers/Detail/Detail";
// import List from "./containers/List/List";
// import NotFound from "./containers/NotFound/NotFound";

class App extends Component {
    render() {
        return (
            <Router>
                <Route component={RouteMap}></Route>
            </Router>
        );
    }
}

export default App;