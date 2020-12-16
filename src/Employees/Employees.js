import React from 'react'
import {Link} from "react-router-dom";

export default class Employees extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div className="box4">
                <ul>
                    <Link to={`/getemployyes`}><li>Pracownicy</li></Link>
                    <Link to={`/addemployees`}><li>Dodawanie pracownika lub sklepu</li></Link>
                </ul>
            </div>
        )
    }
}