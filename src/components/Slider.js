import React, {useState} from 'react';
import HomeSlider from './HomeSlider';
import './slider.scss';

import ElectronicsLogo from './logo/categoryLogos/plug.svg';
import ComputerLogo from './logo/categoryLogos/desktop.svg';

import ElectricLogo1 from './logo/subLogos/tv.svg';
import ElectricLogo2 from './logo/subLogos/ecamera.svg';
import ElectricLogo3 from './logo/subLogos/ewatch.svg';
import ElectricLogo4 from './logo/subLogos/egames.svg';
import ComputerLogo1 from './logo/subLogos/ccomputers.svg';
import ComputerLogo2 from './logo/subLogos/cgpu.svg';
import ComputerLogo3 from './logo/subLogos/charddrives.svg';
import ComputerLogo4 from './logo/subLogos/cprinters.svg';

function Slider() {
  let sliderArr = [
    <HomeSlider 
      src={ElectronicsLogo} 
      title="Electronics & Computers" 
      descOne = "TVs"
      descTwo="Cameras"
      descThree="Wearable Technology"
      descFour="Video Games"
      descOneImg= {ElectricLogo1}
      descTwoImg={ElectricLogo2}
      descThreeImg={ElectricLogo3}
      descFourImg={ElectricLogo4}
      descPathOne= "/electronics/tvvideo"
      descPathTwo="/electronics/cameraphotovideo"
      descPathThree="/electronics/wearabletechnology"
      descPathFour="/electronics/videogames"
    />,
    <HomeSlider 
      src={ComputerLogo} 
      title="Clothing & Jewelry"  
      descOne="Computers"
      descTwo="Components"
      descThree="Hard Drives"
      descFour="Printers"
      descOneImg={ComputerLogo1}
      descTwoImg={ComputerLogo2}
      descThreeImg={ComputerLogo3}
      descFourImg={ComputerLogo4}
      descPathOne= "/computers/computercomponents"
      descPathTwo="/computers/computercomponents"
      descPathThree="/computers/computercomponents"
      descPathFour="/computers/computercomponents"
    />,
    // <HomeSlider 
    //   src={HomeGardenToolsLogo} 
    //   title="Home, Garden & Tools" 
    //   descOne="Decor"
    //   descTwo="Appliances"
    //   descThree="Bath"
    //   descFour="Sewing"
    //   descOneImg={HomeGardenToolsLogo1}
    //   descTwoImg={HomeGardenToolsLogo2}
    //   descThreeImg={HomeGardenToolsLogo3}
    //   descFourImg={HomeGardenToolsLogo4}
    //   descPathOne = ""
    //   descPathTwo = ""
    //   descPathThree = ""
    //   descPathFour = ""
    // />,
    // <HomeSlider 
    //   src={PetSuppliesLogo} 
    //   title="Pet Supplies" 
    //   descOne="Pet Profiles"
    //   descTwo="Dog Food"
    //   descThree="Aquatic Pets"
    //   descFour="Birds"
    //   descOneImg={PetSuppliesLogo1}
    //   descTwoImg={PetSuppliesLogo2}
    //   descThreeImg={PetSuppliesLogo3}
    //   descFourImg={PetSuppliesLogo4} 
    //   descPathOne=""
    //   descPathTwo=""
    //   descPathThree=""
    //   descPathFour=""
    // />,
    // <HomeSlider 
    //   src={OutdoorsLogo} 
    //   title="Outdoors" 
    //   descOne="Cycling"
    //   descTwo="Camping"
    //   descThree="Scooters"
    //   descFour="Climbing"
    //   descOneImg={OutdoorsLogo1}
    //   descTwoImg={OutdoorsLogo2}
    //   descThreeImg={OutdoorsLogo3}
    //   descFourImg={OutdoorsLogo4}
    //   descPathOne = ""
    //   descPathTwo = ""
    //   descPathThree = ""
    //   descPathFour = ""
    // />,
    // <HomeSlider 
    //   src={SmartHomeLogo} 
    //   title="Smart Home" 
    //   descOne="Smart Locks"
    //   descTwo="Security Camera"
    //   descThree="Vacuum"
    //   descFour="Smart Lighting"
    //   descOneImg={SmartHomeLogo1}
    //   descTwoImg={SmartHomeLogo2}
    //   descThreeImg={SmartHomeLogo3}
    //   descFourImg={SmartHomeLogo4}
    //   descPathOne = ""
    //   descPathTwo = ""
    //   descPathThree = ""
    //   descPathFour = ""
    // />,
    // <HomeSlider 
    //   src={FoodGroceryLogo} 
    //   title="Food & Grocery" 
    //   descOne="Gourmet"
    //   descTwo="Fresh"
    //   descThree="Pantry"
    //   descFour="Grocery"
    //   descOneImg={FoodGroceryLogo1}
    //   descTwoImg={FoodGroceryLogo2}
    //   descThreeImg={FoodGroceryLogo3}
    //   descFourImg={FoodGroceryLogo4}
    //   descPathOne = ""
    //   descPathTwo = ""
    //   descPathThree = ""
    //   descPathFour = ""
    // />,
    // <HomeSlider 
    //   src={BeautyHealthLogo} 
    //   title="Beauty & Health" 
    //   descOne="Premium Beauty"
    //   descTwo="Dietary Supplements"
    //   descThree="Men's Grooming"
    //   descFour="Skin Care"
    //   descOneImg={BeautyHealthLogo1}
    //   descTwoImg={BeautyHealthLogo2}
    //   descThreeImg={BeautyHealthLogo3}
    //   descFourImg={BeautyHealthLogo4}
    //   descPathOne = ""
    //   descPathTwo = ""
    //   descPathThree = ""
    //   descPathFour = ""
    // />,
    // <HomeSlider 
    //   src={ToyKidsBabyLogo} 
    //   title="Toys, Kids & Baby" 
    //   descOne="Baby"
    //   descTwo="Kids Birthdays"
    //   descThree="Teen"
    //   descFour="Family"
    //   descOneImg={ToyKidsBabyLogo1}
    //   descTwoImg={ToyKidsBabyLogo2}
    //   descThreeImg={ToyKidsBabyLogo3}
    //   descFourImg={ToyKidsBabyLogo4}
    //   descPathOne = ""
    //   descPathTwo = ""
    //   descPathThree = ""
    //   descPathFour = ""
    // />,
    // <HomeSlider 
    //   src={HandmadeLogo} 
    //   title="Handmade" 
    //   descOne="Handbags"
    //   descTwo="Furniture"
    //   descThree="Wedding"
    //   descFour="Jewelry"
    //   descOneImg={HandmadeLogo1}
    //   descTwoImg={HandmadeLogo2}
    //   descThreeImg={HandmadeLogo3}
    //   descFourImg={HandmadeLogo4}
    //   descPathOne = ""
    //   descPathTwo = ""
    //   descPathThree = ""
    //   descPathFour = ""
    // />,
    // <HomeSlider 
    //   src={SportsLogo} 
    //   title="Sports" 
    //   descOne="Golf"
    //   descTwo="All Exercise"
    //   descThree="Fitness"
    //   descFour="Fishing"
    //   descOneImg={SportsLogo1}
    //   descTwoImg={SportsLogo2}
    //   descThreeImg={SportsLogo3}
    //   descFourImg={SportsLogo4}
    //   descPathOne = ""
    //   descPathTwo = ""
    //   descPathThree = ""
    //   descPathFour = ""
    // />,
    // <HomeSlider 
    //   src={AutomotiveLogo} 
    //   title="Automotive & Industrial" 
    //   descOne="Parts"
    //   descTwo="Tires"
    //   descThree="Tools"
    //   descFour="Vehicles"
    //   descOneImg={AutomotiveLogo1}
    //   descTwoImg={AutomotiveLogo2}
    //   descThreeImg={AutomotiveLogo3}
    //   descFourImg={AutomotiveLogo4}
    //   descPathOne = ""
    //   descPathTwo = ""
    //   descPathThree = ""
    //   descPathFour = ""
    // />,
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
