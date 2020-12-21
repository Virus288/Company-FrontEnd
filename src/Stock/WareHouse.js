import React from 'react';
import "../Css/Stock.css"
import backend from "../Links.json"

export default class WareHouse extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Data: [],
            Errors: 0
        }
    }

    FetchData() {
        fetch(`${backend.backend}/stock`)
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

        const RenderData = this.state.Data.map(id => (
            <div className="stock" key={id.ItemId} id={id.ItemId}>
                <span>{id.ItemId}</span>
                <span style={{textAlign: "center"}}>You have <h2 style={{color: "#74b6fc"}}>{id.amount}</h2> in stock</span>
            </div>
        ))

        return (
            <div className="container">
                <div className="stockContainer">
                    {RenderData}
                </div>
            </div>
        );
    }
}