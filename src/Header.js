import React from "react";
import Nav from "./Nav.js"

export default function Header(){
    return(
        <>
        <div className="container">
            <div className="header-container">
                <a href=" "><img src="./images/Logo.svg" alt="logo-img" id="logo"></img></a> 
                <Nav/>
                <button className="login-btn"> Login </button>
            </div>
        </div>
        </>
    )
}