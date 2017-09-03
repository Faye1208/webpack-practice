import React, { Component }  from 'react';
import { Link, Route } from 'react-router-dom';
import List from "../List/List";

class Home extends Component {
    render() {
        return (
            <div>
                <div>{this.props.children}</div>
                <p>this is home page!</p>
                <Link to="/list">to list</Link>
            </div>
        );
    }
}

export default Home;