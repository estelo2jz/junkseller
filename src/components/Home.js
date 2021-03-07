import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.scss';
import Product from './Product';
import Slider from './Slider';
import ComingSoon from './ComingSoon';
import FullFeatured from './category/HomePageComponents/FullFeaturedTemplate';
import OneFeatured from './category/HomePageComponents/OneFeaturedTemplate';

function Home() {
  return (
    <div className="home__container">
      <div className="home__featured">
        <OneFeatured 
          heading = "Shop with coins"
          moreInfo = "Learn more"
          image = "https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2021/Cash/Coin/Coin_US_EN_379x304_20210108._SY304_CB411735909_.jpg"
          // title = "Apple Products"
          path = "/"
        />
        <OneFeatured 
          heading = "Fresh take on classic décor"
          moreInfo = "Shop Modern Traditional style"
          image = "https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/YmFiODU5N2Qt/YmFiODU5N2Qt-NGZlNTNkYWIt-w379._SY304_CB660187866_.jpg"
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
          moreInfo = "Sop spa-inspired bath"
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
        <OneFeatured 
          heading = "Pro Salon & Spa"
          moreInfo = "Discover more"
          image = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Consumables/XCM_CUTTLE_1305322_1561945_US_3654128_379x304_1X_en_US._SY304_CB662317373_.jpg"
          // title = "Apple Products"
          path = "/"
        />
        
          {/* <FullFeatured 
          heading = "Facemasks under $13"
          moreInfo = "Shop adult & child 4-packs"
          imageOne = "https://images-na.ssl-images-amazon.com/images/I/71lCeOGZKGL._AC_UL160_SR160,160_.jpg"
          titleOne = ""
          pathOne = ""
          imageTwo = "https://m.media-amazon.com/images/I/312ZwtVQh9L._AC_SR160,200_.jpg"
          titleTwo = ""
          pathTwo = ""
          imageThree = "https://images-na.ssl-images-amazon.com/images/I/818ygkiGTuL._AC_UL160_SR160,160_.jpg"
          titleThree = ""
          pathThree = ""
          imageFour = "https://images-na.ssl-images-amazon.com/images/I/81ijMbCIacL._AC_UL160_SR160,160_.jpg"
          titleFour = ""
          pathFour = ""
        /> */}
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




      </div>
      <div className="home__featured">
        <FullFeatured 
          heading = "Facemasks under $13"
          moreInfo = "Shop adult & child 4-packs"
          imageOne = "https://images-na.ssl-images-amazon.com/images/I/71lCeOGZKGL._AC_UL160_SR160,160_.jpg"
          titleOne = ""
          pathOne = ""
          imageTwo = "https://m.media-amazon.com/images/I/312ZwtVQh9L._AC_SR160,200_.jpg"
          titleTwo = ""
          pathTwo = ""
          imageThree = "https://images-na.ssl-images-amazon.com/images/I/818ygkiGTuL._AC_UL160_SR160,160_.jpg"
          titleThree = ""
          pathThree = ""
          imageFour = "https://images-na.ssl-images-amazon.com/images/I/81ijMbCIacL._AC_UL160_SR160,160_.jpg"
          titleFour = ""
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
          pathOne = ""
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
      </div>
      {/* <ComingSoon /> */}
      {/* <Slider /> */}
      {/* <div>
        <h1>Shop By Department </h1>
      </div> */}
      {/* <div className="home__links-container">
        <div className="home__link">
          <Link to="/electronics"><p>Electronics</p></Link>
        </div>
        <div className="home__link">
          <Link to="/computers"><p>Computer</p></Link>
        </div>
        <div className="home__link">
          <Link to="/homegardentools"><p>Home, Garden & Tools</p></Link>
        </div>
        <div className="home__link">
          <Link to="/petsupplies"><p>Pet Supplies</p></Link>
        </div>
        <div className="home__link">
          <Link to="/outdoors"><p>Outdoors</p></Link>
        </div>
        <div className="home__link">
          <Link to="/smarthome"><p>Smart Home</p></Link>
        </div>
        <div className="home__link">
          <Link to="/foodgrocery"><p>Fodd & Grocery</p></Link>
        </div>
        <div className="home__link">
          <Link to="/beautyhealth"><p>Beauty & Health</p></Link>
        </div>
        <div className="home__link">
          <Link to="/toyskidsbaby"><p>Toys, Kids & Baby</p></Link>
        </div>
        <div className="home__link">
          <Link to="/handmade"><p>Handmade</p></Link>
        </div>
        <div className="home__link">
          <Link to="/sports"><p>Sports</p></Link>
        </div>
        <div className="home__link">
          <Link to="/automotiveindustrial"><p>Automotive & Industrial</p></Link>
        </div>
      </div> */}
    </div>
  )
}

export default Home;