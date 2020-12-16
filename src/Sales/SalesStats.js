import React from 'react'
import { withRouter } from "react-router-dom";

class SalesStats extends React.Component {
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

    FetchData(data) {
        let link;
        if(data){
            link = `?day=${data}`
        }
        fetch(`http://localhost:5000/salesstats${link}`)
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
            return this.state.Data[0]
        }

        return this.state.Done ?
            <RenderData /> : (
                <span>Fetching data</span>
            );
    }
}

export default withRouter(SalesStats)