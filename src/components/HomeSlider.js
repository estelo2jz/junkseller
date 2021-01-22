import React from 'react';
import './slider.scss';

function HomeSlider({ src, title, descOne, descTwo, descThree, descFour}) {
  return (
    <div className="home-slider__container">
      <div className="home-slider__left-container">
        <div className="home-slider__img">
          <img src={src} alt="slide-img" />
        </div>
        <div className="home-slider__heading">
          <p>{title}</p>
        </div>
      </div>
      <div className="home-slider__right-container">
        <div className="home-slider__right-desc-one">
         <p>{descOne}</p>
        </div>
        <div className="home-slider__right-desc-two">
          <p>{descTwo}</p>
        </div>
        <div className="home-slider__right-desc-three">
          <p>{descThree}</p>
        </div>
        <div className="home-slider__right-desc-four">
          <p>{descFour}</p>
        </div>
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
