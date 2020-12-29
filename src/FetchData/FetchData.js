import React from "react";
import "../Css/Employye.css"
import {Link} from "react-router-dom";
import backend from "../Links.json";

export default class FetchData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Predata: [],
            Data: [],
            Errors: 0,
            Done: false
        }
    }

    FetchData() {
        fetch(`${backend.backend}/getData?employees=all`)
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
                <Link to={EmployeeLink(id.id)}><li>Edit employee</li></Link>
                <li>{}</li>
            </ul>
        ))

        return this.state.Done ?
            <RenderData /> : (
                <span>Fetching data</span>
            );
    }
}
