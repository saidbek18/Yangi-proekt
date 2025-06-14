import React from "react";
import "./Modal.css";
import { FaRegThumbsUp } from "react-icons/fa";

const Accept = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <FaRegThumbsUp className="modal-icon" />
        <h2 className="modal-title">Tasdiqlang</h2>
        <p className="modal-text">Spasiba eta moy teachaer </p>
        <button className="modal-btn" onClick={onClose}>
          Oke
        </button>
      </div>
    </div>
  );
};

export default Accept;
