import React from 'react';
import { Link } from 'react-router-dom';
import './styles/HomePageStyles.scss';

function TwoProductTemplate({pathOne, pathTwo, imageOne, titleOne, imageTwo, titleTwo, priceOne, priceTwo}) {
  return (
    <div className="two-product-template__container">
      <div className="two-product-template__helper">
        <Link to={pathOne} className="two-product-template__box-one">
          <div className="two-product-template__img">
            <img src={imageOne} alt="two-product-template-categories" />
          </div>
          <div className="two-product-template__title">
            <p>{titleOne}</p>
            <p>$ {priceOne}</p>
          </div>
        </Link>
        <Link to={pathTwo} className="two-product-template__box-one">
          <div  className="two-product-template__img">
            <img src={imageTwo} alt="two-product-template-categories" />
          </div>
          <div  className="two-product-template__title">
            <p>{titleTwo}</p>
            <p>$ {priceTwo}</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default TwoProductTemplate
