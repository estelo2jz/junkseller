import React from 'react';
import { Link } from 'react-router-dom';
import './styles/HomePageStyles.scss';

function FullScreenFeaturedCategories({path, image, title}) {
  return (
    <Link to={path} className="full-screen-featured__container">
      <div  className="full-screen-featured__img">
        <img src={image} alt="full-screen-featured" />
      </div>
      {/* <div  className="full-screen-featured__title">
        <p>{title}</p>
      </div> */}
    </Link>
  )
}

export default FullScreenFeaturedCategories
