import React from "react";
import {Link} from "react-router-dom";

export default class Sales extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="box7">
                <ul>
                    <Link to={`/salesstats`}><li>Statystyki sprzedaży</li></Link>
                </ul>
            </div>
        )
    }
}