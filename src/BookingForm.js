import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function BookingForm(props){


    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [guests, setGuests] = useState(1);
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState( props.availableTimes.map((times) => <option>{times}</option>));
    const [occasion, setOccasion] = useState("");
    const [comment, setComment] = useState("");




    function handleDateChange(e) {
        setDate(e.target.value);

        var stringify = new Date(e.target.value);

        props.updateTimes(stringify.getDate());
        props.availableTimes.length === 0? setTime(<option>No time available</option>) :

        setTime(props.availableTimes.map((times) => {<option>{times}</option>}));
      }
      const getIsFormValid = () => {
        return (
          fname && lname && email && guests>0 && date && (time&& props.availableTimes.length !== 0) && (occasion&& occasion!=="--Select")
        );
      };

      function handleSubmit(e){
        e.preventDefault();
        const data = {
            firstName : fname,
            lastName: lname,
            email: email,
            guests : guests,
            date : date,
            time : time,
            occasion: occasion,
            comment: comment
        }
        return(
        props.submitForm(data)
        )
    }

    return(
        <div className="bookingForm">
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" id="fName" placeholder="First Name" value={fname} onChange={e => setFName(e.target.value)} required minLength={2} maxLength={60} input/>
                </div>
                <div>
                    <input type="text" id="lName" placeholder="Last Name" value={lname} onChange={e => setLName(e.target.value)} required minLength={2} maxLength={60}></input>
                </div>
                <div>
                    <input type="email" id="email" placeholder="Email" value={email} minLength={4} maxLength={200} required onChange={e => setEmail(e.target.value)} ></input>
                </div>
                <div>
                    <label htmlFor="guests"> Number of guests: </label> <br/>
                    <input type="number" id="guests" required min={1} max={100} value={guests} onChange={e => setGuests(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="date"> Choose date: </label> <br/>
                    <input type="date" id="date" value={date} onChange={handleDateChange}></input>
                </div>
                <div>
                    <label htmlFor="time">Select Time</label> <br></br>
                    <select id="time" required>
                     {time}
                    </select>
                </div>
                <div>
                    <label htmlFor="occasion"> Occassion: </label> <br/>
                    <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                        <option>--Select</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Other</option>
                    </select>
                </div>
                <div>
                <label htmlFor="comments">Additional Comments</label> <br/>
                <textarea id="comments" rows={8} cols={50} value={comment} onChange={e => setComment(e.target.value)}>
                </textarea>
            </div>

            <button type="submit" disabled={!getIsFormValid()}>
               Submit
            </button>

            </form>
        </div>
    )
}