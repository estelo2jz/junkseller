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
      descOneImg={"https://webobjects2.cdw.com/is/image/CDW/6201029?$product-main$"}
      descTwoImg={"https://cdn.vox-cdn.com/thumbor/1RotWNHPH9m_eId_y7FIB1eT2f4=/0x0:1750x1165/1400x933/filters:focal(735x443:1015x723):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/67035058/HR_EOS_R5_3.0.jpg"}
      descThreeImg={"https://cdn.tmobile.com/content/dam/t-mobile/en-p/internet-devices/Timex/Timex-Family-Connect/Space-Blue/Timex-Family-Connect-Space-Blue-thumbnail.jpg"}
      descFourImg={"https://canary.contestimg.wish.com/api/webimage/5fb338fb502f231e7f0d554e-large.jpg?cache_buster=8d4960a0923a564b08e5ab2760978831"}
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
      descOneImg={"https://c1.neweggimages.com/ProductImage/24-475-002-V11.jpg"}
      descTwoImg={"https://magicmicro.com/images/items/DP50_red(oem)lrg.jpg"}
      descThreeImg={"https://webobjects2.cdw.com/is/image/CDW/4934137?$product-main$"}
      descFourImg={"https://c1.neweggimages.com/ProductImageCompressAll1280/19-117-957-01.jpg"}
      descPathOne= "/computers/monitors"
      descPathTwo="/computers/parts&components"
      descPathThree="/computers/harddrives&storage"
      descPathFour="/computers/parts&components"
    />,
    <HomeSlider 
      src={ComputerLogo} 
      title="Clothing" 
      descOne="Decor"
      descTwo="Appliances"
      descThree="Bath"
      descFour="Sewing"
      descOneImg={"https://img.ltwebstatic.com/images3_pi/2020/06/22/159278947463d4527e11cdfca1fcb83cf623bcf08f_thumbnail_900x.webp"}
      descTwoImg={"https://images.ctfassets.net/od02wyo8cgm5/3EfoQCOVEYhdsiLUv3t2O9/23b02d79f25e28186b6704d9eabb5aca/cloud_x-fw20-white_black-m-g1.png"}
      descThreeImg={"https://cdn.shopify.com/s/files/1/0866/4890/products/115_1024x1024.jpg?v=1559539042"}
      descFourImg={"https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Porous-Walker-Shark-Attack-Blue-Speckled-Beanie-_337872-front-US.jpg"}
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
      descOneImg={"https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/d7271a134ef89509ec81c6445e9391b9.jpg"}
      descTwoImg={"https://cdn.shopify.com/s/files/1/0057/0189/4257/products/9mmGold_1500x.jpg?v=1585111232"}
      descThreeImg={"https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw50b22d25/images/products/L213.1L.531_fr.jpg?sw=1660&sh=1660"}
      descFourImg={"https://cdn11.bigcommerce.com/s-f813d/images/stencil/1280x1280/products/9017/26667/N0765__44700.1497665219.jpg?c=2"} 
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
