import React from 'react'
import backend from "../Links.json"

export default class AddStock extends React.Component {

    componentDidMount() {
        const form = document.querySelector('form');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Get data
            let data = form.itemid.value.trim();
            const itemid = data.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            const stock = form.stock.value;

            try {
                const res = await fetch(`${backend.backend}/addData`, {
                    method: "POST",
                    body: JSON.stringify({Category: "addstock", itemid, stock }),
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
                        <h1 className="data" style={{fontsize: "large"}}> </h1>
                        <h2>Add new item to stock</h2>
                        <label htmlFor="itemid">Item Id</label>
                        <input type="text" name="itemid" required onClick={ClearData}/>

                        <label htmlFor="stock">Amount</label>
                        <input type="text" name="stock" required onClick={ClearData}/>

                        <button>Create</button>

                    </form>
                </div>
            </div>

        );
    }
}