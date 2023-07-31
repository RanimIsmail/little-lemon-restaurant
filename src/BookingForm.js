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
        props.availableTimes.length === 0 ? setTime(<option>No time available</option>) : setTime(props.availableTimes.map((times) => <option>{times}</option>));
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
    const boxStyle ={width:"350px",
    height:"32px",
     margin:"10px",
    padding:"8px"}

    const selectStyle = {width:"365px",
    height:"50px",padding:"8px",margin:"10px" }


    return(
        <div className="bookingForm">
            <h3>Reserve a table </h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <input className="textInput" type="text" id="fName" placeholder="First Name" value={fname} onChange={e => setFName(e.target.value)} required minLength={2} maxLength={60} style={boxStyle}></input>
                </div>
                <div>
                    <input className="textInput" type="text" id="lName" placeholder="Last Name" value={lname} onChange={e => setLName(e.target.value)} required minLength={2} maxLength={60} style={boxStyle}></input>
                </div>
                <div>
                    <input className="textInput" type="email" id="email" placeholder="Email" value={email} size="lg" minLength={4} maxLength={200} required onChange={e => setEmail(e.target.value)} style={boxStyle} ></input>
                </div>
                <div>
                    <label htmlFor="guests" className="formText"><h6>Number of guests:</h6>  </label>
                    <input className="textInput" type="number" id="guests" required min={1} max={100} value={guests} onChange={e => setGuests(e.target.value)} style={{width:"100px",
                     height:"32px", padding:"8px", margin:"10px" }}></input>
                </div>
                <div>
                    <label htmlFor="date" className="formText"> <h6>Choose date:</h6> </label>
                    <input className="textInput" type="date" id="date" value={date} onChange={handleDateChange} style={boxStyle}></input>
                </div>
                <div>
                    <label htmlFor="time" className="formText" ><h6>Select Time</h6></label>
                    <select className="textInput"id="time" required style={selectStyle}>
                     {time}
                    </select>
                </div>
                <div>
                    <label  htmlFor="occasion" className="formText"> <h6>Occassion: </h6></label>
                    <select className="textInput" id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)} style={selectStyle}>
                        <option>--Select</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Other</option>
                    </select>
                </div>
                <div>
                <label htmlFor="comments" className="formText"><h6>Additional Comments</h6></label>
                <textarea id="comments" rows={8} cols={50} value={comment} onChange={e => setComment(e.target.value)}>
                </textarea>
            </div>

            <button className="main-btn" id="submit" type="submit" disabled={!getIsFormValid()} aria-label="Click to submit">
               Submit
            </button>

            </form>
        </div>
    )
}