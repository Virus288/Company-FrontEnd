import React from 'react'
import backend from "../Links.json"

export default class AddStore extends React.Component {

    componentDidMount() {
        const form = document.querySelector('form');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Get data
            const City = form.City.value;
            const Street = form.Street.value;
            const BuildingNumber = form.BuildingNumber.value;
            const Employees = form.Employees.value;

            try {
                const res = await fetch(`${backend.backend}/addstore`, {
                    method: "POST",
                    body: JSON.stringify({ City, Street, BuildingNumber, Employees }),
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
                <h2>Add store</h2>
                <label htmlFor="City">City</label>
                <input type="text" name="City" required onClick={ClearData}/>

                <label htmlFor="Street">Street</label>
                <input type="text" name="Street" required onClick={ClearData}/>

                <label htmlFor="BuildingNumber">Building number</label>
                <input type="text" name="BuildingNumber" required onClick={ClearData}/>

                <label htmlFor="Employees">Employees</label>
                <input type="text" name="Employees" required onClick={ClearData}/>

                <button>Create</button>
            </form>
        );
    }
}