import React from 'react'
import { withRouter, Link} from "react-router-dom";
import backend from "../Links.json"

class Register extends React.Component {

    componentDidMount() {
        let nav = document.querySelector(".navbar")
        let content = document.querySelector(".content")
        let nav2 = document.querySelector(".NotLoggedNav")

        if(!nav2){
            nav.classList.toggle("NotLoggedNav")
            content.classList.toggle("contentNotLoggedIn")
        }

        const form = document.querySelector('form');
        const emailError = document.querySelector('.email.error')
        const passwordError = document.querySelector('.password.error')
        const nameError = document.querySelector('.name.error')

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Reset errors
            emailError.textContent = ' ';
            passwordError.textContent = ' ';
            nameError.textContent = ' '

            // Get data
            let username = form.name.value;
            let email = form.email.value;
            let password = form.password.value;
            let password2 = form.password2.value

            try {
                const res = await fetch(`${backend.backend}/register`, {
                    method: "POST",
                    body: JSON.stringify({ username, email, password, password2}),
                    headers: { 'Content-Type': 'application/json'}
                });
                const data = await res.json();
                if(data.username || data.password || data.email){
                    nameError.textContent = data.username;
                    emailError.textContent = data.email;
                    passwordError.textContent = data.password;
                } else if(data.Type === 1){
                    console.log("Success")
                    this.props.history.push('/login');
                } else {
                    console.log(data.success)
                    console.log("Unexpected error")
                }
            }
            catch (e) {
                console.log(e)
            }

        })
    }

    render(){
        return (
            <div className="NotLogged">
                <form>
                    <Link to={`/login`}><h1>Login</h1></Link>
                    <h2>Sign up</h2>

                    <div className="input">
                        <label htmlFor="name">Name</label><br/>
                        <input type="text" name="name" required />
                        <div className="name error"> </div>
                    </div>

                    <div className="input">
                        <label htmlFor="email">Email</label><br/>
                        <input type="email" name="email" required />
                        <div className="email error"> </div>
                    </div>

                    <div className="input">
                        <label htmlFor="password">Password</label><br/>
                        <input type="password" name="password" required />
                        <div className="password error"> </div>
                    </div>

                    <div className="input">
                        <label htmlFor="password2">Repeat password</label><br/>
                        <input type="password" name="password2" required />
                        <div className="password error"> </div>
                    </div>

                    <button>Sign up</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Register)
