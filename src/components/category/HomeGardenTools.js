import React from 'react';
import ElectronicsProductTemplate from '../ElectricCategory/Category/ElectronicsProductTemplate';
import HomeGardenToolsMenu from '../HomeGardenToolsCategory/HomeGardenToolsMenu';
import '../../styles/HomeGardenTools.scss';
import  SqaureFeatured from './HomePageComponents/SqaureFeatured';
import  CircleFeaturedCategories from './HomePageComponents/CircleFeaturedCategories';
import  FirstFeaturedProduct from './HomePageComponents/FirstFeaturedProduct';
import  SecondFeaturedProduct from './HomePageComponents/SecondFeaturedProduct';
import  MultiSqaure from './HomePageComponents/MultiSqaure';
import  TwoProductTemplate from './HomePageComponents/TwoProductTemplate';
import  TwoProductTemplateTwo from './HomePageComponents/TwoProductTemplateTwo';
import  FourSqaureTemplate from './HomePageComponents/FourSqaureTemplate';
import  FourSqaureTwoTemplate from './HomePageComponents/FourSqaureTwoTemplate';


function HomeGardenTools() {
  return (
    <div className="products__base">
      <div className="home-garden-tools__container">
        <div className="home-garden-tools__container-heading">
          <HomeGardenToolsMenu 
              category0="Home" 
              category1="Appliances"
              category2="Arts Crafts & Sewing"
              category3="Bed & Bath"
              category4="Collective & Fine Art"
              category5="Discover"
              category6="Events & Party Supplies"
              category7="Explore Showroom"
              category8="Fine Art"
              category9="Furniture"
              category10="Garden & Outdoor"
              category11="Home Decor"
              category12="Kitchen & Dining"
              category13="Lighting"
              category14="Mattresses"
              category15="Pet Supplies"
              category16="Shop by Room"
              category17="Storage & Organization"
          />
        </div>
        <div className="home-garden-tools__container-flex-grid">
          {/* <div className="home-garden-tools__container-flex-1">
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
          <div className="home-garden-tools__container-flex-1">
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
          <div className="home-garden-tools__container-flex-1">
            <SqaureFeatured 
              image = "https://images-na.ssl-images-amazon.com/images/I/91Ozrg4hOaL._AC._SR360,460.jpg"
              title = "Organization"
              path = "/"
            />
            <SqaureFeatured 
              image = "https://m.media-amazon.com/images/I/71PTU3Ov19L._AC_UL320_.jpg"
              title = "Home Office"
              path = "/"
            />
            <SqaureFeatured 
              image = "https://m.media-amazon.com/images/I/41uLKOIdU6L._SY250_.jpg"
              title = "Groceries"
              path = "/"
            />
            {/* <SqaureFeatured 
              image = ""
              title = "Prime Video"
              path = "/"
            /> */}
            <SqaureFeatured 
              image = "https://m.media-amazon.com/images/I/618U0twxesL._AC_UL320_.jpg"
              title = "Bedding + Bath"
              path = "/"
            />
            <SqaureFeatured 
              image = "https://images-na.ssl-images-amazon.com/images/I/41WwcdNDHZL._AC_SX184_.jpg"
              title = "Remote Learning"
              path = "/"
            />
            <SqaureFeatured 
              image = "https://m.media-amazon.com/images/I/71ZKVz6gY9L._AC_UL320_.jpg"
              title = "Kitchen"
              path = "/"
            />
            <SqaureFeatured 
              image = "https://images-na.ssl-images-amazon.com/images/I/31X1HDNX0NL._AC_SX184_.jpg"
              title = "Amazon Devices"
              path = "/"
            />
            {/* <MultiSqaure 
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
            /> */}
            {/* <FourSqaureTemplate
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/61KkFOAd4QL._AC._SR360,460.jpg" 
              pathOne = ""
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/91Ozrg4hOaL._AC._SR360,460.jpg"
              pathTwo = ""
              imageThree = "https://images-na.ssl-images-amazon.com/images/I/91GokC2MMkL._AC._SR360,460.jpg"
              pathThree = ""
              imageFour = "https://images-na.ssl-images-amazon.com/images/I/81jofg5REML._AC._SR360,460.jpg"
              pathFour = ""
            />
            <FourSqaureTemplate
              imageOne = "https://m.media-amazon.com/images/I/71bsvc0BiWL._AC_UL320_.jpg" 
              pathOne = ""
              imageTwo = "https://m.media-amazon.com/images/I/81k0iuvJCqL._AC_UL320_.jpg"
              pathTwo = ""
              imageThree = "https://m.media-amazon.com/images/I/81OQuVKx+lL._AC_UL320_.jpg"
              pathThree = ""
              imageFour = "https://m.media-amazon.com/images/I/81W9BzQJJ-L._AC_UL320_.jpg"
              pathFour = ""
            /> */}
                        {/* <FourSqaureTemplate
              imageOne = "" 
              pathOne = ""
              imageTwo = ""
              pathTwo = ""
              imageThree = ""
              pathThree = ""
              imageFour = ""
              pathFour = ""
            />
                        <FourSqaureTemplate
              imageOne = "" 
              pathOne = ""
              imageTwo = ""
              pathTwo = ""
              imageThree = ""
              pathThree = ""
              imageFour = ""
              pathFour = ""
            /> */}
            {/* <MultiSqaure 
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
            /> */}
          </div>
          <div className="home-garden-tools__container-flex-1">
           <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/31+QSctWZ+L.jpg"
              path = "/home&garden&tools/furniture"
              title = "SOFAS & COUCHES"
            />
            <FirstFeaturedProduct 
              image = "https://m.media-amazon.com/images/I/81t9pehCKqL._AC_UL320_.jpg"
              path = "/home&garden&tools/furniture"
              title = "DRESSERS"
            />
            <FirstFeaturedProduct 
              image = "https://m.media-amazon.com/images/I/81A8jwEfboL._AC_UL320_.jpg"
              path = "/home&garden&tools/furniture"
              title = "ACCENT CHAIRS"
            />
            <FirstFeaturedProduct 
              image = "https://m.media-amazon.com/images/I/71ppUQc4aIL._AC_UL320_.jpg"
              path = "/home&garden&tools/furniture"
              title = "DESKS"
            />
            <FirstFeaturedProduct 
              image = "https://m.media-amazon.com/images/I/510+sYlstpL._AC_UL320_.jpg"
              path = "/home&garden&tools/furniture"
              title = "BEDS"
            />
            <FirstFeaturedProduct 
              image = "https://m.media-amazon.com/images/I/61ZJr+KAfmL._AC_UL320_.jpg"
              path = "/home&garden&tools/furniture"
              title = "TABLE & CHAIR SETS"
            />
            <FirstFeaturedProduct 
              image = "https://m.media-amazon.com/images/I/719F2WOAsbL._AC_UL320_.jpg"
              path = "/home&garden&tools/furniture"
              title = "LIVING ROOM TABLES"
            />
            <FirstFeaturedProduct 
              image = "https://m.media-amazon.com/images/I/61xZg7gcebL._AC_UL320_.jpg"
              path = "/home&garden&tools/furniture"
              title = "TV & MEDIA"
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/41DvAEGV4UL.jpg"
              path = "/home&garden&tools/furniture"
              title = "RUGS"
            />
            <FirstFeaturedProduct 
              image = "https://m.media-amazon.com/images/I/81YTgnjqNyL._AC_UL320_.jpg"
              path = "/home&garden&tools/furniture"
              title = "MATTRESSES"
            />
            <FirstFeaturedProduct 
              image = "https://m.media-amazon.com/images/I/81uEXKIpQOL._AC_UL320_.jpg"
              path = "/home&garden&tools/furniture"
              title = "DESK CHAIRS"
            />
            <FirstFeaturedProduct 
              image = "https://m.media-amazon.com/images/I/81u-YeN4FfL._AC_UL320_.jpg"
              path = "/home&garden&tools/furniture"
              title = "NIGHTSTANDS"
            />
            <FirstFeaturedProduct 
              image = "https://m.media-amazon.com/images/I/91ByGooienL._AC_UL320_.jpg"
              path = "/home&garden&tools/furniture"
              title = "HEADBOARDS"
            />
            <FirstFeaturedProduct 
              image = "https://m.media-amazon.com/images/I/71V-NjoyhCL._AC_UL320_.jpg"
              path = "/home&garden&tools/furniture"
              title = "KIDS' FURNITURE"
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/51xCy2oXMDL._AC_SX184_.jpg"
              path = "/home&garden&tools/furniture"
              title = "NURSERY FURNITURE"
            />
            <FirstFeaturedProduct 
              image = "https://m.media-amazon.com/images/I/71YlAZHLegL._AC_UL320_.jpg"
              path = "/home&garden&tools/furniture"
              title = "OTTOMANS"
            />
            <FirstFeaturedProduct 
              image = "https://m.media-amazon.com/images/I/81dLlRDpFNL._AC_UL320_.jpg"
              path = "/home&garden&tools/furniture"
              title = "HOME BAR FURNITURE"
            />
            <FirstFeaturedProduct 
              image = "https://m.media-amazon.com/images/I/61HpJ+J6bDL._AC_UL320_.jpg"
              path = "/home&garden&tools/furniture"
              title = "KITCHEN ISLANDS & CARTS"
            />
            <FirstFeaturedProduct 
              image = "https://m.media-amazon.com/images/I/71ilnguOf3L._AC_UL320_.jpg"
              path = "/home&garden&tools/furniture"
              title = "DINING TABLES"
            />
            <FirstFeaturedProduct 
              image = "https://m.media-amazon.com/images/I/813DAN0zlsL._AC_UL320_.jpg"
              path = "/home&garden&tools/furniture"
              title = "DINING CHAIRS"
            />
          </div>
          <div className="home-garden-tools__container-flex-1">
          <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/51zlBb39ZiL.jpg"
              path = "/home&garden&tools/homedecor"
              title = "WALL ART"             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/51Z6M0P0lYL._AC_SX184_.jpg"
              path = "/home&garden&tools/homedecor"
              title = "HOME ACCENTS"             
             />
            <SecondFeaturedProduct
              image = "https://m.media-amazon.com/images/I/81Ji9T7owuL._AC_UL320_.jpg"
              path = "/home&garden&tools/homedecor"
              title = "ARTIFICIAL PLANTS"             
             />
            <SecondFeaturedProduct
              image = "https://m.media-amazon.com/images/I/71bsvc0BiWL._AC_UL320_.jpg"
              path = "/home&garden&tools/homedecor"
              title = "FRAMES"             
             />
            <SecondFeaturedProduct
              image = "https://m.media-amazon.com/images/I/61tFd6g62UL._AC_UL320_.jpg"
              path = "/home&garden&tools/homedecor"
              title = "MIRRORS"             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/41Gf9uU826L.jpg"
              path = "/home&garden&tools/homedecor"
              title = "RUGS"             
             />
            <SecondFeaturedProduct
              image = "https://m.media-amazon.com/images/I/71LQxLJrNcL._AC_UL320_.jpg"
              path = "/home&garden&tools/homedecor"
              title = "DECORATIVE PILLOWS"             
             />
            <SecondFeaturedProduct
              image = "https://m.media-amazon.com/images/I/618VTD2AbSL._AC_UL320_.jpg"
              path = "/home&garden&tools/homedecor"
              title = "LIGHTING"             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/51XK5EssroL._AC_SX184_.jpg"
              path = "/home&garden&tools/homedecor"
              title = "FLOATING SHELVES"             
             />
            <SecondFeaturedProduct
              image = "https://m.media-amazon.com/images/I/81dqSeWJxaL._AC_UL320_.jpg"
              path = "/home&garden&tools/homedecor"
              title = "CURTAINS"             
             />
            <SecondFeaturedProduct
              image = "https://m.media-amazon.com/images/I/81l3V2WkQ0L._AC_UL320_.jpg"
              path = "/home&garden&tools/homedecor"
              title = "PLANTERS"             
             />
            <SecondFeaturedProduct
              image = "https://m.media-amazon.com/images/I/71b9icxgIgL._AC_UL320_.jpg"
              path = "/home&garden&tools/homedecor"
              title = "CLOCKS"             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/61N+Ogu21UL._AC._SR360,460.jpg"
              path = "/home&garden&tools/homedecor"
              title = "THROWS"             
             />
            <SecondFeaturedProduct
              image = "https://m.media-amazon.com/images/I/61dUirARcZL._AC_UL320_.jpg"
              path = "/home&garden&tools/homedecor"
              title = "FRAGRANCES"             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/71JgAHbevKL._AC._SR360,460.jpg"
              path = "/home&garden&tools/homedecor"
              title = "CANDLES"             
             />
            <SecondFeaturedProduct
              image = "https://m.media-amazon.com/images/I/41dqY1np2yL._AC_UL320_.jpg"
              path = "/home&garden&tools/homedecor"
              title = "VASES"             
             />
          </div>
          {/* <div className="home-garden-tools__container-flex-1">
          <TwoProductTemplate 
              titleOne = "Home Redefined Beautiful Modern Elegant 18'x12' Navy/Gold Brass Rectangle Shagreen Decorative"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/31LKc8zOx0L.jpg"
              pathOne = ""
              priceOne = "21.99"
              titleTwo = "Furinno 11157GYW/BK Andrey End Table Nightstand with Bin Drawer, 1-Pack, French Oak Grey"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/41CKRcS1vBL.jpg"
              pathTwo = ""
              priceTwo = "21.76"
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
          <div className="home-garden-tools__container-flex-1">
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
          </div> */}
          <div className="home-garden-tools__container-flex-1">
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

export default HomeGardenTools;
