import React from "react";
import BookingForm from "../BookingForm";
import { useReducer } from "react";
import {fetchAPI, submitAPI} from "../BookingAPI";
import {  useNavigate } from "react-router-dom";

export default function Reservations(){
  const navigate=useNavigate();



    function updateTimes(date) {
        return fetchAPI(date);
      }

      const output = fetchAPI(new Date());

      const [availableTimes, dispatch] = useReducer(updateTimes, output);


    function useSubmitForm(formData){
        const submit = submitAPI(formData);
        console.log(formData);
          if (submit) {
           return  navigate('/confirmation');
          }
        }


    return(
        <>
        <h1>Reservation Page</h1>
        <BookingForm availableTimes={availableTimes} updateTimes={dispatch} submitForm={useSubmitForm}/>
        </>
    )
}