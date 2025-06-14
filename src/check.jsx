import React from "react";
import "./Modal.css";
import { FaCheckCircle } from "react-icons/fa";

const Check = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <FaCheckCircle className="modal-icon" />
        <h2 className="modal-title">Yaxmate</h2>
        <p className="modal-text">Keling saytimiza </p>
        <button className="modal-btn" onClick={onClose}>
          Okey
        </button>
      </div>
    </div>
  );
};

export default Check;
