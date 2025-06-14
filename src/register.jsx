import React from "react";
import "./Modal.css";

const Register = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Al qaringe</h2>
        <input type="text" placeholder="Heyyo" />
        <input type="email" placeholder="Ishlamedi" />
        <input type="password" placeholder="Git hubga joylash" />
        <input type="password" placeholder="Esimdan chiqti" />
        <button className="gold-btn">Vayu</button>
        <p className="subtext">Im human im ghost</p>
        <span className="close" onClick={onClose}>&times;</span>
      </div>
    </div>
  );
};

export default Register;
