import React from 'react'
import {Link} from "react-router-dom";
import { DarkMode } from "./Addons/DarkMode"

export default class Settings extends React.Component {
    render(){
        return (
            <div className="form">
                <div className="Settings">
                        <button style={{background: "lightgreen", width: "200px"}} onClick={DarkMode}><h3>Dark Mode</h3></button>
                    <Link to="/logout" style={{ textDecoration: 'none'}}>
                        <button style={{background: "lightgreen", width: "200px"}}><h2>Logout</h2></button>
                    </Link>
                </div>
            </div>
        )
    }
}
