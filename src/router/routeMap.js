import React, { Component }  from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Home from "../containers/Home/Home";
import Detail from "../containers/Detail/Detail";
import List from "../containers/List/List";
import NotFound from "../containers/NotFound/NotFound";

class RouteMap extends Component {
    render () {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/list" component={List}/>
                <Route path="/detail/:id" component={Detail}/>
                {/*<Route path="/*" component={NotFound}/>*/}
            </div>
        );
    }
}

export default RouteMap;