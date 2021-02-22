import React from 'react';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/Gifts.scss';
import JumpTo from '../../JumpTo';

function Gifts() {
  return (
    <div className="gifts__container">
              <JumpTo 
          path1 = "/handmade/kitchen&dining"
          link1 = "/kitchen&dining"
          path2 = "/handmade/wedding"
          link2 = "/wedding"
          path3 = "/handmade/artwork"
          link3 = "/artwork"
          path4 = "/handmade/homedecor"
          link4 = "/homedecor"
          path5 = "/handmade/jewelry"
          link5 = "/jewelry"
          path6 = "/handmade/handbags&accessories"
          link6 = "/handbags&accessories"
          path7 = "/handmade/allhandmade"
          link7 = "/allhandmade"
          path8 = "/handmade/sellon"
          link8 = "/sellon"
          path9 = "/handmade/clothing&shoes"
          link9 = "/clothing&shoes"
          path10 = "/handmade/stationary&partysupplies"
          link10 = "/stationary&partysupplies"
          path11 = "/handmade/baby"
          link11 = "/baby"
          path12 = "/handmade/toys&games"
          link12 = "/toys&games"
          path13 = "/handmade/home&kitchen"
          link13 = "/home&kitchen"
          path14 = "/handmade/furniture"
          link14 = "/furniture"
          path15 = "/handmade/beauty&grooming"
          link15 = "/beauty&grooming"
          path16 = "/handmade/petsupplies"
          link16 = "/petsupplies"
        />
      <div className="gifts__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
          </p>
        </Link>
        <p>/gifts</p>
      </div>
      <div className="gifts__section">
        <div className="gifts__section-heading">
          <p>Handmade Gift Shop</p>
        </div>
        <div className="ads">
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/handmade/2018/GiftPage/Evergreen/DEC/Desktop_BB._CB460215227_.jpg" alt="ads" />
        </div>
        <div className="gifts__occasion-heading">
          <p>Shop of an occasion</p>
        </div>
        <div className="gifts__section-category">
          <div className="gifts__section-links">
            <Link to="/handmade/gifts" className="gifts__section-link">
              <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_weddingengagement_B07MBQYSN2._CB464687712_.jpg" alt="gifts" />
            </Link>
            <p>Weeding & Engagement</p>
          </div>
          <div className="gifts__section-links">
            <Link to="/handmade/gifts" className="gifts__section-link">
              <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Misc/GBO_Housewarming_420x420._CB439422739_.jpg" alt="gifts" />
            </Link>
            <p>Housewarming</p>
          </div>
          <div className="gifts__section-links">
            <Link to="/handmade/gifts" className="gifts__section-link">
              <img src="https://m.media-amazon.com/images/G/01/handmade/2019/Gateway/US_GW_QC_Baby_Nursing_420x420._CB440696745_.jpg" alt="gifts" />
            </Link>
            <p>Baby Shower</p>
          </div>
          <div className="gifts__section-links">
            <Link to="/handmade/gifts" className="gifts__section-link">
              <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Misc/GBO_Birthday_420x420._CB439422034_.jpg" alt="gifts" />
            </Link>
            <p>Birthday</p>
          </div>
          <div className="gifts__section-links">
            <Link to="/handmade/gifts" className="gifts__section-link">
              <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/GiftsByOccasion/hnd_gbo_anniversary._CB437916558_.jpg" alt="gifts" />
            </Link>
            <p>Anniversary</p>
          </div>
          <div className="gifts__section-links">
            <Link to="/handmade/gifts" className="gifts__section-link">
              <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/GiftsByOccasion/hnd_gbo_barbatmitzvah._CB437917370_.jpg" alt="gifts" />
            </Link>
            <p>Bar & Bat Mitzvah</p>
          </div>
          <div className="gifts__section-links">
            <Link to="/handmade/gifts" className="gifts__section-link">
              <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/GiftsByOccasion/hnd_gbo_thankyou._CB437919076_.jpg" alt="gifts" />
            </Link>
            <p>Thank you</p>
          </div>
          <div className="gifts__section-links">
            <Link to="/handmade/gifts" className="gifts__section-link">
              <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/GiftsByOccasion/hnd_gbo_newpet2._CB437919157_.jpg" alt="gifts" />
            </Link>
            <p>New Pet</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gifts
