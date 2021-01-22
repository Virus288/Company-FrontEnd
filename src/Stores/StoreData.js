import React from "react";
import {withRouter} from "react-router-dom";
import DailyStats from "./DailyStats";
import DayStats from "./DayStats";
import Charts from "./Chart";
import AddDay from "./AddDay"

class StoreData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Done: 'General'
        }
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick(data) {
        this.setState({
            Done: data,
        });
    }

    RenderDaily = () => {
        this._onButtonClick("SalesStats");
        setTimeout(() => {
            this.ListenForDay()
        }, 500)
    }

    RenderGeneral = () => {
        this._onButtonClick("General")
    }

    AddDay = () => {
        this._onButtonClick("AddDay")
    }

    ListenForDay = () => {
        document.querySelectorAll(".DateButton").forEach(item => {
            item.addEventListener("click", (e) => {
                this._onButtonClick(e.target.parentElement.id)
            })
        })
    }

    componentDidMount() {
        this.ListenForDay()
    }

    render() {
        const GoBack = () => {
            window.history.back()
        }

        const RenderData = () => {
             if(this.state.Done === "SalesStats"){
                return <DailyStats />
            } else if(this.state.Done.length === 10){
                return <DayStats day={this.state.Done}/>
            } else if(this.state.Done === "General"){
                 return <Charts />
             } else {
                 return <AddDay />
             }
        }

        return (
            <div className="storeData container">
                <h2 className="header">{this.props.match.params.store}</h2>
                <div className="up">
                    <button className="button" style={{background: "lightgreen", width: "190px"}} onClick={GoBack}><h4>Previous menu</h4></button>
                    <button className="button" style={{background: "lightgreen", width: "150px"}} onClick={this.RenderDaily}><h3>SalesStats</h3></button>
                    <button className="button" style={{background: "lightgreen", width: "150px"}} onClick={this.AddDay}><h3>Add day</h3></button>
                    <button className="button" style={{background: "lightgreen", width: "150px"}} onClick={this.RenderGeneral}><h3>General</h3></button>
                </div>
                <div className="OrdersList">
                    <RenderData />
                </div>
            </div>
        )


    }
}

export default withRouter(StoreData)