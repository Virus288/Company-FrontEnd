// Imports
import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

// Routes
import {MainMenu} from './App'
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
                        context.isLogged ? (
                            <CreateOrder />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/register" render={() => (
                        context.isLogged ? (
                            <Redirect to="/"/>
                        ) : (
                            <Register Context={context}/>
                            )
                    )}/>
                    <Route exact path="/login" render={() => (
                        context.isLogged ? (
                            <Redirect to="/"/>
                        ) : (
                            <Login Context={context}/>
                        )
                    )}/>
                    <Route exact path="/warehouse" render={() => (
                        context.isLogged ? (
                            <WareHouse />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/editstock/:id" render={() => (
                        context.isLogged ? (
                            <EditStock />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/addstock" render={() => (
                        context.isLogged ? (
                            <AddStock />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/employyes" render={() => (
                        context.isLogged ? (
                            <Employees Context={context} />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/getemployyes" render={() => (
                        context.isLogged ? (
                            <GetEmployyes />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/addemployees" render={() => (
                        context.isLogged ? (
                            <AddEmployees />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/editemployees/:employee" render={() => (
                        context.isLogged ? (
                            <EditEmployees />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/stores" render={() => (
                        context.isLogged ? (
                            <GetStores />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/stores/:store" render={() => (
                        context.isLogged ? (
                            <StoreData />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/addstore" render={() => (
                        context.isLogged ? (
                            <AddStore />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/payments" render={() => (
                        context.isLogged ? (
                            <Payments />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/createpayment" render={() => (
                        context.isLogged ? (
                            <CreatePayment />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/createinvoice" render={() => (
                        context.isLogged ? (
                            <CreateInvoice />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/simulation" render={() => (
                        context.isLogged ? (
                            <Simulation />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/stores/:store/:date" render={() => (
                        context.isLogged ? (
                            <DayStats />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/look" render={() => (
                        context.isLogged ? (
                            <Look />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/todo" render={() => (
                        context.isLogged ? (
                            <Todo />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/payments" render={() => (
                        context.isLogged ? (
                            <Payments />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/data" render={() => (
                        context.isLogged ? (
                            <Equipment />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/logout" render={() => (
                        context.isLogged ? (
                            <Logout Context={context} />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/look" render={() => (
                        context.isLogged ? (
                            <FetchData/>
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/settings" render={() => (
                        context.isLogged ? (
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

