import React from "react";
import "./bolim.css";
import image from "./assets/image.png";



const Bolim = () => {
  return (
    <div className="bolim-section">
      <div className="bolim-container">
        <div className="left-text">
          <h3>
            Menga <br />
            <span>ishoning</span> <br />
            ustoz
          </h3>
          <div className="line" />
        </div>
        <div className="right-text">
          <p>
            <span className="highlight">GIRAFFE FUND</span> – Saidbek Kamolov 2009-yildan beri faoliyat yuritayotgan dasturchi
          </p>
          <p>
              Saidbek Kamolov bu yaxshi dasturchi lekin faqat xato qiladi ishni kopaytiradi bunga qisqartirib yozish yoqmaydida 
          </p>
          <p>
Saidbek ozi dasturchi bolib tugilgan ishonmaysizda ustoz dasturchilarni orasida said dasturchi keldi desa 
hamma vah bolishi mumkinmas deb tiz chokadi ishonmaysida hamma yalinadi manga hali nasib bolsa 
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
