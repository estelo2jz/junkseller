import React, {useState} from 'react';
import HomeSlider from './HomeSlider';
import './slider.scss';

import ElectronicsLogo from './logo/categoryLogos/plug.svg';
import ComputerLogo from './logo/categoryLogos/desktop.svg';
import SmartHomeLogo from './logo/categoryLogos/house.svg';
import HomeGardenToolsLogo from './logo/categoryLogos/toolbox.svg';
import PetSuppliesLogo from './logo/categoryLogos/pet-supplies.svg';
import FoodGroceryLogo from './logo/categoryLogos/groceries2.svg';
import BeautyHealthLogo from './logo/categoryLogos/makeover.svg';
import ToyKidsBabyLogo from './logo/categoryLogos/boy.svg';
import HandmadeLogo from './logo/categoryLogos/handmade.svg';
import SportsLogo from './logo/categoryLogos/sports.svg';
import OutdoorsLogo from './logo/categoryLogos/tourism.svg';
import AutomotiveLogo from './logo/categoryLogos/data-analysis.svg';

import ElectricLogo1 from './logo/subLogos/tv.svg';
import ElectricLogo2 from './logo/subLogos/ecamera.svg';
import ElectricLogo3 from './logo/subLogos/ewatch.svg';
import ElectricLogo4 from './logo/subLogos/egames.svg';
import ComputerLogo1 from './logo/subLogos/ccomputers.svg';
import ComputerLogo2 from './logo/subLogos/cgpu.svg';
import ComputerLogo3 from './logo/subLogos/charddrives.svg';
import ComputerLogo4 from './logo/subLogos/cprinters.svg';
import HomeGardenToolsLogo1 from './logo/subLogos/hbath.svg';
import HomeGardenToolsLogo2 from './logo/subLogos/happliances.svg';
import HomeGardenToolsLogo3 from './logo/subLogos/hbed.svg';
import HomeGardenToolsLogo4 from './logo/subLogos/hwedding.svg';
import SmartHomeLogo1 from './logo/subLogos/slocks.svg';
import SmartHomeLogo2 from './logo/subLogos/ssecurity.svg';
import SmartHomeLogo3 from './logo/subLogos/svacuum.svg';
import SmartHomeLogo4 from './logo/subLogos/shomelight.svg';
import PetSuppliesLogo1 from './logo/subLogos/pprofiles.svg';
import PetSuppliesLogo2 from './logo/subLogos/pfood.svg';
import PetSuppliesLogo3 from './logo/subLogos/pfish.svg';
import PetSuppliesLogo4 from './logo/subLogos/pbirds.svg';
import FoodGroceryLogo1 from './logo/subLogos/fgourmet.svg';
import FoodGroceryLogo2 from './logo/subLogos/ffresh.svg';
import FoodGroceryLogo3 from './logo/subLogos/fpantry.svg';
import FoodGroceryLogo4 from './logo/subLogos/fgrocery.svg';
import BeautyHealthLogo1 from './logo/subLogos/bbeauty.svg';
import BeautyHealthLogo2 from './logo/subLogos/bdiet.svg';
import BeautyHealthLogo3 from './logo/subLogos/bmens.svg';
import BeautyHealthLogo4 from './logo/subLogos/bskin.svg';
import ToyKidsBabyLogo1 from './logo/subLogos/tbaby.svg';
import ToyKidsBabyLogo2 from './logo/subLogos/tbirthdays.svg';
import ToyKidsBabyLogo3 from './logo/subLogos/tdiaper.svg';
import ToyKidsBabyLogo4 from './logo/subLogos/tv.svg';
import HandmadeLogo1 from './logo/subLogos/hhandbags.svg';
import HandmadeLogo2 from './logo/subLogos/hfurniture.svg';
import HandmadeLogo3 from './logo/subLogos/hdecor.svg';
import HandmadeLogo4 from './logo/subLogos/hjewelry.svg';
import SportsLogo1 from './logo/subLogos/sgolf.svg';
import SportsLogo2 from './logo/subLogos/sfitness.svg';
import SportsLogo3 from './logo/subLogos/sexercise.svg';
import SportsLogo4 from './logo/subLogos/sfishing.svg';
import OutdoorsLogo1 from './logo/subLogos/ocycling.svg';
import OutdoorsLogo2 from './logo/subLogos/ocamping.svg';
import OutdoorsLogo3 from './logo/subLogos/oscooters.svg';
import OutdoorsLogo4 from './logo/subLogos/oclimbing.svg';
import AutomotiveLogo1 from './logo/subLogos/aparts.svg';
import AutomotiveLogo2 from './logo/subLogos/atires.svg';
import AutomotiveLogo3 from './logo/subLogos/atools1.svg';
import AutomotiveLogo4 from './logo/subLogos/avehicles.svg';

