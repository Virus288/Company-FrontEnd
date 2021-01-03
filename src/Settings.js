import React from 'react'
import {Link} from "react-router-dom";

export default class Settings extends React.Component {
    render(){
        return (
            <div className="Settings">
                <Link to="/logout">
                    <div className="link"><i className="icon-logout"> </i></div>
                </Link>
            </div>
        )
    }
}