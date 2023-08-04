import PH_API from "./PH_API";
import lastDatesOfMonths from "./LastDateMonths";
import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import "../App.css";

export default function SliderMoon() {
  const date=new Date();
  const [currDate, SetcurrDate] = useState(date.getDate());
  const [currMonth, SetcurrMonth] = useState(date.getMonth());
  function NavigateSlider(e)
  {
    console.log(e.target.id)
    if(e.target.id=="right"){
    if (currDate == lastDatesOfMonths[currMonth - 1]) {
      SetcurrDate(1);
      if (currMonth < 12) SetcurrMonth(currMonth + 1);
      else SetcurrMonth(1);
    } else SetcurrDate(currDate + 1);
  }
  else if(e.target.id=="left"){
    if (currDate == 1) {
      const prevMonthlastdate=lastDatesOfMonths[currMonth-2]
      SetcurrDate(prevMonthlastdate);
      if (currMonth < 12) SetcurrMonth(currMonth -1);
      else SetcurrMonth(1);
    } else SetcurrDate(currDate -1);
  }
  }
  return (
    
    <div className="slider container">
    <section className="currMoonSec" id="section1">
      <h2 className="head">Current Moon</h2>
      <center>
        <div className="sliderallaong">
      <ol className="sliderlist">
        <div></div>
        <li>
          <button
          id="left"
            className="slidernavigation"
            onClick={NavigateSlider}
          >
            <i id="left" class="fa-solid fa-caret-left fa-beat fa-3x" style={{color:" #7a7c7f"}}></i>
          </button>
        </li>
        <li>
          <div className="img">
          <PH_API
            date={
              currDate < 10 ? "0" + currDate.toString() : currDate.toString()
            }
            month={"0" + currMonth.toString()}
            year={"2023"}
          ></PH_API>
          </div>
        </li>
        <li>
          <button
            className="slidernavigation"
            onClick={NavigateSlider}
          >
       <i id="right" class="fa-solid fa-caret-right fa-beat fa-3x" style={{color:" #7a7c7f"}}></i>
          </button>
        </li>
      </ol>
      </div>
      </center>
      </section>
    </div>

  );
}
