import React from "react";
import Routers from "./Router";
import { BrowserRouter as Router, Link } from 'react-router-dom';

import "./Home.css"

function App() {
    console.log(<Routers/>)

  return (
      <Router>
        <div className="App">
            <Routers />
        </div>
      </Router>
  );
}

export const Home = () => {
  return (
      <div>
        <h1>Strona główna</h1>
          <div className="gallery">
              <div className="box1">
                  <Link to="/" style={{textDecoration: 'none'}}>
                      <h4>Navbar</h4>
                  </Link>
              </div>
              <div className="box2">
                  <Link to="/onas" style={{textDecoration: 'none'}}>
                      <li>O nas</li>
                  </Link>
              </div>
              <div className="box3">
                  <Link to="/sklep" style={{textDecoration: 'none'}}>
                      <li>Sklep</li>
                  </Link>
              </div>
              <div className="box4">
                  <Link to="/sklep" style={{textDecoration: 'none'}}>
                      <li>Sklep</li>
                  </Link>
              </div>
          </div>
      </div>
  )
}

export default App;
