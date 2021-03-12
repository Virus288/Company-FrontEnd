import React from 'react'
import backend from "../Links.json"

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
        // fetch(`${backend.backend}/getData?orders=0`, {
        //     method: "GET",
        //     credentials: "include"
        // })
        //     .then(res => res.json())
        //     .then((result) => {
        //             this.setState({
        //                 Data: result,
        //                 Done: false
        //             });
        //         },
        //         (err) => {
        //             this.setState({
        //                 Errors: err
        //             });
        //         });
    }

    componentDidMount() {
        // if(this.state.Errors > 0){
        //     return ("There was an error with fetching your data")
        // } else if(this.state.Data.length <= 1){
            this.FetchToken()
        // }
    }

    render() {

        return (
            <div>
                cegła
            </div>
        )
        //     <Context.Consumer>{(context) => {
        //         if(this.state.Login === false){
        //             console.log(context.isLogged)
        //             context.LogIn(false)
        //         }
        //     }}
        //     </Context.Consumer>
        // )
        // const MarkOrder = async (e) => {
        //     try {
        //         const res = await fetch(`${backend.backend}/UpdateDone`, {
        //             method: "POST",
        //             body: JSON.stringify({Category: "orders", IsDone: true, id: e.target.parentElement.id}),
        //             headers: {'Content-Type': 'application/json'},
        //             credentials: "include"
        //         });
        //         const data = await res.json();
        //         if(data){}
        //         e.target.parentElement.parentElement.remove()
        //     } catch (e) {
        //         console.log(e)
        //     }
        // }
        //
        // const RenderData = this.state.Data.map(id => (
        //     <div key={id.id} className="card" style={{height: "15rem"}}>
        //         <div className="card-body" id={id.id}>
        //             <h5 className="card-title">{ id.store }</h5>
        //             <h6 className="card-subtitle mb-2 text-muted">Ordered items:</h6>
        //             <h6 className="card-subtitle mb-2 text-muted">{ id.ItemId }</h6>
        //             <button onClick={MarkOrder} style={{background: "lightgreen"}}>Done</button>
        //         </div>
        //     </div>
        // ))
        //
        // return (
        //     <div className="OrdersList">
        //         {RenderData}
        //     </div>
        // );
    }
}
