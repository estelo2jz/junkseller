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
          {/* <div className="electronics__container-3-grid">
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Electronics
