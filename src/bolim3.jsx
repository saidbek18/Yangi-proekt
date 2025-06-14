import React from "react";
import "./bolim3.css";
import tanga from "./assets/tanga.png";
import { FaUsers, FaThumbsUp, FaRandom, FaCheckCircle } from "react-icons/fa";

const Bolim3 = () => {
  return (
    <div className="bolim3">
      <h2 className="bolim3-title">
        Bolishi mumkinmas man dasturchiman ey ishonmaydi hech kim
      </h2>
      <div className="bolim3-content">
        <div className="bolim3-cards">
          <div className="card">
            <FaUsers className="icon icon-yellow" />
            <div>
              <h3>vau vau ustoz qanaysiz</h3>
              <p>Komanda topishim kerak </p>
            </div>
          </div>
          <div className="card">
            <FaThumbsUp className="icon icon-yellow" />
            <div>
              <h3>Ular bilan ishlashim kerak</h3>
              <p>Ustoz shu oxiri bolsin tamom boldim qilaman degancha
              </p>
            </div>
          </div>
          <div className="card">
            <FaRandom className="icon icon-yellow" />
            <div>
              <h3>Sozam yoq </h3>
              <p>Mandaqa dasturchila kammi rostanam ustoz man tez yozaman</p>
            </div>
          </div>
          <div className="card">
            <FaCheckCircle className="icon icon-yellow" />
            <div>
              <h3>Kod mening jonu dilim</h3>
              <p>Au Au gap yoq </p>
            </div>
          </div>
        </div>
        <img src={tanga} alt="tanga" className="bolim3-img" />
      </div>
      <button className="bolim3-button">Buncha chiroyli yey</button>
    </div>
  );
};

export default Bolim3;
