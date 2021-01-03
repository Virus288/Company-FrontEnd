import React from 'react'
import {Link} from "react-router-dom";
import GetEmployyes from "./GetEmployyes";

export default class Employees extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){

        const GoBack = () => {
            window.history.back()
        }

        return (
            <div className="container">
                <h2 className="header">Employees</h2>
                <div className="up">
                    <button className="button" style={{background: "lightgreen", width: "190px"}} onClick={GoBack}><h4>Previuos menu</h4></button>
                    <Link to="/addemployees" style={{ textDecoration: 'none' }}>
                        <button className="button" style={{background: "lightgreen", width: "170px", float: "right"}}><h4>Add employee</h4></button>
                    </Link>
                </div>
                <div className="OrdersList">
                    <GetEmployyes />
                </div>
            </div>
        )
    }
}