function Slider() {
  let sliderArr = [
    <HomeSlider 
      src={ElectronicsLogo} 
      title="Electronics" 
      descOne = "desc one here"
      descTwo="desc two here"
      descThree="desc three here"
      descFour="desc four here"
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
      title="Computers"  
      descOne="desc one here"
      descTwo="desc two here"
      descThree="desc three here"
      descFour="desc four here"
      descOneImg={ComputerLogo1}
      descTwoImg={ComputerLogo2}
      descThreeImg={ComputerLogo3}
      descFourImg={ComputerLogo4}
      descPathOne= "/computers/computercomponents"
      descPathTwo="/computers/computercomponents"
      descPathThree="/computers/computercomponents"
      descPathFour="/computers/computercomponents"
    />,
    <HomeSlider 
      src={HomeGardenToolsLogo} 
      title="Home, Garden & Tools" 
      descOne="desc one here"
      descTwo="desc two here"
      descThree="desc three here"
      descFour="desc four here"
      descOneImg={HomeGardenToolsLogo1}
      descTwoImg={HomeGardenToolsLogo2}
      descThreeImg={HomeGardenToolsLogo3}
      descFourImg={HomeGardenToolsLogo4}
      descPathOne = ""
      descPathTwo = ""
      descPathThree = ""
      descPathFour = ""
    />,
    <HomeSlider 
      src={PetSuppliesLogo} 
      title="Pet Supplies" 
      descOne="desc one here"
      descTwo="desc two here"
      descThree="desc three here"
      descFour="desc four here"
      descOneImg={PetSuppliesLogo1}
      descTwoImg={PetSuppliesLogo2}
      descThreeImg={PetSuppliesLogo3}
      descFourImg={PetSuppliesLogo4} 
      descPathOne=""
      descPathTwo=""
      descPathThree=""
      descPathFour=""
    />,
    <HomeSlider 
      src={OutdoorsLogo} 
      title="Outdoors" 
      descOne="desc one here"
      descTwo="desc two here"
      descThree="desc three here"
      descFour="desc four here"
      descOneImg={OutdoorsLogo1}
      descTwoImg={OutdoorsLogo2}
      descThreeImg={OutdoorsLogo3}
      descFourImg={OutdoorsLogo4}
      descPathOne = ""
      descPathTwo = ""
      descPathThree = ""
      descPathFour = ""
    />,
    <HomeSlider 
      src={SmartHomeLogo} 
      title="Smart Home" 
      descOne="desc one here"
      descTwo="desc two here"
      descThree="desc three here"
      descFour="desc four here"
      descOneImg={SmartHomeLogo1}
      descTwoImg={SmartHomeLogo2}
      descThreeImg={SmartHomeLogo3}
      descFourImg={SmartHomeLogo4}
      descPathOne = ""
      descPathTwo = ""
      descPathThree = ""
      descPathFour = ""
    />,
    <HomeSlider 
      src={FoodGroceryLogo} 
      title="Food & Grocery" 
      descOne="desc one here"
      descTwo="desc two here"
      descThree="desc three here"
      descFour="desc four here"
      descOneImg={FoodGroceryLogo1}
      descTwoImg={FoodGroceryLogo2}
      descThreeImg={FoodGroceryLogo3}
      descFourImg={FoodGroceryLogo4}
      descPathOne = ""
      descPathTwo = ""
      descPathThree = ""
      descPathFour = ""
    />,
    <HomeSlider 
      src={BeautyHealthLogo} 
      title="Beauty & Health" 
      descOne="desc one here"
      descTwo="desc two here"
      descThree="desc three here"
      descFour="desc four here"
      descOneImg={BeautyHealthLogo1}
      descTwoImg={BeautyHealthLogo2}
      descThreeImg={BeautyHealthLogo3}
      descFourImg={BeautyHealthLogo4}
      descPathOne = ""
      descPathTwo = ""
      descPathThree = ""
      descPathFour = ""
    />,
    <HomeSlider 
      src={ToyKidsBabyLogo} 
      title="Toys, Kids & Baby" 
      descOne="desc one here"
      descTwo="desc two here"
      descThree="desc three here"
      descFour="desc four here"
      descOneImg={ToyKidsBabyLogo1}
      descTwoImg={ToyKidsBabyLogo2}
      descThreeImg={ToyKidsBabyLogo3}
      descFourImg={ToyKidsBabyLogo1}
      descPathOne = ""
      descPathTwo = ""
      descPathThree = ""
      descPathFour = ""
    />,
    <HomeSlider 
      src={HandmadeLogo} 
      title="Handmade" 
      descOne="desc one here"
      descTwo="desc two here"
      descThree="desc three here"
      descFour="desc four here"
      descOneImg={HandmadeLogo1}
      descTwoImg={HandmadeLogo2}
      descThreeImg={HandmadeLogo3}
      descFourImg={HandmadeLogo4}
      descPathOne = ""
      descPathTwo = ""
      descPathThree = ""
      descPathFour = ""
    />,
    <HomeSlider 
      src={SportsLogo} 
      title="Sports" 
      descOne="desc one here"
      descTwo="desc two here"
      descThree="desc three here"
      descFour="desc four here"
      descOneImg={SportsLogo1}
      descTwoImg={SportsLogo2}
      descThreeImg={SportsLogo3}
      descFourImg={SportsLogo4}
      descPathOne = ""
      descPathTwo = ""
      descPathThree = ""
      descPathFour = ""
    />,
    <HomeSlider 
      src={AutomotiveLogo} 
      title="Automotive & Industrial" 
      descOne="desc one here"
      descTwo="desc two here"
      descThree="desc three here"
      descFour="desc four here"
      descOneImg={AutomotiveLogo1}
      descTwoImg={AutomotiveLogo2}
      descThreeImg={AutomotiveLogo3}
      descFourImg={AutomotiveLogo4}
      descPathOne = ""
      descPathTwo = ""
      descPathThree = ""
      descPathFour = ""
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
