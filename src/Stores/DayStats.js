import React from 'react'
import { withRouter } from "react-router-dom";
import backend from "../Links.json"

class DayStats extends React.Component {
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

    FetchData() {
        let link = `${backend.backend}/salesstats?store=${this.props.match.params.store}`
        if (this.props.day){
            link += `&day=${this.props.day}`
        } else if(this.props.match.params.date){
            link += `&day=${this.props.match.params.date}`
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

    RenderData = () => {
        let data = [];
        for(let x=0;x<Object.keys(this.state.Data.sold).length;x++){
            data.push(<h5 key={x}>Product {Object.keys(this.state.Data.sold)[x]} was sold {this.state.Data.sold[Object.keys(this.state.Data.sold)[x]]} times</h5>)
        }
        return data
    }

    render() {

        return this.state.Done ?
            (
                <div className="DayData">
                    <h2>{this.state.Data.day}</h2>
                    <h3>{this.state.Data.profit}</h3>
                    <this.RenderData />
                </div>
            ) : (
                <h2>Fetching data</h2>
            );
    }
}

export default withRouter(DayStats)

