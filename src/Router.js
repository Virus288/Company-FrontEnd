// Imports
import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

// Routes
import {MainMenu} from './App'
import { RequireAuth } from './Account/Auth.js'
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
import EditStock from "./Stock/EditStock";

// Context
import { Context } from "./Contexts/Context";

function Routers() {
    return (
        <Context.Consumer>{(context) => {

            return (
                <Switch>
                    <Route exact path="/" render={() => (
                        context.isLogged ? (
                            <MainMenu />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/orders" render={() => (
                        context.isLogged ? (
                            <Orders context={context} />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/createorder" render={() => (
                        RequireAuth() ? (
                            <CreateOrder />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/register" render={() => (
                        <Register />
                        // RequireAuth() ? (
                        //     <Redirect to="/"/>
                        // ) : (
                        //     <Register />
                        // )
                    )}/>
                    <Route exact path="/login" render={() => (
                        <Login />
                        // RequireAuth() ? (
                        //     <Login />
                        // ) : (
                        //     <Redirect to="/"/>
                        // )
                    )}/>
                    <Route exact path="/warehouse" render={() => (
                        RequireAuth() ? (
                            <WareHouse />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/editstock/:id" render={() => (
                        RequireAuth() ? (
                            <EditStock />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/addstock" render={() => (
                        RequireAuth() ? (
                            <AddStock />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/employyes" render={() => (
                        RequireAuth() ? (
                            <Employees />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/getemployyes" render={() => (
                        RequireAuth() ? (
                            <GetEmployyes />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/addemployees" render={() => (
                        RequireAuth() ? (
                            <AddEmployees />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/editemployees/:employee" render={() => (
                        RequireAuth() ? (
                            <EditEmployees />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/stores" render={() => (
                        RequireAuth() ? (
                            <GetStores />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/stores/:store" render={() => (
                        RequireAuth() ? (
                            <StoreData />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/addstore" render={() => (
                        RequireAuth() ? (
                            <AddStore />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/payments" render={() => (
                        RequireAuth() ? (
                            <Payments />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/createpayment" render={() => (
                        RequireAuth() ? (
                            <CreatePayment />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/createinvoice" render={() => (
                        RequireAuth() ? (
                            <CreateInvoice />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/simulation" render={() => (
                        RequireAuth() ? (
                            <Simulation />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/stores/:store/:date" render={() => (
                        RequireAuth() ? (
                            <DayStats />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/look" render={() => (
                        RequireAuth() ? (
                            <Look />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/todo" render={() => (
                        RequireAuth() ? (
                            <Todo />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/payments" render={() => (
                        RequireAuth() ? (
                            <Payments />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/data" render={() => (
                        RequireAuth() ? (
                            <Equipment />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route path="/logout" exact render={() => {
                        return (Logout())
                    }} />
                    <Route exact path="/look" render={() => (
                        RequireAuth() ? (
                            <FetchData/>
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/settings" render={() => (
                        RequireAuth() ? (
                            <Settings/>
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                </Switch>
            )

            }}
        </Context.Consumer>
    );
}

export default Routers;

