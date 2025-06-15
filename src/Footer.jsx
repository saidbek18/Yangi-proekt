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
  const [showAccept, setShowAccept] = useState(false); 

  const closeModal = () => setModal("");

  const renderModal = () => {
    if (!modal) return null;

    let icon, title, text;

    switch (modal) {
      case "register":
        icon = <FaUserPlus className="modal-icon" />;
        title = "Sayt boyicha fikringizni SAIDBEKGA yozing";
        text = "Saidbek ga yozing, u sizga yordam beradi";
        break;
      case "login":
        icon = <FaLock className="modal-icon" />;
        title = "Login qilish kerakmi?";
        text = "Unutmay login qilish kerak, agar login qilmasangiz sayt ishlamaydi";
        break;
      case "check":
        icon = <FaCheckCircle className="modal-icon" />;
        title = "Hammasi to‘g‘ri ishlaydi";
        text = "Sizga hammasi to‘g‘ri ko‘rinadi, lekin bu sayt hali tayyor emas";
        break;
      case "accept":
        icon = <FaRegThumbsUp className="modal-icon" />;
        title = "Hammasi soxta lekin yaxshi ishlaydi";
        text = " Bu sayt hali tayyor emas, lekin ishlaydi";
        break;
      case "club":
        icon = <FaStar className="modal-icon" />;
        title = "Klubga a'zo bo‘lish";
        text = " Klubga a'zo bo‘lish uchun, saytni oxirigacha o‘qib chiqing";
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
          <button className="modal-btn" onClick={closeModal}>
            Ortga
          </button>
        </div>
      </div>
    );
  };

  const renderAcceptModal = () => {
    if (!showAccept) return null;

    return (
      <div className="modal-overlay" onClick={() => setShowAccept(false)}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <FaRegThumbsUp className="modal-icon" />
          <h2 className="modal-title">Tasdiqlang</h2>
          <p className="modal-text">Tasdiqlandi</p>
          <button className="modal-btn" onClick={() => setShowAccept(false)}>
            Ok
          </button>
        </div>
      </div>
    );
  };

  const handleSubscribeClick = () => {
    setShowAccept(true);
  };

  return (
    <footer className="footer">
      {renderModal()}
      {renderAcceptModal()}

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
        <input type="email" placeholder="Emailingizni kiriting" />
        <button onClick={handleSubscribeClick}>Kiritish</button>
      </div>

      <div className="footer-icons">
        <a href="/">
          <FaTelegramPlane className="social-icon" />
        </a>
        <a href="/">
          <FaInstagram className="social-icon" />
        </a>
      </div>

      <div className="footer-bottom">© 2025 yil Saidbek production 😁</div>

      <div className="footer-buttons">
        <button onClick={() => setModal("register")}>Sayt</button>
        <button onClick={() => setModal("login")}>Login</button>
        <button onClick={() => setModal("check")}>Ishlashi</button>
        <button onClick={() => setModal("accept")}>Foydalanish</button>
        <button onClick={() => setModal("club")}>Klub haqida</button>
      </div>
    </footer>
  );
};

export default Footer;
