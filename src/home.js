import React from "react";
import "./test.css"

const Test = () => {
    return (
        <div>
            <nav>
                <h1>Ninja Smoothies</h1>
            </nav>
            <header>
                <div className="smoothie">
                    <img src={process.env.PUBLIC_URL + "smoothie.png"} alt=""/>
                </div>

                <div className="headings">
                    <h2>Smoothie Recipes</h2>
                    <h3>By Ninjas For Ninjas</h3>
                    <a href="/smoothies" className="btn">View Recipes</a>
                </div>
            </header>

            <footer>Copyright 2020 Ninja Smoothies</footer>
        </div>
    )
}

export default Test;