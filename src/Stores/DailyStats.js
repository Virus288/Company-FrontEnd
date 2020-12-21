import React from 'react'
import {withRouter} from "react-router-dom";
import backend from "../Links.json"

class DailyStats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: [],
            Errors: 0,
            Done: false,
            AnyData: false
        };
    }

    componentDidMount() {
        this.FetchData()
    }

    FetchData() {
        let day = this.props.match.params.date
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

        const sold = () => {
            let data = [];
            for(let x=0;x<Object.keys(this.state.Data.sold).length;x++){
                data.push(<li key={x}>Product {Object.keys(this.state.Data.sold)[x]} was sold {this.state.Data.sold[Object.keys(this.state.Data.sold)[x]]} times</li>)
            }
            return data
        }

        const RenderData = () => {
            return (
                <ul>
                    <li>{this.state.Data.day}</li>
                    <li>{this.state.Data.profit}</li>
                    {sold()}
                </ul>
            )
        }

        return this.state.Done ?
            <RenderData /> : (
                <span>Fetching data</span>
            );
    }
}

export default withRouter(DailyStats)