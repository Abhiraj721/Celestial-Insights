import React from "react";
import { useState, useEffect, useRef } from "react";
import API from "./API";
import Flatpickr from "react-flatpickr";
export default function MoonbyDate({ apiRef }) {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so add 1 and pad with 0 if needed
  const day = String(currentDate.getDate()).padStart(2, "0"); // Pad day with 0 if needed
  const formattedDate = `${year}-${month}-${day}`;
  const [datearr, Setdatearr] = useState([]);
  const [datestr, Setdatestr] = useState(formattedDate);
  useState(()=>{
    Setdatearr(datestr.split("-"));
  },[])
  const onDateChange=(e)=>{
    Setdatestr(e.target.value);
    const arr = e.target.value.split("-");
    Setdatearr(arr);
  }
  return (
    <div className="container">
      <section className="moonbydateSec" id="section2">
        <h2 className="head">Moon By Date</h2>
        <br />
        <input
          className="dateinput"
          type="date"
          id="date-input"
          value={datestr}
          onChange={onDateChange}
          name="selectedDate"
        />
        {console.log(datearr)}
        <button
        style={{  fontFamily: "Audiowide",fontSize:"14px"}}
          class="button-85"
          role="button"
          onClick={() => {
           apiRef.current.callApi()
          }}
        >
          Generate
        </button>
        <API
          date={datearr[0]}
          month={datearr[1]}
          year={datearr[2]}
          ref={apiRef}
        ></API>
        <br />
      </section>
    </div>
  );
}
