import React from "react";
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
        fetch(`${backend.backend}/getData?stores=all`)
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
            return (`/stores/${city}`)
        }

        const GoBack = () => {
            window.history.back()
        }

        const RenderData = this.state.Data.map(id => (
            <div key={id.id} id={id.id} className="card" style={{height: "15rem"}}>
                <div className="card-body">
                    <h3 className="card-title">{id.city}</h3>
                    <Link to={StoreLink(id.city)} style={{textDecoration: 'none'}}>
                        <button style={{width: "150px", marginTop: "30px", border: "none"}}><h4>Store data</h4></button>
                    </Link>
                </div>
            </div>
        ))

        return (
            <div className="container">
                <h2 className="header">Stores</h2>
                <div className="up">
                    <button className="button" style={{background: "lightgreen", width: "190px"}} onClick={GoBack}><h4>Previuos menu</h4></button>
                    <Link to="/addstore" style={{ textDecoration: 'none' }}>
                        <button className="button" style={{background: "lightgreen", width: "150px", float: "right"}}><h4>Add store</h4></button>
                    </Link>
                </div>
                <div className="OrdersList">
                    {RenderData}
                </div>
            </div>
        )
    }
}

