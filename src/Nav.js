import React from "react";
import { Link } from 'react-router-dom';

export default function Nav(){
return (
    <nav className="nav-links">
    <ul role="list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About>">About</Link></li>
        <li><Link to="/Menu">Menu</Link></li>
        <li><Link to="/Reservations">Reservations</Link></li>
        <li><Link to="/Order-Online">Order Online</Link></li>
    </ul>
    </nav>
)
}