import React, {useState} from 'react';
import HomeSlider from './HomeSlider';
import './slider.scss';

import ElectronicsLogo from './logo/categoryLogos/plug.svg';
import ComputerLogo from './logo/categoryLogos/desktop.svg';
import SmartHomeLogo from './logo/categoryLogos/toolbox.svg';
import HomeGardenToolsLogo from './logo/categoryLogos/toolbox.svg';
import PetSuppliesLogo from './logo/categoryLogos/pet-supplies.svg';
import FoodGroceryLogo from './logo/categoryLogos/groceries2.svg';
import BeautyHealthLogo from './logo/categoryLogos/makeover.svg';
import ToyKidsBabyLogo from './logo/categoryLogos/boy.svg';
import HandmadeLogo from './logo/categoryLogos/handmade.svg';
import SportsLogo from './logo/categoryLogos/sports.svg';
import OutdoorsLogo from './logo/categoryLogos/tourism.svg';
import AutomotiveLogo from './logo/categoryLogos/data-analysis.svg';
// import AutomotiveLogo from './logo/categoryLogos/.svg';
// import AutomotiveLogo from './logo/categoryLogos/.svg';
// import AutomotiveLogo from './logo/categoryLogos/.svg';
// import AutomotiveLogo from './logo/categoryLogos/.svg';
// import AutomotiveLogo from './logo/categoryLogos/.svg';


function Slider() {
  let sliderArr = [
    <HomeSlider 
      src={ElectronicsLogo} 
      title="Electronics" 
      descOne = "desc one here"
      descTwo="desc two here"
      descThree="desc three here"
      descFour="desc four here"
      descOneImg= "https://www.flaticon.com/premium-icon/icons/svg/2681/2681706.svg"
      descTwoImg= "https://www.flaticon.com/premium-icon/icons/svg/2931/2931940.svg"
      descThreeImg= "https://www.flaticon.com/svg/vstatic/svg/4107/4107747.svg?token=exp=1611430464~hmac=c418300ca5c38e993de55ad0ad272372"
      descFourImg= "https://www.flaticon.com/svg/vstatic/svg/3662/3662920.svg?token=exp=1611430500~hmac=088d934d9215b9a369fba0a99f52898f"
    />,
    <HomeSlider 
      src={ComputerLogo} 
      title="Computers"  
      descOne="desc one here"
      descTwo="desc two here"
      descThree="desc three here"
      descFour="desc four here"
      descOneImg= "https://www.flaticon.com/svg/vstatic/svg/900/900618.svg?token=exp=1611430228~hmac=106c9e4a9aaa3cec6bf95b9cf911f336"
      descTwoImg= "https://www.flaticon.com/premium-icon/icons/svg/1615/1615995.svg"
      descThreeImg = ""
      descFourImg = ""
    />,
    <HomeSlider 
      src={HomeGardenToolsLogo} 
      title="Home, Garden & Tools" 
      descOne="desc one here"
      descTwo="desc two here"
      descThree="desc three here"
      descFour="desc four here"
      descOneImg= "https://www.flaticon.com/svg/vstatic/svg/1261/1261143.svg?token=exp=1611430228~hmac=17a89a190097a1f92bc7612cad73bffc"
      descTwoImg = ""
      descThreeImg = ""
      descFourImg = ""
    />,
    <HomeSlider 
      src={PetSuppliesLogo} 
      title="Pet Supplies" 
      descOne="desc one here"
      descTwo="desc two here"
      descThree="desc three here"
      descFour="desc four here"
      descOneImg= "https://www.flaticon.com/svg/vstatic/svg/3205/3205374.svg?token=exp=1611429755~hmac=03c7274b8e2722e8ecca9f2f3593f1c7"
      descTwoImg="https://www.flaticon.com/svg/vstatic/svg/2965/2965385.svg?token=exp=1611429755~hmac=1d2f197aeaec28efbd14542d9cc49ebf"
      descThreeImg="https://www.flaticon.com/svg/vstatic/svg/3969/3969815.svg?token=exp=1611429755~hmac=a6ed70cf044989a33d09e0abb8d39035"
      descFourImg="https://www.flaticon.com/premium-icon/icons/svg/2681/2681675.svg" 
    />,
    <HomeSlider 
      src={OutdoorsLogo} 
      title="Outdoors" 
      descOne="desc one here"
      descTwo="desc two here"
      descThree="desc three here"
      descFour="desc four here"
      descOneImg = ""
      descTwoImg=""
      descThreeImg=""
      descFourImg="" 
    />,
    <HomeSlider 
      src={SmartHomeLogo} 
      title="Smart Home" 
      descOne="desc one here"
      descTwo="desc two here"
      descThree="desc three here"
      descFour="desc four here"
      descOneImg = ""
      descTwoImg=""
      descThreeImg=""
      descFourImg="" 
    />,
    <HomeSlider 
      src={FoodGroceryLogo} 
      title="Food & Grocery" 
      descOne="desc one here"
      descTwo="desc two here"
      descThree="desc three here"
      descFour="desc four here"
      descOneImg = ""
      descTwoImg=""
      descThreeImg=""
      descFourImg="" 
    />,
    <HomeSlider 
      src={BeautyHealthLogo} 
      title="Beauty & Health" 
      descOne="desc one here"
      descTwo="desc two here"
      descThree="desc three here"
      descFour="desc four here"
      descOneImg = ""
      descTwoImg=""
      descThreeImg=""
      descFourImg="" 
    />,
    <HomeSlider 
      src={ToyKidsBabyLogo} 
      title="Toys, Kids & Baby" 
      descOne="desc one here"
      descTwo="desc two here"
      descThree="desc three here"
      descFour="desc four here"
      descOneImg = ""
      descTwoImg=""
      descThreeImg=""
      descFourImg="" 
    />,
    <HomeSlider 
      src={HandmadeLogo} 
      title="Handmade" 
      descOne="desc one here"
      descTwo="desc two here"
      descThree="desc three here"
      descFour="desc four here"
      descOneImg = ""
      descTwoImg=""
      descThreeImg=""
      descFourImg="" 
    />,
    <HomeSlider 
      src={SportsLogo} 
      title="Sports" 
      descOne="desc one here"
      descTwo="desc two here"
      descThree="desc three here"
      descFour="desc four here"
      descOneImg = ""
      descTwoImg=""
      descThreeImg=""
      descFourImg="" 
    />,
    <HomeSlider 
      src={AutomotiveLogo} 
      title="Automotive & Industrial" 
      descOne="desc one here"
      descTwo="desc two here"
      descThree="desc three here"
      descFour="desc four here"
      descOneImg = ""
      descTwoImg=""
      descThreeImg=""
      descFourImg="" 
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
