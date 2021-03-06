import React from 'react';
import {Link} from 'react-router-dom';
import './slider.scss';

function HomeSlider({ 
  src, 
  title, 
  descOne, 
  descTwo, 
  descThree, 
  descFour, 
  descOneImg, 
  descTwoImg, 
  descThreeImg, 
  descFourImg, 
  descPathOne,
  descPathTwo,
  descPathThree,
  descPathFour,
  }) {
  return (
    <div className="home-slider__container">
      <div className="home-slider__left-container">
        <div className="home-slider__img">
          {/* <img src={src} alt="slide-img" /> */}
        </div>
        <div className="home-slider__heading">
          <p>{title}</p>
        </div>
        {/* <div>
          <p>Popular Pick's</p>
        </div> */}
      </div>
      <div className="home-slider__right-container">
        <Link to={descPathOne} className="home-slider__right-desc-one">
          <div className="home-slider__right-desc-one-img">
            <img src={descOneImg} alt="desc-one-img" />
          </div>
          {/* <div className="home-slider__right-desc-title">
            <p>{descOne}</p>
          </div> */}
        </Link>
        <Link to={descPathTwo} className="home-slider__right-desc-two">
          <div className="home-slider__right-desc-one-img">
            <img src={descTwoImg} alt="desc-one-img" />
            {/* <p>{descTwo}</p> */}
          </div>
          {/* <div className="home-slider__right-desc-title">
            <p>{descTwo}</p>
          </div> */}
        </Link>
        <Link to={descPathThree} className="home-slider__right-desc-three">
          <div className="home-slider__right-desc-one-img">
            <img src={descThreeImg} alt="desc-one-img" />
            {/* <p>{descThree}</p> */}
          </div>
          {/* <div className="home-slider__right-desc-title">
            <p>{descThree}</p>
          </div> */}
        </Link>
        <Link to={descPathFour} className="home-slider__right-desc-four">
          <div className="home-slider__right-desc-one-img">
            <img src={descFourImg} alt="desc-one-img" />
            {/* <p>{descFour}</p> */}
          </div>
          {/* <div className="home-slider__right-desc-title">
            <p>{descFour}</p>
          </div> */}
        </Link>
        {/* <div className="home-slider__right-desc-three">
          <p>{descThree}</p>
        </div>
        <div className="home-slider__right-desc-four">
          <p>{descFour}</p>
        </div> */}
      </div>
    </div>
  )
}

export default HomeSlider;
