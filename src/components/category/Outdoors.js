import React from 'react';
import ElectronicsProductTemplate from '../ElectricCategory/Category/ElectronicsProductTemplate';
import OutdoorsMenu from '../OutdoorsCategory/OutdoorsMenu';
import '../../styles/Outdoors.scss';
import  SqaureFeatured from './HomePageComponents/SqaureFeatured';
import  CircleFeaturedCategories from './HomePageComponents/CircleFeaturedCategories';
import  FirstFeaturedProduct from './HomePageComponents/FirstFeaturedProduct';
import  SecondFeaturedProduct from './HomePageComponents/SecondFeaturedProduct';
import  MultiSqaure from './HomePageComponents/MultiSqaure';
import  TwoProductTemplate from './HomePageComponents/TwoProductTemplate';
import  TwoProductTemplateTwo from './HomePageComponents/TwoProductTemplateTwo';


function Outdoors() {
  return (
    <div className="products__base">
      <div className="outdoors__container">
        <div className="outdoors__container-heading">
         <OutdoorsMenu 
              category0="Outdoor Clothing" 
              category1="Camping & Hiking"
              category2="Climbing"
              category3="Cycling"
              category4="Scooters, Skates & Skateboards"
              category5="Water Sports"
              category6="Winter Sports"
              category7="Accessories"
              category8="All Outdoor Recreation"
            />
        </div>
        <div className="outdoors__container-flex-grid">
          {/* <div className="outdoors__container-flex-1">
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
            />    
          </div> */}
          <div className="outdoors__container-flex-1">
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
          </div>
          <div className="outdoors__container-flex-1">
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
          <div className="outdoors__container-flex-1">
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
          <div className="outdoors__container-flex-1">
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
          <div className="outdoors__container-flex-1">
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
          <div className="outdoors__container-flex-1">
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
          <div className="outdoors__container-flex-1">
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

export default Outdoors;
