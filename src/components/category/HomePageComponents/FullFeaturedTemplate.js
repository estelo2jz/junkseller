import React from 'react';
import { Link } from 'react-router-dom';
import './styles/HomePageStyles.scss';

function FullFeatured({heading, moreInfo,pathOne, pathTwo, pathThree, pathFour, imageOne, titleOne, imageTwo, titleTwo, imageThree, titleThree, imageFour, titleFour}) {
  return (
    <div className="full-featured__container">
      <div className="full-featured__heading">
        <p>{heading}</p>
      </div>
      <div className="full-featured__helper">
        <Link to={pathOne} className="full-featured__box-one">
          <div className="full-featured__img">
            <img src={imageOne} alt="full-featured-categories" />
          </div>
          <div className="full-featured__title">
            <p>{titleOne}</p>
          </div>
        </Link>
        <Link to={pathTwo} className="full-featured__box-one">
          <div  className="full-featured__img">
            <img src={imageTwo} alt="full-featured-categories" />
          </div>
          <div  className="full-featured__title">
            <p>{titleTwo}</p>
          </div>
        </Link>
        <Link to={pathThree} className="full-featured__box-one">
          <div  className="full-featured__img">
            <img src={imageThree} alt="full-featured-categories" />
          </div>
          <div  className="full-featured__title">
            <p>{titleThree}</p>
          </div>
        </Link>
        <Link to={pathFour} className="full-featured__box-one">
          <div  className="full-featured__img">
            <img src={imageFour} alt="full-featured-categories" />
          </div>
          <div  className="full-featured__title">
            <p>{titleFour}</p>
          </div>
        </Link>
      </div>
      <div className="full-featured__more">
        <Link to="/">
          <p>{moreInfo}</p>
        </Link>
      </div>
    </div>
  )
}

export default FullFeatured
