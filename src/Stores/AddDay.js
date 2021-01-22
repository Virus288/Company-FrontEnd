import React from 'react'
import backend from "../Links.json";
import {withRouter} from "react-router-dom";

class AddDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: {},
            Day: "",
            Profit: ""
        }
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick(data) {
        this.state.Data.push(data)
    }

    Send = () => {
        const submit = document.querySelector('.submit');

        submit.addEventListener('click', async (e) => {
            e.preventDefault();

            try {
                const res = await fetch(`${backend.backend}/adday`, {
                    method: "POST",
                    body: JSON.stringify({City: this.props.match.params.store, Category: "AdDay", data: this.state.Data, day: this.state.Day, profit: this.state.Profit}),
                    headers: { 'Content-Type': 'application/json'}
                });
                const data = await res.json();
                if(data.type === "success"){
                    let field = document.querySelector(".data");
                    field.style.color = "green"
                    field.innerHTML = data.message;
                } else {
                    let field = document.querySelector(".data");
                    field.style.color = "red"
                    field.innerHTML = data.message;
                }
            }
            catch (e) {
                console.log(e)
            }

        })
    }

    componentDidMount() {
        this.Send()

        document.querySelectorAll(".InnerForm").forEach(form => {
            form.addEventListener("submit", (e) => {
                e.preventDefault()

                if(form.className === "InnerForm text"){
                    this.setState({
                        Day: e.target.Day.value
                    })
                    form.remove();
                    document.querySelector(".Data").innerHTML += `<li>${this.state.Day}</li>`
                } else if(form.className === "InnerForm item"){
                    if(!Object.keys(this.state.Data).includes(e.target.Number.value)){
                        this.state.Data[e.target.Number.value] = e.target.Amount.value
                        document.querySelector(".Data").innerHTML += `<li>${e.target.Number.value} : ${e.target.Amount.value}</li>`
                    }
                    form.reset()
                } else if (form.className === "InnerForm profit"){
                    this.setState({
                        Profit: e.target.Profit.value
                    })
                    form.remove();
                    document.querySelector(".Data").innerHTML += `<li>${this.state.Profit}</li>`
                }
            })
        })
    }

    render() {

        return (
            <div className="data">
                <h2 className="Data"> </h2>

                <div className="form InvoiceDataActive">

                    <form className="InnerForm text">
                        <h2>Create day</h2>
                        <label htmlFor="Day">Day</label>
                        <input type="text" name="Day" id="Day"/>

                        <button style={{marginLeft: "30%"}}>Create</button>
                    </form>

                    <form className="InnerForm profit">
                        <h2>Add profit</h2>
                        <label htmlFor="Profit">Profit</label>
                        <input type="text" name="Profit" id="Profit"/>

                        <button style={{marginLeft: "20%"}}>Create</button>
                    </form>

                    <form className="InnerForm item">
                        <h2>Add product</h2>
                        <label htmlFor="Number">Number</label>
                        <input type="text" name="Number" id="Number"/>

                        <label htmlFor="Amount">Amount</label>
                        <input type="text" name="Amount" id="Amount"/>

                        <button style={{marginLeft: "23%"}}>Create</button>
                    </form>

                    <button className="submit">Submit</button>
                </div>
            </div>
        );
    }
}

export default withRouter(AddDay)