import React from "react";
import { withRouter } from "react-router-dom";
import backend from "../Links.json"

class StoreStock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: [],
            Errors: 0,
            Done: false,
            AnyData: false
        };
    }

    FetchData() {
        fetch(`${backend.backend}/getData?store=${this.props.match.params.store}`)
            .then(res => res.json())
            .then((result) => {
                    this.setState({
                        Data: result,
                        Done: true
                    });
                    if(this.state.Data.length > 0){
                        this.setState({
                            AnyData: true
                        })
                    }
                },
                (err) => {
                    this.setState({
                        Errors: err
                    });
                });
        }

    componentDidMount(props) {
        if(this.state.Errors > 0){
            return ("There was an error with fetching your data")
        } else if(this.state.Data.length <= 1){
            this.FetchData()
        }
    }

    render() {

        const RenderInnerData = () => {
            if(this.state.AnyData){
                let x;
                let y = 100;
                let data = [];
                for(x=0;x<Object.keys(this.state.Data[0]).length;x++){
                    if(Number.isInteger(this.state.Data[0][y])){
                        data.push(<li style={{textAlign: "left", margin: '5px'}} key={y}>Product {y} {this.state.Data[0][y]}</li>)
                    }
                    y++;
                }
                return data
            } else {
                return ("Seems like there is no data on server")
            }
        }

        return this.state.Done ?
            <RenderInnerData /> : (
                <span>Fetching data</span>
            )
    }
}

export default withRouter(StoreStock)