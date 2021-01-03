import React from "react";
import "../Css/Employye.css"
import {Link} from "react-router-dom";
import backend from "../Links.json";

export default class GetEmployyes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
                        Data: result,
                        Done: true
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
            <div key={id.id} id={id.id} className="card" style={{height: "18rem"}}>
                <div className="card-body">
                    <h3 className="card-title">{id.Name}</h3>
                    <h6 className="card-subtitle mb-2 text-muted">Salary: {id.Salary} PLN</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Adress: {id.Adress}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Workplace: {id.Workplace}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Phonenumber: {id.Phonenumber}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Birthday: {id.Birthday}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Hiredate: {id.Hiredate}</h6>
                    <Link to={EmployeeLink(id.id)} style={{textDecoration: 'none'}}>
                        <button style={{width: "150px", marginTop: "30px", border: "none"}}><h4>Edit employee</h4></button>
                    </Link>
                </div>
            </div>
        ))

        return this.state.Done ?
            (
                <div className="employess">
                    { RenderData }
                </div>
            ) : (
                <h2>Fetching data...</h2>
            );
    }
}

