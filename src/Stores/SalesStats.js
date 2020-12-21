import React from 'react'
import {Link, withRouter} from "react-router-dom";
import backend from "../Links.json"

class SalesStats extends React.Component {
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
        fetch(`${backend.backend}/salesstats?store=${this.props.match.params.store}`)
            .then(res => res.json())
            .then((result) => {
                if(result.Message === "No data"){
                    this.setState({
                        Errors: "No data",
                        Done: true
                    });
                } else {
                    this.setState({
                        Data: result,
                        Done: true
                    });
                }
                },
                (err) => {
                    this.setState({
                        Errors: err
                    });
                });
    }

    render() {

        const link = (date) => {
            return `${this.props.match.params.store}/${date}`
        }

        const RenderData = () => {
            if(this.state.Errors){
                return (this.state.Errors)
            } else {
                return this.state.Data.map(date => (
                    <Link to={link(date.slice(0, -5))} key={date.slice(0, -5)}><li>Date: {date.slice(0, -5)}</li></Link>
                ))
            }
        }

        return this.state.Done ?
            <RenderData /> : (
                <span>Fetching data</span>
            );
    }
}

export default withRouter(SalesStats)