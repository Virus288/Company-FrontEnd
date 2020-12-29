import React from 'react'

// Functions
import DoneRender from './DoneRender'
import UnDoneRender from "./UnDoneRender";

// Css
import "../Css/Orders.css"

export default class Orders extends React.Component{
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
                <h1>General orders</h1>
                <button style={{background: "lightgreen"}} onClick={this._onButtonClick} className="OrderButton">{this.state.Done ? 'Finished' : 'Not finished'}</button>
                {this.state.Done ? <DoneRender /> : <UnDoneRender />}
            </div>
        )
    }
}