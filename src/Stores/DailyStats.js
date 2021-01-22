import React from 'react'
import { withRouter } from "react-router-dom";
import backend from "../Links.json"

class DailyStats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: [],
            Errors: 0,
            Done: false
        };
    }

    componentDidMount() {
        this.FetchData()
    }

    FetchData(day) {
        let link = `${backend.backend}/salesstats?store=${this.props.match.params.store}`
        if (day){
            link += `&day=${day}`
        }
        fetch(link)
            .then(res => res.json())
            .then((result) => {
                    this.setState({
                        Data: result,
                        Done: true
                    });
                },
                (err) => {
                    this.setState({
                        Errors: err
                    });
                });
    }

    render() {

        const RenderData = () => {
            if(this.state.Data.Message){
                return ( <h2>{this.state.Data.Message}</h2> )
            }
            let data = []

            for(let x=0;x< this.state.Data["files"].length; x++){
                data.push(
                    <div key={this.state.Data["files"][x]} className="card" style={{height: "15rem"}}>
                        <div className="card-body" id={this.state.Data["files"][x].slice(0, -5)}>
                            <h5 className="card-title">{this.state.Data["files"][x].slice(0, -5)}</h5>
                            <h5 className="card-title">Profit: {this.state.Data["profits"][x]} PLN</h5>
                            <button style={{background: "lightgreen", marginTop: "15%"}} className="DateButton">Stats</button>
                        </div>
                    </div>
                )
            }
            return (
                data
            )
        }

        return this.state.Done ?
            <RenderData /> : (
                <h2>Fetching data</h2>
            );
    }
}

export default withRouter(DailyStats)