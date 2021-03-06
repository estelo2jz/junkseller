import React from 'react';
import { Link } from 'react-router-dom';
// import ElectronicsProductTemplate from './ElectronicsProductTemplate';
// import FeaturedCategoryTemplate from './FeaturedCategoryTemplate';
import '../ElectronicStyles/HomeAudioTheater.scss';
import JumpTo from './JumpTo';

function HomeAudioTheater() {
  return (
    <div className="home-audio-theater__container">
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
          path6 = "/electronics/bluetoothwireless"
          link6 = "bluetooth&wireless"
          path7 = "/electronics/wearabletechnology"
          link7 = "wearable-technology"
          path8 = "/electronics/tvvideo"
          link8 = "tv&video"
          path9 = "/electronics/videogames"
          link9 = "video-games"
          path10 = "/electronics/cellphones"
          link10 = "cell-phones"
        />
      <div className="home-audio-theater__history-path">
      <Link to="/electronics">
          <p>
            go back
          </p>
        </Link>
      </div>
      <div className="home-audio-theater__heading">
        <h2>Home Audio Theater</h2>
      </div>
      <div className="home-audio-theater__category">
        <div className="home-audio-theater__heading">
          <h3>Shop by Category</h3>
        </div>
        <div className="home-audio-theater__flex-box">
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/aa/cat-tile/ce_aa_cat-tile_desktop_wirelessaudio.jpg"  alt="home-audio-theater" />
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/aa/cat-tile/ce_aa_cat-tile_desktop_premiumaudio.jpg" alt="home-audio-theater" />
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/aa/cat-tile/ce_aa_cat-tile_desktop_hometheater.jpg" alt="home-audio-theater" />
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/aa/cat-tile/ce_aa_cat-tile_desktop_stereocomponents.jpg" alt="home-audio-theater" />
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-voice-service/category_tile/AVS_HomeAudioTile_AlexaBuiltIn_Capital_Polk._CB485008781_.jpg" alt="home-audio-theater" />
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/aa/cat-tile/ce_aa_cat-tile_desktop_headphones.jpg" alt="home-audio-theater" />
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/aa/cat-tile/ce_aa_cat-tile_desktop_speakers.jpg" alt="home-audio-theater" />
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/aa/cat-tile/ce_aa_cat-tile_desktop_turntables.jpg" alt="home-audio-theater" />
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/aa/cat-tile/ce_aa_cat-tile_desktop_audioaccessories.jpg" alt="home-audio-theater" />
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/aa/cat-tile/ce_aa_cat-tile_desktop_deals.jpg" alt="home-audio-theater" />
        </div>
      </div>
        <div className="home-audio-theater__ads-two">
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Consumer_Electronics/XCM_Manual_1299910_1529403_US_us_ce_storefront_3629787_1500x440_en_US.jpg" alt="home-audio-theater" />
        </div>
      <div className="home-audio-theater__heading">
        <h1>Shop by Brand</h1>
      </div>
      <div className="home-audio-theater__brand-category">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/aa/brand-tile/ce_aa_brand-tile_desktop_bose.jpg"  alt="home-audio-theater" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/aa/brand-tile/ce_aa_brand-tile_desktop_sony.jpg"  alt="home-audio-theater" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/PC_Hardware/SonosLogoFarm1.jpg"  alt="home-audio-theater" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/aa/brand-tile/ce_aa_brand-tile_desktop_yamaha.jpg"  alt="home-audio-theater" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/aa/brand-tile/ce_aa_brand-tile_desktop_marshall.jpg"  alt="home-audio-theater" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/aa/brand-tile/ce_aa_brand-tile_desktop_klipsch.jpg"  alt="home-audio-theater" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/PC_Hardware/samsunglogoUSE.jpg"  alt="home-audio-theater" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/aa/brand-tile/ce_aa_brand-tile_desktop_amznbasics.jpg"  alt="home-audio-theater" />
      </div>
      <div className="back-to-top__container">
        <a className="gotop" href="#">Back to top</a>
      </div>
    </div>
  )
}

export default HomeAudioTheater;
