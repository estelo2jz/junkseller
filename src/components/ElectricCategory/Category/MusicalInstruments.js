import React from 'react';
import { Link } from 'react-router-dom';
import '../ElectronicStyles/MusicalInstruments.scss';
import JumpTo from './JumpTo';

function MusicalInstruments() {
  return (
    <div className="musical-instruments__container">
      <div className="musical-instruments__jump-to">
        <JumpTo 
          path1 = "/electronics/headphones"
          link1 = "headphones"
          path2 = "/electronics/carelectronics"
          link2 = "car-electronics"
          path3 = "/electronics/cameraphotovideo"
          link3 = "camera&photo&video"
          path4 = "/electronics/electronicsbase"
          link4 = "electronics"
          path5 = "/electronics/tvvideo"
          link5 = "tv&video"
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
      <div className="musical-instruments__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/electronics">
          <p>
            /electronics
          </p>
        </Link>
        <p>/musicalinstruments</p>
      </div>
        <div className="musical-instruments__heading">
          <h1>Musical Instruments</h1>
        </div>
        <div className="musical-instruments__flex-wrap">
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/mi/cat-tile/ce_mi_cat-tile_desktop_guitars.jpg" alt="musical-intruments"/>
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/mi/cat-tile/ce_mi_cat-tile_desktop_bass.jpg" alt="musical-intruments"/>
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/mi/cat-tile/ce_mi_cat-tile_desktop_ukuleles.jpg" alt="musical-intruments"/>
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/mi/cat-tile/ce_mi_cat-tile_desktop_amps.jpg" alt="musical-intruments"/>
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/mi/cat-tile/ce_mi_cat-tile_desktop_drums.jpg" alt="musical-intruments"/>
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/mi/cat-tile/ce_mi_cat-tile_desktop_dj.jpg" alt="musical-intruments"/>
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/mi/cat-tile/ce_mi_cat-tile_desktop_keyboards.jpg" alt="musical-intruments"/>
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/mi/cat-tile/ce_mi_cat-tile_desktop_microphones.jpg" alt="musical-intruments"/>
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/mi/cat-tile/ce_mi_cat-tile_desktop_recording.jpg" alt="musical-intruments"/>
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/mi/cat-tile/ce_mi_cat-tile_desktop_livesound.jpg" alt="musical-intruments"/>
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/mi/cat-tile/ce_mi_cat-tile_desktop_bo.jpg" alt="musical-intruments"/>
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/mi/cat-tile/ce_mi_cat-tile_desktop_brass.jpg" alt="musical-intruments"/>
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/mi/cat-tile/ce_mi_cat-tile_desktop_strings.jpg" alt="musical-intruments"/>
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/mi/cat-tile/ce_mi_cat-tile_desktop_strings.jpg" alt="musical-intruments"/>
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/mi/cat-tile/ce_mi_cat-tile_desktop_woodwind.jpg" alt="musical-intruments"/>
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/mi/cat-tile/ce_mi_cat-tile_desktop_accessories.jpg" alt="musical-intruments"/>
        </div>
      <div className="musical-instruments__ads-image">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/mi/1pack/ce_mi_1pack_desktop_forthepros.jpg" />
      </div>
      <div className="musical-instruments__heading">
        <h2>Shop by Brand</h2>
      </div>
      <div className="musical-instruments__brand-category">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/mi/brand-tile/ce_mi_brand-tile_desktop_yamaha.jpg" alt="musical-intruments" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/mi/brand-tile/ce_mi_brand-tile_desktop_shure.jpg" alt="musical-intruments" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/mi/brand-tile/ce_mi_brand-tile_desktop_marshall.jpg" alt="musical-intruments" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/mi/brand-tile/ce_mi_brand-tile_desktop_akai.jpg" alt="musical-intruments" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/mi/brand-tile/ce_mi_brand-tile_desktop_alesis.jpg" alt="musical-intruments" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/mi/brand-tile/ce_mi_brand-tile_desktop_gator.jpg" alt="musical-intruments" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/mi/brand-tile/ce_mi_brand-tile_desktop_pioneer_dj.jpg" alt="musical-intruments" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/mi/brand-tile/ce_mi_brand-tile_desktop_sennheiser.jpg" alt="musical-intruments" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/mi/brand-tile/ce_mi_brand-tile_desktop_denondj.jpg" alt="musical-intruments" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/mi/brand-tile/ce_mi_brand-tile_desktop_fender.jpg" alt="musical-intruments" />
      </div>
      <div className="back-to-top__container">
        <a className="gotop" href="#">Back to top</a>
      </div>
    </div>
  )
}

export default MusicalInstruments;
