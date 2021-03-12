import React from 'react'
import {Link} from "react-router-dom";

// Functions
import DoneRender from './DoneRender'
import UnDoneRender from "./UnDoneRender";

// Css
import "../Css/Orders.css"

export default class Orders extends React.Component{
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
                <h2 className="header">{this.state.Done ? 'Not finished' : 'Finished'}</h2>
                <div className="up">
                    <button className="button" style={{background: "lightgreen"}} onClick={this._onButtonClick}>{this.state.Done ? <h5>Not done</h5> : <h5>Done</h5>}</button>
                    <Link to="/createorder" style={{display: 'inline-block', float: "right"}}>
                        <button className="button" style={{background: "lightgreen"}}><h4>Add new</h4></button>
                    </Link>
                </div>
                {this.state.Done ? <DoneRender LoggedIn={this.props.context.LogIn} /> : <UnDoneRender LoggedIn={this.props.context.LogIn} />}
            </div>
        )
    }
}
