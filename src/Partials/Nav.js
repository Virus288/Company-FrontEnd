import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import '../Css/Nav.css';


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=>{
        // Toggle
        nav.classList.toggle('nav-active');

        // Animate
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = ` navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        // Burger animation
        burger.classList.toggle('toggle');
    });
}

function Nav() {
    useEffect(() => navSlide());

    return (
        <nav>
            <div className="logo">
                <Link to="/">
                    <h4>Navbar</h4>
                </Link>
            </div>
            <ul className="nav-links">
                <Link to="/onas">
                    <li>O nas</li>
                </Link>
                <Link to="/sklep">
                    <li>Sklep</li>
                </Link>
            </ul>
            <div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Nav;