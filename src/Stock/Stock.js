import React from 'react'
import {Link} from "react-router-dom";

export default class Stock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="box3">
                <ul>
                    <Link to={`/warehouse`}><li>Warehouse</li></Link>
                    <Link to={`/addstock`}><li>Add items to stock</li></Link>
                </ul>
            </div>
        )
    }
}