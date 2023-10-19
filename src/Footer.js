import React from "react";

export default function Footer(){
return(
    <div className="footer">
        <img src="./images/footer-logo.png" alt="footer logo"></img>
        <div className="footer-nav-container">
            <div className="col">
            <h6>Doormat Navigation</h6>
            <ul className="footer-nav">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Reservations</a></li>
                <li><a href="">Order Online</a></li>
            </ul>
            </div>
            <div className="col">
            <h6>Contact</h6>
            <ul className="footer-nav">
                <li><a href="">Address</a></li>
                <li><a href="">Phone Number</a></li>
                <li><a href="">Email</a></li>

            </ul>
            </div>
            <div className="col">
            <h6>Social Media</h6>
            <ul className="footer-nav">
                <li><a href="">Facebook</a></li>
                <li><a href="">Instagram</a></li>
                <li><a href="">Pinterest</a></li>
            </ul>
            </div>
        </div>
    </div>
)
}