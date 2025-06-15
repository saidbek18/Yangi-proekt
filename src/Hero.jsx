import React from "react";
import "./Hero.css";
import logoImg from "./assets/logo.png";




const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Giraffe Fund</h1>
          <h2>Biz bor soqqa bor</h2>
          <p>
            Bu saytdan foydalanishingiz mumkin
            <span className="highlight"> Albatta arzonga</span>.
            <strong> Birinchi depozit uchun 20%</strong>
          </p>
          <button className="hero-button">
            Bu tugma ishlamaydi <span className="arrow">➔</span>
          </button>
        </div>



        <div className="hero-image-wrapper">
          <img src={logoImg} alt="Hero" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
