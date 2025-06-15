import React, { useState } from "react";
import "./remix.css";
import { FaCheckCircle, FaChevronDown, FaCrown } from "react-icons/fa";

const Remix = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSend = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="remix">
      <div className="remix-cards">
        <div className="remix-card">
          <FaCheckCircle className="check-icon" />
          <p>Kamolov Saidbek - 2009-yil dasturchi.
            U hozirda Frontend dasturchi sifatida faoliyat yuritadi.
          </p>
        </div>
        <div className="remix-card">
          <FaCheckCircle className="check-icon" />
          <p>Hammasi Reactda qilingan va foydali</p>
        </div>
        <div className="remix-card">
          <FaCheckCircle className="check-icon" />
          <p>Hammasi ishonchli</p>
        </div>
        <div className="remix-card">
          <FaCheckCircle className="check-icon" />
          <p>Yosh dasturchi Saidbek tomonidan murakkab dasturlar uchun foydalaning</p>
        </div>
        <div className="remix-card">
          <FaCheckCircle className="check-icon" />
          <p>Aniq dizaynsiz hayolan qila olmaymiz faqat korib taxlab beradi</p>
        </div>
      </div>

      <FaChevronDown className="arrow-icon" />

      <div className="remix-form">
        <h2>Emailga Xabar yollash</h2>
        <p>
          Assalomalekum <span>Bemalol xabar yollang</span> <br />
          Bu xabar sayt egasiga bormaydi
          <span> Saytni ishlab chiqti Said</span>.
        </p>
        <div className="form-inputs">
          <input type="text" placeholder="Ism" />
          <input type="text" placeholder="Xabar" />
          <input type="email" placeholder="Emailingiz" />
        </div>
        <button className="join-btn" onClick={handleSend}>
          Yuborish
        </button>
      </div>

      {/* Club Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <FaCrown className="modal-icon gold" />
            <h2 className="modal-title">Rahmat</h2>
            <p className="modal-text">Xabaringiz yollandi</p>
            <button className="modal-btn" onClick={handleClose}>
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Remix;
