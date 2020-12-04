import React from 'react'
import {Link, Redirect} from "react-router-dom";

export default class Register extends React.Component {

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
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;

            try {
                const res = await fetch('http://localhost:5000/signup', {
                    method: "POST",
                    body: JSON.stringify({ name, email, password}),
                    credentials: 'included',
                    headers: { 'Content-Type': 'application/json'}
                });
                const data = await res.json();
                console.log(data);
                if(data.errors){
                    emailError.textContent = data.errors.email;
                    passwordError.textContent = data.errors.password;
                }
                if(data.user){
                    return <Redirect to="/" />
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
                    <h2>Sign up</h2>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                    <div className="email error"></div>

                    <label htmlFor="email">Password</label>
                    <input type="password" name="password" required />
                    <div className="password error"></div>

                    <button>Sign up</button>
                </form>
            </div>
        )
    }

}