import React, { useState } from "react";
import "./Modal.css";
import { FaRegThumbsUp } from "react-icons/fa";

const Accept = () => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <FaRegThumbsUp className="modal-icon" />
        <h2 className="modal-title">Tasdiqlang</h2>
        <p className="modal-text">Tasdiqlandi</p>
        <button className="modal-btn" onClick={handleClose}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default Accept;
