import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home } from './App'
import Test from './home.js'
import { RequireAuth, CheckIfAuth } from './Account/Auth.js'
import Register from "./Account/Register";
import Login from "./Account/Login";
import Orders from './Orders/Orders'
import CreateOrder from "./Orders/CreateOrder"

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
        </Switch>
    );
}

export default Routers;

