import React from "react";
import "./klub.css";
import odam1 from "./assets/odam1.png"; 
import odam2 from "./assets/odam2.png"; 
import logo from "./assets/logo.png";   

const Klub = () => {
  return (
    <div className="klub">
      <img src={odam1} alt="Person 1" className="klub-person left" />
      <div className="klub-center">
        <img src={logo} alt="Giraffe Logo" className="klub-logo" />
        <h2 className="klub-title">
          Bu katta 2chi sayt <br />
          Yopiq invesitsiya
        </h2>
        <p className="klub-subtext">
          dot pot mod shaxmat
        </p>
        <p className="klub-description">
150 qator soz voyvu nachi million qtor soz yozdima vayey 
        </p>
        <button className="klub-button">Ustoz bu albatta xazil </button>
      </div>
      <img src={odam2} alt="Person 2" className="klub-person right" />
    </div>
  );
};

export default Klub;
