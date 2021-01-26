import React from 'react';
import '../ComputerStyles/Monitors.scss';

function MonitorsTemplate() {
  return (
    <div className="monitor-template__container">
      <div className="monitor-template__img">
        <img src="https://images-na.ssl-images-amazon.com/images/I/81GJkTKuLnL._AC._SR360,460.jpg" alt="monitor-product-img" />
      </div>
      <div className="monitor-template__info">
        <div className="monitor-template__price">
          <span>
            <p>$</p>
            <p>109</p>
          </span>
          <span>
            <p>139.99</p>
          </span>
        </div>
        <div className="monitor-template__title">
          <p>
            BenQ 24 Inch IPS Monitor | 1080P | Proprietary Eye-Care Tech | Ultra-Slim
          </p>
        </div>
        <div className="monitor-template__rating">
          <p>⭐⭐⭐⭐⭐</p>
        </div>
      </div>
    </div>
  )
}



function Monitors() {
  return (
    <div className="monitors__container">
      <div className="monitors__heading">
        <p>Monitors</p>
        <p>
          Shop for monitors from top brands includeing
          <a href="#">Dell</a>,
          <a href="#">HP</a>,
          <a href="#">Asus</a>,
          <a href="#">ViewSonic</a>,
          <a href="#">LG</a>,
           and more.
        </p>
      </div>
      <div className="monitors__ads-one">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/HandpickedMonitors_DT_EN.jpg" alt="ads-image" />
      </div>
      <div className="monitors__category">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_Home.jpg" alt="monitor-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_HighPerformance.jpg" alt="monitor-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_Creator.jpg" alt="monitor-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_Work.jpg" alt="monitor-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_Professional.jpg" alt="monitor-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_BusinessPremium.jpg" alt="monitor-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_Portable.jpg" alt="monitor-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_ValueGaming.jpg" alt="monitor-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_EntryGaming.jpg" alt="monitor-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_EssentialGaming.jpg" alt="monitor-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_PremiumGaming.jpg" alt="monitor-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_4KGaming.jpg" alt="monitor-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_UltraGaming.jpg" alt="monitor-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_ExtremeGaming.jpg" alt="monitor-category" />
      </div>
      <div className="monitors__product-container">
        <MonitorsTemplate />
        <MonitorsTemplate />
        <MonitorsTemplate />
        <MonitorsTemplate />
        <MonitorsTemplate />
        <MonitorsTemplate />
        <MonitorsTemplate />
        <MonitorsTemplate />
      </div>
    </div>
  )
}

export default Monitors;
