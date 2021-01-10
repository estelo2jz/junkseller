import React from 'react';
import './slider.scss';

function ImgComp({ src, title}) {
  let imgStyles = {
    width: 100 + "%",
    height: "auto",
    backgroundPosition: "center",
    backgroundSize: "100% 100%",
    }
  return (
    <div className="img-comp__container">
      <div className="img-comp__img">
        <img src={src} alt="slide-img" style={imgStyles} />
      </div>
    </div>
  )
}

export default ImgComp;
