import React from "react";
import Routers from "./Router";
import {BrowserRouter as Router, Link} from 'react-router-dom';

// Css
import "./Css/SideBar.css"
import "./Css/Login.css"
import "./Css/DarkMode.css"

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
                <Link to="/orders" onClick={markUp} style={{ textDecoration: 'none' }}>
                    <div className="navlink"><i className="icon-newspaper-1 menu-icon"> </i></div>
                </Link>
                <Link to="/data" onClick={markUp} style={{ textDecoration: 'none' }}>
                    <div className="navlink"><i className="icon-warehouse menu-icon"> </i></div>
                </Link>
                <Link to="/payments" onClick={markUp} style={{ textDecoration: 'none' }}>
                    <div className="navlink"><i className="icon-credit-card menu-icon"> </i></div>
                </Link>
                {/*<Link to={"/todo"} onClick={markUp} style={{ textDecoration: 'none' }}>*/}
                {/*    <div className="navlink"><h3>Todo</h3></div>*/}
                {/*</Link>*/}
                <Link to="/settings" onClick={markUp} style={{ textDecoration: 'none' }}>
                    <div className="navlink"><i className="icon-cog-outline menu-icon"> </i></div>
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
        content.classList.toggle("contentNotLoggedIn")
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