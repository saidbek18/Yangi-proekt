import React from "react";
import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa";





const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-text">GIRAFFE FUND</span>
      </div>
      <ul className="navbar-menu">
        <li>Bosh sahifa</li>
        <li>Biz haqimizda</li>
        <li>Nega  biz</li>
        <li>Strategiya</li>
        <li>Muvaffaqiyat</li>
        <li>GIRAFFE CLUB</li>
        <li>Bog'lanish</li>
      </ul>



      
      <div className="navbar-right">
        <img
          src="https://flagcdn.com/w40/uz.png"
          alt="UZ"
          className="lang-flag"
        />
        <button className="account-btn">
          Shaxsiy kabinet <FaUserCircle className="user-icon" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
