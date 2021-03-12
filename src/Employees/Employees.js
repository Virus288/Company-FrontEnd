import React from 'react'
import {Link} from "react-router-dom";
import { graphql } from "react-apollo";
import { getUsersQuery, getUserQuery } from "../queries/queries";

class Employees extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.props.Context.CheckIfLogged()
    }

    displayUsers = () => {
        let data = this.props.data
        if(data.loading){
            return(<div>Loading books....</div>)
        } else {
            console.log(this.props)
        //     return data.Users.map(user => {
        //         return(
        //             <li key={user.id}>{user.name}</li>
        //         )
        //     })
        }
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

export default graphql(getUserQuery, {
    options: (props) => {
        console.log(props.Context.Group)
        return {
            variables: {
                Group: props.Context.Group
            }
        }
    }
})(Employees)


// TODO
// Apollo database stuff. Apollo as tool sucks
