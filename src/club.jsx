import React from "react";
import "./Modal.css";
import { FaCrown } from "react-icons/fa";

const Club = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <FaCrown className="modal-icon gold" />
        <h2 className="modal-title">Ustoz</h2>
        <p className="modal-text">Togir tushuning </p>
        <button className="modal-btn" onClick={onClose}>
          xop
        </button>
      </div>
    </div>
  );
};

export default Club;
