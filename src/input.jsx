import React from 'react';
import './input.css';
import { BsArrowLeft } from 'react-icons/bs';
import tanga from './assets/tanga.png';

const Input = () => {
  return (
    <section className="input-section">
      <div className="input-container">
        <div className="input-card">
          <h3>Royxatdan oting </h3>
          <p>Va saytdan foydalaning</p>
          <form>
            <input type="text" placeholder="ism" required />
            <input type="tel" placeholder="Nomer" required />
            <input type="email" placeholder="Email" required />
            <button type="submit">Tasdiqlash</button>
          </form>
        </div>

        <div className="input-text">
          <h2>
            Saytimiz oz faoliyatda<br /> doim ishlaydi<span>Hammasi ishonchli</span>
          </h2>
          <p>
            Shunchaki royxatdan otib<b>Bepul</b>,<br />
            Foydalanishingiz mumkin <br />
            Barchasi ishonchli
          </p>
          <div className="arrow-icon">
            <BsArrowLeft size={40} />
          </div>
        </div>
      </div>


      <img src={tanga} alt="background" className="input-bg" />
    </section>
  );
};

export default Input;
