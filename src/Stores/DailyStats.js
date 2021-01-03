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
            let map;

            if(this.state.Data.Message){
                map = this.state.Data.Message
            } else {
                map = this.state.Data.map( id => (
                    <div key={id} className="card" style={{height: "15rem"}}>
                        <div className="card-body" id={id.slice(0, -5)}>
                            <h5 className="card-title">{id.slice(0, -5)}</h5>
                            <button style={{background: "lightgreen", marginTop: "15%"}} className="DateButton">Stats</button>
                        </div>
                    </div>
                ))
            }

            return (
                map
            )
        }

        return this.state.Done ?
            <RenderData /> : (
                <h2>Fetching data</h2>
            );
    }
}

export default withRouter(DailyStats)