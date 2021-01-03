import React from 'react'
import {Link} from "react-router-dom";
import "./Css/Equipment.css"

export default class Equipment extends React.Component {
    render(){
        return (
            <div className="form">
                <div className="equipment">
                    <Link to="/warehouse" style={{ textDecoration: 'none' }}>
                        <button style={{background: "lightgreen"}}><h2>Stock</h2></button>
                    </Link>
                    <Link to="/stores" style={{ textDecoration: 'none' }}>
                        <button style={{background: "lightgreen"}}><h2>Stores</h2></button>
                    </Link>
                    <Link to="/employyes" style={{ textDecoration: 'none' }}>
                        <button style={{background: "lightgreen"}}><h2>Employees</h2></button>
                    </Link>
                </div>
            </div>
        )
    }
}