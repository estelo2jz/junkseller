import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.scss';
import Product from './Product';
import Slider from './Slider';
import ComingSoon from './ComingSoon';
import FullFeatured from './category/HomePageComponents/FullFeaturedTemplate';
import OneFeatured from './category/HomePageComponents/OneFeaturedTemplate';
import  SqaureFeatured from './category/HomePageComponents/SqaureFeatured';
import  FullScreenFeaturedCategories from './category/HomePageComponents/FullScreenFeaturedCategories';
import  SingleProductTemplate from './category/HomePageComponents/SingleProductTemplate';

function HomeNavbar({path, title}) {
  return (
    <div className="home-navbar__container">
      <Link  className="home-navbar__link" to={path}>
        <p>{title}</p>
      </Link>
    </div>
  )
}

{/* <OneFeatured 
  heading = ""
  moreInfo = ""
  image = ""
  // title = "Apple Products"
  path = "/"
/> */}

{/* <FullFeatured 
  heading = ""
  moreInfo = ""
  imageOne = ""
  titleOne = "Women"
  pathOne = ""
  imageTwo = ""
  titleTwo = "Men"
  pathTwo = ""
  imageThree = ""
  titleThree = "Kids"
  pathThree = ""
  imageFour = ""
  titleFour = "All"
  pathFour = ""
/> */}

