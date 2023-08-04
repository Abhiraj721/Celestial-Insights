import "./App.css";
import React from "react";
import { useState, useEffect, useRef } from "react";
import API from "./components/API";
import PH_API from "./components/PH_API";
import lastDatesOfMonths from "./components/LastDateMonths";
import SliderMoon from "./components/SliderMoon";
import Navbar from "./components/Navbar";
import MoonbyDate from "./components/MoonbyDate";
import StarCharts from "./components/StarCharts";
import Credits from "./components/Credits";

function App() {
  const apiRef = useRef(null);
  return (
    <div className="App">
      <Navbar></Navbar>
      <SliderMoon></SliderMoon>
      <br />
      <MoonbyDate apiRef={apiRef}></MoonbyDate>
      <br />
      <StarCharts></StarCharts>
      <br /><br />
      <Credits></Credits>
    </div>
  );
}

export default App;
