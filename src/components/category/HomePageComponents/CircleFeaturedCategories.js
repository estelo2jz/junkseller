import React from 'react';
import { Link } from 'react-router-dom';
import './styles/HomePageStyles.scss';

function CircleFeaturedCategories({path, image, title}) {
  return (
    <Link to={path} className="circle-featured__container">
      <div  className="circle-featured__img">
        <img src={image} alt="circle-featured" />
      </div>
      <div  className="circle-featured__title">
        <p>{title}</p>
      </div>
    </Link>
  )
}

export default CircleFeaturedCategories
