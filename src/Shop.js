import React from 'react';
import { Link } from 'react-router-dom';
import './ShopUi.css';

function sklep() {

    return (
        <div className="container">
            <Link to={`/sklep/przescieradla`} style={{textDecoration: 'none'}}><div className="category">Prześcieradła</div></Link>
            <Link to={`/sklep/posciele`} style={{textDecoration: 'none'}}><div className="category">Pościele</div></Link>
            <Link to={`/sklep/koce`} style={{textDecoration: 'none'}}><div className="category">Koce</div></Link>
            <Link to={`/sklep/koldry`} style={{textDecoration: 'none'}}><div className="category">Kołdry</div></Link>
            <Link to={`/sklep/reczniki`} style={{textDecoration: 'none'}}><div className="category">Ręczniki</div></Link>
        </div>
    );
}

export default sklep;