import React, {useState} from 'react';
import HomeSlider from './HomeSlider';
import './slider.scss';

function Slider() {
  let sliderArr = [
    <HomeSlider 
      src={'https://images.pexels.com/photos/5625005/pexels-photo-5625005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} 
      title="Electronics" 
      descOne = "desc one here"
      descTwo="desc two here"
      descThree="desc three here"
      descFour="desc four here"
    />,
    <HomeSlider 
      src={'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} 
      title="Computer"  
    />,
    <HomeSlider 
      src={'https://images.pexels.com/photos/399161/pexels-photo-399161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} 
      title="Home, Garden & Tools" 
    />,
    <HomeSlider 
      src={'https://images.pexels.com/photos/3808904/pexels-photo-3808904.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} 
      title="Pet Supplies" 
    />,
    <HomeSlider 
      src={'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} 
      title="Outdoors" 
    />,
    <HomeSlider 
      src={'https://images.pexels.com/photos/843266/pexels-photo-843266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} 
      title="Smart Home" 
    />,
    <HomeSlider 
      src={'https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} 
      title="Food & Grocery" 
    />,
    <HomeSlider 
      src={'https://images.pexels.com/photos/1203819/pexels-photo-1203819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} 
      title="Beauty & Health" 
    />,
    <HomeSlider 
      src={'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} 
      title="Toys, Kids & Baby" 
    />,
    <HomeSlider 
      src={'https://images.pexels.com/photos/593323/pexels-photo-593323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} 
      title="Handmade" 
    />,
    <HomeSlider 
      src={'https://images.pexels.com/photos/4482936/pexels-photo-4482936.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} 
      title="Sports" 
    />,
    <HomeSlider 
      src={'https://images.pexels.com/photos/983831/pexels-photo-983831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} 
      title="Automotive & Industrial" 
      desc="hello" 
    />,
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
              <div className="slider__left-container">
                <span>
                  {item}
                </span>
              </div>
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
