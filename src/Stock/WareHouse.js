import React from 'react';
import backend from "../Links.json"
import "../Css/WareHouse.css"
import {Link} from "react-router-dom";

export default class WareHouse extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Data: [],
            Errors: 0
        }
    }

    FetchData() {
        fetch(`${backend.backend}/getData?stock=all`)
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

        const GoBack = () => {
            window.history.back()
        }

        const RenderData = this.state.Data.map(id => (
            <div key={id.ItemId} className="card" style={{height: "15rem"}}>
                <div className="card-body" id={id.id}>
                    <h5 className="card-subtitle mb-2">You have: {id.amount} </h5>
                    <h5 className="card-subtitle mb-2"> of { id.ItemId }</h5>
                </div>
            </div>
        ))

        return (
            <div className="stock container">
                <h2 className="header">Items from warehouse</h2>
                <div className="up">
                    <button className="button" style={{background: "lightgreen", width: "190px"}} onClick={GoBack}><h4>Previous menu</h4></button>
                    <Link to="/addstock" style={{ textDecoration: 'none' }}>
                        <button className="button" style={{background: "lightgreen", width: "150px"}}><h3>Add items</h3></button>
                    </Link>
                </div>
                <div className="OrdersList">
                    {RenderData}
                </div>
            </div>
        );
    }
}