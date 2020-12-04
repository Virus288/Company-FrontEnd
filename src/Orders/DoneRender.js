import React from 'react'
import UnDoneRender from "./UnDoneRender";

export default class DoneRender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: [],
            Errors: 0,
            Done: false
        };
    }

    FetchData() {
        fetch('http://localhost:5000/orders?done=false')
            .then(res => res.json())
            .then((result) => {
                    this.setState({
                        Data: result,
                        Done: false
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
            if (e.target.checked) {
                try {
                    const res = await fetch('http://localhost:5000/orders', {
                        method: "POST",
                        body: JSON.stringify({ Done: true, id: e.target.parentElement.id}),
                        headers: {'Content-Type': 'application/json'}
                    });
                    const data = await res.json();
                    console.log(data);
                    e.target.parentElement.remove()
                } catch (e) {
                    console.log(e)
                }
            }
        }

        const RenderData = this.state.Data.map(id => (
            <li key={id.id} id={id.id} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{id.ItemId}</span>
                <input onChange={MarkOrder} type="checkbox" className="checkbox" />
            </li>
        ))

        return (
            <div className="orders">
                {RenderData}
            </div>
        );
    }
}