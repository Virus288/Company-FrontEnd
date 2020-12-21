import React from "react";
import Routers from "./Router";
import {BrowserRouter as Router, Link} from 'react-router-dom';

// Css
import "./Css/Home.css"
import "./Css/SideBar.css"
import "./Css/Login.css"

export default class App extends React.Component{

    render(){
        return (
            <Router>
                <div className="App">
                    {SideBar()}
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
                    <span>Orders</span>
                </Link>
                <Link to="/createorder" onClick={markUp}>
                    <span>Create order</span>
                </Link>
                <Link to="/stock" onClick={markUp}>
                    <span>Warehouse</span>
                </Link>
                <Link to="/stores" onClick={markUp}>
                    <span>Stores</span>
                </Link>
                <Link to="/employyes" onClick={markUp}>
                    <span>Employees</span>
                </Link>
                <Link to="/payments" onClick={markUp}>
                    <span>Payments</span>
                </Link>
                <Link to="/createpayment" onClick={markUp}>
                    <span>Create payment</span>
                </Link>
                <Link to="/logout" onClick={markUp}>
                    <span style={{color: "blue"}}>Logout</span>
                </Link>
                <h1 style={{color: "red"}}>Todo</h1>
                <Link to="/createinvoice" onClick={markUp}>
                    <span>Create invoice</span>
                </Link>
                <Link to="/simulation" onClick={markUp}>
                    <span>Simulation</span>
                </Link>
                <Link to="/look" onClick={markUp}>
                    <span>App seems boring? Change its look!</span>
                </Link>
            </div>
        )
    }
}

const Home = () => {
  return (
      <div className="Main">
          <LoggedIn />
      </div>
  )
}

const MainMenu = () => {
    return (
        <div>
            <h1>Welcome home</h1><br/>
            <h2>Would you like to see how's your company doing ?</h2>
        </div>
    )
}

export {
    Home,
    MainMenu
}