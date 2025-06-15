import React, { useState } from "react";
import "./Modal.css";
import { FaCheckCircle } from "react-icons/fa";


const Register = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleConfirm = () => {
    setIsConfirmed(true); 
  };

  const handleClose = () => {
    setVisible(false); 
  };


  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal modal-content">
        <span className="close" onClick={handleClose}>&times;</span>

        {!isConfirmed ? (
          <>
            <h2 className="modal-title">Royxatdan otish</h2>
            <input className="modal-input" type="text" placeholder="Ism" />
            <input className="modal-input" type="email" placeholder="Email" />
            <input className="modal-input" type="password" placeholder="Parol" />
            <input className="modal-input" type="password" placeholder="Parolni tasdiqlang" />
            <button className="modal-btn gold-btn" onClick={handleConfirm}>
              Tasdiqlash
            </button>
            <p className="modal-subtext">Ro‘yxatdan o‘tish</p>
          </>
        ) : (
          <>
            <FaCheckCircle className="modal-icon" />
            <h2 className="modal-title">Registratsiya</h2>
            <p className="modal-text">Siz o'tdingiz</p>
            <button className="modal-btn" onClick={handleClose}>
              Ok
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
