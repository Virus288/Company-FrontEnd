import React from "react";
import "../Css/Stores.css"
import { Link } from "react-router-dom";

export default class GetStores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: [],
            Errors: 0
        }
    }

    FetchData() {
        fetch('http://localhost:5000/stores')
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

        const RenderData = this.state.Data.map(id => (
            <ul key={id.id} id={id.id}>
                <li>Miasto: {id.city}</li>
                <li>Ulica: {id.street}</li>
                <li>Numer budynku: {id.buildingNumber}</li>
                <li>Pracownicy: {id.employees}</li>
                <Link to={StoreLink(id.city)} style={{textDecoration: 'none'}}>
                    <li>Zatowarowanie</li>
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
