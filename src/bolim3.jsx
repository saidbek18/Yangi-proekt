import React from "react";
import "./bolim3.css";
import tanga from "./assets/tanga.png";
import { FaUsers, FaThumbsUp, FaRandom, FaCheckCircle } from "react-icons/fa";

const Bolim3 = () => {
  return (
    <div className="bolim3">
      <h2 className="bolim3-title">
        Eng malakali dasturchilardan biri Saidbek yaratdi
      </h2>
      <div className="bolim3-content">
        <div className="bolim3-cards">
          <div className="card">
            <FaUsers className="icon icon-yellow" />
            <div>
              <h3>Hozirda oz faoliyatini yuritmoqda</h3>
              <p>Saidbek yolgiz faoliyat yuritadi</p>
            </div>
          </div>
          <div className="card">
            <FaThumbsUp className="icon icon-yellow" />
            <div>
              <h3>Saidbek Developerga murojat qilamiz</h3>
              <p>Oz shaxsiy saytlarini yaratmoqda
              </p>
            </div>
          </div>
          <div className="card">
            <FaRandom className="icon icon-yellow" />
            <div>
              <h3>Hozirda bu katta proektlaridan biri</h3>
              <p>Dasturchilikka kirib kelib orzusi amalga oshganini bildi</p>
            </div>
          </div>
          <div className="card">
            <FaCheckCircle className="icon icon-yellow" />
            <div>
              <h3>Bemalol murojat qiling</h3>
              <p>24/7 online </p>
            </div>
          </div>
        </div>
        <img src={tanga} alt="tanga" className="bolim3-img" />
      </div>
      <button className="bolim3-button">Tugma ishlamaydi</button>
    </div>
  );
};

export default Bolim3;
