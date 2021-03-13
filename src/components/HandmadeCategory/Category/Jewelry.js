import React from 'react';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/JewelryTwo.scss';
import HandmadeProductTemplate from './HandmadeProductTemplate';
import JumpTo from './JumpTo';

function Jewelry() {
  return (
    <div className="jewelry__container">
              <JumpTo 
          path1 = "/handmade/kitchen&dining"
          link1 = "kitchen&dining"
          path2 = "/handmade/wedding"
          link2 = "wedding"
          path3 = "/handmade/artwork"
          link3 = "art-work"
          path4 = "/handmade/homedecor"
          link4 = "home-decor"
          path5 = "/handmade/allhandmade"
          link5 = "all-handmade"
          path6 = "/handmade/handbags&accessories"
          link6 = "handbags&accessories"
          path7 = "/handmade/gifts"
          link7 = "gifts"
          path8 = "/handmade/sellon"
          link8 = "sell-on"
          path9 = "/handmade/clothing&shoes"
          link9 = "clothing&shoes"
          path10 = "/handmade/stationary&partysupplies"
          link10 = "stationary&partysupplies"
          path11 = "/handmade/baby"
          link11 = "baby"
          path12 = "/handmade/toys&games"
          link12 = "toys&games"
          path13 = "/handmade/home&kitchen"
          link13 = "home&kitchen"
          path14 = "/handmade/furniture"
          link14 = "furniture"
          path15 = "/handmade/beauty&grooming"
          link15 = "beauty&grooming"
          path16 = "/handmade/petsupplies"
          link16 = "pet&supplies"
        />
      <div className="jewelry__history-path">
      <Link to="/handmade">
          <p>
            go back
          </p>
        </Link>
      </div>
      <div className="jewelry__heading">
        <p>Jewelry</p>
        <p>Crafted by Artisans to show your style and celebrate any occasion.</p>
      </div>
      <div className="jewelry__header">
        <p>Shop by category</p>
      </div>
      <div className="jewelry__section-category">
        <div className="jewelry__section-links">
          <Link to="/handmade/jewelry" className="jewelry__section-link">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_bracelet_B078XMCLDJ._CB465207803_.jpg" alt="jewelry" />
          </Link>
          <p>Bracelets</p>
        </div>
        <div className="jewelry__section-links">
          <Link to="/handmade/jewelry" className="jewelry__section-link">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_necklace_B07GLVT1XK._CB465208267_.jpg" alt="jewelry" />
          </Link>
          <p>Neckalces</p>
        </div>
        <div className="jewelry__section-links">
          <Link to="/handmade/jewelry" className="jewelry__section-link">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_earrings_B07P9CQ59Q._CB465210778_.jpg" alt="jewelry" />
          </Link>
          <p>Earrings</p>
        </div>
        <div className="jewelry__section-links">
          <Link to="/handmade/jewelry" className="jewelry__section-link">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_rings_BO7JNV5NFH._CB465210543_.jpg" alt="jewelry" />
          </Link>
          <p>Rings</p>
        </div>
        <div className="jewelry__section-links">
          <Link to="/handmade/jewelry" className="jewelry__section-link">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_pin_B07D7ZZS3Z._CB465209801_.jpg" alt="jewelry" />
          </Link>
          <p>Pins, Buttons & Brooches</p>
        </div>
        <div className="jewelry__section-links">
          <Link to="/handmade/jewelry" className="jewelry__section-link">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_engagement_rings_B07L769FYK._CB465209356_.jpg" alt="jewelry" />
          </Link>
          <p>Wedding & Engagement Rings</p>
        </div>
        <div className="jewelry__section-links">
          <Link to="/handmade/jewelry" className="jewelry__section-link">
            <img src="https://images-na.ssl-images-amazon.com/images/I/81C27wYz%2BiL._SL1500_.jpg" alt="jewelry" />
          </Link>
          <p>Cufflinks, Shirt & Accessories</p>
        </div>
        <div className="jewelry__section-links">
          <Link to="/handmade/jewelry" className="jewelry__section-link">
            <img src="https://images-na.ssl-images-amazon.com/images/I/51Llz3ibR6L.jpg" alt="jewelry" />
          </Link>
          <p>Watches</p>
        </div>
      </div>
      <div className="jewelry__products">
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41x7lRBCfmL.jpg"}
          title= "14K Gold Filled Small Hoop Earrings for Cartilage Nose, Tiny Thin 7mm Piercing Hoop Ring 22 Gauge"
          brandName = "GraceCode"
          rating = {4}
          rateNumber = {"4,667"}
          shipping = {"Free Shipping"}
          price = {14.99}
          arrivalEst = {"Thursday, Feb 25"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41x7lRBCfmL.jpg"}
          title="14K Gold Filled Small Hoop Earrings for Cartilage Nose, Tiny Thin 7mm Piercing Hoop Ring 22 Gauge"
          brandName="GraceCode"
          rating={4}
          rateNumber={"4,667"}
          shipping = {"Free Shipping"}
          price={14.99}
          arrivalEst={"Thursday, Feb 25"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41x7lRBCfmL.jpg"}
          title="14K Gold Filled Small Hoop Earrings for Cartilage Nose, Tiny Thin 7mm Piercing Hoop Ring 22 Gauge"
          brandName="GraceCode"
          rating={4}
          rateNumber={"4,667"}
          shipping = {"Free Shipping"}
          price={14.99}
          arrivalEst={"Thursday, Feb 25"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41x7lRBCfmL.jpg"}
          title="14K Gold Filled Small Hoop Earrings for Cartilage Nose, Tiny Thin 7mm Piercing Hoop Ring 22 Gauge"
          brandName="GraceCode"
          rating={4}
          rateNumber={"4,667"}
          shipping = {"Free Shipping"}
          price={14.99}
          arrivalEst={"Thursday, Feb 25"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41x7lRBCfmL.jpg"}
          title="14K Gold Filled Small Hoop Earrings for Cartilage Nose, Tiny Thin 7mm Piercing Hoop Ring 22 Gauge"
          brandName="GraceCode"
          rating={4}
          rateNumber={"4,667"}
          shipping = {"Free Shipping"}
          price={14.99}
          arrivalEst={"Thursday, Feb 25"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41x7lRBCfmL.jpg"}
          title="14K Gold Filled Small Hoop Earrings for Cartilage Nose, Tiny Thin 7mm Piercing Hoop Ring 22 Gauge"
          brandName="GraceCode"
          rating={4}
          rateNumber={"4,667"}
          shipping = {"Free Shipping"}
          price={14.99}
          arrivalEst={"Thursday, Feb 25"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41x7lRBCfmL.jpg"}
          title="14K Gold Filled Small Hoop Earrings for Cartilage Nose, Tiny Thin 7mm Piercing Hoop Ring 22 Gauge"
          brandName="GraceCode"
          rating={4}
          rateNumber={"4,667"}
          shipping = {"Free Shipping"}
          price={14.99}
          arrivalEst={"Thursday, Feb 25"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41x7lRBCfmL.jpg"}
          title="14K Gold Filled Small Hoop Earrings for Cartilage Nose, Tiny Thin 7mm Piercing Hoop Ring 22 Gauge"
          brandName="GraceCode"
          rating={4}
          rateNumber={"4,667"}
          shipping={"Free Shipping"}
          price={14.99}
          arrivalEst={"Thursday, Feb 25"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41x7lRBCfmL.jpg"}
          title="14K Gold Filled Small Hoop Earrings for Cartilage Nose, Tiny Thin 7mm Piercing Hoop Ring 22 Gauge"
          brandName="GraceCode"
          rating={4}
          rateNumber={"4,667"}
          shipping={"Free Shipping"}
          price={14.99}
          arrivalEst={"Thursday, Feb 25"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41x7lRBCfmL.jpg"}
          title="14K Gold Filled Small Hoop Earrings for Cartilage Nose, Tiny Thin 7mm Piercing Hoop Ring 22 Gauge"
          brandName="GraceCode"
          rating={4}
          rateNumber={"4,667"}
          shipping={"Free Shipping"}
          price={14.99}
          arrivalEst={"Thursday, Feb 25"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41x7lRBCfmL.jpg"}
          title="14K Gold Filled Small Hoop Earrings for Cartilage Nose, Tiny Thin 7mm Piercing Hoop Ring 22 Gauge"
          brandName="GraceCode"
          rating={4}
          rateNumber={"4,667"}
          shipping={"Free Shipping"}
          price={14.99}
          arrivalEst={"Thursday, Feb 25"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41x7lRBCfmL.jpg"}
          title="14K Gold Filled Small Hoop Earrings for Cartilage Nose, Tiny Thin 7mm Piercing Hoop Ring 22 Gauge"
          brandName="GraceCode"
          rating={4}
          rateNumber={"4,667"}
          shipping={"Free Shipping"}
          price={14.99}
          arrivalEst={"Thursday, Feb 25"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41x7lRBCfmL.jpg"}
          title="14K Gold Filled Small Hoop Earrings for Cartilage Nose, Tiny Thin 7mm Piercing Hoop Ring 22 Gauge"
          brandName="GraceCode"
          rating={4}
          rateNumber={"4,667"}
          shipping={"Free Shipping"}
          price={14.99}
          arrivalEst={"Thursday, Feb 25"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41x7lRBCfmL.jpg"}
          title="14K Gold Filled Small Hoop Earrings for Cartilage Nose, Tiny Thin 7mm Piercing Hoop Ring 22 Gauge"
          brandName="GraceCode"
          rating={4}
          rateNumber={"4,667"}
          shipping={"Free Shipping"}
          price={14.99}
          arrivalEst={"Thursday, Feb 25"}
        />
      </div>

    </div>
  )
}

export default Jewelry
