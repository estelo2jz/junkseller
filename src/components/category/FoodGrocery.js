import React from 'react';
import ElectronicsProductTemplate from '../ElectricCategory/Category/ElectronicsProductTemplate';
import FoodGroceryMenu from '../FoodGroceryCategory/FoodGroceryMenu';
import '../../styles/FoodGrocery.scss';

import  SqaureFeatured from './HomePageComponents/SqaureFeatured';
import  CircleFeaturedCategories from './HomePageComponents/CircleFeaturedCategories';
import  FirstFeaturedProduct from './HomePageComponents/FirstFeaturedProduct';
import  SecondFeaturedProduct from './HomePageComponents/SecondFeaturedProduct';
import  MultiSqaure from './HomePageComponents/MultiSqaure';
import  TwoProductTemplate from './HomePageComponents/TwoProductTemplate';
import  TwoProductTemplateTwo from './HomePageComponents/TwoProductTemplateTwo';


function FoodGrocery() {
  return (
    <div className="products__base">
      <div className="grocery-food__container">
        <div className="grocery-food__container-heading">
          <FoodGroceryMenu 
              category0="Grocery & Gourmet Food" 
              category1="Fresh"
              category2="Whole Foods"
              category3="Pantry"
              // category4="Launchpad Food"
              // category5="Subscribe & Save"
              // category6="Wickedly Prime"
              // category7="Pay with SNAP EBT"
            />
        </div>
        <div className="grocery-food__container-flex-grid">
          <div className="grocery-food__container-flex-1">
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={120.99}
              rating={4}
              image=""
            />
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={119.99}
              rating={4}
              image=""
            />
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={119.99}
              rating={4}
              image=""
            />
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={119.99}
              rating={4}
              image=""
            />
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={119.99}
              rating={4}
              image=""
            />
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={119.99}
              rating={4}
              image=""
            />
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={119.99}
              rating={4}
              image=""
            />
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={119.99}
              rating={4}
              image=""
            />  \ 
          </div>
          <div className="grocery-food__container-flex-1">
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
          <div className="grocery-food__container-flex-1">
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
          <div className="grocery-food__container-flex-1">
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
          <div className="grocery-food__container-flex-1">
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
          <div className="grocery-food__container-flex-1">
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
          <div className="grocery-food__container-flex-1">
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
          <div className="grocery-food__container-flex-1">
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

export default FoodGrocery;
