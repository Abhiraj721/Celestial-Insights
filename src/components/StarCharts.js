import React, { useEffect } from "react";
import "../App.css";
import { useState, useRef } from "react";
import StarAPI from "./StarAPI.js";
export default function StarCharts() {
  const [Constellation, Setconstellation] = useState("and");
  const [datearr, Setdatearr] = useState([]);
  const [datestr, Setdatestr] = useState("");
  const [style, SetStyle] = useState("navy");
  const apiref = useRef(null);
  function changeDate(e) {
    let curr = e.target.value;
    Setdatestr(curr);
    let arr = curr.split("-");
    Setdatearr(arr);
  }

  return (
    <div className="container">
      <section className="starchartsec" id="section3">
      <h2 className="head">Star Charts</h2>
      <br />
      <div className="row">
        <div className=" col-lg-6 col-sm-12">
          <form className="starchartform">
            <fieldset>
              <label style={{ color: "white" }}>Date</label>
              <input type="date" value={datestr} onChange={changeDate} />
              <br />
              <label style={{ color: "white" }}>Constellation</label>
              <select
                value={Constellation}
                onChange={(e) => {
                  Setconstellation(e.target.value);
                }}
              >
                <option value="and">Andromeda</option>
                <option value="ant">Antlia</option>
                <option value="aps">Apus</option>
                <option value="aqr">Aquarius</option>
                <option value="aql">Aquila</option>
                <option value="ara">Ara</option>
                <option value="ari">Aries</option>
                <option value="aur">Auriga</option>
                <option value="boo">Boötes</option>
                <option value="cae">Caelum</option>
                <option value="cam">Camelopardalis</option>
                <option value="cnc">Cancer</option>
                <option value="cvn">Canes Venatici</option>
                <option value="cma">Canis Major</option>
                <option value="cmi">Canis Minor</option>
                <option value="cap">Capricornus</option>
                <option value="car">Carina</option>
                <option value="cas">Cassiopeia</option>
                <option value="cen">Centaurus</option>
                <option value="cep">Cepheus</option>
                <option value="cet">Cetus</option>
                <option value="cha">Chamaeleon</option>
                <option value="cir">Circinus</option>
                <option value="col">Columba</option>
                <option value="com">Coma Berenices</option>
                <option value="cra">Corona Austrina</option>
                <option value="crb">Corona Borealis</option>
                <option value="crv">Corvus</option>
                <option value="crt">Crater</option>
                <option value="cru">Crux</option>
                <option value="cyg">Cygnus</option>
                <option value="del">Delphinus</option>
                <option value="dor">Dorado</option>
                <option value="dra">Draco</option>
                <option value="equ">Equuleus</option>
                <option value="eri">Eridanus</option>
                <option value="for">Fornax</option>
                <option value="gem">Gemini</option>
                <option value="gru">Grus</option>
                <option value="her">Hercules</option>
                <option value="hor">Horologium</option>
                <option value="hya">Hydra</option>
                <option value="hyi">Hydrus</option>
                <option value="ind">Indus</option>
                <option value="lac">Lacerta</option>
                <option value="leo">Leo</option>
                <option value="lmi">Leo Minor</option>
                <option value="lep">Lepus</option>
                <option value="lib">Libra</option>
                <option value="lup">Lupus</option>
                <option value="lyn">Lynx</option>
                <option value="lyr">Lyra</option>
                <option value="men">Mensa</option>
                <option value="mic">Microscopium</option>
                <option value="mon">Monoceros</option>
                <option value="mus">Musca</option>
                <option value="nor">Norma</option>
                <option value="oct">Octans</option>
                <option value="oph">Ophiuchus</option>
                <option value="ori">Orion</option>
                <option value="pav">Pavo</option>
                <option value="peg">Pegasus</option>
                <option value="per">Perseus</option>
                <option value="phe">Phoenix</option>
                <option value="pic">Pictor</option>
                <option value="psc">Pisces</option>
                <option value="psa">Piscis Austrinus</option>
                <option value="pup">Puppis</option>
                <option value="pyx">Pyxis</option>
                <option value="ret">Reticulum</option>
                <option value="sge">Sagitta</option>
                <option value="sgr">Sagittarius</option>
                <option value="sco">Scorpius</option>
                <option value="scl">Sculptor</option>
                <option value="sct">Scutum</option>
                <option value="ser">Serpens Cauda</option>
                <option value="sex">Sextans</option>
                <option value="tau">Taurus</option>
                <option value="tel">Telescopium</option>
                <option value="tri">Triangulum</option>
                <option value="tra">Triangulum Australe</option>
                <option value="tuc">Tucana</option>
                <option value="uma">Ursa Major</option>
                <option value="umi">Ursa Minor</option>
                <option value="vel">Vela</option>
                <option value="vir">Virgo</option>
                <option value="vol">Volans</option>
                <option value="Vul">Vulpecula</option>
              </select>
              <br />
              <label style={{ color: "white" }}>Style</label>
              <select
                value={style}
                onChange={(e) => {
                  SetStyle(e.target.value);
                }}
              >
                <option value="navy">Navy</option>
                <option value="inverted">Inverted</option>
                <option value="red">Red</option>
              </select>
              <button
                className="button-85"
                onClick={(e) => {
                  if (datestr == "") {
                    e.preventDefault();
                    alert("enter valid date");
                    return;
                  }
                  e.preventDefault();
                  apiref.current.Starapicall();
                }}
              >
                Generate
              </button>
            </fieldset>
          </form>
        </div>
        <div className=" col-lg-6 col-sm-12">
          <StarAPI
            ref={apiref}
            date={datearr}
            constellation={Constellation}
            style={style}
          ></StarAPI>
        </div>
      </div>
      </section>
    </div>
  );
}
