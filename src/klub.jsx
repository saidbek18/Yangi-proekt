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
          Investitsiya uchun harakat qilish <br />
          Muhimi ishonchli
        </h2>
        <p className="klub-subtext">
        Hammasi ishonchli saytga kirib royxatdan oting 
        </p>
        <p className="klub-description">
Bepul foydalanishingiz mumkin, va ishonchli saytlar orqali investitsiya qiling.
        </p>
        <button className="klub-button">Hammasi siz oylagandan oson</button>
      </div>
      <img src={odam2} alt="Person 2" className="klub-person right" />
    </div>
  );
};

export default Klub;
