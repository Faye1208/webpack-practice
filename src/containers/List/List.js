import React, {Component}  from "react";
import {Link} from "react-router-dom";
import Detail from "../Detail/Detail";

class List extends Component {
    render() {
        const obj = [
            {id: 1, desc: "Hello,"},
            {id: 2, desc: "Happy"},
            {id: 3, desc: "day"}
        ];

        return (
            <ul>
                {obj.map((item,index) => (
                    <li key={item.id}>
                        <Link to={`/detail/${item.id}`}>js jump to {item.desc}</Link>
                    </li>
                ))}
            </ul>
        );
    }

}

export default List;
