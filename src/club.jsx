import React, { useState } from "react";
import "./Modal.css";
import { FaCrown } from "react-icons/fa";

const Club = () => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <FaCrown className="modal-icon gold" />
        <h2 className="modal-title">Rahmat</h2>
        <p className="modal-text">Xabaringiz yollandi</p>
        <button className="modal-btn" onClick={handleClose}>
          xop
        </button>
      </div>
    </div>
  );
};

export default Club;
