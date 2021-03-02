import React from 'react'
import { Link } from 'react-router-dom';
import './styles/HomePageStyles.scss';

function SecondFeaturedProduct({path, image}) {
  return (
    <Link to={path} className="second-featured-product__container">
      <div className="second-featured-product__img">
        <img src={image} alt="featured-product" />
      </div>
    </Link>
  )
}

export default SecondFeaturedProduct
