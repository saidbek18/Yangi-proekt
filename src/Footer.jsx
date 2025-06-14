import React, { useState } from "react";
import "./Footer.css";
import {
  FaCheckCircle,
  FaUserPlus,
  FaLock,
  FaRegThumbsUp,
  FaStar,
  FaTelegramPlane,
  FaInstagram
} from "react-icons/fa";

const Footer = () => {
  const [modal, setModal] = useState("");

  const closeModal = () => setModal("");

  const renderModal = () => {
    if (!modal) return null;

    let icon, title, text;

    switch (modal) {
      case "register":
        icon = <FaUserPlus className="modal-icon" />;
        title = "Nichevo sebe";
        text = "Shulani man qildimmi ey";
        break;
      case "login":
        icon = <FaLock className="modal-icon" />;
        title = "Oh my god";
        text = "Oh may golost ";
        break;
      case "check":
        icon = <FaCheckCircle className="modal-icon" />;
        title = "Bolishi mumkinmase";
        text = "Saidjon shakarsan shakar";
        break;
      case "accept":
        icon = <FaRegThumbsUp className="modal-icon" />;
        title = "Ustoz ochopsizmi bulani";
        text = "Boladimi ustoz";
        break;
      case "club":
        icon = <FaStar className="modal-icon" />;
        title = "Kim biladi ";
        text = "Bu modallarni ochopsizmi";
        break;
      default:
        return null;
    }



    return (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          {icon}
          <h3 className="modal-title">{title}</h3>
          <p className="modal-text">{text}</p>
          <button className="modal-btn" onClick={closeModal}>Ortga</button>
        </div>
      </div>
    );
  };



  return (
    <footer className="footer">
      {renderModal()}

      <div className="footer-logo">GIRAFFE FUND</div>

      <div className="footer-nav">
        <a href="/">Not now</a>
        <a href="/">Not now</a>
        <a href="/">Not now</a>
        <a href="/">Not now</a>
        <a href="/">Not now</a>
        <a href="/">Not now</a>
      </div>

      <div className="footer-subscribe">
        <input type="email" placeholder="Введите e-mail" />
        <button>Yo olloh</button>
      </div>

      <div className="footer-icons">
        <a href="/"><FaTelegramPlane className="social-icon" /></a>
        <a href="/"><FaInstagram className="social-icon" /></a>
      </div>

      <div className="footer-bottom">
        © 2025 yil Saidbek production 😁
      </div>

      <div className="footer-buttons">
        <button onClick={() => setModal("register")}>Oqish kere</button>
        <button onClick={() => setModal("login")}>Footergacha keldimmi</button>
        <button onClick={() => setModal("check")}>Mani kozimga chiroyli korinopti</button>
        <button onClick={() => setModal("accept")}>Bungacha ancha xato boldi</button>
        <button onClick={() => setModal("club")}>Exxe bir ozimga qiyin</button>
      </div>
    </footer>
  );
};

export default Footer;
