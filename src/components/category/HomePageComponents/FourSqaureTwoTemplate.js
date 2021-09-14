import React from 'react';
import { Link } from 'react-router-dom';

function FourSqaureTwoTemplate({pathOne, pathTwo, pathThree, pathFour, imageOne, imageTwo, imageThree, imageFour}) {
  return (
    <div className="four-sqaure-two__outer">
      <div>
        {/* <p>hello</p> */}
      </div>
      <div className="four-sqaure-two__container">
        <Link to={pathOne} className="four-sqaure-two__link-container">
          <img src={imageOne} alt="four-sqaure-two-temaplate" />
        </Link>
        <Link to={pathTwo} className="four-sqaure-two__link-container">
          <img src={imageTwo} alt="four-sqaure-two-temaplate" />
        </Link>
        <Link to={pathThree} className="four-sqaure-two__link-container">
          <img src={imageThree} alt="four-sqaure-two-temaplate" />
        </Link>
        <Link to={pathFour} className="four-sqaure-two__link-container">
          <img src={imageFour} alt="four-sqaure-two-temaplate" />
        </Link>
      </div>
    </div>
  )
}

export default FourSqaureTwoTemplate
