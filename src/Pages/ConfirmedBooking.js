import React from "react";
import Header from "../Header";
import Footer from "../Footer";


export default function ConfirmedBooking(){
    return(
        <>
        <Header/>
        <div className="confirmation">
        <h1> Booking confirmed!</h1>
        <h5> Thank you for choosing Little Lemon Restaurant &#127819; <br/> <br/> Your reservation has successfully submitted. We will send you an Email with your booking information.</h5>
        </div>
        <Footer/>
        </>
    )
}