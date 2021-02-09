import React, {useState} from 'react';
import HomeSlider from './HomeSlider';
import './slider.scss';

import ElectronicsLogo from './logo/categoryLogos/plug.svg';
import ComputerLogo from './logo/categoryLogos/desktop.svg';


function Slider() {
  let sliderArr = [
    <HomeSlider 
      src={ElectronicsLogo} 
      title="Electronics" 
      descOne = "TVs"
      descTwo="Cameras"
      descThree="Wearable Technology"
      descFour="Video Games"
      descOneImg= {""}
      descTwoImg={""}
      descThreeImg={""}
      descFourImg={""}
      descPathOne= "/electronics/tvvideo"
      descPathTwo="/electronics/cameraphotovideo"
      descPathThree="/electronics/wearabletechnology"
      descPathFour="/electronics/videogames"
    />,
    <HomeSlider 
      src={ComputerLogo} 
      title="Computers"  
      descOne="Computers"
      descTwo="Components"
      descThree="Hard Drives"
      descFour="Printers"
      descOneImg={""}
      descTwoImg={""}
      descThreeImg={""}
      descFourImg={""}
      descPathOne= "/computers/monitors"
      descPathTwo="/computers/networking"
      descPathThree="/computers/parts&components"
      descPathFour="/computers/accessories"
    />,
    <HomeSlider 
      src={ComputerLogo} 
      title="Clothing" 
      descOne="Decor"
      descTwo="Appliances"
      descThree="Bath"
      descFour="Sewing"
      descOneImg={"https://img.ltwebstatic.com/images3_pi/2020/06/22/159278947463d4527e11cdfca1fcb83cf623bcf08f_thumbnail_900x.webp"}
      descTwoImg={"https://cdn.shopify.com/s/files/1/0739/3265/products/classiccurve_1080x.jpg?v=1580582631"}
      descThreeImg={"https://cdn.shopify.com/s/files/1/0866/4890/products/115_1024x1024.jpg?v=1559539042"}
      descFourImg={"https://icdn6.themanual.com/image/themanual/threadless-graphic-tshirt-brand-for-men-416x416.jpg"}
      descPathOne="/clothing/apparel"
      descPathTwo="/clothing/"
      descPathThree="/clothing/"
      descPathFour="/clothing/"
    />,
    <HomeSlider 
      src={ComputerLogo}
      title="Jewelries" 
      descOne="Pet Profiles"
      descTwo="Dog Food"
      descThree="Aquatic Pets"
      descFour="Birds"
      descOneImg={""}
      descTwoImg={""}
      descThreeImg={""}
      descFourImg={""} 
      descPathOne= "/jewelry/diamonds&chains"
      descPathTwo="/jewelry/diamonds&grills"
      descPathThree="/jewelry/diamonds&watchs"
      descPathFour="/jewelry/diamonds&pendants"
    />,
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
