import React from 'react'
import backend from "../Links.json";

export default class AddEmployees extends React.Component {

    componentDidMount() {
        const form = document.querySelector('form');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Get data
            const Name = form.Name.value;
            const Adress = form.Adress.value;
            const Workplace = form.Workplace.value;
            const Phonenumber = form.Phonenumber.value;
            const Birthday = form.Birthday.value;
            const Hiredate = form.Hiredate.value;
            const Salary = form.Salary.value;

            try {
                const res = await fetch(`${backend.backend}/addData`, {
                    method: "POST",
                    body: JSON.stringify({Category: "addemployyes", Name, Adress, Workplace, Phonenumber, Birthday, Hiredate, Salary}),
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
                        <h1 className="data" style={{color: "green", fontsize: "large"}}> </h1>
                        <h2>Add employee</h2>
                        <label htmlFor="Name">Full name</label>
                        <input type="text" name="Name" required onClick={ClearData}/>

                        <label htmlFor="Adress">City name</label>
                        <input type="text" name="Adress" required onClick={ClearData}/>

                        <label htmlFor="Workplace">Workplace</label>
                        <input type="text" name="Workplace" required onClick={ClearData}/>

                        <label htmlFor="Phonenumber">Phonenumber</label>
                        <input type="text" name="Phonenumber" required onClick={ClearData}/>

                        <label htmlFor="Birthday">Birthday (Year, month, day)</label>
                        <input type="text" name="Birthday" required onClick={ClearData}/>

                        <label htmlFor="Hiredate">Hiredate (Year, month, day)</label>
                        <input type="text" name="Hiredate" required onClick={ClearData}/>

                        <label htmlFor="Salary">Salary</label>
                        <input type="text" name="Salary" required onClick={ClearData}/>

                        <button style={{marginLeft: "25%"}}>Create</button>

                    </form>
                </div>
            </div>
        );
    }
}