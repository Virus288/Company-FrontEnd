import React from 'react'
import backend from "../Links.json"

export default class CreatePayment extends React.Component {

    componentDidMount() {
        const form = document.querySelector('form');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Get data
            let name = form.name.value;
            const amount = form.amount.value;
            const date = form.date.value;

            try {
                const res = await fetch(`${backend.backend}/addpayment`, {
                    method: "POST",
                    body: JSON.stringify({ name, amount, date}),
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
                <h2>Create payment</h2>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" required onClick={ClearData}/>

                <label htmlFor="amount">Amount</label>
                <input type="text" name="amount" required onClick={ClearData}/>

                <label htmlFor="date">Date</label>
                <input type="text" name="date" required onClick={ClearData}/>

                <button>Create</button>
            </form>
        );
    }
}