import React from 'react';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/BeautyGrooming.scss';
import HandmadeProductTemplate from './HandmadeProductTemplate';
import JumpTo from './JumpTo';

function BeautyGrooming() {
  return (
    <div className="beauty-grooming__container">
              <JumpTo 
          path1 = "/handmade/kitchen&dining"
          link1 = "kitchen&dining"
          path2 = "/handmade/wedding"
          link2 = "wedding"
          path3 = "/handmade/artwork"
          link3 = "art-work"
          path4 = "/handmade/homedecor"
          link4 = "home-decor"
          path5 = "/handmade/jewelry"
          link5 = "jewelry"
          path6 = "/handmade/handbags&accessories"
          link6 = "handbags&accessories"
          path7 = "/handmade/gifts"
          link7 = "gifts"
          path8 = "/handmade/sellon"
          link8 = "sell-on"
          path9 = "/handmade/clothing&shoes"
          link9 = "clothing&shoes"
          path10 = "/handmade/stationary&partysupplies"
          link10 = "stationary&partysupplies"
          path11 = "/handmade/baby"
          link11 = "baby"
          path12 = "/handmade/toys&games"
          link12 = "toys&games"
          path13 = "/handmade/home&kitchen"
          link13 = "home&kitchen"
          path14 = "/handmade/furniture"
          link14 = "furniture"
          path15 = "/handmade/allhandmade"
          link15 = "all-handmade"
          path16 = "/handmade/petsupplies"
          link16 = "pet&supplies"
        />
      <div className="beauty-grooming__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
          </p>
        </Link>
        <p>/beauty&grooming</p>
      </div>
      <div className="beauty-grooming__heading">
        <p>Beauty & Grooming</p>
        <p>Handcrafted beauty & grooming products including bath bombs, lotions, makeup, beard oils, and more.</p>
      </div>
      <div className="beauty-grooming__header">
        <p>Shop by category</p>
      </div>
      <div className="beauty-grooming__section-outer">
        <div className="beauty-grooming__section-links">
          <Link to="/handmade/beauty&grooming">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_soap._CB464389047_.jpg" alt="beauty-grooming" />
          </Link>
          <p>Soap</p>
        </div>
        <div className="beauty-grooming__section-links">
          <Link to="/handmade/beauty&grooming">
            <img src="https://images-na.ssl-images-amazon.com/images/I/51V8JWzou8L.jpg" alt="beauty-grooming" />
          </Link>
          <p>Lotions & Moisturizers</p>
        </div>
        <div className="beauty-grooming__section-links">
          <Link to="/handmade/beauty&grooming">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_bathbomb_B07NSCF135._CB463901610_.jpg" alt="beauty-grooming" />
          </Link>
          <p>Bath Bombs</p>
        </div>
        <div className="beauty-grooming__section-links">
          <Link to="/handmade/beauty&grooming">
            <img src="https://images-na.ssl-images-amazon.com/images/I/71A-dkXLObL._SL1173_.jpg" alt="beauty-grooming" />
          </Link>
          <p>Cosmetic Bags & Accessories</p>
        </div>
        <div className="beauty-grooming__section-links">
          <Link to="/handmade/beauty&grooming">
            <img src="https://images-na.ssl-images-amazon.com/images/I/31FOdl24kOL.jpg" alt="beauty-grooming" />
          </Link>
          <p>Lip Balms</p>
        </div>
        <div className="beauty-grooming__section-links">
          <Link to="/handmade/beauty&grooming">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_bath_salts_B071VHZ9M8._CB463549793_.jpg" alt="beauty-grooming" />
          </Link>
          <p>Bath Salts</p>
        </div>
        <div className="beauty-grooming__section-links">
          <Link to="/handmade/beauty&grooming">
            <img src="https://images-na.ssl-images-amazon.com/images/I/51MFO8iW8SL.jpg" alt="beauty-grooming" />
          </Link>
          <p>Loofahs & Sponges</p>
        </div>
        <div className="beauty-grooming__section-links">
          <Link to="/handmade/beauty&grooming">
            <img src="https://images-na.ssl-images-amazon.com/images/I/41EKuOHwHzL.jpg" alt="beauty-grooming" />
          </Link>
          <p>Beauty Sets</p>
        </div>
      </div>
      <div className="beauty-grooming__header">
          <p>Collections we love</p>
      </div>
      <div className="beauty-grooming__products">
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41ZGocyOK5L.jpg"}
          title="Spa Gift Set, Handmade Lavender Gift Box, Relaxing 9 pcs Package for Women, Including Soap Bar, Facial"
          brandName="Lizush"
          rating={5}
          rateNumber={"1,456"}
          shipping={"Free Shipping"}
          price={65.95}
          arrivalEst={"Monday, Mar 17"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41ZGocyOK5L.jpg"}
          title="Spa Gift Set, Handmade Lavender Gift Box, Relaxing 9 pcs Package for Women, Including Soap Bar, Facial"
          brandName="Lizush"
          rating={5}
          rateNumber={"1,456"}
          shipping={"Free Shipping"}
          price={65.95}
          arrivalEst={"Monday, Mar 17"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41ZGocyOK5L.jpg"}
          title="Spa Gift Set, Handmade Lavender Gift Box, Relaxing 9 pcs Package for Women, Including Soap Bar, Facial"
          brandName="Lizush"
          rating={5}
          rateNumber={"1,456"}
          shipping={"Free Shipping"}
          price={65.95}
          arrivalEst={"Monday, Mar 17"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41ZGocyOK5L.jpg"}
          title="Spa Gift Set, Handmade Lavender Gift Box, Relaxing 9 pcs Package for Women, Including Soap Bar, Facial"
          brandName="Lizush"
          rating={5}
          rateNumber={"1,456"}
          shipping={"Free Shipping"}
          price={65.95}
          arrivalEst={"Monday, Mar 17"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41ZGocyOK5L.jpg"}
          title="Spa Gift Set, Handmade Lavender Gift Box, Relaxing 9 pcs Package for Women, Including Soap Bar, Facial"
          brandName="Lizush"
          rating={5}
          rateNumber={"1,456"}
          shipping={"Free Shipping"}
          price={65.95}
          arrivalEst={"Monday, Mar 17"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41ZGocyOK5L.jpg"}
          title="Spa Gift Set, Handmade Lavender Gift Box, Relaxing 9 pcs Package for Women, Including Soap Bar, Facial"
          brandName="Lizush"
          rating={5}
          rateNumber={"1,456"}
          shipping={"Free Shipping"}
          price={65.95}
          arrivalEst={"Monday, Mar 17"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41ZGocyOK5L.jpg"}
          title="Spa Gift Set, Handmade Lavender Gift Box, Relaxing 9 pcs Package for Women, Including Soap Bar, Facial"
          brandName="Lizush"
          rating={5}
          rateNumber={"1,456"}
          shipping={"Free Shipping"}
          price={65.95}
          arrivalEst={"Monday, Mar 17"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41ZGocyOK5L.jpg"}
          title="Spa Gift Set, Handmade Lavender Gift Box, Relaxing 9 pcs Package for Women, Including Soap Bar, Facial"
          brandName="Lizush"
          rating={5}
          rateNumber={"1,456"}
          shipping={"Free Shipping"}
          price={65.95}
          arrivalEst={"Monday, Mar 17"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41ZGocyOK5L.jpg"}
          title="Spa Gift Set, Handmade Lavender Gift Box, Relaxing 9 pcs Package for Women, Including Soap Bar, Facial"
          brandName="Lizush"
          rating={5}
          rateNumber={"1,456"}
          shipping={"Free Shipping"}
          price={65.95}
          arrivalEst={"Monday, Mar 17"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41ZGocyOK5L.jpg"}
          title="Spa Gift Set, Handmade Lavender Gift Box, Relaxing 9 pcs Package for Women, Including Soap Bar, Facial"
          brandName="Lizush"
          rating={5}
          rateNumber={"1,456"}
          shipping={"Free Shipping"}
          price={65.95}
          arrivalEst={"Monday, Mar 17"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41ZGocyOK5L.jpg"}
          title="Spa Gift Set, Handmade Lavender Gift Box, Relaxing 9 pcs Package for Women, Including Soap Bar, Facial"
          brandName="Lizush"
          rating={5}
          rateNumber={"1,456"}
          shipping={"Free Shipping"}
          price={65.95}
          arrivalEst={"Monday, Mar 17"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41ZGocyOK5L.jpg"}
          title="Spa Gift Set, Handmade Lavender Gift Box, Relaxing 9 pcs Package for Women, Including Soap Bar, Facial"
          brandName="Lizush"
          rating={5}
          rateNumber={"1,456"}
          shipping={"Free Shipping"}
          price={65.95}
          arrivalEst={"Monday, Mar 17"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41ZGocyOK5L.jpg"}
          title="Spa Gift Set, Handmade Lavender Gift Box, Relaxing 9 pcs Package for Women, Including Soap Bar, Facial"
          brandName="Lizush"
          rating={5}
          rateNumber={"1,456"}
          shipping={"Free Shipping"}
          price={65.95}
          arrivalEst={"Monday, Mar 17"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41ZGocyOK5L.jpg"}
          title="Spa Gift Set, Handmade Lavender Gift Box, Relaxing 9 pcs Package for Women, Including Soap Bar, Facial"
          brandName="Lizush"
          rating={5}
          rateNumber={"1,456"}
          shipping={"Free Shipping"}
          price={65.95}
          arrivalEst={"Monday, Mar 17"}
        />
      </div>
    </div>
  )
}

export default BeautyGrooming
