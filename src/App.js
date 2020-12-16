import React from "react";
import Routers from "./Router";
import {BrowserRouter as Router, Link} from 'react-router-dom';

// Functions
import {CheckIfAuth} from "./Account/Auth";

// Css
import "./Css/Home.css"
import "./Css/SideBar.css"
import "./Css/Login.css"

export default class App extends React.Component{

    render(){
        return (
            <Router>
                <div className="App">
                    {CheckIfAuth() ? (
                        <SideBar />
                    ) : (
                        ""
                    )}
                    <div className="content">
                        <Routers />
                    </div>
                </div>
            </Router>
        );
    }

}

const SideBar = () => {
    return (
        <div className="sidebar">
            <Home />
        </div>

    )
}

const NotLoggedIn = () => {
    return (
        <div className="NotLogged">
            <ul>
                <Link to="/login" style={{textDecoration: 'none'}}>
                    <li>Logowanie</li>
                </Link>
                <Link to="/register" style={{textDecoration: 'none'}}>
                    <li>Rejestracja</li>
                </Link>
            </ul>
        </div>
    )
}

class LoggedIn extends React.Component {

    render()
    {
        const markUp = (e) => {
            let toogled = document.querySelector(".chosen");
            if(toogled){
                toogled.classList.toggle("chosen");
            }
            e.target.classList.toggle("chosen");
        }

        return (
            <div>
                <h1 style={{color: "green"}}>Done</h1>
                <Link to="/orders" onClick={markUp}>
                    <span>Zamówienia</span>
                </Link>
                <Link to="/createorder" onClick={markUp}>
                    <span>Stwórz zamówienie</span>
                </Link>
                <Link to="/stock" onClick={markUp}>
                    <span>Magazyn</span>
                </Link>
                <Link to="/getstores" onClick={markUp}>
                    <span>Sklepy</span>
                </Link>
                <Link to="/employyes" onClick={markUp}>
                    <span>Pracownicy</span>
                </Link>
                <Link to="/logout" onClick={markUp}>
                    <span style={{color: "blue"}}>Wyloguj</span>
                </Link>
                <h1 style={{color: "red"}}>Todo</h1>
                <Link to="/payments" onClick={markUp}>
                    <span>Opłaty</span>
                </Link>
                <Link to="/simulation" onClick={markUp}>
                    <span>Symulacja</span>
                </Link>
                <Link to="/sales" onClick={markUp}>
                    <span>Statystyki sprzedaży</span>
                </Link>
                <Link to="/look" onClick={markUp}>
                    <span>Wygląd</span>
                </Link>
            </div>
        )
    }
}

export const Home = () => {
  return (
      <div className="Main">
          {CheckIfAuth() ? (
              <LoggedIn />
          ) : (
              <NotLoggedIn />
          )}
      </div>
  )
}