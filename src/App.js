import React from "react";
import Routers from "./Router";
import {BrowserRouter as Router, Link} from 'react-router-dom';

// Functions
import {CheckIfAuth} from "./Account/Auth";

// Css
import "./Css/Home.css"


function App() {
  return (
      <Router>
        <div className="App">
            <Routers />
        </div>
      </Router>
  );
}

const LoggedIn = () => {
    return (
        <div className="login">
            <div className="box3">
                <Link to="/login" style={{textDecoration: 'none'}}>
                    <li>Logowanie</li>
                </Link>
            </div>
            <div className="box4">
                <Link to="/register" style={{textDecoration: 'none'}}>
                    <li>Rejestracja</li>
                </Link>
            </div>
        </div>
    )
}

const Orders = () => {
    return (
        <div className="orders">
            <div className="box4">
                <Link to="/orders">
                    <li>Zamówienia</li>
                </Link>
            </div>
            <div className="box4">
                <Link to="/createorder">
                    <li>Create order</li>
                </Link>
            </div>
        </div>
    )
}

export const Home = () => {
  return (
      <div>
        <h1>Strona główna</h1>
          <div className="gallery">
              {CheckIfAuth() ? (
                  <Orders />
              ) : (
                  <LoggedIn />
              )}
          </div>
      </div>
  )
}

export default App;
