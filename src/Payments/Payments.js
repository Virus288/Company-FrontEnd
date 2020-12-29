import React from 'react'

// Functions
import DoneRender from './DoneRender'
import UnDoneRender from "./UnDoneRender";

export default class Payments extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Data: 0,
            Done: false,
            Create: false
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
                <h1>Payments</h1>
                <button style={{background: "lightgreen"}} onClick={this._onButtonClick} className="OrderButton">{this.state.Done ? 'Finished' : 'Not finished'}</button>
                <ul className="orders">
                    {this.state.Done ? <DoneRender /> : <UnDoneRender />}
                </ul>
            </div>
        )
    }
}