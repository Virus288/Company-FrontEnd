import React from "react";
import { Link } from "react-router-dom";

export default class Stores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: [],
            Errors: 0
        }
    }

    render() {

        return (
            <ul>
                <Link to="getstores" style={{textDecoration: 'none'}}><li>Show stores</li></Link>
                <Link to="addstore" style={{textDecoration: 'none'}}><li>Add store</li></Link>
            </ul>
        )
    }
}
