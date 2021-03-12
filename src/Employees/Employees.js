import React from 'react'
import {Link} from "react-router-dom";
import backend from "../Links.json";
import { getUsersQuery, getUserQuery } from "../queries/queries";

export default class Employees extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    Search = () => {
        fetch(`${backend.backend}/graphql`, {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: getUserQuery,
                variables: {
                    Group: this.props.Context.Group,
                },
            }),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    }

    componentDidMount() {
        this.props.Context.CheckIfLogged()
        this.Search()
    }

    displayUsers = () => {
        // let data = this.props.data
        // if(data.loading){
        //     return(<div>Loading books....</div>)
        // } else {
        //     return data.Users.map(user => {
        //         return(
        //             <li key={user.id}>{user.name}</li>
        //         )
        //     })
        // }
    }

    render(){

        const GoBack = () => {
            window.history.back()
        }

        return (
            <div className="container">
                <h2 className="header">Employees</h2>
                <div className="up">
                    <button className="button" style={{background: "lightgreen", width: "190px"}} onClick={GoBack}><h4>Previuos menu</h4></button>
                    <Link to="/addemployees" style={{ textDecoration: 'none' }}>
                        <button className="button" style={{background: "lightgreen", width: "170px", float: "right"}}><h4>Add employee</h4></button>
                    </Link>
                </div>
                <div className="OrdersList">
                    { this.displayUsers() }
                </div>
            </div>
        )
    }
}
