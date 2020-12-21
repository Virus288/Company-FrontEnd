import React from "react";
import Routers from "./Router";
import {BrowserRouter as Router, Link} from 'react-router-dom';

// Css
import "./Css/SideBar.css"
import "./Css/Login.css"

export default class App extends React.Component{

    render(){
        return (
            <Router>
                <div className="App">
                    <LoggedIn />
                    <div className="content">
                        <Routers />
                    </div>
                </div>
            </Router>
        );
    }

}

class LoggedIn extends React.Component {

    render()
    {
        const markUp = (e) => {
            let toogled = document.querySelector(".chosen");
            const menu = document.querySelectorAll(".menu-icon");
            const menutoggled = document.querySelectorAll(".menu-icon-toggled");
            const navbar = document.querySelector(".navbar");
            const navbartoggled = document.querySelector(".navbar-toggled");

            if(e.target.nodeName !== "DIV"){
                if(toogled){
                    toogled.classList.toggle("chosen");
                }
                e.target.parentElement.classList.toggle("chosen")
            } else {
                if(toogled){
                    toogled.classList.toggle("chosen");
                }
                e.target.classList.toggle("chosen");
            }

            if(e.target.innerHTML === "More"){
                if(navbar){
                    navbar.classList.toggle("navbar-toggled");
                    navbar.classList.toggle("navbar");
                } else{
                    navbartoggled.classList.toggle("navbar");
                    navbartoggled.classList.toggle("navbar-toggled");
                }
                if(menu.length > 0){
                    menu.forEach(div => {
                        div.classList.toggle("menu-icon");
                        div.classList.toggle("menu-icon-toggled");
                    })
                } else {
                    menutoggled.forEach(div => {
                        div.classList.toggle("menu-icon");
                        div.classList.toggle("menu-icon-toggled");
                    })
                }
            }
        }

        return (
            <div className="navbar">
                <Link to="/orders" onClick={markUp}>
                    <div className="navlink"><i className="icon-newspaper"> </i></div>
                </Link>
                <Link to="/createorder" onClick={markUp}>
                    <div className="navlink">Orders</div>
                </Link>
                <Link to="/stock" onClick={markUp}>
                    <div className="navlink"><i className="icon-warehouse"> </i></div>
                </Link>
                <Link to="/stores" onClick={markUp}>
                    <div className="navlink"><i className="icon-building"></i></div>
                </Link>
                <div className="navlink more" onClick={markUp}>More</div>
                <Link to="/employyes" onClick={markUp}>
                    <div><i className="icon-adult menu-icon"> </i></div>
                </Link>
                <Link to="/createinvoice" onClick={markUp}>
                    <div><i className="icon-newspaper-1 menu-icon"></i></div>
                </Link>
                <Link to="/payments" onClick={markUp}>
                    <div><i className="icon-credit-card menu-icon"></i></div>
                </Link>
                <Link to="/createpayment" onClick={markUp}>
                    <div><i className="menu-icon">Create payment</i></div>
                </Link>
                <Link to="/simulation" onClick={markUp}>
                    <div><i className="menu-icon">Simulation</i></div>
                </Link>
                <Link to="/look" onClick={markUp}>
                    <div><i className="menu-icon">Edit look</i></div>
                </Link>
                <Link to="/logout" onClick={markUp}>
                    <div><i className="icon-logout menu-icon" style={{color: "blue"}}></i></div>
                </Link>
            </div>
        )
    }
}

const MainMenu = () => {
    let nav = document.querySelector(".navbar")
    let content = document.querySelector(".content")
    let nav2 = document.querySelector(".NotLoggedNav")

    if(nav2){
        nav.classList.toggle("NotLoggedNav")
        content.classList.toggle("content0")
    }

    return (
        <div>
            <h1>Welcome home</h1><br/>
            <h2>Would you like to see how's your company doing ?</h2>
        </div>
    )
}

export {
    MainMenu
}