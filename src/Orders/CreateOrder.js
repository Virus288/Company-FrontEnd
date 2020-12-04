import React from 'react'
import { Link } from "react-router-dom";

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
                const res = await fetch('http://localhost:5000/addorder', {
                    method: "POST",
                    body: JSON.stringify({ itemid, store, user}),
                    headers: { 'Content-Type': 'application/json'}
                });
                const data = await res.json();
                console.log(data);
            }
            catch (e) {
                console.log(e)
            }

        })
    }

    render() {
        return (
            <form>
                <Link to={`/`}><h1>Home</h1></Link>
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