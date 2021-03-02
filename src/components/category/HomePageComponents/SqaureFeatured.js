import React from 'react';
import { Link } from 'react-router-dom';
import './styles/HomePageStyles.scss';

function SqaureFeatured({path, image, title}) {
  return (
    <Link to={path} className="sqaure-featured__container">
      <div  className="sqaure-featured__img">
        <img src={image} alt="featured" />
      </div>
      <div  className="sqaure-featured__title">
        <p>{title}</p>
      </div>
    </Link>
  )
}

export default SqaureFeatured
