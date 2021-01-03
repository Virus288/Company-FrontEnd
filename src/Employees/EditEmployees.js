import React from 'react'
import {Link, withRouter} from "react-router-dom";
import backend from "../Links.json"

class EditEmployees extends React.Component {
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
        form.Name.value = this.state.Data[0].Name;
        form.Adress.value = this.state.Data[0].Adress;
        form.Workplace.value = this.state.Data[0].Workplace;
        form.Phonenumber.value = this.state.Data[0].Phonenumber
        form.Birthday.value = this.state.Data[0].Birthday.slice(0, 10)
        form.Hiredate.value = this.state.Data[0].Hiredate.slice(0, 10)
        form.Salary.value = this.state.Data[0].Salary
    }

    FetchData() {
        fetch(`${backend.backend}/getData?employees=${this.props.match.params.employee}`)
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
            const id = this.state.Data[0].id;
            const Name = form.Name.value;
            const Adress = form.Adress.value;
            const Workplace = form.Workplace.value;
            const Phonenumber = form.Phonenumber.value;
            const Birthday = form.Birthday.value;
            const Hiredate = form.Hiredate.value;
            const Salary = form.Salary.value

            try {
                const res = await fetch(`${backend.backend}/updateData`, {
                    method: "POST",
                    body: JSON.stringify({Category: "editemployyes", id, Name, Adress, Workplace, Phonenumber, Birthday, Hiredate, Salary}),
                    headers: { 'Content-Type': 'application/json'}
                });
                const data = await res.json();
                if(data.type === "success"){
                    let field = document.querySelector(".data");
                    field.style.color = "green"
                    field.innerHTML = data.message;
                    form.reset()
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
                        this.props.history.push('/employyes')
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
                            <h2>Edit employee</h2>
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

export default withRouter(EditEmployees)