import React from "react";
import "../App.css";
let scrollArr={
  "Current Moon":"section1",
  "Moon by Date":"section2",
  "Star Charts":"section3",
}
function scrollToSection(e) {
  let sectionToScroll = e.target.innerText;
  let scroll = scrollArr[sectionToScroll];
  console.log(scroll);
  let section = document.getElementById(scroll); // Replace "section2" with the ID of the target section

  const sectionTopOffset = section.getBoundingClientRect().top;
  const scrollPosition = sectionTopOffset + window.pageYOffset-38;

  window.scrollTo({ top: scrollPosition, behavior: "smooth" });
}

export default function Navbar() {
  const navbarElements = ["Current Moon", "Moon by Date", "Star Charts"];
  return (
    <div className="navbar">
      <ol className="navbarBtn">
        {navbarElements.map((element) => {
          return <button className="btnnav" onClick={scrollToSection}> <li className="navBtn">{element}</li></button>;
        })}
      </ol>
    </div>
  );
}
