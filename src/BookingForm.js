import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function BookingForm(props){


    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [guests, setGuests] = useState(1);
    const [date, setDate] = useState("");
    const [time, setTime] = useState( props.availableTimes.map((times) => <option>{times}</option>));
    const [occasion, setOccasion] = useState("");
    const [comment, setComment] = useState("");

    function handleSubmit(){
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
        props.submitForm(data)
    }
    function handleDateChange(e) {
        setDate(e.target.value);

        var stringify = e.target.value;
        const date = new Date(stringify);

        props.updateTimes(date);

        setTime(props.availableTimes.map((times) => <option>{times}</option>));
      }

    return(
        <div className="bookingForm">
            <form>
                <div>
                    <label htmlFor="fName"> First Name: </label> <br/>
                    <input type="text" id="fName" value={fname} onChange={e => setFName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="lName" > Last Name: </label> <br/>
                    <input type="text" id="lName" value={lname} onChange={e => setLName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="email"> Email: </label> <br/>
                    <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)}></input>
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
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <div>
                <label htmlFor="comments">Additional Comments</label> <br/>
                <textarea id="comments" rows={8} cols={50} value={comment} onChange={e => setComment(e.target.value)}>
                </textarea>
            </div>
            <button onSubmit={handleSubmit} >
                <Link to="/confirmation">Book Table</Link>
            </button>

            </form>
        </div>
    )
}