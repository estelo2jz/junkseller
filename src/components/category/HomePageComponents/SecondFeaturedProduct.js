import React from 'react'
import { Link } from 'react-router-dom';
import './styles/HomePageStyles.scss';

function SecondFeaturedProduct({path, image, title}) {
  return (
    <Link to={path} className="second-featured-product__container">
      <div className="second-featured-product__img">
        <img src={image} alt="featured-product" />
      </div>
      <div className="second-featured-product__title">
        <p>{title}</p>
      </div>
    </Link>
  )
}

export default SecondFeaturedProduct
