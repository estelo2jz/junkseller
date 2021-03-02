import React from 'react'
import { Link } from 'react-router-dom';
import './styles/HomePageStyles.scss';

function FirstFeaturedProduct({path, image}) {
  return (
    <Link to={path} className="first-featured-product__container">
      <div className="first-featured-product__img">
        <img src={image} alt="featured-product" />
      </div>
    </Link>
  )
}

export default FirstFeaturedProduct
