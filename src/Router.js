// Imports
import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

// Functions
import { Home } from './App'
import Test from './home.js'
import { CheckIfAuth } from './Account/Auth.js'
import Register from "./Account/Register";
import Login from "./Account/Login";
import Logout from "./Account/Logout";
import Orders from './Orders/Orders';
import CreateOrder from "./Orders/CreateOrder";
import Stock from "./Stock/Stock";
import Employees from "./Employees/Employees";
import GetEmployyes from './Employees/GetEmployyes';
import GetStores from "./Stores/Stores"
import Payments from "./Payments/Payments";
import Simulation from "./Simulation/Simulation";
import Sales from "./Sales/Sales";
import { Look } from "./Look/Look";
import WareHouse from "./Stock/WareHouse";
import AddStock from "./Stock/AddStock";
import AddEmployees from "./Employees/AddEmployees";
import StoreStock from "./Stores/StoreStock";
import EditEmployees from "./Employees/EditEmployees"
import SalesStats from "./Sales/SalesStats";

function Routers() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/test" exact component={Test}/>
            <Route exact path="/orders" render={() => (
                CheckIfAuth() ? (
                    <Orders />
                ) : (
                    <Redirect to="/login"/>
                )
            )}/>
            <Route exact path="/createorder" render={() => (
                CheckIfAuth() ? (
                    <CreateOrder />
                ) : (
                    <Redirect to="/login"/>
                )
            )}/>
            <Route exact path="/register" render={() => (
                CheckIfAuth() ? (
                    <Redirect to="/"/>
                ) : (
                    <Register />
                )
            )}/>
            <Route exact path="/login" render={() => (
                CheckIfAuth() ? (
                    <Redirect to="/"/>
                ) : (
                    <Login />
                )
            )}/>
            <Route exact path="/stock" render={() => (
                CheckIfAuth() ? (
                    <Stock />
                ) : (
                    <Redirect to="/login"/>
                )
            )}/>
            <Route exact path="/warehouse" render={() => (
                CheckIfAuth() ? (
                    <WareHouse />
                ) : (
                    <Redirect to="/login"/>
                )
            )}/>
            <Route exact path="/addstock" render={() => (
                CheckIfAuth() ? (
                    <AddStock />
                ) : (
                    <Redirect to="/login"/>
                )
            )}/>
            <Route exact path="/employyes" render={() => (
                CheckIfAuth() ? (
                    <Employees />
                ) : (
                    <Redirect to="/login"/>
                )
            )}/>
            <Route exact path="/getemployyes" render={() => (
                CheckIfAuth() ? (
                    <GetEmployyes />
                ) : (
                    <Redirect to="/login"/>
                )
            )}/>
            <Route exact path="/addemployees" render={() => (
                CheckIfAuth() ? (
                    <AddEmployees />
                ) : (
                    <Redirect to="/login"/>
                )
            )}/>
            <Route exact path="/editemployees/:employee" render={() => (
                CheckIfAuth() ? (
                    <EditEmployees />
                ) : (
                    <Redirect to="/login"/>
                )
            )}/>
            <Route exact path="/getstores" render={() => (
                CheckIfAuth() ? (
                    <GetStores />
                ) : (
                    <Redirect to="/login"/>
                )
            )}/>
            <Route exact path="/storestock/:store" render={() => (
                CheckIfAuth() ? (
                    <StoreStock />
                ) : (
                    <Redirect to="/login"/>
                )
            )}/>
            <Route exact path="/payments" render={() => (
                CheckIfAuth() ? (
                    <Payments />
                ) : (
                    <Redirect to="/login"/>
                )
            )}/>
            <Route exact path="/simulation" render={() => (
                CheckIfAuth() ? (
                    <Simulation />
                ) : (
                    <Redirect to="/login"/>
                )
            )}/>
            <Route exact path="/sales" render={() => (
                CheckIfAuth() ? (
                    <Sales />
                ) : (
                    <Redirect to="/login"/>
                )
            )}/>
            <Route exact path="/salesstats" render={() => (
                CheckIfAuth() ? (
                    <SalesStats />
                ) : (
                    <Redirect to="/login"/>
                )
            )}/>
            <Route exact path="/look" render={() => (
                CheckIfAuth() ? (
                    <Look />
                ) : (
                    <Redirect to="/login"/>
                )
            )}/>
            <Route path="/logout" exact render={() => {
                return (Logout())
            }} />
        </Switch>
    );
}

export default Routers;

