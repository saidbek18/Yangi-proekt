import React from 'react';
import './bolim2.css';



const Bolim2 = () => {
  return (
    <section className="bolim2">
      <div className="bolim2-header">
        <p>Bolishi mumkinmas shu saytni man qilopmanmi ey </p>
        <p>oxirida koraman natijasini ustoz berda heci yoq</p>
      </div>
      <div className="stats-cards">
        <div className="card yellow">
          <div className="growth1">▲ +32%</div>
          <div className="value">$ 192 000 000</div>
          <div className="desc1">Pul Pul soqqani bosish kerak </div>
        </div>
        <div className="card black">
          <div className="growth">▲ +152%</div>
          <div className="value">101 236</div>
          <div className="desc">valyuta valyuta aaaaa</div>
        </div>
        <div className="card black">
          <div className="growth">▲ +10%</div>
          <div className="value">322%</div>
          <div className="desc">viyu viyu viyu </div>
        </div>
        <div className="card black">
          <div className="growth">▲ +246%</div>
          <div className="value">32 442</div>
          <div className="desc">soz yoq </div>
        </div>
      </div>
    </section>
  );
};

export default Bolim2;
