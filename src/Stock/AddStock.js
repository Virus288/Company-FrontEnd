import React from 'react'

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
                const res = await fetch('http://localhost:5000/addstock', {
                    method: "POST",
                    body: JSON.stringify({ itemid, stock}),
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
        const ClearData = () => {
            document.querySelector('.data').innerHTML = '';
        }

        return (
            <form>
                <h1 className="data" style={{fontsize: "large"}}> </h1>
                <h2>Create order</h2>
                <label htmlFor="itemid">Item Id</label>
                <input type="text" name="itemid" required onClick={ClearData}/>

                <label htmlFor="stock">Amount of products</label>
                <input type="text" name="stock" required onClick={ClearData}/>

                <button>Create</button>
            </form>
        );
    }
}