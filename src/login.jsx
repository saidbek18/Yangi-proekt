import React, { useState } from "react";
import "./Modal.css";
import { FaCheckCircle } from "react-icons/fa";

const Login = () => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null; 

  return (
    <div className="modal-overlay">
      <div className="modal">
        <FaCheckCircle className="modal-icon" />
        <h2 className="modal-title">Registratsiya</h2>
        <p className="modal-text">Siz o'tdingiz</p>
        <button className="modal-btn" onClick={handleClose}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default Login;
