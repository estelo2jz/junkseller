import React from 'react';
import { Link } from 'react-router-dom';
import './styles/HomePageStyles.scss';

function MultiSqaure({pathOne, pathTwo, pathThree, pathFour, imageOne, titleOne, imageTwo, titleTwo, imageThree, titleThree, imageFour, titleFour}) {
  return (
    <div className="multi-sqaure__container">
      <div className="multi-sqaure__helper">
        <Link to={pathOne} className="multi-sqaure__box-one">
          <div className="multi-sqaure__img">
            <img src={imageOne} alt="multi-sqaure-categories" />
          </div>
          <div className="multi-sqaure__title">
            <p>{titleOne}</p>
          </div>
        </Link>
        <Link to={pathTwo} className="multi-sqaure__box-one">
          <div  className="multi-sqaure__img">
            <img src={imageTwo} alt="multi-sqaure-categories" />
          </div>
          <div  className="multi-sqaure__title">
            <p>{titleTwo}</p>
          </div>
        </Link>
        <Link to={pathThree} className="multi-sqaure__box-one">
          <div  className="multi-sqaure__img">
            <img src={imageThree} alt="multi-sqaure-categories" />
          </div>
          <div  className="multi-sqaure__title">
            <p>{titleThree}</p>
          </div>
        </Link>
        <Link to={pathFour} className="multi-sqaure__box-one">
          <div  className="multi-sqaure__img">
            <img src={imageFour} alt="multi-sqaure-categories" />
          </div>
          <div  className="multi-sqaure__title">
            <p>{titleFour}</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default MultiSqaure
