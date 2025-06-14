import React from "react";
import "./Modal.css";
import { FaCheckCircle } from "react-icons/fa";

const Login = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <FaCheckCircle className="modal-icon" />
        <h2 className="modal-title">Gap yoq shu uchun</h2>
        <p className="modal-text">Boshqa gap qerdan topay</p>
        <button className="modal-btn" onClick={onClose}>
          Ок
        </button>
      </div>
    </div>
  );
};

export default Login;
