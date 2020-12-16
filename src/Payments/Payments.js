import React from 'react'

export default class Payments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="box5">
                <ul>
                    <li>Opłaty za sklepy</li>
                    <li>Statystyki zysków z towaru</li>
                    <li>Dodawanie opłat</li>
                    <li>Edycja opłat</li>
                    <li>Możliwość wystawiania faktur za opłaty</li>
                </ul>
            </div>
        )
    }
}