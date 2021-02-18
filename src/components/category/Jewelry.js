import React from 'react';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';
// import JewelryProductTemplate from '../JewelryCategory/Category/JewelryProductTemplate';
// import ClothingJewelryMenu from '../JewelryCategory/JewelryMenu';
// import '../HandmadeCategory/HandmadeStyles/Jewelry.scss';

function ClothingJewelry() {
  return (
    <div className="jewelry__container">
      {/* <div className="jewelry__sub-categories">
          <ClothingJewelryMenu 
            category0="Necklace's"
            category1="Watch's"
            category3="Earring's"
            category2="Pendants"
          />
      </div> */}
      <div className="jewelry__section">
        <div className="jewelry__heading">
          <p>Jewelry</p>
          <p>Crafted by Artisans to show your style and celebrate any occasion.</p>
        </div>
        <div>
          <p>Shop by category</p>
        </div>
        <div lassName="jewelry__section-category">
          <div lassName="jewelry__section-links">
            <Link to="/handmade/jewelry" className="jewelry__section-link">
              <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_bracelet_B078XMCLDJ._CB465207803_.jpg" alt="jewelry" />
            </Link>
            <p>Bracelets</p>
          </div>
          <div lassName="jewelry__section-links">
            <Link to="/handmade/jewelry" className="jewelry__section-link">
              <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_necklace_B07GLVT1XK._CB465208267_.jpg" alt="jewelry" />
            </Link>
            <p>Neckalces</p>
          </div>
          <div lassName="jewelry__section-links">
            <Link to="/handmade/jewelry" className="jewelry__section-link">
              <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_earrings_B07P9CQ59Q._CB465210778_.jpg" alt="jewelry" />
            </Link>
            <p>Earrings</p>
          </div>
          <div lassName="jewelry__section-links">
            <Link to="/handmade/jewelry" className="jewelry__section-link">
              <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_rings_BO7JNV5NFH._CB465210543_.jpg" alt="jewelry" />
            </Link>
            <p>Rigns</p>
          </div>
          <div lassName="jewelry__section-links">
            <Link to="/handmade/jewelry" className="jewelry__section-link">
              <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_pin_B07D7ZZS3Z._CB465209801_.jpg" alt="jewelry" />
            </Link>
            <p>Pins, Buttons & Brooches</p>
          </div>
          <div lassName="jewelry__section-links">
            <Link to="/handmade/jewelry" className="jewelry__section-link">
              <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_engagement_rings_B07L769FYK._CB465209356_.jpg" alt="jewelry" />
            </Link>
            <p>Wedding & Engagement Rings</p>
          </div>
          <div lassName="jewelry__section-links">
            <Link to="/handmade/jewelry" className="jewelry__section-link">
              <img src="https://images-na.ssl-images-amazon.com/images/I/81C27wYz%2BiL._SL1500_.jpg" alt="jewelry" />
            </Link>
            <p>Cufflinks, Shirt & Accessories</p>
          </div>
          <div lassName="jewelry__section-links">
            <Link to="/handmade/jewelry" className="jewelry__section-link">
              <img src="https://images-na.ssl-images-amazon.com/images/I/51Llz3ibR6L.jpg" alt="jewelry" />
            </Link>
            <p>Watches</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClothingJewelry;
