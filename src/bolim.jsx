import React from "react";
import "./bolim.css";
import image from "./assets/image.png";



const Bolim = () => {
  return (
    <div className="bolim-section">
      <div className="bolim-container">
        <div className="left-text">
          <h3>
            Dux bolsa soqqa bor  <br />
            <span>Bor bizda hammasi</span> <br />
            Soqqa bor bosing
          </h3>
          <div className="line" />
        </div>
        <div className="right-text">
          <p>
            <span className="highlight">GIRAFFE FUND</span> – Saidbek Kamolov Frontend dasturchi tomonidan yaratilgan loyiha. Ushbu loyiha orqali siz o'z investitsiyalaringizni boshqarishingiz va foyda olishingiz mumkin.
          </p>
          <p>
              Saidbek Kamolov dasturchi, dizayner va investor sifatida o'z bilim va tajribasini ushbu platformada qo'llaydi. 
          </p>
          <p>
Saidbek ozi dasturchi bolib ozini loyihalarini ommaga taqdim etadi. Ushbu loyiha orqali u o'z bilim va tajribasini boshqalar bilan bo'lishadi, shuningdek, foydalanuvchilarga investitsiya qilish imkoniyatini taqdim etadi.
          </p>
        </div>
      </div>



      <div className="video-block">
        <h4>Video ishlamaydi </h4>
        <div className="video-box">
          <img src={image} alt="Video preview" />
          <div className="play-button" />
        </div>
      </div>
    </div>
  );
};

export default Bolim;
