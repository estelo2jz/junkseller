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
      descOneImg= "https://www.flaticon.com/svg/vstatic/svg/3800/3800088.svg?token=exp=1611432702~hmac=2967bbb499d945b29afe85648d995110"
      descTwoImg= "https://www.flaticon.com/svg/vstatic/svg/1042/1042339.svg?token=exp=1611432980~hmac=d809848bafbefa2394f507cdf81960e0"
      descThreeImg= "https://www.flaticon.com/svg/vstatic/svg/4107/4107747.svg?token=exp=1611430464~hmac=c418300ca5c38e993de55ad0ad272372"
      descFourImg= "https://www.flaticon.com/svg/vstatic/svg/141/141073.svg?token=exp=1611432889~hmac=810ba42eacba36fc4e74f42fac1f5299"
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
      descOneImg= "https://www.flaticon.com/svg/vstatic/svg/1792/1792525.svg?token=exp=1611433556~hmac=048ddbfb793fb773fb8beee1dad09cfc"
      descTwoImg= "https://www.flaticon.com/svg/vstatic/svg/2004/2004731.svg?token=exp=1611433309~hmac=6e5b6d9f96b3e6bfa9ea155a968fc0ad"
      descThreeImg= "https://www.flaticon.com/svg/vstatic/svg/3868/3868647.svg?token=exp=1611433597~hmac=a4d99bd4cc4c8b9ab191bf5aed5d2157"
      descFourImg= "https://www.flaticon.com/svg/vstatic/svg/3569/3569998.svg?token=exp=1611433662~hmac=ca804c3323413d7a374e2cf4109c54ac"
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
      descOneImg= "https://www.flaticon.com/svg/vstatic/svg/1261/1261143.svg?token=exp=1611430228~hmac=17a89a190097a1f92bc7612cad73bffc"
      descTwoImg= "https://www.flaticon.com/svg/vstatic/svg/601/601964.svg?token=exp=1611431078~hmac=14b013dda0c3829e5d4dc7417f5c7eef"
      descThreeImg= "https://www.flaticon.com/svg/vstatic/svg/3153/3153998.svg?token=exp=1611436350~hmac=fbb9ff9e637b57522c4eb7591e87bff6"
      descFourImg= "https://www.flaticon.com/svg/vstatic/svg/3749/3749704.svg?token=exp=1611431173~hmac=afff715add351d6c39b3289ab8e28426"
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
      descOneImg= "https://www.flaticon.com/svg/vstatic/svg/3736/3736727.svg?token=exp=1611431436~hmac=22e12c20cad9980a3a00e223bfbdb82c"
      descTwoImg="https://www.flaticon.com/svg/vstatic/svg/3069/3069186.svg?token=exp=1611434237~hmac=c6937d6d212d26c75868a23d9f5cca3b"
      descThreeImg="https://www.flaticon.com/svg/vstatic/svg/3048/3048167.svg?token=exp=1611434103~hmac=25d57df7fa2ea6717ae17205762c2242"
      descFourImg="https://www.flaticon.com/svg/vstatic/svg/3050/3050205.svg?token=exp=1611431498~hmac=58c0bee0f96cb0684034613990aec3f2" 
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
      descOneImg= "https://www.flaticon.com/svg/vstatic/svg/923/923794.svg?token=exp=1611434305~hmac=bdcaec070d81732cacc2f669af03592b"
      descTwoImg= "https://www.flaticon.com/svg/vstatic/svg/1054/1054092.svg?token=exp=1611434359~hmac=22c15d0f20898b5a4ba6a782dbdcd25f"
      descThreeImg= "https://www.flaticon.com/svg/vstatic/svg/3867/3867998.svg?token=exp=1611434515~hmac=2e4f3520406759d831c36761f0df95a1"
      descFourImg= "https://www.flaticon.com/svg/vstatic/svg/3867/3867710.svg?token=exp=1611434460~hmac=a02ced4caace00a37bd90a0b42cef675" 
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
      descOneImg= "https://www.flaticon.com/svg/vstatic/svg/1996/1996819.svg?token=exp=1611434705~hmac=8a4b4f45c1585c862b14fe74e40fb791"
      descTwoImg="https://www.flaticon.com/svg/vstatic/svg/2933/2933893.svg?token=exp=1611434950~hmac=df667530821d0e82f0b3f36f3c3fd517"
      descThreeImg="https://www.flaticon.com/svg/vstatic/svg/2829/2829843.svg?token=exp=1611434998~hmac=699a31b5456b674efc5d8b993f43c732"
      descFourImg="https://www.flaticon.com/svg/vstatic/svg/1699/1699626.svg?token=exp=1611435098~hmac=341d9e8e75835e7443454b58b4e80636" 
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
      descOneImg= "https://www.flaticon.com/svg/vstatic/svg/2934/2934209.svg?token=exp=1611435144~hmac=7a6c3f4df9b888e4e972ac8d16ea2b52"
      descTwoImg="https://www.flaticon.com/svg/vstatic/svg/2329/2329865.svg?token=exp=1611435247~hmac=bf28ba2cc369a0013e09d36db8dbbe8f"
      descThreeImg="https://www.flaticon.com/svg/vstatic/svg/2307/2307872.svg?token=exp=1611435268~hmac=2b1d8cd3c9cdf55ac62ef5dda529070c"
      descFourImg="https://www.flaticon.com/svg/vstatic/svg/1261/1261163.svg?token=exp=1611435310~hmac=934fa0503a5cf402db2b4fbc863bb723" 
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
      descOneImg= "https://www.flaticon.com/svg/vstatic/svg/2058/2058016.svg?token=exp=1611435581~hmac=92d24a0bba2ca9fe42382d7975a594a5"
      descTwoImg="https://www.flaticon.com/svg/vstatic/svg/3074/3074081.svg?token=exp=1611435444~hmac=84b0ca4c2d107ad51c0ac0a70e16f967"
      descThreeImg="https://www.flaticon.com/svg/vstatic/svg/1940/1940993.svg?token=exp=1611435469~hmac=f72b6d3f13ba6077743780daa2647e21"
      descFourImg="https://www.flaticon.com/svg/vstatic/svg/3057/3057330.svg?token=exp=1611435508~hmac=755089b52e52ed7df354ea7c850f00f0" 
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
      descOneImg= "https://www.flaticon.com/svg/vstatic/svg/2991/2991499.svg?token=exp=1611435653~hmac=cf2d77ebdfab4733ad23d82ac2b42497"
      descTwoImg="https://www.flaticon.com/svg/vstatic/svg/2123/2123665.svg?token=exp=1611435728~hmac=c0ed71c8edd20d9b923340032e92b73b"
      descThreeImg="https://www.flaticon.com/svg/vstatic/svg/3899/3899231.svg?token=exp=1611435763~hmac=2d14b8903a258308f038c07011c3bdf9"
      descFourImg="https://www.flaticon.com/svg/vstatic/svg/4101/4101429.svg?token=exp=1611435812~hmac=673381acc6ecf0a29d9f734b352bda70" 
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
      descOneImg= "https://www.flaticon.com/svg/vstatic/svg/1198/1198316.svg?token=exp=1611435848~hmac=f1140ecf07b9d48d8bd800115a3e187a"
      descTwoImg="https://www.flaticon.com/svg/vstatic/svg/4090/4090468.svg?token=exp=1611435891~hmac=fbff2ec97aef6be180d05a7da3bcdb77"
      descThreeImg="https://www.flaticon.com/svg/vstatic/svg/4103/4103850.svg?token=exp=1611435917~hmac=5566f3784fe087f1594976383e9989a1"
      descFourImg="https://www.flaticon.com/svg/vstatic/svg/417/417435.svg?token=exp=1611435976~hmac=646002d0072a5f49c13d891a2993ef47" 
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
      descOneImg= "https://www.flaticon.com/svg/vstatic/svg/2860/2860983.svg?token=exp=1611436452~hmac=48bb8909f42f84850adc0de3912aebfe"
      descTwoImg="https://www.flaticon.com/svg/vstatic/svg/2834/2834485.svg?token=exp=1611436157~hmac=3f095c70978ba1d93941529f9d841292"
      descThreeImg="https://www.flaticon.com/svg/vstatic/svg/2923/2923338.svg?token=exp=1611436178~hmac=3cfa2e4df98c0125df6510bb39cccc43"
      descFourImg="https://www.flaticon.com/svg/vstatic/svg/2996/2996941.svg?token=exp=1611436219~hmac=c7a081db9230ef0768e9d35176d81d50" 
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
      descOneImg= "https://www.flaticon.com/svg/vstatic/svg/598/598777.svg?token=exp=1611436513~hmac=bf3ac8d722c21f0fb61b394f0c2b8c82"
      descTwoImg="https://www.flaticon.com/svg/vstatic/svg/598/598838.svg?token=exp=1611436546~hmac=9f26e6aabf37696e25f78f832b8bffd6"
      descThreeImg="https://www.flaticon.com/svg/vstatic/svg/2137/2137887.svg?token=exp=1611436587~hmac=01d85d800b0d5006e53392a35c855a6f"
      descFourImg="https://www.flaticon.com/svg/vstatic/svg/3534/3534402.svg?token=exp=1611436657~hmac=2549aac01ad4e01f9cdcc328c08563ea" 
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
