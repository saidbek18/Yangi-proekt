import React from 'react';
import './bolim2.css';



const Bolim2 = () => {
  return (
    <section className="bolim2">
      <div className="bolim2-header">
        <p>Saytimiz sizga manzur bolgan bolsa rahmat bizni saytimizda qoling</p>
        <p>Xatolardan qorqmang hammasini uddalaysiz</p>
      </div>
      <div className="stats-cards">
        <div className="card yellow">
          <div className="growth1">▲ +32%</div>
          <div className="value">$ 192 000 000</div>
          <div className="desc1">Pul kotarilishi </div>
        </div>
        <div className="card black">
          <div className="growth">▲ +152%</div>
          <div className="value">$ 101 236</div>
          <div className="desc">Valyuta ayirboshlash</div>
        </div>
        <div className="card black">
          <div className="growth">▲ +10%</div>
          <div className="value">322%</div>
          <div className="desc">Birinchi depozitga pul qoshilishi</div>
        </div>
        <div className="card black">
          <div className="growth">▲ +246%</div>
          <div className="value">32 442</div>
          <div className="desc">Foydalanuvchilar soni </div>
        </div>
      </div>
    </section>
  );
};

export default Bolim2;
