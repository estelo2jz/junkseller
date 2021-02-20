import React from 'react';
import { Link } from 'react-router-dom';
import ElectronicsProductTemplate from './ElectronicsProductTemplate';
import '../ElectronicStyles/ElectronicsBase.scss';

function ElectronicsBase() {
  return (
    <div className="electronics-base__container">
      <div className="electronics-base__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/electronics">
          <p>
            /electronics
          </p>
        </Link>
        <p>/electronics</p>
      </div>
      <div className="electronics-base__heading">
        <h1>Electronics</h1>
      </div>
      <div className="electronics-base__ads-one">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/appcore/CE_Gateway_Banner_AppleWatchS6_1500x440.png" alt="electronic-ads" />
      </div>
      <div className="electronics-base__heading">
        <h1>Shop by Category</h1>
      </div>
      <div className="electronics-base__category">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/ce_showcase/cat-tile/ce_showcase_cat-tile_desktop_computers.jpg" alt="electronic-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/ce_showcase/cat-tile/ce_showcase_cat-tile_desktop_tv.jpg" alt="electronic-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/ce_showcase/cat-tile/ce_showcase_cat-tile_desktop_cellphone.jpg" alt="electronic-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/ce_showcase/cat-tile/ce_showcase_cat-tile_desktop_camera.jpg" alt="electronic-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/ce_showcase/cat-tile/ce_showcase_cat-tile_desktop_homeaudio.jpg" alt="electronic-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Consumer_Electronics/XCM_Manual_1229104_1206384_US_us_ce_showcase_devices_us_en_3141694_230x270_en_US.jpg" alt="electronic-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/ce_showcase/cat-tile/ce_showcase_cat-tile_desktop_headphones.jpg" alt="electronic-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/ce_showcase/cat-tile/ce_showcase_cat-tile_desktop_officeelectronics.jpg" alt="electronic-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/ce_showcase/cat-tile/ce_showcase_cat-tile_desktop_officesupplies.jpg" alt="electronic-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/ce_showcase/cat-tile/ce_showcase_cat-tile_desktop_smarthome.jpg" alt="electronic-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/ce_showcase/cat-tile/ce_showcase_cat-tile_desktop_mi.jpg" alt="electronic-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/ce_showcase/cat-tile/ce_showcase_cat-tile_desktop_videogames.jpg" alt="electronic-category" />
      </div>
      <div className="electronics-base__ads-two">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Consumer_Electronics/XCM_Manual_1296737_1516323_US_us_ce_showcase_3592528_1500x440_en_US.jpg" alt="electronic-ads" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Wireless_Products/XCM_Manual_1500x440_1207852_1065050_IDx231207852_us_wireless_products_wireless_plans_cegw_january_ffe6e572_14c8_4d5e_ac78_3eb369caa612_jpg_LOWER_QL85_.jpg" alt="electronic-ads" />
      </div>
      <div className="electronics-base__ads-three">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2019/img/Consumer_Electronics/XCM_Manual_1500x90_1206714_1206714_US_CE_HANDPICKED_2_cg_ae445868_a073_404e_b14c_711db0225cdb_jpg_LOWER_QL85_.jpg" alt="handpick-ads" />
      </div>
      <div className="electronics-base__handpick-category">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/Laptops_EN.jpg" alt="electronic-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/Desktops_EN.jpg" alt="electronic-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/Monitors_EN.jpg" alt="electronic-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/TVs_EN.jpg" alt="electronic-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/Headphones_EN.jpg" alt="electronic-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/Speakers_EN.jpg" alt="electronic-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/Soundbars_EN.jpg" alt="electronic-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/Projectors_EN.jpg" alt="electronic-category" />
      </div>
      <div className="electronics-base__trending">
        <div className="electronics-base__trending-header">
          <h4>Trending now</h4>
          <a href="#">See more</a>
        </div>
        <div className="electronics-base__trending-products">
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {140.99}
            rating = {4}
            image = ""
          />  
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {138.99}
            rating = {4}
            image = ""
          />  
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {138.99}
            rating = {4}
            image = ""
          />  
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {138.99}
            rating = {4}
            image = ""
          />  
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {138.99}
            rating = {4}
            image = ""
          />  
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {138.99}
            rating = {4}
            image = ""
          />  
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {138.99}
            rating = {4}
            image = ""
          />  
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {138.99}
            rating = {4}
            image = ""
          />  
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {138.99}
            rating = {4}
            image = ""
          />  
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {138.99}
            rating = {4}
            image = ""
          />  
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {138.99}
            rating = {4}
            image = ""
          />  
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {138.99}
            rating = {4}
            image = ""
          />  
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {138.99}
            rating = {4}
            image = ""
          />  
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {138.99}
            rating = {4}
            image = ""
          />  
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {138.99}
            rating = {4}
            image = ""
          />  
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {138.99}
            rating = {4}
            image = ""
          />  
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {138.99}
            rating = {4}
            image = ""
          />  
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {138.99}
            rating = {4}
            image = ""
          />  
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {138.99}
            rating = {4}
            image = ""
          />  
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {138.99}
            rating = {4}
            image = ""
          />  
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {138.99}
            rating = {4}
            image = ""
          />  
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {138.99}
            rating = {4}
            image = ""
          />  
        </div>
      </div>
      <div>
        <div className="electronics-base__ads-four">
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Consumer_Electronics/XCM_Manual_1226594_1186530_US_us_ce_pwp_bronze_3112934_1500x90_2X_en_US.jpg" alt="electronics-ads" />
        </div>
        <div className="electronics-base__product-category">
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CEGW/EGG_CEGW.jpg" alt="elctronics-shop-now" />
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/ce_showcase/4pack/ce_showcase_4pack_desktop_deals.jpg" alt="elctronics-shop-now" />
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2019/img/Consumer_Electronics/XCM_Manual_1160769_premiumaudio_CEGW_tiles_357x440_Consumer_Electronics_XCM_Manual_1160769_us_consumer_electronics_premiumaudio_cegw_tiles_357x440_1550561122_jpg.jpg" alt="elctronics-shop-now" />
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Consumer_Electronics/XCM_Manual_ORIGIN_1242344_1286104_US_us_ce_showcase_3285051_357x440_en_US.jpg" alt="elctronics-shop-now" />
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/ce_showcase/4pack/ce_showcase_4pack_desktop_tradein.jpg" alt="elctronics-shop-now" />
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/ce_showcase/4pack/ce_showcase_4pack_desktop_amazonbasics.jpg" alt="elctronics-shop-now" />
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/ce_showcase/cat-tile/ce_showcase_4pack_desktop_tv_V2.jpg" alt="elctronics-shop-now" />
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/ce_showcase/4pack/ce_showcase_4pack_desktop_launchpad.jpg" alt="elctronics-shop-now" />
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/ce_showcase/4pack/ce_showcase_4pack_desktop_laptop_updated.jpg" alt="elctronics-shop-now" />
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/ce_showcase/4pack/ce_showcase_4pack_desktop_bestsellers.jpg" alt="elctronics-shop-now" />
        </div>
      </div>
      <div className="back-to-top__container">
        <a className="gotop" href="#">Back to top</a>
      </div>
    </div>
  )
}

export default ElectronicsBase
