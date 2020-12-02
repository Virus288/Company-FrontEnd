import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ItemCategory() {

    // Use effects, działa jak component się zamontuje
    useEffect(() => {
        fetchItems()
    }, []);
    let url = window.location.pathname.split('/')[2];
    let [items, setItems] = useState([]);
    const fetchItems = async () => {
        const fetchItem = await fetch(`http://localhost:5000/store?category=${url}`)
        const items = await fetchItem.json();
        setItems(items);
    };

    return (
        <div>
            <Link to={`/sklep`}><h1>Kategorie</h1></Link>
            {items.map(id => (
                <Link key={id.id.toString()} to={`/sklep/${url}/${id.id}`}><h1>{id.nazwa}</h1><h2>{id.wymiary}</h2><h2>{id.kolor}</h2></Link>
            ))}
        </div>
    );
}

export default ItemCategory;