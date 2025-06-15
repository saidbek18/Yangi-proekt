import React from "react";
import "./qiyin.css";
import coin from "./assets/coin.png";
import house from "./assets/house.png";
import terminal from "./assets/terminal.png";
import one from "./assets/1.png";
import two from "./assets/2.png";
import three from "./assets/3.png";
import { FaBitcoin, FaPoundSign, FaDollarSign } from "react-icons/fa";

const Qiyin = () => {
  return (
    <div className="qiyin-container">
      <h2 className="qiyin-title">Strategiya</h2>
      <div className="strategy-box">
        <div className="strategy-heading">Saytdan foydalanish </div>
        <div className="strategy-items">
          <div className="strategy-card">
            <img src={coin} alt="Криптовалюта" />
            <p>Pul solish</p>
          </div>
          <div className="strategy-card">
            <img src={house} alt="Недвижимость" />
            <p>Kopaytirish</p>
          </div>
          <div className="strategy-card">
            <img src={terminal} alt="Бизнес" />
            <p>Qaytarib olish</p>
          </div>
        </div>
        <div className="strategy-desc">
          Muhimi ishonchli hammasi
        </div>
      </div>

      <div className="valyuta-icons">
        <FaBitcoin className="val-icon orange" />
        <FaPoundSign className="val-icon light" />
        <FaDollarSign className="val-icon gold" />
      </div>

      <div className="invest-text">
        <h3>Valyuta kurslar</h3>
        <p>
          Siz izlagan saytlardan biri 
        </p>
      </div>

      <div className="invest-logos">
        <img src={one} alt="logo1" />
        <img src={two} alt="logo2" />
        <img src={three} alt="logo3" />
        <img src={two} alt="logo4" />
        <img src={one} alt="logo5" />
      </div>

      <button className="invest-btn">Xatoliklarga koz yumamiz</button>
    </div>
  );
};

export default Qiyin;
