import React from 'react';
import './slider.scss';

function HomeSlider({ src, title, descOne, descTwo, descThree, descFour, descOneImg, descTwoImg, descThreeImg, descFourImg}) {
  return (
    <div className="home-slider__container">
      <div className="home-slider__left-container">
        <div className="home-slider__img">
          <img src={src} alt="slide-img" />
        </div>
        <div className="home-slider__heading">
          <p>{title}</p>
        </div>
        {/* <div>
          <p>Popular Pick's</p>
        </div> */}
      </div>
      <div className="home-slider__right-container">
        <div className="home-slider__right-desc-one">
          <div className="home-slider__right-desc-one-img">
            <img src={descOneImg} alt="desc-one-img" />
            {/* <p>{descOne}</p> */}
          </div>
        </div>
        <div className="home-slider__right-desc-two">
          <div className="home-slider__right-desc-one-img">
            <img src={descTwoImg} alt="desc-one-img" />
            {/* <p>{descTwo}</p> */}
          </div>
        </div>
        <div className="home-slider__right-desc-three">
          <div className="home-slider__right-desc-one-img">
            <img src={descThreeImg} alt="desc-one-img" />
            {/* <p>{descThree}</p> */}
          </div>
        </div>
        <div className="home-slider__right-desc-four">
          <div className="home-slider__right-desc-one-img">
            <img src={descFourImg} alt="desc-one-img" />
            {/* <p>{descFour}</p> */}
          </div>
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
