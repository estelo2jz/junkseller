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
      src={'https://images.pexels.com/photos/5625005/pexels-photo-5625005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} 
      title="Computer"  
    />,
    <HomeSlider 
      src={'https://images.pexels.com/photos/5625005/pexels-photo-5625005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} 
      title="Home, Garden & Tools" 
    />,
    <HomeSlider 
      src={'https://images.pexels.com/photos/5625005/pexels-photo-5625005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} 
      title="Pet Supplies" 
    />,
    <HomeSlider 
      src={'https://images.pexels.com/photos/5625005/pexels-photo-5625005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} 
      title="Outdoors" 
    />,
    <HomeSlider 
      src={'https://images.pexels.com/photos/5625005/pexels-photo-5625005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} 
      title="Smart Home" 
    />,
    <HomeSlider 
      src={'https://images.pexels.com/photos/5625005/pexels-photo-5625005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} 
      title="Food & Grocery" 
    />,
    <HomeSlider 
      src={'https://images.pexels.com/photos/5625005/pexels-photo-5625005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} 
      title="Beauty & Health" 
    />,
    <HomeSlider 
      src={'https://images.pexels.com/photos/5625005/pexels-photo-5625005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} 
      title="Toys, Kids & Baby" 
    />,
    <HomeSlider 
      src={'https://images.pexels.com/photos/5625005/pexels-photo-5625005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} 
      title="Handmade" 
    />,
    <HomeSlider 
      src={'https://images.pexels.com/photos/5625005/pexels-photo-5625005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} 
      title="Sports" 
    />,
    <HomeSlider 
      src={'https://images.pexels.com/photos/5625005/pexels-photo-5625005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} 
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
                <span>
                  {item}
                </span>
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
