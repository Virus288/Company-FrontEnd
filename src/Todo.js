import React from 'react'
import {Link} from "react-router-dom";

export default class Todo extends React.Component{

    render(){
        return (
            <div className="Todo">
                <Link to="/simulation">
                    <div><i className="menu-icon">Simulation</i></div>
                </Link>
                <Link to="/look">
                    <div><i className="menu-icon">Edit look</i></div>
                </Link>
            </div>
        )
    }

}