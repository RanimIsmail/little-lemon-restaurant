import React from "react";

export default function Hero(){
    return(
        <section className="hero">
                <div className="first-col">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button className="main-btn">Reserve a table</button>
                </div>

                <div className="second-col">
                    <img src="./images/restaurantfood.jpg" alt="restaurant food" className="photo"></img>
                    <div className="block" id="first-block"></div>
                    <div className="block" id="second-block"></div>
                </div>

        </section>
    )
}