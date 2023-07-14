import React from "react";
import BookingForm from "../BookingForm";
import { useReducer } from "react";
import {fetchAPI, submitAPI} from "../BookingAPI";
import { redirect } from "react-router-dom";


export default function Reservations(){


    function updateTimes(date) {
        return fetchAPI(date);
      }

      const output = fetchAPI(new Date());

      const [availableTimes, dispatch] = useReducer(updateTimes, output);


    function submitForm(formData){
        const submit = submitAPI(formData);
        return{
          if (submit) { redirect("/confirmation") }
        }
    }



    return(
        <>
        <h1>Reservation Page</h1>
        <BookingForm availableTimes={availableTimes} updateTimes={dispatch} submitForm={submitForm}/>
        </>
    )
}