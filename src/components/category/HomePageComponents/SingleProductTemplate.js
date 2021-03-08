import React from 'react'
import { Link } from 'react-router-dom';
import './styles/HomePageStyles.scss';

function SingleProductTemplate({path, image, title, price, originalPrice}) {
  return (
    <Link to={path} className="single-product__container">
      <div className="single-product__img">
        <img src={image} alt="featured-product" />
      </div>
      <div className="single-product__price">
        <p>${price}</p>
        <p>${originalPrice}</p>
      </div>
      <div className="single-product__title">
        <p>{title}</p>
      </div>
    </Link>
  )
}

export default SingleProductTemplate
