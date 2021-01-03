import React from 'react'

// Functions
import DoneRender from './DoneRender'
import UnDoneRender from "./UnDoneRender";
import {Link} from "react-router-dom";

export default class Payments extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Done: false
        }
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick() {
        this.setState({
            Done: !this.state.Done,
        });
    }

    render() {
        return (
            <div className="container">
                <h2 className="header">{this.state.Done ? 'Finished' : 'Not finished'}</h2>
                <div className="up">
                    <button style={{background: "lightgreen"}} onClick={this._onButtonClick}>{this.state.Done ? <h5>Finished</h5> : <h5>Not finished</h5>}</button>
                    <Link to="/createpayment" style={{display: 'inline-block', float: "right"}}>
                        <button className="button" style={{background: "lightgreen"}}><h5>Add new payment</h5></button>
                    </Link>
                    <Link to="/createinvoice" style={{display: 'inline-block', float: "right"}}>
                        <button style={{background: "lightgreen"}}><h5>Create invoice</h5></button>
                    </Link>
                </div>
                {this.state.Done ? <DoneRender /> : <UnDoneRender />}
            </div>
        )
    }
}

