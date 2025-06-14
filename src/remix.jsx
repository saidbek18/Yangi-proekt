import React from "react";
import "./remix.css";
import { FaCheckCircle, FaChevronDown } from "react-icons/fa";

const Remix = () => {
  return (
    <div className="remix">
      <div className="remix-cards">
        <div className="remix-card">
          <FaCheckCircle className="check-icon" />
          <p>Ruscha</p>
        </div>
        <div className="remix-card">
          <FaCheckCircle className="check-icon" />
          <p>Man ruscha yozolmayman shu uchun man shunaqa yozopman</p>
        </div>
        <div className="remix-card">
          <FaCheckCircle className="check-icon" />
          <p>Daji ruschaga tushunmayman</p>
        </div>
        <div className="remix-card">
          <FaCheckCircle className="check-icon" />
          <p>Voo voo sound the police </p>
        </div>
        <div className="remix-card">
          <FaCheckCircle className="check-icon" />
          <p>Freed from the desire</p>
        </div>
      </div>

      <FaChevronDown className="arrow-icon" />

      <div className="remix-form">
        <h2>Br br patapim phonk </h2>
        <p>
         Assalomalekum  <span>Bizning avia</span> <br />
          linyamizga xush kelibsiz <span>Said</span>.
        </p>
        <div className="form-inputs">
          <input type="text" placeholder="Ishamedi" />
          <input type="text" placeholder="Bu yerda bor narsa" />
          <input type="email" placeholder="Hammasi ishlamedi" />
        </div>
        <button className="join-btn">Klub remix </button>
      </div>
    </div>
  );
};

export default Remix;
