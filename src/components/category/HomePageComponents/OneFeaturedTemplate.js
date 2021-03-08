import React from 'react';
import { Link } from 'react-router-dom';
import './styles/HomePageStyles.scss';

function OneFeatured({heading, moreInfo, path, image, title}) {
  return (
    <Link to={path} className="one-featured__container">
      <div className="one-featured__helper">
        <div className="one-featured__heading">
          <p>{heading}</p>
        </div>
        <div  className="one-featured__img">
          <img src={image} alt="featured" />
        </div>
        <div className="one-featured__more">
          <Link to="/">
            <p>{moreInfo}</p>
          </Link>
        </div>
      </div>
    </Link>
  )
}

export default OneFeatured
