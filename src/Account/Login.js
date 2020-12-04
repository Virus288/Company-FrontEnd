import React from 'react'
import { withRouter, Link } from "react-router-dom";

class Login extends React.Component {

    componentDidMount() {
        const form = document.querySelector('form');
        const emailError = document.querySelector('.email.error')
        const passwordError = document.querySelector('.password.error')

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Reset errors
            emailError.textContent = ' ';
            passwordError.textContent = ' ';

            // Get data
            const email = form.email.value;
            const password = form.password.value;

            try {
                const res = await fetch('http://localhost:5000/login', {
                    method: "POST",
                    body: JSON.stringify({ email, password}),
                    headers: { 'Content-Type': 'application/json'}
                });
                const data = await res.json();
                console.log(data);
                sessionStorage.setItem('jwt', data.token);
                sessionStorage.setItem('user', data.user);
                if(data.errors){
                    emailError.textContent = data.errors.email;
                    passwordError.textContent = data.errors.password;
                }
                if(data["user"]){
                    this.props.history.push('/');
                }
            }
            catch (e) {
                console.log(e)
            }

        })
    }

    render(){
        return (
            <div>
                <Link to={`/`}><h1>Home</h1></Link>
                <form>
                    <h2>Login</h2>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                    <div className="email error"></div>

                    <label htmlFor="email">Password</label>
                    <input type="password" name="password" required />
                    <div className="password error"></div>

                    <button>Login</button>
                </form>
            </div>
        )
    }

}

export default withRouter(Login)