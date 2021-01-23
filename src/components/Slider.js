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
      descOneImg= "https://www.flaticon.com/svg/vstatic/svg/4108/4108514.svg?token=exp=1611430976~hmac=12be04cd99da87a88a1275e2538c99fd"
      descTwoImg= "https://www.flaticon.com/svg/vstatic/svg/3869/3869979.svg?token=exp=1611431029~hmac=13d57eafd2a8f80c034ae500f501e406"
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
      descTwoImg= "https://www.flaticon.com/svg/vstatic/svg/100/100310.svg?token=exp=1611430823~hmac=23c1ade544cdb9a91e0cc75310be1aba"
      descThreeImg= "https://www.flaticon.com/svg/vstatic/svg/33/33272.svg?token=exp=1611430823~hmac=98465532c94b66875aadefbb78d6fa8e"
      descFourImg= "https://www.flaticon.com/svg/vstatic/svg/3501/3501039.svg?token=exp=1611430823~hmac=b55161812c7cd1aaeb0c8b193621754d"
    />,
    <HomeSlider 
      src={HomeGardenToolsLogo} 
      title="Home, Garden & Tools" 
      descOne="desc one here"
      descTwo="desc two here"
      descThree="desc three here"
      descFour="desc four here"
      descOneImg= "https://www.flaticon.com/svg/vstatic/svg/1261/1261143.svg?token=exp=1611430228~hmac=17a89a190097a1f92bc7612cad73bffc"
      descTwoImg= "https://www.flaticon.com/svg/vstatic/svg/601/601964.svg?token=exp=1611431078~hmac=14b013dda0c3829e5d4dc7417f5c7eef"
      descThreeImg= "https://www.flaticon.com/svg/vstatic/svg/1571/1571626.svg?token=exp=1611431078~hmac=7e5457cd69ff83147256787c83b0b291"
      descFourImg= "https://www.flaticon.com/svg/vstatic/svg/3749/3749704.svg?token=exp=1611431173~hmac=afff715add351d6c39b3289ab8e28426"
    />,
    <HomeSlider 
      src={PetSuppliesLogo} 
      title="Pet Supplies" 
      descOne="desc one here"
      descTwo="desc two here"
      descThree="desc three here"
      descFour="desc four here"
      descOneImg= "https://www.flaticon.com/svg/vstatic/svg/3736/3736727.svg?token=exp=1611431436~hmac=22e12c20cad9980a3a00e223bfbdb82c"
      descTwoImg="https://www.flaticon.com/svg/vstatic/svg/2809/2809814.svg?token=exp=1611431315~hmac=bfbd553f026da6e56f075c0925b20eb0"
      descThreeImg="https://www.flaticon.com/svg/vstatic/svg/3744/3744606.svg?token=exp=1611431498~hmac=39d1dfba2b9f4b5e2dca1b5dfbdff750"
      descFourImg="https://www.flaticon.com/svg/vstatic/svg/3050/3050205.svg?token=exp=1611431498~hmac=58c0bee0f96cb0684034613990aec3f2" 
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
