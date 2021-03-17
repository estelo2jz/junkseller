import React from 'react';
import { Link } from 'react-router-dom';

function FourSqaureTemplate({pathOne, pathTwo, pathThree, pathFour, imageOne, imageTwo, imageThree, imageFour}) {
  return (
    <div className="four-sqaure__container">
      <Link to={pathOne} className="four-sqaure__link-container">
        <img src={imageOne} alt="four-sqaure-temaplate" />
      </Link>
      <Link to={pathTwo} className="four-sqaure__link-container">
        <img src={imageTwo} alt="four-sqaure-temaplate" />
      </Link>
      <Link to={pathThree} className="four-sqaure__link-container">
        <img src={imageThree} alt="four-sqaure-temaplate" />
      </Link>
      <Link to={pathFour} className="four-sqaure__link-container">
        <img src={imageFour} alt="four-sqaure-temaplate" />
      </Link>
    </div>
  )
}

export default FourSqaureTemplate