function Home() {
  return (
    <div className="home__container">
      <div className="home-nav__container">
        <HomeNavbar 
          title = "All" 
          path = "/"
        />
        <HomeNavbar 
          title = "Best.Sellers" 
          path = "/"
        />
        <HomeNavbar 
          title = "Today's.Deals" 
          path = "/"
        />
        <HomeNavbar 
          title = "Prime" 
          path = "/"
        />
        <HomeNavbar 
          title = "Customer.Service" 
          path = "/"
        />
        <HomeNavbar 
          title = "New.Release" 
          path = "/"
        />
        <HomeNavbar 
          title = "Books" 
          path = "/"
        />
        <HomeNavbar 
          title = "Fashion" 
          path = "/"
        />
        <HomeNavbar 
          title = "Kindle.Books" 
          path = "/"
        />
        <HomeNavbar 
          title = "Gifts.Cards" 
          path = "/"
        />
        <HomeNavbar 
          title = "Find.A.Gift" 
          path = "/"
        />
        <HomeNavbar 
          title = "Toys.&.Games" 
          path = "/"
        />
        <HomeNavbar 
          title = "Amazon.Home" 
          path = "/"
        />
        <HomeNavbar 
          title = "Computers" 
          path = "/"
        />
        <HomeNavbar 
          title = "Pharmacy" 
          path = "/"
        />
        <HomeNavbar 
          title = "Sell" 
          path = "/"
        />
        <HomeNavbar 
          title = "Video.Games" 
          path = "/"
        />
        <HomeNavbar 
          title = "Coupons" 
          path = "/"
        />        
        <HomeNavbar 
          title = "Spruce.Up.For.Spring" 
          path = "/"
        />
      </div>
      <div className="home__featured">
        <OneFeatured 
          heading = "Shop with coins"
          moreInfo = "Learn more"
          image = "https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2021/Cash/Coin/Coin_US_EN_379x304_20210108._SY304_CB411735909_.jpg"
          // title = "Apple Products"
          path = "/"
        />
        <FullFeatured 
          heading = "The graphic t-shirt shop"
          moreInfo = "Discover standout styles"
          imageOne = "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/N2FkMDllZDUt/N2FkMDllZDUt-OTVjYjk5YTAt-w186._SY116_CB657700031_.jpg"
          titleOne = "Women"
          pathOne = ""
          imageTwo = "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MzQ5NzI5NmIt-w186._SY116_CB657700031_.jpg"
          titleTwo = "Men"
          pathTwo = ""
          imageThree = "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MzJmNjQ5YzEt-w186._SY116_CB657700031_.jpg"
          titleThree = "Kids"
          pathThree = ""
          imageFour = "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/N2FkMDllZDUt/N2FkMDllZDUt-NTU5YjZhNmEt-w186._SY116_CB657700031_.jpg"
          titleFour = "All"
          pathFour = ""
        />
        <OneFeatured 
          heading = "Fresh take on classic décor"
          moreInfo = "Shop Modern Traditional style"
          image = "https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/YmFiODU5N2Qt/YmFiODU5N2Qt-NGZlNTNkYWIt-w379._SY304_CB660187866_.jpg"
          // title = "Apple Products"
          path = "/"
        />
        <OneFeatured 
          heading = "Easy upgrade, big impact"
          moreInfo = "Explore more ideas"
          image = "https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/YmJlODU1ZjMt/YmJlODU1ZjMt-MzQyMWYyZmEt-w379._SY304_CB660054941_.jpg"
          // title = "Apple Products"
          path = "/"
        />
        <OneFeatured 
          heading = "This week's most-loved"
          moreInfo = "Shop all"
          image = "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MGY0YzMzNTMt/MGY0YzMzNTMt-MmJiMDY3YzQt-w379._SY304_CB659186407_.jpg"
          // title = "Apple Products"
          path = "/"
        />
        <OneFeatured 
          heading = "Create a retreat"
          moreInfo = "Shop spa-inspired bath"
          image = "https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/YmJlODU1ZjMt/YmJlODU1ZjMt-NWQ5MjJmN2Mt-w379._SY304_CB659854329_.jpg"
          // title = "Apple Products"
          path = "/"
        />  
        <OneFeatured 
          heading = "Discounted overstock items"
          moreInfo = "Shop Outlet"
          image = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_H_379x304_B07HTD4C43_06d8dae0._SY304_CB406458923_.jpg"
          // title = "Apple Products"
          path = "/"
        />
        <FullFeatured 
          heading = "Facemasks under $13"
          moreInfo = "Shop adult & child 4-packs"
          imageOne = "https://images-na.ssl-images-amazon.com/images/I/71lCeOGZKGL._AC_UL160_SR160,160_.jpg"
          titleOne = ""
          pathOne = ""
          imageTwo = "https://m.media-amazon.com/images/I/61hEZhkks0L._AC_UL320_.jpg"
          titleTwo = ""
          pathTwo = ""
          imageThree = "https://images-na.ssl-images-amazon.com/images/I/818ygkiGTuL._AC_UL160_SR160,160_.jpg"
          titleThree = ""
          pathThree = ""
          imageFour = "https://images-na.ssl-images-amazon.com/images/I/81ijMbCIacL._AC_UL160_SR160,160_.jpg"
          titleFour = ""
          pathFour = ""
        />
        <OneFeatured 
          heading = "Shop candy best sellers"
          moreInfo = "See more"
          image = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Consumables/XCM_CUTTLE_1268450_1378421_US_3381196_379x304_1X_en_US._SY304_CB404451767_.jpg"
          // title = "Apple Products"
          path = "/"
        />
        <OneFeatured 
          heading = "Hair removal best sellers"
          moreInfo = "See more"
          image = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Consumables/XCM_CUTTLE_1268445_1378399_US_3381175_379x304_1X_en_US._SY304_CB404453045_.jpg"
          // title = "Apple Products"
          path = "/"
        />
        <FullFeatured 
          heading = "Unique, new products"
          moreInfo = "See more from Amazon Launchpad"
          imageOne = "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/gateway/2021/midMarch_unique_186x116_B07FBQ3PCF_electronics._SY116_CB660425093_.jpg"
          titleOne = "Electronics"
          pathOne = ""
          imageTwo = "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/gateway/2021/midMarch_uniquenew_186x116_B0849Q133Y_grocery._SY116_CB660425093_.jpg"
          titleTwo = "Grocery"
          pathTwo = ""
          imageThree = "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/gateway/2021/midMarch_unique_186x116_B08V1H57G1_health._SY116_CB660425093_.jpg"
          titleThree = "Beauty & Health"
          pathThree = ""
          imageFour = "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/gateway/2021/midMarch_uniquenew_186x116_B07L4ZQMDX_home_revised._SY116_CB658918238_.jpg"
          titleFour = "Home"
          pathFour = ""
        />
        <OneFeatured 
          heading = "Pro Salon & Spa"
          moreInfo = "Discover more"
          image = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Consumables/XCM_CUTTLE_1305322_1561945_US_3654128_379x304_1X_en_US._SY304_CB662317373_.jpg"
          // title = "Apple Products"
          path = "/"
        />
      </div>
      <div className="home__recommend-two-container">
        <div className="home__heading-two">
          <p>Celebrate St. Patrick's Day</p>
          <Link to="/">Save on all things green</Link>
        </div>
        <div className="home__recommend-products">
          <FullScreenFeaturedCategories 
            image = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/XCM_Manual_1306428_1566556_US_SPD21_us_gw_pc_bubble_shoveler_2x_us_en_Accessories_3674342_200x200_1X_en_US._CB659860580_.jpg"
            path = ""
            // title = "Binoculars"
          />
          <FullScreenFeaturedCategories 
            image = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/XCM_Manual_1306428_1566532_US_SPD21_us_gw_pc_bubble_shoveler_2x_us_en_Celebration_3674330_200x200_1X_en_US._CB659860580_.jpg"
            path = ""
            // title = "Binoculars"
          />
          <FullScreenFeaturedCategories 
            image = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/XCM_Manual_1306428_1566552_US_SPD21_us_gw_pc_bubble_shoveler_2x_us_en_Home_3674340_200x200_1X_en_US._CB659860580_.jpg"
            path = ""
            // title = "Binoculars"
          />
          <FullScreenFeaturedCategories 
            image = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/XCM_Manual_1306428_1566564_US_SPD21_us_gw_pc_bubble_shoveler_2x_us_en_Handmade_3674346_200x200_1X_en_US._CB659860580_.jpg"
            path = ""
            // title = "Binoculars"
          />
          <FullScreenFeaturedCategories 
            image = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/XCM_Manual_1306428_1566544_US_SPD21_us_gw_pc_bubble_shoveler_2x_us_en_Snacks_3674336_200x200_1X_en_US._CB659860580_.jpg"
            path = ""
            // title = "Binoculars"
          />
          <FullScreenFeaturedCategories 
            image = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/XCM_Manual_1306428_1566536_US_SPD21_us_gw_pc_bubble_shoveler_2x_us_en_Apparel_3674332_200x200_1X_en_US._CB659860580_.jpg"
            path = ""
            // title = "Binoculars"
          />
          <FullScreenFeaturedCategories 
            image = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/XCM_Manual_1306428_1566540_US_SPD21_us_gw_pc_bubble_shoveler_2x_us_en_Pets_3674334_200x200_1X_en_US._CB659860580_.jpg"
            path = ""
            // title = "Binoculars"
          />
          <FullScreenFeaturedCategories 
            image = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/XCM_Manual_1306428_1566560_US_SPD21_us_gw_pc_bubble_shoveler_2x_us_en_Toys_3674344_200x200_1X_en_US._CB659860580_.jpg"
            path = ""
            // title = "Binoculars"
          />
          <FullScreenFeaturedCategories 
            image = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/XCM_Manual_1306428_1566548_US_SPD21_us_gw_pc_bubble_shoveler_2x_us_en_Books_3674338_200x200_1X_en_US._CB659860580_.jpg"
            path = ""
            // title = "Binoculars"
          />
        </div>
      </div>
      <div className="home__recommend-one-container">
        <div className="home__heading">
          <p>Recommended for you from our brands</p>
        </div>
        <div className="home__recommend-products">
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/41eRim-d6eL._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/51GEV2IWxML._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/51NGOMZ5eaL._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/51gY6O8R6WL._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/41KHqKtbC7L._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/31CBt27wrcL._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/51oBED+rPaL._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/411va8Rt-TL._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/51QspPR6wjL._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/51yF6FOSgNL._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/51xgSJx1rNL._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/51Ref-v9u0L._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/51CaY-S9NlL._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/414UFDjBR6L._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/41InryOpl3L._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/41bI0TyGnJL._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/51Cj9voW1fL._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/51ic2bnbt9L._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/41rXvuNUcJL._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/31vsOHgNm0L._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/41PM8lDNd-L._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/413eUc7oOcL._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/21E1oit0nwL._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/51eYYMIuFaL._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/51NAc8MbcPL._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/51jXNO9zWeL._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/31XOK+a9JNL._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
        </div>
      </div>
      <div className="home__recommend-two-container">
        <div className="home__heading-two">
          <p>Trending deals</p>
          <Link to="/">See all deals</Link>
        </div>
        <div className="home__recommend-products">
          <SingleProductTemplate 
            image = "https://images-na.ssl-images-amazon.com/images/I/51r6VWtqF6L._AC_SY200_.jpg"
            title = "Cutting Birthday Cake Toys,Pretend Play for Kids,Light and Music 82Pcs DIY Pretend Cake Set with Candles,Dessert,Dount,Educational Toys for Kids, Play Food Complete Kids Toy Set"
            price = "16.98"
            originalPrice = "24.99"
            path = "/"
          />
          <SingleProductTemplate 
            image = "https://images-na.ssl-images-amazon.com/images/I/410RaTV24tL._AC_SY200_.jpg"
            title = "Mellanni Bed Sheet Set"
            price = "25.97"
            originalPrice = "32.27"
            path = "/"
          />
          <SingleProductTemplate 
            image = "https://images-na.ssl-images-amazon.com/images/I/613rFMwkvPL._AC_SL1500_.jpg"
            title = "Wireless Pro Controller Gamepad Joypad Remote Joystick for Switch Console"
            price = "22.94"
            originalPrice = "49.99"
            path = "/"
          />
          <SingleProductTemplate 
            image = "https://images-na.ssl-images-amazon.com/images/I/71gtHnQGfQL._AC_SL1500_.jpg"
            title = "TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control with Wireless Charging Case IPX8 Waterproof TWS Stereo Earphones in-Ear Built-in Mic"
            price = "25.99"
            originalPrice = "59.99"
            path = "/"
          />
          <SingleProductTemplate 
            image = "https://images-na.ssl-images-amazon.com/images/I/71Y-g9y6L6L._AC_SL1500_.jpg"
            title = "MOOSOO Robot Vacuum - Wi-Fi Connected, 2000Pa Suction, Smart Gyroscope Navigation, Works with Alexa & Google Assistant, Quiet, Thin Robotic Vacuum"
            price = "151.08"
            originalPrice = "189.99"
            path = "/"
          />
          <SingleProductTemplate 
            image = "https://images-na.ssl-images-amazon.com/images/I/71Bi1KCH88L._AC_SL1500_.jpg"
            title = "EZORKAS 9 Dimmable Levels Grow Light with 3 Modes Timing Function for Indoor Plants"
            price = "27.99"
            originalPrice = "49.99"
            path = "/"
          />
          <SingleProductTemplate 
            image = "https://images-na.ssl-images-amazon.com/images/I/81lngRhMsSL._AC_SL1500_.jpg"
            title = "JUMELLA Lawn Mower Bubble Machine for Kids - Automatic Bubble Mower with Music, Baby Activity Walker for Outdoor, Push Toys for Toddler, Christmas Birthday"
            price = "18.69"
            originalPrice = "34.99"
            path = "/"
          />
          <SingleProductTemplate 
            image = "https://images-na.ssl-images-amazon.com/images/I/71GdlYQC1UL._AC_SL1100_.jpg"
            title = "oaskys King Mattress Pad Cover Cooling Mattress Topper Cotton Top Pillow Top with Down Alternative Fill (8-21”Fitted Deep Pocket King Size)"
            price = "50.91"
            originalPrice = "89.99"
            path = "/"
          />
          <SingleProductTemplate 
            image = "https://images-na.ssl-images-amazon.com/images/I/91b8MFLjCEL._AC_SL1500_.jpg"
            title = "Ginsco 580 pcs 2:1 Heat Shrink Tube 6 Colors 11 Sizes Tubing Set Combo Assorted Sleeving Wrap Cable Wire Kit for DIY"
            price = "6.45"
            originalPrice = "15.99"
            path = "/"
          />
          <SingleProductTemplate 
            image = "https://images-na.ssl-images-amazon.com/images/I/81wymT49GzL._AC_SL1500_.jpg"
            title = "Homemaid Living Bamboo 3 Tier Shoe Rack Bench, Premium Shoe Organizer or Entryway Bench, Perfect for Shoe Cubby, Entry Bench, Bathroom Bench, Entryway"
            price = "33.99"
            originalPrice = "39.99"
            path = "/"
          />             
          <SingleProductTemplate 
            image = "https://images-na.ssl-images-amazon.com/images/I/61L%2Br3rmVjL._AC_SL1500_.jpg"
            title = "Baby Monitor, Conico 1080P Home Security Camera with Sound Motion Detection IR Night Vision, Home Camera with 2- Way Audio 8X Zoom, WiFi Camera Cloud"
            price = "16.99"
            originalPrice = "25.99"
            path = "/"
          />
          <SingleProductTemplate 
            image = "https://images-na.ssl-images-amazon.com/images/I/71noEO--T2L._AC_SL1500_.jpg"
            title = "Elvira Half Gallon/64oz Motivational Time Marker Water Bottle with Straw & Protective Silicone Boot, BPA Free Anti-slip Leakproof for Fitness, Gym"
            price = "15.99"
            originalPrice = "20.99"
            path = "/"
          />
          <SingleProductTemplate 
            image = "https://images-na.ssl-images-amazon.com/images/I/617KNdmEjzL._AC_SL1500_.jpg"
            title = "Sephia SP3060 Earbuds, Wired in-Ear Headphones with Tangle-Free Cord, Noise Isolating, Bass Driven Sound, Metal Earphones, Carry Case, Ear Bud Tips"
            price = "7.32"
            originalPrice = "14.95"
            path = "/"
          />
          <SingleProductTemplate 
            image = "https://images-na.ssl-images-amazon.com/images/I/71tri05%2BNhL._AC_SL1000_.jpg"
            title = "Sun-E 2.5 Inch Owl Pot Ceramic Flowing Glaze Base Serial Set Succulent Plant Pot Cactus Plant Pot Flower Pot Container Planter Bonsai Pots with A Hole Idea"
            price = "13.59"
            originalPrice = "17.99"
            path = "/"
          />
          <SingleProductTemplate 
            image = "https://images-na.ssl-images-amazon.com/images/I/71Fr9XWE3pL._SL1440_.jpg"
            title = "BariWise High Protein Hot Cocoa - Instant Low-Carb, Low Calorie Hot Chocolate Mix with 15g Protein - Mint (7 Count)"
            price = "12.74"
            originalPrice = "21.56"
            path = "/"
          />
        </div>
      </div>
      <div className="home__featured">
      <OneFeatured 
          heading = "Shop makeup best sellers"
          moreInfo = "See more"
          image = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Beauty_Mass_/XCM_Manual_ORIGIN_1269603_1384212_US_us_beauty_traffic_drivers_inclusive_images_us_en_3415269_379x304_1X_en_US._SY304_CB403256493_.jpg"
          // title = "Apple Products"
          path = "/"
        />
        <OneFeatured 
          heading = "Catch up on repairs"
          moreInfo = "Shop now"
          image = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/XCM_Manual_1308931_1576930_US_GRFWW21_us_gw_pc_single_category_card_1x_us_en_3693511_379x304_2X_en_US._SY304_CB658930980_.jpg"
          // title = "Apple Products"
          path = "/"
        />
                <OneFeatured 
          heading = "Women change-makers"
          moreInfo = "Learn more"
          image = "https://images-na.ssl-images-amazon.com/images/G/01/kindle/Events/2021/WHM/Flexible_Desktop__Cat_Card_1X_CSB._SY304_CB658877038_.jpg"
          // title = "Apple Products"
          path = "/"
        />
        <OneFeatured 
          heading = "Curated by Camila"
          moreInfo = "See more on Handmade"
          image = "https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NGI0YzVjYTIt/NGI0YzVjYTIt-ZGFjNTI5ZjAt-w379._SY304_CB659519954_.jpg"
          // title = "Apple Products"
          path = "/"
        />
        <FullFeatured 
          heading = "Make your kitchen sparkle"
          moreInfo = "Shop now"
          imageOne = "https://images-na.ssl-images-amazon.com/images/I/71rrCN81niL._AC_SL1001_.jpg"
          titleOne = ""
          pathOne = ""
          imageTwo = "https://images-na.ssl-images-amazon.com/images/I/61rwOgyVD7L._AC_SL1500_.jpg"
          titleTwo = ""
          pathTwo = ""
          imageThree = "https://images-na.ssl-images-amazon.com/images/I/91yxnBUBjmL._AC_SL1500_.jpg"
          titleThree = ""
          pathThree = ""
          imageFour = "https://images-na.ssl-images-amazon.com/images/I/81A0NmSsp9L._AC_SL1500_.jpg"
          titleFour = ""
          pathFour = ""
        />
        <OneFeatured 
          heading = "Amp up your gym"
          moreInfo = "Shop more"
          image = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/XCM_Manual_1308931_1576915_US_GRFWW21_us_gw_pc_single_category_card_2x_us_en_3692634_379x304_1X_en_US._SY304_CB660389416_.jpg"
          // title = "Apple Products"
          path = "/"
        />
        <OneFeatured 
          heading = "$3 off Echo Wall CLock"
          moreInfo = "Learn more"
          image = "https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MWExYmNiZjQt/MWExYmNiZjQt-OGJmMmI1YzQt-w379._SY304_CB657515536_.jpg"
          // title = "Apple Products"
          path = "/"
        />

        <OneFeatured 
          heading = "Celebrate St. Patrick's Day"
          moreInfo = "Explore now"
          image = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/XCM_Manual_1306417_1566504_US_SPD21_us_gw_pc_single_category_card_2x_us_en_r1_3681806_379x304_1X_en_US._SY304_CB659856303_.jpg"
          // title = "Apple Products"
          path = "/"
        />
        <OneFeatured 
          heading = "Hair removal best sellers"
          moreInfo = "See more"
          image = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Consumables/XCM_CUTTLE_1268445_1378399_US_3381175_379x304_1X_en_US._SY304_CB404453045_.jpg"
          // title = "Apple Products"
          path = "/"
        />
        <OneFeatured 
          heading = "Skin care best sellers"
          moreInfo = "See more"
          image = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Beauty_Mass_/XCM_Manual_ORIGIN_1269603_1384197_US_us_beauty_traffic_drivers_inclusive_images_us_en_3415255_379x304_1X_en_US._SY304_CB403256532_.jpg"
          // title = "Apple Products"
          path = "/"
        />
        <OneFeatured 
          heading = "Breakfast best sellers"
          moreInfo = "See more"
          image = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Consumables/XCM_CUTTLE_1268450_1378420_US_3381200_379x304_1X_en_US._SY304_CB404451767_.jpg"
          // title = "Apple Products"
          path = "/"
        />
        <FullFeatured 
          heading = "Customer-loved styles for her"
          moreInfo = "Shop 4+ star finds"
          imageOne = "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MGY0YzMzNTMt/MGY0YzMzNTMt-ZGZkMjYxMWMt-w186._SY116_CB659187951_.jpg"
          titleOne = "Dresses"
          pathOne = ""
          imageTwo = "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MGY0YzMzNTMt/MGY0YzMzNTMt-NjQyZWZlYmIt-w186._SY116_CB659187951_.jpg"
          titleTwo = "Tops"
          pathTwo = ""
          imageThree = "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MGY0YzMzNTMt/MGY0YzMzNTMt-ZjY5MGM4OTIt-w186._SY116_CB659187951_.jpg"
          titleThree = "Sweaters"
          pathThree = ""
          imageFour = "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MGY0YzMzNTMt/MGY0YzMzNTMt-NDg5ZDA1NTgt-w186._SY116_CB659187951_.jpg"
          titleFour = "Sandals"
          pathFour = ""
        />
      </div>
      <div className="home__recommend-two-container">
        <div className="home__heading-two">
          <p>Most-loved purses</p>
          <Link to="/">Shop all</Link>
        </div>
        <div className="home__recommend-products">
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/51buevKBrML._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/414o20Uem-L._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/41Tsi+M8o9L._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/51RH-Fr8ZoL._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/41ci2QYJTFL._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/51XChZ7Xa6L._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/41Lb2y+Gv-L._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/51vjgGTE4AL._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/41g6abZfk4L._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/41eAoKWk+lL._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/51MRXaREcrL._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/418tRWZwB5L._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
          <SqaureFeatured 
            image = "https://m.media-amazon.com/images/I/51ZoGQ8IftL._AC_SY200_.jpg"
            // title = ""
            path = "/"
          />
        </div>
      </div>
      <div className="home__featured-two">
        <FullFeatured 
          heading = "Must-see fashion deals"
          moreInfo = "See more sales & deals"
          imageOne = "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MDJkYTQzZjYt-w186._SY116_CB658813461_.jpg"
          titleOne = "Women's clothing"
          pathOne = ""
          imageTwo = "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/N2FkMDllZDUt/N2FkMDllZDUt-OWZjYmMzOWMt-w186._SY116_CB658813461_.jpg"
          titleTwo = "Women's shoes"
          pathTwo = ""
          imageThree = "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MjBmM2YxODkt-w186._SY116_CB658813461_.jpg"
          titleThree = "Men's clothing"
          pathThree = ""
          imageFour = "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/N2FkMDllZDUt/N2FkMDllZDUt-ZTk2ZDNlNzgt-w186._SY116_CB658813461_.jpg"
          titleFour = "Men's shoes"
          pathFour = ""
        />
        <FullFeatured 
          heading = "Tidy your kitchen"
          moreInfo = "Shop now"
          imageOne = "https://images-na.ssl-images-amazon.com/images/I/81ewl7D9ACL._AC_SL1500_.jpg"
          titleOne = ""
          pathOne = ""
          imageTwo = "https://images-na.ssl-images-amazon.com/images/I/81y4YgJ1WHL._AC_SL1500_.jpg"
          titleTwo = ""
          pathTwo = ""
          imageThree = "https://images-na.ssl-images-amazon.com/images/I/71VzQXnA6QL._AC_SL1500_.jpg"
          titleThree = ""
          pathThree = ""
          imageFour = "https://images-na.ssl-images-amazon.com/images/I/71WMc5hRKeL._AC_SL1500_.jpg"
          titleFour = ""
          pathFour = ""
        />
        <FullFeatured 
          heading = "Get your home in shape"
          moreInfo = "Get set for spring"
          imageOne = "https://images-na.ssl-images-amazon.com/images/I/71QdJKHzYkL._AC_SL1500_.jpg"
          titleOne = ""
          pathOne = "/"
          imageTwo = "https://images-na.ssl-images-amazon.com/images/I/717jT5Sn2BL._AC_SL1500_.jpg"
          titleTwo = ""
          pathTwo = ""
          imageThree = "https://images-na.ssl-images-amazon.com/images/I/71XyjgmIgGL._AC_SL1500_.jpg"
          titleThree = ""
          pathThree = ""
          imageFour = "https://images-na.ssl-images-amazon.com/images/I/81OVcGEMXJL._AC_SL1500_.jpg"
          titleFour = ""
          pathFour = ""
        />
        <FullFeatured 
          heading = "Save on overstock shoes"
          moreInfo = "Shop Outlet"
          imageOne = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_WSH_186x116_B082D7979S_7c2f0d57._SY116_CB659015807_.jpg"
          titleOne = "Women"
          pathOne = ""
          imageTwo = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_MSH_186x116_B08DFSB1MT_cf4a0cdd._SY116_CB659015807_.jpg"
          titleTwo = "Men"
          pathTwo = ""
          imageThree = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_GSH_186x116_B088R44F5S_35c1df21._SY116_CB659015807_.jpg"
          titleThree = "Kids"
          pathThree = ""
          imageFour = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_BSH_186x116_B08FQMXXT9_82d84c72._SY116_CB659015807_.jpg"
          titleFour = "All"
          pathFour = ""
        />
        <FullFeatured 
          heading = "Marvel Year of the Shield"
          moreInfo = "See more"
          imageOne = "https://images-na.ssl-images-amazon.com/images/I/81f81Ktpb2L._AC_SL1500_.jpg"
          titleOne = ""
          pathOne = ""
          imageTwo = "https://images-na.ssl-images-amazon.com/images/I/71djFGywmWL._AC_SL1500_.jpg"
          titleTwo = ""
          pathTwo = ""
          imageThree = "https://images-na.ssl-images-amazon.com/images/I/81PYu-pSJZL._AC_UL160_SR160,160_.jpg"
          titleThree = ""
          pathThree = ""
          imageFour = "https://images-na.ssl-images-amazon.com/images/I/81LpQDrF5nL._AC_SL1500_.jpg"
          titleFour = ""
          pathFour = ""
        />
    {/* <FullFeatured 
          heading = ""
          moreInfo = ""
          imageOne = ""
          titleOne = "Women"
          pathOne = ""
          imageTwo = ""
          titleTwo = "Men"
          pathTwo = ""
          imageThree = ""
          titleThree = "Kids"
          pathThree = ""
          imageFour = ""
          titleFour = "All"
          pathFour = ""
        /> */}
      </div>
      <div className="home__featured-three">
        {/* <OneFeatured 
          heading = "Women change-makers"
          moreInfo = "Learn more"
          image = "https://images-na.ssl-images-amazon.com/images/G/01/kindle/Events/2021/WHM/Flexible_Desktop__Cat_Card_1X_CSB._SY304_CB658877038_.jpg"
          // title = "Apple Products"
          path = "/"
        />
        <OneFeatured 
          heading = "Curated by Camila"
          moreInfo = "See more on Handmade"
          image = "https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NGI0YzVjYTIt/NGI0YzVjYTIt-ZGFjNTI5ZjAt-w379._SY304_CB659519954_.jpg"
          // title = "Apple Products"
          path = "/"
        />
        <OneFeatured 
          heading = "Amp up your gym"
          moreInfo = "Shop more"
          image = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/XCM_Manual_1308931_1576915_US_GRFWW21_us_gw_pc_single_category_card_2x_us_en_3692634_379x304_1X_en_US._SY304_CB660389416_.jpg"
          // title = "Apple Products"
          path = "/"
        />
        <OneFeatured 
          heading = "Celebrate St. Patrick's Day"
          moreInfo = "Explore now"
          image = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/XCM_Manual_1306417_1566504_US_SPD21_us_gw_pc_single_category_card_2x_us_en_r1_3681806_379x304_1X_en_US._SY304_CB659856303_.jpg"
          // title = "Apple Products"
          path = "/"
        />
        <OneFeatured 
          heading = "Hair removal best sellers"
          moreInfo = "See more"
          image = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Consumables/XCM_CUTTLE_1268445_1378399_US_3381175_379x304_1X_en_US._SY304_CB404453045_.jpg"
          // title = "Apple Products"
          path = "/"
        />
        <OneFeatured 
          heading = "Skin care best sellers"
          moreInfo = "See more"
          image = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Beauty_Mass_/XCM_Manual_ORIGIN_1269603_1384197_US_us_beauty_traffic_drivers_inclusive_images_us_en_3415255_379x304_1X_en_US._SY304_CB403256532_.jpg"
          // title = "Apple Products"
          path = "/"
        />
        <OneFeatured 
          heading = "Breakfast best sellers"
          moreInfo = "See more"
          image = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Consumables/XCM_CUTTLE_1268450_1378420_US_3381200_379x304_1X_en_US._SY304_CB404451767_.jpg"
          // title = "Apple Products"
          path = "/"
        /> */}
      </div>
    </div>
  )
}

export default Home;