import React from 'react';
import { uuid } from 'uuidv4';
import ElectronicsProductTemplate from '../ElectricCategory/Category/ElectronicsProductTemplate';
// import FeaturedCategoryTemplate from './FeaturedCategoryTemplate';
import ComputersMenu from '../ComputerCategory/ComputersMenu';
import '../../styles/Electronics.scss';

import  SqaureFeatured from './HomePageComponents/SqaureFeatured';
import  CircleFeaturedCategories from './HomePageComponents/CircleFeaturedCategories';
import  FirstFeaturedProduct from './HomePageComponents/FirstFeaturedProduct';
import  SecondFeaturedProduct from './HomePageComponents/SecondFeaturedProduct';
import  MultiSqaure from './HomePageComponents/MultiSqaure';
import  TwoProductTemplate from './HomePageComponents/TwoProductTemplate';
import  TwoProductTemplateTwo from './HomePageComponents/TwoProductTemplateTwo';

function Computers() {
  return (
    <div className="products__base">
      <div className="electronics__container">
        <div className="electronics__container-heading">
          <ComputersMenu
            category0="Computers, Tablets & PC"
            category1="Monitors"
            category2="Accessories"
            category3="Networking"
            category4="Hard Drives & Storage"
            category5="Computer Parts & Components"
          />
        </div>
        <div className="electronics__container-flex-grid">
          <div className="electronics__container-flex-1">
            <ElectronicsProductTemplate
              id={uuid()}
              title="Lenovo Legion 5 Gaming Laptop, 15.6' FHD (1920x1080) IPS Screen, AMD Ryzen 7 4800H Processor, 16GB DDR4, 512GB SSD, NVIDIA GTX 1660Ti, Windows 10, 82B1000AUS, Phantom Black"
              price={996.60}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/81w%2B3k4U8PL._AC_SL1500_.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="New Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 256GB"
              price={949.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/71vFKBpKakL._AC._SR360,460.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="ASUS TUF Gaming VG27VH1B 27” Curved Monitor, 1080P Full HD"
              price={268.91}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/81i6G0uoctL._AC._SR360,460.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="ROG Strix GA15DH Gaming Desktop PC, AMD Ryzen 7 3800X, GeForce"
              price={1829.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81mIQ527wEL._AC._SR360,460.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="Blade Hawks RGB Gaming Mouse Pad, LED Soft Extra Extended Large Mouse"
              price={16.60}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/51ybekXvQLL._AC._SR360,460.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="Lenovo Flex 5 14' 2-in-1 Laptop, 14.0' FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD, AMD Radeon Graphics, Digital Pen Included, Win 10, 81X20005US, Graphite Grey"
              price={671.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81AbJXWCxXL._AC_SL1500_.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="Redragon S101 Wired Gaming Keyboard and Mouse Combo RGB Backlit"
              price={39.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/71kr3WAj1FL._AC._SR360,460.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="MSI GS75 STEALTH-242 17.3-inch 144Hz FHD - Intel i7-9750H 6-Core - NVIDIA RTX 2080 Max Q 8GB - 32GB DDR4 - 1TB Solid State Drive - Win10H"
              price={1849.00}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/513IMp-dM8L._AC_SL1000_.jpg"
            />
          </div>
          <div className="electronics__heading">
            <p>Categories you might want to explore.</p>
          </div>
          <div className="electronics__container-flex-1">
            <CircleFeaturedCategories
               image = "https://m.media-amazon.com/images/I/41qGljLcoKL._AC_UL320_.jpg"
               title = "TV"
               path = ""
             />
            <CircleFeaturedCategories
               image = "https://m.media-amazon.com/images/I/71UAtd5yS5L._AC_UL320_.jpg"
               path = ""
               title = "Video Recording"
             />
            <CircleFeaturedCategories
               image = "https://m.media-amazon.com/images/I/71trCk+mk4L._AC_UL320_.jpg"
               path = ""
               title = "Smart Watches"
             />
            <CircleFeaturedCategories
               image = "https://m.media-amazon.com/images/I/61fskHmDrrL._AC_UL320_.jpg"
               path = ""
               title = "Vacuums"
             />
            <CircleFeaturedCategories
               image = "https://images-na.ssl-images-amazon.com/images/I/41JfuLRDgPL.jpg"
               path = ""
               title = "Wedding"
             />
            <CircleFeaturedCategories
               image = "https://images-na.ssl-images-amazon.com/images/I/81BlnTvweVL._AC_SL1500_.jpg"
               path = ""
               title = "Golf"
             />
            <CircleFeaturedCategories
               image = "https://m.media-amazon.com/images/I/71MoE8IyXgL._AC_UL320_.jpg"
               path = ""
               title = "Climbing"
             />
            <CircleFeaturedCategories
               image = "https://images-na.ssl-images-amazon.com/images/I/61rYD5nAicL._AC_SL1000_.jpg"
               path = ""
               title = "Seat Covers"
             />
            <CircleFeaturedCategories
               image = "https://images-na.ssl-images-amazon.com/images/I/81ihFk9rFWL._SL1500_.jpg"
               path = ""
               title = "Fragrance"
             />
            <CircleFeaturedCategories
               image = "https://images-na.ssl-images-amazon.com/images/I/412ZMPrA55L.jpg"
               path = ""
               title = "Smart Thermostat"
             />
            <CircleFeaturedCategories
               image = "https://images-na.ssl-images-amazon.com/images/I/81BIRmPUAgL._AC._SR360,460.jpg"
               path = ""
               title = "Internal Components"
             />
              <CircleFeaturedCategories
               image = "https://images-na.ssl-images-amazon.com/images/I/51r3ESLbqtL._SX160_QL100_AC_SCLZZZZZZZ_.jpg"
               path = ""
               title = "Cutting Board"
             />
            <CircleFeaturedCategories
               image = "https://images-na.ssl-images-amazon.com/images/I/41gSLScWKjL._SX160_QL100_AC_SCLZZZZZZZ_.jpg"
               path = ""
               title = "Chef's Knife"
             />
            <CircleFeaturedCategories
               image = "https://m.media-amazon.com/images/I/71udD59On2L._AC_UL320_.jpg"
               path = ""
               title = "Binoculars"
             />
            <CircleFeaturedCategories
               image = "https://m.media-amazon.com/images/I/71s5XKodatL._AC_UL320_.jpg"
               path = ""
               title = "Outdoor Knives"
             />
            <CircleFeaturedCategories
               image = "https://images-na.ssl-images-amazon.com/images/I/7185Va6NK6L._AC._SR360,460.jpg"
               path = ""
               title = "Eye Shadows"
             />
            <CircleFeaturedCategories
               image = "https://images-na.ssl-images-amazon.com/images/I/71VRoejpL7L._AC._SR360,460.jpg"
               path = ""
               title = "Hair Care"
             />
            <CircleFeaturedCategories
               image = "https://images-na.ssl-images-amazon.com/images/I/51Dnfs1ev6L._AC._SR360,460.jpg"
               path = ""
               title = "Nail Care"
             />
            <CircleFeaturedCategories
               image = "https://images-na.ssl-images-amazon.com/images/I/81sMtJOEYaL._AC._SR360,460.jpg"
               path = ""
               title = "Men's Grooming"
             />
            <CircleFeaturedCategories
               image = "https://m.media-amazon.com/images/I/71Rogdhu44L._AC_UL320_.jpg"
               path = ""
               title = "Dog Food"
             />
            <CircleFeaturedCategories
               image = "https://images-na.ssl-images-amazon.com/images/I/41qV5ilPqNL.jpg"
               path = ""
               title = "Mattresses"
             />
            <CircleFeaturedCategories
               image = "https://m.media-amazon.com/images/I/71IUiHcXLhL._AC_UY218_.jpg"
               path = ""
               title = "Appliances"
             />
            <CircleFeaturedCategories
               image = "https://images-na.ssl-images-amazon.com/images/I/514+A0UifTL.jpg"
               path = ""
               title = "Diapers"
             />
          </div>
          <div className="electronics__container-flex-1">
            <SqaureFeatured 
              image = ""
              title = ""
              path = "/"
            />
            <MultiSqaure 
              imageOne = ""
              titleOne = ""
              pathOne = ""
              imageTwo = ""
              titleTwo = ""
              pathTwo = ""
              imageThree = ""
              titleThree = ""
              pathThree = ""
              imageFour = ""
              titleFour = ""
              pathFour = ""
            />
            <SqaureFeatured 
              image = ""
              title = ""
              path = "/"
            />
            <SqaureFeatured 
              image = ""
              title = ""
              path = "/"
            />
            <SqaureFeatured 
              image = ""
              title = ""
              path = "/"
            />
            <MultiSqaure 
              imageOne = ""
              titleOne = ""
              pathOne = ""
              imageTwo = ""
              titleTwo = ""
              pathTwo = ""
              imageThree = ""
              titleThree = ""
              pathThree = ""
              imageFour = ""
              titleFour = ""
              pathFour = ""
            />
            <SqaureFeatured 
              image = ""
              title = ""
              path = "/"
            />
          </div>
          <div className="electronics__heading">
            <p>similar products you browse.</p>
          </div>
          <div className="electronics__container-flex-1">
            <FirstFeaturedProduct 
              image = ""
              path = ""
            />
            <FirstFeaturedProduct 
              image = ""
              path = ""
            />
            <FirstFeaturedProduct 
              image = ""
              path = ""
            />
            <FirstFeaturedProduct 
              image = ""
              path = ""
            />
            <FirstFeaturedProduct 
              image = ""
              path = ""
            />
            <FirstFeaturedProduct 
              image = ""
              path = ""
            />
            <FirstFeaturedProduct 
              image = ""
              path = ""
            />
            <FirstFeaturedProduct 
              image = ""
              path = ""
            />
            <FirstFeaturedProduct 
              image = ""
              path = ""
            />
            <FirstFeaturedProduct 
              image = ""
              path = ""
            />
            <FirstFeaturedProduct 
              image = ""
              path = ""
            />
            <FirstFeaturedProduct 
              image = ""
              path = ""
            />
            <FirstFeaturedProduct 
              image = ""
              path = ""
            />
            <FirstFeaturedProduct 
              image = ""
              path = ""
            />
          </div>
          <div className="electronics__heading">
            <p>today's deal.</p>
          </div>
          <div className="electronics__container-flex-1">
            <SecondFeaturedProduct
              image = ""
              path = ""             
             />
            <SecondFeaturedProduct
              image = ""
              path = ""             
             />
            <SecondFeaturedProduct
              image = ""
              path = ""             
             />
            <SecondFeaturedProduct
              image = ""
              path = ""             
             />
            <SecondFeaturedProduct
              image = ""
              path = ""             
             />
            <SecondFeaturedProduct
              image = ""
              path = ""             
             />
            <SecondFeaturedProduct
              image = ""
              path = ""             
             />
            <SecondFeaturedProduct
              image = ""
              path = ""             
             />
            <SecondFeaturedProduct
              image = ""
              path = ""             
             />
            <SecondFeaturedProduct
              image = ""
              path = ""             
             />
            <SecondFeaturedProduct
              image = ""
              path = ""             
             />
            <SecondFeaturedProduct
              image = ""
              path = ""             
             />
            <SecondFeaturedProduct
              image = ""
              path = ""             
             />
          </div>
          <div className="electronics__container-flex-1">
            <TwoProductTemplate 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplate 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplate 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplate 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplate 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplate 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplate 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplate 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplate 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplate 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplate 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
          </div>
          <div className="electronics__container-flex-1">
            <TwoProductTemplateTwo 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplateTwo 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplateTwo 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplateTwo 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplateTwo 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplateTwo 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplateTwo 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplateTwo 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplateTwo 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplateTwo 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplateTwo 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplateTwo 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
          </div>
          <div className="electronics__heading">
            <p>Popular Items</p>
          </div>
          <div className="electronics__container-flex-1">
            <MultiSqaure 
              imageOne = ""
              titleOne = ""
              pathOne = ""
              imageTwo = ""
              titleTwo = ""
              pathTwo = ""
              imageThree = ""
              titleThree = ""
              pathThree = ""
              imageFour = ""
              titleFour = ""
              pathFour = ""
            />
            <MultiSqaure 
              imageOne = ""
              titleOne = ""
              pathOne = ""
              imageTwo = ""
              titleTwo = ""
              pathTwo = ""
              imageThree = ""
              titleThree = ""
              pathThree = ""
              imageFour = ""
              titleFour = ""
              pathFour = ""
            />
            <MultiSqaure 
              imageOne = ""
              titleOne = ""
              pathOne = ""
              imageTwo = ""
              titleTwo = ""
              pathTwo = ""
              imageThree = ""
              titleThree = ""
              pathThree = ""
              imageFour = ""
              titleFour = ""
              pathFour = ""
            />
            <MultiSqaure 
              imageOne = ""
              titleOne = ""
              pathOne = ""
              imageTwo = ""
              titleTwo = ""
              pathTwo = ""
              imageThree = ""
              titleThree = ""
              pathThree = ""
              imageFour = ""
              titleFour = ""
              pathFour = ""
            />
            <MultiSqaure 
              imageOne = ""
              titleOne = ""
              pathOne = ""
              imageTwo = ""
              titleTwo = ""
              pathTwo = ""
              imageThree = ""
              titleThree = ""
              pathThree = ""
              imageFour = ""
              titleFour = ""
              pathFour = ""
            />
            <MultiSqaure 
              imageOne = ""
              titleOne = ""
              pathOne = ""
              imageTwo = ""
              titleTwo = ""
              pathTwo = ""
              imageThree = ""
              titleThree = ""
              pathThree = ""
              imageFour = ""
              titleFour = ""
              pathFour = ""
            />
            <MultiSqaure 
              imageOne = ""
              titleOne = ""
              pathOne = ""
              imageTwo = ""
              titleTwo = ""
              pathTwo = ""
              imageThree = ""
              titleThree = ""
              pathThree = ""
              imageFour = ""
              titleFour = ""
              pathFour = ""
            />
            <MultiSqaure 
              imageOne = ""
              titleOne = ""
              pathOne = ""
              imageTwo = ""
              titleTwo = ""
              pathTwo = ""
              imageThree = ""
              titleThree = ""
              pathThree = ""
              imageFour = ""
              titleFour = ""
              pathFour = ""
            />
            <MultiSqaure 
              imageOne = ""
              titleOne = ""
              pathOne = ""
              imageTwo = ""
              titleTwo = ""
              pathTwo = ""
              imageThree = ""
              titleThree = ""
              pathThree = ""
              imageFour = ""
              titleFour = ""
              pathFour = ""
            />
            <MultiSqaure 
              imageOne = ""
              titleOne = ""
              pathOne = ""
              imageTwo = ""
              titleTwo = ""
              pathTwo = ""
              imageThree = ""
              titleThree = ""
              pathThree = ""
              imageFour = ""
              titleFour = ""
              pathFour = ""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Computers;
