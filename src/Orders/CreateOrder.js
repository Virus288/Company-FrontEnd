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
                    headers: { 'Content-Type': 'application/json'}
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
        const ClearData = () => {
            document.querySelector('.data').innerHTML = '';
        }

        return (
            <form onClick={ClearData}>
                <h1 className="data" style={{color: "green", fontsize: "large"}}> </h1>
                <h2>Create order</h2>
                <label htmlFor="itemid">Item Id</label>
                <input type="text" name="itemid" required/>

                <label htmlFor="store">Store</label>
                <input type="text" name="store" required/>

                <button>Create</button>
            </form>
        );
    }
}