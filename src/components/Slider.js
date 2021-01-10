import React, {useState} from 'react';
import ImgComp from './ImgComp';
import './slider.scss';

function Slider() {
  let sliderArr = [
    <ImgComp src={'https://images.pexels.com/photos/5625005/pexels-photo-5625005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} title="Electronics" />,
    <ImgComp src={'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} title="Computer"  />,
    <ImgComp src={''} title="Home, Garden & Tools" />,
    <ImgComp src={''} title="Pet Supplies" />,
    <ImgComp src={''} title="Outdoors" />,
    <ImgComp src={''} title="Smart Home" />,
    <ImgComp src={''} title="Food & Grocery" />,
    <ImgComp src={''} title="Beauty & Health" />,
    <ImgComp src={''} title="Toys, Kids & Baby" />,
    <ImgComp src={''} title="Handmade" />,
    <ImgComp src={''} title="Sports" />,
    <ImgComp src={''} title="Automotive & Industrial" />,
  ]
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };
  return (
    <div className="slider">
      {
        sliderArr.map((item, index) => {
          return (
            <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
              {item}
            </div>
          );
        })
      }
      <button id="goLeft" onClick={goLeft}><i class="fas fa-chevron-left"></i></button>
      <button id="goRight" onClick={goRight}><i class="fas fa-chevron-right"></i></button>
    </div>
  )
}

export default Slider;
