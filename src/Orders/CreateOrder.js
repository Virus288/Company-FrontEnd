import React from 'react'
import backend from "../Links.json"

export default class CreateOrder extends React.Component {

    componentDidMount() {
        const form = document.querySelector('form');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Get data
            let data = form.itemid.value.trim();
            const itemid = data.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            const store = form.store.value;
            const user = sessionStorage.user

            try {
                const res = await fetch(`${backend.backend}/addData`, {
                    method: "POST",
                    body: JSON.stringify({Category: "addorder", itemid, store, user}),
                    headers: { 'Content-Type': 'application/json'},
                    credentials: "include"
                });
                const data = await res.json();
                document.querySelector(".data").innerHTML = data.message;
                form.reset()
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

        const ClearData = () => {
            document.querySelector('.data').innerHTML = '';
        }

        return (
            <div className="container">
                <button style={{background: "lightgreen", width: "190px"}} onClick={GoBack}><h4>Previous menu</h4></button>

                <div className="form">
                    <form onClick={ClearData} className="InnerForm">
                        <h1 className="data" style={{color: "green", fontsize: "large"}}> </h1>
                        <h2>Create order</h2>
                        <label htmlFor="itemid">Item Id</label>
                        <input type="text" name="itemid" required/>

                        <label htmlFor="store">Store</label>
                        <input type="text" name="store" required/>

                        <button style={{marginLeft: "25%"}}>Create</button>

                    </form>
                </div>
            </div>
        );
    }
}
