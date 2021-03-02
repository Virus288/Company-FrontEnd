import React from 'react'
import {withRouter} from "react-router-dom";
import backend from "../Links.json"

class EditStock extends React.Component {
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

    componentDidUpdate(prevProps) {
        if(this.state.AnyData){
            this.InsertData()
            this.manageData()
        }
    }

    InsertData(){
        const form = document.querySelector('form');
        form.Amount.value = this.state.Data[0].amount;
    }

    FetchData() {
        fetch(`${backend.backend}/getData?stock=${this.props.match.params.id}`)
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

    manageData() {
        const form = document.querySelector('form');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            this.setState({
                Errors: 0
            })

            // Get data
            const Number = this.state.Data[0].ItemId;
            const Amount = form.Amount.value;

            try {
                const res = await fetch(`${backend.backend}/updateData`, {
                    method: "POST",
                    body: JSON.stringify({Category: "editStock", Number, Amount}),
                    headers: { 'Content-Type': 'application/json'},
                    credentials: "include"
                });
                const data = await res.json();
                if(data.type === "success"){
                    let field = document.querySelector(".data");
                    field.style.color = "green"
                    field.innerHTML = data.message;
                } else {
                    this.setState({
                        Errors: 1
                    })
                    let field = document.querySelector(".data");
                    field.style.color = "red"
                    field.innerHTML = data.message;
                }

                if(this.state.Errors === 0){
                    setTimeout(() => {
                        this.props.history.push('/warehouse')
                    }, 2000)
                }
            }
            catch (e) {
                console.log(e)
            }
        })
    }

    render() {

        const GoBack = () => {
            window.history.back()
        }

        const RenderData = () => {
            return (
                <div className="container">
                    <button style={{background: "lightgreen", width: "190px"}} onClick={GoBack}><h4>Previous menu</h4></button>

                    <div className="form">
                        <form className="InnerForm">
                            <h1 className="data" style={{fontsize: "large"}}> </h1>
                            <h2>Edit product</h2>
                            <label htmlFor="Number">Product number</label>
                            <h3 className="ItemId">{this.state.Data[0].ItemId}</h3>

                            <label htmlFor="Amount">Amount of products</label>
                            <input type="text" name="Amount" required onClick={ClearData}/>

                            <button style={{marginLeft: "25%"}}>Submit</button>

                        </form>
                    </div>
                </div>
            )
        }

        const ClearData = () => {
            document.querySelector('.data').innerHTML = '';
        }

        return this.state.Done ?
            <RenderData /> : (
                <span>Fetching data</span>
            );
    }
}

export default withRouter(EditStock)
