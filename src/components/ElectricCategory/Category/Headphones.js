import React from 'react';
import { Link } from 'react-router-dom';
import '../ElectronicStyles/Headphones.scss';
import JumpTo from './JumpTo';

function Headphones() {
  return (
    <div className="headphones__container">
      <div className="headphones__jump-to">
        <JumpTo 
          path1 = "/electronics/tvvideo"
          link1 = "tv&video"
          path2 = "/electronics/carelectronics"
          link2 = "car-electronics"
          path3 = "/electronics/cameraphotovideo"
          link3 = "camera&photo&video"
          path4 = "/electronics/electronicsbase"
          link4 = "electronics"
          path5 = "/electronics/musicalinstruments"
          link5 = "musical-instruments"
          path6 = "/electronics/bluetoothwireless"
          link6 = "bluetooth&wireless"
          path7 = "/electronics/wearabletechnology"
          link7 = "wearable-technology"
          path8 = "/electronics/homeaudiotheater"
          link8 = "home&audio&theater"
          path9 = "/electronics/videogames"
          link9 = "video-games"
          path10 = "/electronics/cellphones"
          link10 = "cellphones"
        />
      </div>
      <div className="headphones__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/electronics">
          <p>
            /electronics
          </p>
        </Link>
        <p>/headphones</p>
      </div>
      <div className="headphones__heading">
        <h1>Headphones</h1>
      </div>
      <div className="headphones__ads-container">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Musical_Instruments/XCM_Manual_1120460_guitars_Storefront_1500x80_Musical_Instruments_1120460_us_mi_stf_1_cg_1500x80_jpg" alt="headphones" />
      </div>
      <div className="headphones__image-category">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/XCM_Manual_1122076_StorefrontMigration_750x750_Consumer_Electronics_1122076_us_consumer_electronics_storefrontmigration_750x750_1_jpg"alt="headphones" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/XCM_Manual_1122076_StorefrontMigration_750x750_Consumer_Electronics_1122076_us_consumer_electronics_storefrontmigration_750x750_5_jpg.jpg"alt="headphones" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/XCM_Manual_1122076_StorefrontMigration_750x750_Consumer_Electronics_1122076_us_consumer_electronics_storefrontmigration_750x750_3_jpg"alt="headphones" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/XCM_Manual_1122076_StorefrontMigration_750x750_Consumer_Electronics_1122076_us_consumer_electronics_storefrontmigration_750x750_4_jpg.jpg"alt="headphones" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/PC_Hardware/bose7002.jpg"alt="headphones" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/XCM_Manual_1122076_StorefrontMigration_750x750_Consumer_Electronics_1122076_us_consumer_electronics_storefrontmigration_750x750_6_jpg"alt="headphones" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/XCM_Manual_1122076_StorefrontMigration_750x750_Consumer_Electronics_1122076_us_consumer_electronics_storefrontmigration_750x750_7_jpg"alt="headphones" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/XCM_Manual_1122076_StorefrontMigration_750x750_Consumer_Electronics_1122076_us_consumer_electronics_storefrontmigration_750x750_8_jpg"alt="headphones" />
      </div>
      <div className="headphones__ads-two-container">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/HandpickedHeadphones_DT_EN.jpg"alt="headphones" />
      </div>
      <div className="headphones__image-category-two">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/AA/Headphones_Storefront_Budget.jpg" alt="headphones" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/AA/Headphones_Storefront_Exercise.jpg" alt="headphones" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/AA/Headphones_Storefront_Travel.jpg" alt="headphones" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/AA/Headphones_Storefront_Commute.jpg" alt="headphones" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/AA/Headphones_Storefront_Fashion.jpg" alt="headphones" />
      </div>
      <div className="headphones__ads-two-container">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/CE/Shopbybrand_1500x80.jpg" alt="headphones" />
      </div>
      <div className="headphones__image-category-three">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/ce_aa_brandtile_desktop_beats_white_spjain.jpg" alt="headphones" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/aa/brand-tile/Bose_logo_750x375.jpg" alt="headphones" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/ce_aa_showcase_Sony_logo_720x375_v2.jpg" alt="headphones" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/ce_aa_brandtile_desktop_panasonic_spjain.jpg" alt="headphones" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/PC_Hardware/SennheiserLogo._CB1570484015_.jpg" alt="headphones" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/XCM_Manual_1122076_StorefrontMigration_720x375_Consumer_Electronics_1122076_us_consumer_electronics_storefrontmigration_720x375_4_2_jpg" alt="headphones" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/XCM_Manual_1122076_StorefrontMigration_720x375_Consumer_Electronics_1122076_us_consumer_electronics_storefrontmigration_720x375_7_2_jpg.jpg" alt="headphones" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/XCM_Manual_1122076_StorefrontMigration_720x375_Consumer_Electronics_1122076_us_consumer_electronics_storefrontmigration_720x375_6_jpg" alt="headphones" />
      </div>
      <div className="back-to-top__container">
        <a className="gotop" href="#">Back to top</a>
      </div>
    </div>
  )
}

export default Headphones;
