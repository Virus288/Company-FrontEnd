// Imports
import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

// Functions
import {MainMenu} from './App'
import { CheckIfAuth } from './Account/Auth.js'
import Register from "./Account/Register";
import Login from "./Account/Login";
import Logout from "./Account/Logout";
import Orders from './Orders/Orders';
import CreateOrder from "./Orders/CreateOrder";
import Employees from "./Employees/Employees";
import GetEmployyes from './Employees/GetEmployyes';
import GetStores from "./Stores/GetStores"
import Payments from "./Payments/Payments";
import Simulation from "./Simulation/Simulation";
import { Look } from "./Look/Look";
import WareHouse from "./Stock/WareHouse";
import AddStock from "./Stock/AddStock";
import AddEmployees from "./Employees/AddEmployees";
import StoreData from "./Stores/StoreData";
import EditEmployees from "./Employees/EditEmployees"
import DayStats from "./Stores/DayStats";
import AddStore from "./Stores/AddStore";
import CreatePayment from "./Payments/CreatePayment"
import CreateInvoice from "./Payments/CreateInvoice";
import FetchData from "./FetchData/FetchData";
import Todo from "./Todo";
import Equipment from "./Equipment";
import Settings from "./Settings";

function Routers() {
    return (
        <Switch>
            <Route exact path="/" render={() => (
                CheckIfAuth() ? (
                    <MainMenu />
                ) : (
                    <Redirect to="/login"/>
                )
            )}/>
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
            <Route exact path="/stores" render={() => (
                CheckIfAuth() ? (
                    <GetStores />
                ) : (
                    <Redirect to="/login"/>
                )
            )}/>
            <Route exact path="/stores/:store" render={() => (
                CheckIfAuth() ? (
                    <StoreData />
                ) : (
                    <Redirect to="/login"/>
                )
            )}/>
            <Route exact path="/addstore" render={() => (
                CheckIfAuth() ? (
                    <AddStore />
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
            <Route exact path="/createpayment" render={() => (
                CheckIfAuth() ? (
                    <CreatePayment />
                ) : (
                    <Redirect to="/login"/>
                )
            )}/>
            <Route exact path="/createinvoice" render={() => (
                CheckIfAuth() ? (
                    <CreateInvoice />
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
            <Route exact path="/stores/:store/:date" render={() => (
                CheckIfAuth() ? (
                    <DayStats />
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
            <Route exact path="/todo" render={() => (
                CheckIfAuth() ? (
                    <Todo />
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
            <Route exact path="/data" render={() => (
                CheckIfAuth() ? (
                    <Equipment />
                ) : (
                    <Redirect to="/login"/>
                )
            )}/>
            <Route path="/logout" exact render={() => {
                return (Logout())
            }} />
            <Route exact path="/look" render={() => (
                CheckIfAuth() ? (
                    <FetchData/>
                ) : (
                    <Redirect to="/login"/>
                )
            )}/>
            <Route exact path="/settings" render={() => (
                CheckIfAuth() ? (
                    <Settings/>
                ) : (
                    <Redirect to="/login"/>
                )
            )}/>
        </Switch>
    );
}

export default Routers;

