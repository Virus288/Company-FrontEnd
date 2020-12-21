import React from "react";
import "../Css/Stores.css"
import { Link } from "react-router-dom";
import backend from "../Links.json"

export default class GetStores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: [],
            Errors: 0
        }
    }

    FetchData() {
        fetch(`${backend.backend}/stores`)
            .then(res => res.json())
            .then((result) => {
                    this.setState({
                        Data: result
                    });
                },
                (err) => {
                    this.setState({
                        Errors: err
                    });
                });
    }

    componentDidMount() {
        this.FetchData()
    }

    render() {
        const StoreLink = (city) => {
            return (`/storestock/${city}`)
        }

        const SalesStats = (city) => {
            return (`/salesstats/${city}`)
        }

        const RenderData = this.state.Data.map(id => (
            <ul key={id.id} id={id.id}>
                <li>City: {id.city}</li>
                <li>Street: {id.street}</li>
                <li>Building number: {id.buildingNumber}</li>
                <li>Employees: {id.employees}</li>
                <Link to={StoreLink(id.city)} style={{textDecoration: 'none'}}>
                    <li>Stock</li>
                </Link>
                <Link to={SalesStats(id.city)} style={{textDecoration: 'none'}}>
                    <li>Sales stats</li>
                </Link>
            </ul>
        ))

        return (
            <div className="box7">
                {RenderData}
            </div>
        )
    }
}
