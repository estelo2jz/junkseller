import React from 'react';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/ClothingShoes.scss';

function ClothingShoes() {
  return (
    <div className="clothing-shoes__container">
      <div className="clothing-shoes__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
          </p>
        </Link>
        <p>/clothing&shoes</p>
      </div>
      <div className="clothing-shoes__section-outer">
        <div className="clothing-shoes__section-category">
          <div className="clothing-shoes__section-links">
            <Link to="/handmade/clothing&shoes">
              <img src="https://images-na.ssl-images-amazon.com/images/I/71XnpLa%2BCcL._SY500_.jpg" alt="clothing-shoes" />
            </Link>
            <p>Women</p>
          </div>
          <div className="clothing-shoes__section-links">
            <Link to="/handmade/clothing&shoes">
              <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_clothing._CB463969227_.jpg" alt="clothing-shoes" />
            </Link>
            <p>Men</p>
          </div>
          <div className="clothing-shoes__section-links">
            <Link to="/handmade/clothing&shoes">
              <img src="https://images-na.ssl-images-amazon.com/images/I/91UbVTEvLhL._SY500_.jpg" alt="clothing-shoes" />
            </Link>
            <p>Accessories</p>
          </div>
          <div className="clothing-shoes__section-links">
            <Link to="/handmade/clothing&shoes">
              <img src="https://images-na.ssl-images-amazon.com/images/I/612m5REyWVL.jpg" alt="clothing-shoes" />
            </Link>
            <p>Shoes</p>
          </div>
          <div className="clothing-shoes__section-links">
            <Link to="/handmade/clothing&shoes">
              <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_clothgirls._CB463974842_.jpg" alt="clothing-shoes" />
            </Link>
            <p>Girls</p>
          </div>
          <div className="clothing-shoes__section-links">
            <Link to="/handmade/clothing&shoes">
              <img src="https://images-na.ssl-images-amazon.com/images/I/61l-5-yVh9L._SY500_.jpg" alt="clothing-shoes" />
            </Link>
            <p>Boys</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClothingShoes
