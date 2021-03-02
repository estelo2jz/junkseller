import React from 'react';
import { uuid } from 'uuidv4';
import ElectronicsProductTemplate from '../ElectricCategory/Category/ElectronicsProductTemplate';
// import FeaturedCategoryTemplate from './FeaturedCategoryTemplate';
import ElectronicsMenu from '../ElectricCategory/ElectronicsMenu';
import '../../styles/Electronics.scss';
import NavBarSubBars from '../NavBarSubBars';

import  SqaureFeatured from './HomePageComponents/SqaureFeatured';
import  CircleFeaturedCategories from './HomePageComponents/CircleFeaturedCategories';
import  FirstFeaturedProduct from './HomePageComponents/FirstFeaturedProduct';
import  SecondFeaturedProduct from './HomePageComponents/SecondFeaturedProduct';
import  MultiSqaure from './HomePageComponents/MultiSqaure';
import  TwoProductTemplate from './HomePageComponents/TwoProductTemplate';
import  TwoProductTemplateTwo from './HomePageComponents/TwoProductTemplateTwo';

function Electronics() {
  return (
    <div className="products__base">
      <div className="electronics__container">
        <div className="electronics__container-heading">
          <ElectronicsMenu 
              category0="TV & Video"
              category1="Home Audio & Theater"
              category2="Camera, Photo & Video"
              category3="Cell Phones & Accessories"
              category4="Headphones"
              category5="Video Games" 
              category6="Bluetooth & Wireless "
              category7="Car Electronics"
              category8="Musical Instruments"
              category9="Wearable Technology"
              category10="Electronics"
          />
        </div>
        <div className="electronics__container-flex-grid">
          {/* <div className="electronics__heading">
              <p>Categories you might want to explore.</p>
          </div> */}
          <div className="electronics__container-flex-1">
            <SqaureFeatured 
              image = "https://images-na.ssl-images-amazon.com/images/I/311EleaXm+L.jpg"
              title = "Ear Buds"
              path = "/electronics/headphones"
            />
            <MultiSqaure 
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/41bK7tuzDWL.jpg"
              titleOne = "Sewing"
              pathOne = ""
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/41D2H95PzCL.jpg"
              titleTwo = "Jewelry"
              pathTwo = ""
              imageThree = "https://images-na.ssl-images-amazon.com/images/I/51jU6oALyJL.jpg"
              titleThree = "Face Masks"
              pathThree = ""
              imageFour = "https://m.media-amazon.com/images/I/615+lS7GS8L._AC_UY218_.jpg"
              titleFour = "Tires"
              pathFour = ""
            />
            <SqaureFeatured 
              image = "https://images-na.ssl-images-amazon.com/images/I/41LWqoFBfgL.jpg"
              title = "Apple Products"
              path = "/electronics/headphones"
            />
            <SqaureFeatured 
              image = "https://images-na.ssl-images-amazon.com/images/I/41q2y264P6L.jpg"
              title = "XBOX"
              path = "/electronics/videogames"
            />
            <SqaureFeatured 
              image = "https://images-na.ssl-images-amazon.com/images/I/41179QBQAXL.jpg"
              title = "Smart Phones"
              path = "/electronics/cellphones"
            />
            <MultiSqaure 
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/71YiS9RWIFL._AC._SR360,460.jpg"
              titleOne = "Hangers"
              pathOne = ""
              imageTwo = "https://m.media-amazon.com/images/I/51WI2H-fueL._AC_UL320_.jpg"
              titleTwo = "Art"
              pathTwo = ""
              imageThree = "https://images-na.ssl-images-amazon.com/images/I/41n2u94Z8fL._AC_SX184_.jpg"
              titleThree = "Bicycles"
              pathThree = ""
              imageFour = "https://images-na.ssl-images-amazon.com/images/I/814ounL3HiL._AC._SR360,460.jpg"
              titleFour = "Supplements"
              pathFour = ""
            />
            <SqaureFeatured 
              image = "https://m.media-amazon.com/images/I/81eR5VzjExL._AC_UL320_.jpg"
              title = "DJ Controller"
              path = "/electronics/videogames"
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
            <CircleFeaturedCategories
               image = "https://images-na.ssl-images-amazon.com/images/I/31L79Ulfw6L._AC_SX184_.jpg"
               path = ""
               title = "Security"
             />
          </div>
          <div className="electronics__heading">
            <p>similar products you browse.</p>
          </div>
          <div className="electronics__container-flex-1">
            <FirstFeaturedProduct 
              image = "https://m.media-amazon.com/images/I/81M3J4ERcXL._AC_UL320_.jpg"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/81tjLksKixL._AC._SR360,460.jpg"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/319URuG9XdL._AC_SX184_.jpg"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/41obmKaaX3L.jpg"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://m.media-amazon.com/images/I/61tOKIAT23L._AC_UY218_.jpg"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/51fjaSa2jFL._AC_UL160_SR160,160_.jpg"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/81DHw4fvsVL._AC_UL160_SR160,160_.jpg"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://m.media-amazon.com/images/I/71-iYH5OATL._AC_UL320_.jpg"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://m.media-amazon.com/images/I/71ps+JNLnCL._AC_UL320_.jpg"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://m.media-amazon.com/images/I/61vB30otClL._AC_UL320_.jpg"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://m.media-amazon.com/images/I/91Q8HBHOZaL._AC_UL320_.jpg"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/71bvPNBALSL._AC_UL270_SR270,270_.jpg"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/710R9YpV9nL._AC_UL160_SR160,160_.jpg"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/81XeVWWyUUL._AC_UL160_SR160,160_.jpg"
              path = ""
            />
          </div>
          <div className="electronics__heading">
            <p>today's deal.</p>
          </div>
          <div className="electronics__container-flex-1">
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/61EyqvcmZKL._AC_SL1500_.jpg"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/71XdzM-D9AL._AC_SL1500_.jpg"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/61ilAE60KoL._AC_SL1000_.jpg"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/51HkHPQyqtL._SL1000_.jpg"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/51rRIMeMdBL._AC_SL1000_.jpg"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/71XlG3%2BOEdL._AC_SL1500_.jpg"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/810-Jbis5CL._AC_SL1500_.jpg"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/61OE1bPWsJL._AC_SL1000_.jpg"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/71ekWFCunfL._AC_SL1500_.jpg"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/71UAtd5yS5L._AC_SL1500_.jpg"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://m.media-amazon.com/images/I/71iCsEpE-xL._AC_UL320_.jpg"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://m.media-amazon.com/images/I/71EDcJ5oK4L._AC_UL320_.jpg"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://m.media-amazon.com/images/I/81rH-UszTXL._AC_UL320_.jpg"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://m.media-amazon.com/images/I/51scYBN+ThL._AC_UL320_.jpg"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://m.media-amazon.com/images/I/61apD0DBOcL._AC_UL320_.jpg"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://m.media-amazon.com/images/I/61pWW8yqaZL._AC_UL320_.jpg"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://m.media-amazon.com/images/I/61V2zcrZcgL._AC_UL320_.jpg"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://m.media-amazon.com/images/I/6185I2OOlpL._AC_UL320_.jpg"
              path = ""             
             />
          </div>
          <div className="electronics__heading">
            <p>Popular Items</p>
          </div>
          <div className="electronics__container-flex-1">
            <MultiSqaure 
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/91mL-OSb40L._AC_SL1500_.jpg"
              titleOne = "Samsung TVs"
              pathOne = ""
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/71HFeFWi9KL._AC_SL1500_.jpg"
              titleTwo = "Makeup Light"
              pathTwo = ""
              imageThree = "https://images-na.ssl-images-amazon.com/images/I/819GMLKPwQL._AC_SL1500_.jpg"
              titleThree = "Drawers"
              pathThree = ""
              imageFour = "https://images-na.ssl-images-amazon.com/images/I/71D%2BCrJfzKL._AC_SL1500_.jpg"
              titleFour = "Platform Bed"
              pathFour = ""
            />
            <MultiSqaure 
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/61LrIbQeH-L._AC_SL1000_.jpg"
              titleOne = "FireTV"
              pathOne = ""
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/71V1Mzgvu6L._AC_SL1500_.jpg"
              titleTwo = "Ring size Adjuster"
              pathTwo = ""
              imageThree = "https://images-na.ssl-images-amazon.com/images/I/71e759NeshL._AC_SL1500_.jpg"
              titleThree = "Lint Shaver"
              pathThree = ""
              imageFour = "https://images-na.ssl-images-amazon.com/images/I/61Q6vkpjjjL._AC_SL1500_.jpg"
              titleFour = "USB Type-C"
              pathFour = ""
            />
            <MultiSqaure 
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/71nePsQmsbL._AC_SL1500_.jpg"
              titleOne = "100 Face Masks"
              pathOne = ""
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/71TDJAH2cZL._SL1500_.jpg"
              titleTwo = "KN95 Face Mask"
              pathTwo = ""
              imageThree = "https://images-na.ssl-images-amazon.com/images/I/81s%2B0PW1VbL._AC_SL1500_.jpg"
              titleThree = "Lint Brush"
              pathThree = ""
              imageFour = "https://images-na.ssl-images-amazon.com/images/I/6114qzNg-3L._AC_SL1500_.jpg"
              titleFour = "Wireless Charger"
              pathFour = ""
            />
            <MultiSqaure 
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/71Jzkf1yEzL._AC_SL1000_.jpg"
              titleOne = "Ski Goggles"
              pathOne = ""
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/81g8xShoy6L._AC_SL1500_.jpg"
              titleTwo = "Screen Protector"
              pathTwo = ""
              imageThree = "https://images-na.ssl-images-amazon.com/images/I/61z9pQWzqBL._AC_SL1500_.jpg"
              titleThree = "Cube USB"
              pathThree = ""
              imageFour = "https://images-na.ssl-images-amazon.com/images/I/71z2gtBouWL._AC_SL1500_.jpg"
              titleFour = "iPhone 12 Case"
              pathFour = ""
            />
            <MultiSqaure 
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/71gvMvJKnlL._AC_SL1500_.jpg"
              titleOne = "Strap Band"
              pathOne = ""
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/71LzIB3IsnL._AC_SL1500_.jpg"
              titleTwo = "Exercise Bands"
              pathTwo = ""
              imageThree = "https://images-na.ssl-images-amazon.com/images/I/817ffl64kgL._AC_SL1500_.jpg"
              titleThree = "Envelopes"
              pathThree = "Dual Cam"
              imageFour = "https://images-na.ssl-images-amazon.com/images/I/615HV8SnnEL._AC_SL1494_.jpg"
              titleFour = "Tires"
              pathFour = ""
            />
            <MultiSqaure 
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/61-3exeJAcL._AC_SL1500_.jpg"
              titleOne = "Water Bottle"
              pathOne = ""
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/71L3ebQfPEL._AC_SL1500_.jpg"
              titleTwo = "Phone Mount"
              pathTwo = ""
              imageThree = "https://images-na.ssl-images-amazon.com/images/I/81nKxpIM5PL._AC_SL1500_.jpg"
              titleThree = "Space Heater"
              pathThree = ""
              imageFour = "https://images-na.ssl-images-amazon.com/images/I/81oFd6zcGZL._AC_SL1500_.jpg"
              titleFour = "Waterproof Case"
              pathFour = ""
            />
            <MultiSqaure 
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/715%2BWx%2B%2B3VL._SL1500_.jpg"
              titleOne = "Packing Paper"
              pathOne = ""
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/81dBp-HNo4L._AC_SL1500_.jpg"
              titleTwo = "Scales for Body"
              pathTwo = ""
              imageThree = "https://images-na.ssl-images-amazon.com/images/I/71afDlhQ7UL._AC_SL1500_.jpg"
              titleThree = "Dog Seat Cover"
              pathThree = ""
              imageFour = "https://images-na.ssl-images-amazon.com/images/I/81bW3ucQM2L._AC_SL1500_.jpg"
              titleFour = "Led Strips Lights"
              pathFour = ""
            />
            <MultiSqaure 
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/61JS5FB0VGL._AC_SL1500_.jpg"
              titleOne = "Outlet Splitter"
              pathOne = ""
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/61pzvLEY8NL._AC_SL1500_.jpg"
              titleTwo = "Essential Oils"
              pathTwo = ""
              imageThree = "https://images-na.ssl-images-amazon.com/images/I/51zWj72HHVL._AC_SL1000_.jpg"
              titleThree = "Picture Frame"
              pathThree = ""
              imageFour = "https://images-na.ssl-images-amazon.com/images/I/81X9XR4ZgZL._AC_SL1500_.jpg"
              titleFour = "iPhone Charger"
              pathFour = ""
            />
          </div>
          <div className="electronics__container-flex-1">
            <TwoProductTemplate 
              titleOne = "Plantronics Gaming Headset, RIG 800LX Wireless Gaming Headset for Xbox One with prepaid Dolby Atmos Activation Code Included"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/51H-9TxQszL.jpg"
              pathOne = ""
              priceOne = "149.99"
              titleTwo = "PeohZarr Gaming Headset Xbox One Headset PS4 Headset Aurora Series with Flowing LED Lights 7.1 Surround Sound Crystal Clear Mic Comfy Earmuffs, Headset for Xbox One(Adapter Not Included), PS4, PS5, PC"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/71KZB7I4nIL._AC_SL1500_.jpg"
              pathTwo = ""
              priceTwo = "32.99"
            />
            <TwoProductTemplate 
              titleOne = "Android Tablet 10 Inch, 5G WiFi Tablet with Dual Camera, 16GB Storage, Android 8.1 Tablets PC, Quad-Core Processor, Google Certified, 1280x800 IPS HD Display, Bluetooth, GPS, FM - Black"
              imageOne = "https://m.media-amazon.com/images/I/51SGvI5spSL._AC_SR160,160_.jpg"
              pathOne = ""
              priceOne = "103.49"
              titleTwo = "Android Tablet Pritom 8 inch Android 9.0 Pie Tablet, 2GB RAM, 32GB ROM, Quad Core Processor, HD IPS Screen, 2.0 Front + 8.0 MP Rear Camera, Wi-Fi, Bluetooth, Tablet PC"
              imageTwo = "https://m.media-amazon.com/images/I/41yU3qsH7iL._AC_SR160,160_.jpg"
              pathTwo = ""
              priceTwo = "79.99"
            />
            <TwoProductTemplate 
              titleOne= "Samsung Galaxy Tab A7 10.4 Wi-Fi 32GB Black (SM-T500NZSAXAR)"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/718CLDNap6L._AC_SL1500_.jpg"
              pathOne = ""
              priceOne = "114.01"
              titleTwo = "Samsung Galaxy 8' Tab A Wi-Fi Tablet 64GB (32GB built-in + 32GB SDcard), Silver, SM-T290NZSCXAR (Renewed)"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/81dmNse7o3L._AC_SL1500_.jpg"
              pathTwo = ""
              priceTwo = "127.99"
            />
            <TwoProductTemplate 
              titleOne = "IBENZER New 2020 MacBook Air 13 inch Case M1 A2337 A2179 A1932, Hard Shell Case & Keyboard Cover & Screen Film for Apple Mac Air 13 Retina Display with Touch ID (2018-2020), Crystal Clear, AT13CYCL+2"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/515hRa3Jb8L._AC_SL1000_.jpg"
              pathOne = ""
              priceOne = "12.70"
              titleTwo = "OtterBox SYMMETRY SERIES Case for iPhone Xs & iPhone X - Frustration Free Packaging - BLACK"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/61ES30d3KUL._AC_SL1000_.jpg"
              pathTwo = ""
              priceTwo = "19.30"
            />
            <TwoProductTemplate 
              titleOne = "NETGEAR WiFi Router (R6230) - AC1200 Dual Band Wireless Speed (up to 1200 Mbps) | Up to 1200 sq ft Coverage & 20 Devices | 4 x 1G Ethernet and 1 x 2.0 USB ports"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/51N7ymmoTiL._AC_SL1350_.jpg"
              pathOne = ""
              priceOne = "49.99"
              titleTwo = "Inateck Shockproof Laptop Sleeve Case Briefcase Spill Resistant for 15-15.6 Inch Laptops, Notebooks, Ultrabooks, Netbooks, with Extra Storage Space"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/81Eu5npinAL._AC_SL1500_.jpg"
              pathTwo = ""
              priceTwo = "16.14"
            />
            <TwoProductTemplate 
              titleOne = "KEXIN 32GB Micro SD Card 32 GB Class 10 Ultra Micro SDHC UHS-I Bulk Memory Card C10, U1, 10 Pack Bulk Micro SD Card"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/71Sbm-lDOML._AC_SL1500_.jpg"
              pathOne = ""
              priceOne = "40.79"
              titleTwo = "DOGAIN Stylus Pen for iPad with Palm Rejection, Active Pencil Compatible with (2018-2020) iPad 7th/6th, Pro 12.9 3rd/4th Gen, Air 3rd, Mini 5th, Pro 11, Fine Point Rechargeable (White)"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/71rIs3GQ5UL._AC_SL1500_.jpg"
              pathTwo = ""
              priceTwo = "18.99"
            />
            <TwoProductTemplate 
              titleOne = "OPOLAR Cordless Air Duster for Computer Cleaning, Replaces Compressed Spray Gas Cans, Rechargeable 6000mAH Battery, Powerful 33000 RPM, 10W Fast Charging, Handy and Efficient for Electronics(Blue)"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/51yiM4NB2OL._AC_SL1000_.jpg"
              pathOne = ""
              priceOne = "67.99"
              titleTwo = "Keyboard Case for iPad 8th Gen/7th Gen 10.2 inch, iPad Air 3rd Gen, iPad Pro 10.5-343 DIY/7 Colors Backlit - Detachable Wireless Magnetic Keyboard for iPad 10.2' 8th/7th"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/714T-H1Y5pL._AC_SL1500_.jpg"
              pathTwo = ""
              priceTwo = "55.22"
            />
            <TwoProductTemplate 
              titleOne = "WD 16TB Elements Desktop Hard Drive HDD, USB 3.0, Compatible with PC, Mac, PS4 & Xbox - WDBWLG0160HBK-NESN"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/71MDGnNGWYL._AC_SL1500_.jpg"
              pathOne = ""
              priceOne = "289.99"
              titleTwo = "Rechargeable Wireless Mouse, 2.4Ghz Silent Computer Office Portable Mobile Slim Optical Cordless Mouse with USB Receiver, 3-Level Adjustable DPI for Notebook, Laptop, Computer, MacBook, PC (Black-USB)"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/61b2rXQ0SBL._AC_SL1500_.jpg"
              pathTwo = ""
              priceTwo = "6.92"
            />
            <TwoProductTemplate 
              titleOne = "Mini Computer Stick with Intel Atom x5-Z8350 & Pre-Installed Windows 10 Pro,8GB DDR3L 120GB ROM Fanless PC Stick Support 4K HD, Bluetooth 4.2 and Dual Band WiFi 2.4G/5.0G"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/61xXtK8gSjL._AC_SL1500_.jpg"
              pathOne = ""
              priceOne = "144.88"
              titleTwo = "iPhone Charger AUNC 3PACK 6Feet Long Lightning to USB Charging Cable Fast Connector Data Sync Transfer Cord Compatible with iPhone 11 / Xs Max/X/8/7/Plus/6S/6/SE/5S iPad"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/615evSQ%2Bw2L._SL1500_.jpg"
              pathTwo = ""
              priceTwo = "6.99"
            />
            <TwoProductTemplate 
              titleOne = "BERSEM[2 PACK]Paperfeel Screen protector Compatible with iPad Air 4 (10.9 inch, 2020) / iPad Pro 11 (2020 & 2018 Models),iPad Air 4 /iPad pro 11 Matte PET Film for Drawing Anti-Glare and Paperfeel iPad Pro 11 Screen Protector"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/71hTL0vL5uL._AC_SL1500_.jpg"
              pathOne = ""
              priceOne = "9.99"
              titleTwo = "ASUS ROG Strix B550-F Gaming (WiFi 6) AMD AM4 Zen 3 Ryzen 5000 & 3rd Gen Ryzen ATX Gaming Motherboard (PCIe 4.0, 2.5Gb LAN, BIOS Flashback, HDMI 2.1, Addressable Gen 2 RGB Header and Aura"
              imageTwo = "https://m.media-amazon.com/images/I/81x069mwcbL._AC_UY218_.jpg"
              pathTwo = ""
              priceTwo = "208.19"
            />
          </div>
          <div className="electronics__container-flex-1">
            <TwoProductTemplateTwo 
              titleOne = "GoPro HERO8 Black 4K Waterproof Action Camera - Black"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/71UAtd5yS5L._AC_SL1500_.jpg"
              pathOne = ""
              priceOne = "259.99"
              titleTwo = "Microsoft Xbox One Kinect Sensor Bar"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/51IYAjHuw1L._SL1205_.jpg"
              pathTwo = ""
              priceTwo = "129.99"
            />
            <TwoProductTemplateTwo 
              titleOne = "Apple iMac 21.5in 2.7GHz Core i5 (ME086LL/A) All In One Desktop, 8GB Memory, 1TB Hard Drive, Mac OS X Mountain Lion"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/71pheYd9W0L._AC_SL1500_.jpg"
              pathOne = ""
              priceOne = "549.99"
              titleTwo = "SAMSUNG SM-T290NZKAXAR, Galaxy Tab A 8.0' 32 GB Wifi Android 9.0 Pie Tablet Black 2019"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/41UPtXbP4LL._AC_SL1024_.jpg"
              pathTwo = ""
              priceTwo = "114.05"
            />
            <TwoProductTemplateTwo 
              titleOne= "DJI Phantom 3 Standard Renewed Unit"
              imageOne= "https://m.media-amazon.com/images/I/31WgYH4shYL._AC_UL480_FMwebp_QL65_.jpg"
              pathOne = ""
              priceOne = "599.99"
              titleTwo = "Azio Large Print Keyboard - USB Computer Keyboard with 3 Interchangeable Backlight Colors (KB505U)"
              imageTwo = "https://m.media-amazon.com/images/I/61y1w8KgGjL._AC_UL320_.jpg"
              pathTwo = ""
              priceTwo = "29.99"
            />
            <TwoProductTemplateTwo 
              titleOne = "Anker USB C Hub, PowerExpand 8-in-1 USB C Adapter, with 100W Power Delivery, 4K 60Hz HDMI Port, 10Gbps USB C and 2 USB A Data Ports, Ethernet Port, microSD and SD Card Reader, for MacBook Pro and More"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/61EnKzhYgeL._AC_SL1500_.jpg"
              pathOne = ""
              priceOne = "49.99"
              titleTwo = "Travel Laptop Backpack,Extra Large Anti Theft College School Backpack for Men and Women with USB Charging Port,Water Resistant Big Business Computer Backpack Bag Fit 17 Inch Laptop and Notebook,Black"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/61DlXYCISmL._AC_SL1200_.jpg"
              pathTwo = ""
              priceTwo = "20.36"
            />
            <TwoProductTemplateTwo 
              titleOne = "Video Conference Lighting Kit - Jelly Comb Bicolor LED Light for Video Conference, Photography, Remote Working, Zoom Call, Self Broadcasting and Live Streaming"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/71ju3blZfWL._AC_SL1500_.jpg"
              pathOne = ""
              priceOne = "47.99"
              titleTwo = "NETGEAR 5-Port Gigabit Ethernet Unmanaged PoE Switch (GS305P) - with 4 x PoE @ 55W, Desktop, Sturdy Metal Fanless Housing"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/715vBT2kIEL._AC_SL1500_.jpg"
              pathTwo = ""
              priceTwo = "47.99"
            />
            <TwoProductTemplateTwo 
              titleOne = "Dell SE2419Hx 24' IPS Full HD (1920x1080) Monitor, Black"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/81nSaeP3AvL._AC_SL1500_.jpg"
              pathOne = ""
              priceOne = "129.98"
              titleTwo = "Rii RKM709 2.4 Gigahertz Ultra-Slim Wireless Keyboard and Mouse Combo, Multimedia Office Keyboard for PC, Laptop and Desktop,Business Office"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/61SxzXGRhpL._AC_SL1000_.jpg"
              pathTwo = ""
              priceTwo = "15.29"
            />
            <TwoProductTemplateTwo 
              titleOne = "TP-Link AC4000 Tri-Band WiFi Router (Archer A20) -MU-MIMO, VPN Server, 1.8GHz CPU, Gigabit Ports, Beamforming, Link Aggregation"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/51R6bWeFZaL._AC_SL1000_.jpg"
              pathOne = ""
              priceOne = "147.99"
              titleTwo = "HUION KAMVAS Pro 13 Graphic Drawing Tablet with Screen Full-Laminated Drawing Monitor with Battery-Free Stylus Tilt 8192 Levels Pressure 4 Hot Keys Touch Bar-13.3 inch Pen Display with Stand"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/71DnJGlQO2L._AC_SL1436_.jpg"
              pathTwo = ""
              priceTwo = "158.39"
            />
            <TwoProductTemplateTwo 
              titleOne = "Silverstone IceGem 360, 360mm ARGB AIO Liquid Cooler with 3 x 120mm ARGB Fans, Threadripper TR4, SST-IG360-ARGB"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/61BaQQ-%2BbZL._AC_SL1500_.jpg"
              pathOne = ""
              priceOne = "149.90"
              titleTwo = "Samsung CF390 Series 27 inch FHD 1920x1080 Curved Desktop Monitor for Business, HDMI, VGA, VESA mountable, 3-Year Warranty, TAA (C27F390FHN), Black"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/91mL-OSb40L._AC_SL1500_.jpg"
              pathTwo = ""
              priceTwo = "164.99"
            />
            <TwoProductTemplateTwo 
              titleOne = "Fractal Design Prisma Silent Computer Fan - PWM Control"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/91Ftgyq-k%2BL._AC_SL1500_.jpg"
              pathOne = ""
              priceOne = "58.37"
              titleTwo = "Sceptre IPS 27' Gaming 165Hz 144Hz HDMI DisplayPort FHD LED Monitor, AMD FreeSync FPS RTS Build-in Speakers Machine Black 2020 (E275B-FPT168)"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/71R1489K2AL._AC_SL1500_.jpg"
              pathTwo = ""
              priceTwo = "249.98"
            />
            <TwoProductTemplateTwo 
              titleOne = "Lintelek Fitness Tracker with Heart Rate Monitor, Activity Tracker with Connected GPS, IP67 Waterproof Smart Fitness Band with Step Counter, Calorie Counter, Pedometer for Kids Women and Men"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/51Jsmh7uF1L._AC_SL1001_.jpg"
              pathOne = ""
              priceOne = "20.78"
              titleTwo = "Solo New York Ace Slim Brief Laptop Briefcase, Black"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/41qkWqU5WOL._AC_.jpg"
              pathTwo = ""
              priceTwo = "20.20"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Electronics
