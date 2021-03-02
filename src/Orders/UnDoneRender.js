import React from 'react'
import backend from "../Links.json"

export default class UnDoneRender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: [],
            Errors: 0
        };
    }

    FetchData() {
        fetch(`${backend.backend}/getData?orders=1`, {
            method: "GET",
            credentials: "include"
        })
            .then(res => res.json())
            .then((result) => {
                    this.setState({
                        Data: result
                    });
                },
                (err) => {
                    this.setState({
                        Errors: err
                    });
                });
    }

    componentDidMount() {
        if(this.state.Errors > 0){
            return ("There was an error with fetching your data")
        } else if(this.state.Data.length <= 1){
            this.FetchData()
        }
    }

    render() {
        const MarkOrder = async (e) => {
            try {
                const res = await fetch(`${backend.backend}/UpdateDone`, {
                    method: "POST",
                    body: JSON.stringify({Category: "orders", IsDone: false, id: e.target.parentElement.id}),
                    headers: {'Content-Type': 'application/json'},
                    credentials: "include"
                });
                const data = await res.json();
                if(data){}
                e.target.parentElement.parentElement.remove()
            } catch (e) {
                console.log(e)
            }
        }

        const RenderData = this.state.Data.map(id => (
            <div key={id.id} className="card" style={{height: "15rem"}}>
                <div className="card-body" id={id.id}>
                    <h5 className="card-title">{ id.store }</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Ordered items:</h6>
                    <h6 className="card-subtitle mb-2 text-muted">{ id.ItemId }</h6>
                    <button onClick={MarkOrder}>Done</button>
                </div>
            </div>
        ))

        return (
            <div className="OrdersList">
                {RenderData}
            </div>
        );
    }
}
