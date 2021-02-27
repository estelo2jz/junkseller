import React from 'react';
import { Link } from 'react-router-dom';
// import ElectronicsProductTemplate from './ElectronicsProductTemplate';
// import FeaturedCategoryTemplate from './FeaturedCategoryTemplate';
import '../ElectronicStyles/BluetoothWireless.scss';
import JumpTo from './JumpTo';

function BluetoothWireless() {
  return (
    <div className="bluetooth-wireless__container">
      <div className="bluetooth-wireless__jump-to">
        <JumpTo 
          path1 = "/electronics/headphones"
          link1 = "headphones"
          path2 = "/electronics/carelectronics"
          link2 = "car-electronics"
          path3 = "/electronics/cameraphotovideo"
          link3 = "camera&photo&video"
          path4 = "/electronics/electronicsbase"
          link4 = "electronics"
          path5 = "/electronics/musicalinstruments"
          link5 = "musical-instruments"
          path6 = "/electronics/tvvideo"
          link6 = "tv&video"
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
      <div className="bluetooth-wireless__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/electronics">
          <p>
            /electronics
          </p>
        </Link>
        <p>/bluetooth&wireless</p>
      </div>
      <div className="bluetooth-wireless__heading">
        <h1>Bluetooth & Wireless</h1>
      </div>
      <div className="bluetooth-wireless__ads-one">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Consumer_Electronics/XCM_Manual_1301610_1538042_US_GD21_us_ce_storefront_stripes_2362205_us_en_3625898_1500x90_en_US.jpg" alt="bluetooth-wireless" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/XCM_Manual_1122076_StorefrontMigration_3000x725_Consumer_Electronics_1122076_us_consumer_electronics_storefrontmigration_Herotator_3000x725_1_jpg.jpg" alt="bluetooth-wireless" />
      </div>
      <div className="bluetooth-wireless__heading">
        <h1>Shop by Category</h1>
      </div>
      <div className="bluetooth-wireless__category">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/XCM_Manual_1122076_StorefrontMigration_750x750_Consumer_Electronics_1122076_us_consumer_electronics_storefrontmigration_750x750_9_jpg.jpg" alt="bluetooth-wireless" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/XCM_Manual_1122076_StorefrontMigration_750x750_Consumer_Electronics_1122076_us_consumer_electronics_storefrontmigration_750x750_10_jpg.jpg" alt="bluetooth-wireless" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/XCM_Manual_1122076_StorefrontMigration_750x750_Consumer_Electronics_1122076_us_consumer_electronics_storefrontmigration_750x750_11_jpg.jpg" alt="bluetooth-wireless" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/XCM_Manual_1122076_StorefrontMigration_750x750_Consumer_Electronics_1122076_us_consumer_electronics_storefrontmigration_750x750_12_jpg.jpg" alt="bluetooth-wireless" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/XCM_Manual_1122076_StorefrontMigration_750x750_Consumer_Electronics_1122076_us_consumer_electronics_storefrontmigration_750x750_13_jpg.jpg" alt="bluetooth-wireless" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/XCM_Manual_1122076_StorefrontMigration_750x750_Consumer_Electronics_1122076_us_consumer_electronics_storefrontmigration_750x750_14_jpg.jpg" alt="bluetooth-wireless" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/XCM_Manual_1122076_StorefrontMigration_750x750_Consumer_Electronics_1122076_us_consumer_electronics_storefrontmigration_750x750_15_jpg.jpg" alt="bluetooth-wireless" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/XCM_Manual_1122076_StorefrontMigration_750x750_Consumer_Electronics_1122076_us_consumer_electronics_storefrontmigration_750x750_16_jpg.jpg" alt="bluetooth-wireless" />
      </div>
      <div className="bluetooth-wireless__ads-two">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/HandpickedHeadphones_DT_EN.jpg"  alt="bluetooth-wireless" />
      </div>
      <div className="bluetooth-wireless__headphone-category">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/AA/Headphones_Storefront_Budget.jpg" alt="bluetooth-wireless" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/AA/Headphones_Storefront_Exercise.jpg" alt="bluetooth-wireless" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/AA/Headphones_Storefront_Travel.jpg" alt="bluetooth-wireless" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/AA/Headphones_Storefront_Commute.jpg" alt="bluetooth-wireless" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/AA/Headphones_Storefront_Fashion.jpg" alt="bluetooth-wireless" />
      </div>
      <div className="bluetooth-wireless__ads-three">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/HandpickedSpeakers_DT_EN.jpg" alt="bluetooth-wireless" />
      </div>
      <div className="bluetooth-wireless__speaker-category">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/AA/Speakers_Storefront_Outdoor.jpg"  alt="bluetooth-wireless" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/AA/Speakers_Storefront_Portable.jpg"  alt="bluetooth-wireless" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/AA/Speakers_Storefront_Compact.jpg"  alt="bluetooth-wireless" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/AA/Speakers_Storefront_Performance.jpg"  alt="bluetooth-wireless" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/AA/Speakers_Storefront_Premium_2.jpg"  alt="bluetooth-wireless" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/AA/Speakers_Storefront_EntryHomeTheater.jpg"  alt="bluetooth-wireless" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/AA/Speakers_Storefront_PremiumHomeTheater.jpg"  alt="bluetooth-wireless" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/AA/Speakers_Storefront_LuxuryHomeTheater.jpg"  alt="bluetooth-wireless" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/AA/Speakers_Storefront_TechSpotlight_B07QKG6RND.jpg"  alt="bluetooth-wireless" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/AA/Speakers_Storefront_Soundbars.jpg"  alt="bluetooth-wireless" />
      </div>
      <div className="bluetooth-wireless__heading">
        <h2>Shop by Brand</h2>
        </div>
      <div className="bluetooth-wireless__brand-category">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/ce_aa_brandtile_desktop_beats_white_spjain.jpg"  alt="bluetooth-wireless" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/aa/brand-tile/Bose_logo_750x375.jpg"  alt="bluetooth-wireless" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/PC_Hardware/LGLogo.jpg"  alt="bluetooth-wireless" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/XCM_Manual_1122076_StorefrontMigration_720x375_Consumer_Electronics_1122076_us_consumer_electronics_storefrontmigration_720x375_1_jpg.jpg"  alt="bluetooth-wireless" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/XCM_Manual_1122076_StorefrontMigration_720x375_Consumer_Electronics_1122076_us_consumer_electronics_storefrontmigration_720x375_2_2_jpg.jpg"  alt="bluetooth-wireless" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Consumer_Electronics/XCM_Manual_720x375_1222633_1162103_us_speakers2020_jbl_997860_68a95b14_a4a6_4b49_ac0a_41a3867db766_jpg_LOWER_QL85_.jpg"  alt="bluetooth-wireless" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/XCM_Manual_1122076_StorefrontMigration_720x375_Consumer_Electronics_1122076_us_consumer_electronics_storefrontmigration_720x375_4_2_jpg.jpg"  alt="bluetooth-wireless" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/ce_aa_showcase_Sony_logo_720x375_v2.jpg"  alt="bluetooth-wireless" />
      </div>
      <div className="back-to-top__container">
        <a className="gotop" href="#">Back to top</a>
      </div>
    </div>
  )
}

export default BluetoothWireless;
