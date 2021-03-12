import React from 'react'
import { withRouter, Link } from "react-router-dom";
import backend from "../Links.json"
import { Context } from "../Contexts/Context";

class Login extends React.Component {

    componentDidMount() {
        let nav = document.querySelector(".navbar")
        let content = document.querySelector(".content")
        let nav2 = document.querySelector(".NotLoggedNav")

        if(!nav2){
            nav.classList.toggle("NotLoggedNav")
            content.classList.toggle("contentNotLoggedIn")
        }

    }

    render(){
        return (
            <Context.Consumer>{(context) => {

                const login = async (e) => {
                        e.preventDefault();

                        // Reset errors
                        const emailError = document.querySelector('.email.error')
                        const passwordError = document.querySelector('.password.error')
                        emailError.textContent = '';
                        passwordError.textContent = '';

                        // Get data
                        const email = e.target.email.value;
                        const password = e.target.password.value;

                        try {
                            const res = await fetch(`${backend.backend}/login`, {
                                method: "POST",
                                body: JSON.stringify({ email, password}),
                                headers: { 'Content-Type': 'application/json'},
                                credentials: "include"
                            });
                            const data = await res.json();
                            console.log(data)
                            if(data.username || data.password || data.email){
                                emailError.textContent = data.email;
                                passwordError.textContent = data.password;
                            } else if(data.Type === 1){
                                context.LogIn(true)
                                console.log("Success")
                                this.props.history.push('/');
                            }
                        }
                        catch (e) {
                            console.log(e)
                        }
                }

                return (
                    <div className="NotLogged">
                        <form onSubmit={login}>
                            <Link to={`/register`}><h1>Sign up</h1></Link>
                            <h2>Login</h2>

                            <div className="input">
                                <label htmlFor="email">Email</label><br/>
                                <input type="email" name="email" required />
                                <div className="email error"> </div>
                            </div>

                            <div className="input">
                                <label htmlFor="email">Password</label><br/>
                                <input type="password" name="password" required />
                                <div className="password error"> </div>
                            </div>

                            <button>Login</button>
                        </form>
                    </div>
                )

            }
            }
            </ Context.Consumer>
        )
    }

}

export default withRouter(Login)
