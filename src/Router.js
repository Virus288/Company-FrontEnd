import React from "react";
import { Switch, Route } from 'react-router-dom';

import { Home } from './App'
import Shop from "./Shop";
import About from "./About";
import ItemDetail from "./ItemDetail";
import ItemCategory from "./ItemCategory";
import Test from './home.js'

const routes = ["poduszki", "przescieradla", "posciele", "koce", "koldry", "reczniki"];

function Routers() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/onas" component={About}/>
            <Route path="/sklep" exact component={Shop}/>
            <Route path="/sklep/poduszki" exact component={ItemCategory}/>
            <Route path="/sklep/poduszki/:id" exact component={ItemDetail}/>
            <Route path="/sklep/przescieradla" exact component={ItemCategory}/>
            <Route path="/sklep/przescieradla/:id" exact component={ItemDetail}/>
            <Route path="/sklep/posciele" exact component={ItemCategory}/>
            <Route path="/sklep/posciele/:id" exact component={ItemDetail}/>
            <Route path="/sklep/koce" exact component={ItemCategory}/>
            <Route path="/sklep/koce/:id" exact component={ItemDetail}/>
            <Route path="/sklep/koldry" exact component={ItemCategory}/>
            <Route path="/sklep/koldry/:id" exact component={ItemDetail}/>
            <Route path="/sklep/reczniki" exact component={ItemCategory}/>
            <Route path="/sklep/reczniki/:id" exact component={ItemDetail}/>
            <Route path="/test" exact component={Test}/>
        </Switch>
    );
}

export default Routers;