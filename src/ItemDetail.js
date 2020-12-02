import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function ItemDetail() {

    // Use effects, działa jak component się zamontuje
    useEffect(() => {fetchItems()}, []);
    let category = window.location.pathname.split('/')[2];
    let id = window.location.pathname.split('/')[3];
    let [item, setItem] = useState([]);
    const fetchItems = async () => {
        const fetchItem = await fetch(`http://localhost:5000/store?category=${category}&id=${id}`)
        const item = await fetchItem.json();
        setItem(item[0]);
    };

    return (
        <div>
            <Link to={`/sklep`}><h1>Kategorie</h1></Link>
            <h1>{item.id}</h1>
        </div>
    );
}

export default ItemDetail;