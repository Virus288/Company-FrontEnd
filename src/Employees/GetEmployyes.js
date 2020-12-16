import React from "react";
import "../Css/Employye.css"
import {Link} from "react-router-dom";

export default class GetEmployyes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: [],
            Errors: 0
        }
    }

    FetchData() {
        fetch('http://localhost:5000/employyes')
            .then(res => res.json())
            .then((result) => {
                    this.setState({
                        Data: result
                    });
                },
                (err) => {
                    this.setState({
                        Errors: err
                    });
                });
    }

    componentDidMount() {
        this.FetchData()
    }

    render() {
        const EmployeeLink = (employee) => {
            return (`/editemployees/${employee}`)
        }

        const RenderData = this.state.Data.map(id => (
            <ul key={id.id} id={id.id}>
                <li>Name: {id.Name}</li>
                <li>Adress: {id.Adress}</li>
                <li>Workplace: {id.Workplace}</li>
                <li>Phonenumber: {id.Phonenumber}</li>
                <li>Birthday: {id.Birthday}</li>
                <li>Hiredate: {id.Hiredate}</li>
                <li>Salary: {id.Salary} PLN</li>
                <Link to={EmployeeLink(id.id)}><li>Edycja pracownika</li></Link>
            </ul>
        ))

        return (
            <div className="box7">
                {RenderData}
            </div>
        )
    }
}
