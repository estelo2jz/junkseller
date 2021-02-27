import React from 'react';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/HandbagAccessories.scss';
import HandmadeProductTemplate from './HandmadeProductTemplate';
import JumpTo from './JumpTo';

function HandbagsAccessories() {
  return (
    <div className="handbag-accessories__container">
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
          path6 = "/handmade/allhandmade"
          link6 = "all-handmade"
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
          path15 = "/handmade/beauty&grooming"
          link15 = "beauty&grooming"
          path16 = "/handmade/petsupplies"
          link16 = "pet&supplies"
        />
      <div className="handbag-accessories__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
          </p>
        </Link>
        <p>/handbagaccessories</p>
      </div>
      <div className="handbag-accessories__heading">
        <p>Handbags & Shoulder Bags</p>
        <p>Unique, handcrafted home decor, artwork, kitchen accessories & more.</p>
      </div>
      <div className="handbag-accessories__header">
        <p>Shop by category</p>
      </div>
      <div className="handbag-accessories__section-outer">
        <div className="handbag-accessories__section-links">
          <Link to="/handmade/handbags&accessories">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_bags_B07MPSLV1N._CB464710730_.jpg" alt="handbag-accessories" />
          </Link>
          <p>Cross-body Bags</p>
        </div>
        <div className="handbag-accessories__section-links">
          <Link to="/handmade/handbags&accessories">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_totes_B07BWF7966.jpg" alt="handbag-accessories" />
          </Link>
          <p>Totes</p>
        </div>
        <div className="handbag-accessories__section-links">
          <Link to="/handmade/handbags&accessories">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_wallet_clutches_B07DGGP68K._CB463561182_.jpg" alt="handbag-accessories" />
          </Link>
          <p>Wallets & Clutches</p>
        </div>
        <div className="handbag-accessories__section-links">
          <Link to="/handmade/handbags&accessories">
            <img src="https://images-na.ssl-images-amazon.com/images/I/91Uh4o-JXxL._SL1500_.jpg" alt="handbag-accessories" />
          </Link>
          <p>Backpacks</p>
        </div>
      </div>
      <div className="handbag-accessories__header">
          <p>Collections we love</p>
      </div>
      <div className="handbag-accessories__products">
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41YXoKfsk9L.jpg"}
          title="Personalized Nurse with Heart Stethoscope, CNA, RN, LPN Tote Bag with Mesh Pockets, Custom Printed"
          brandName="Simply Custom Life"
          rating={5}
          rateNumber={"1,456"}
          shipping={"Free Shipping"}
          price={26.66}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41YXoKfsk9L.jpg"}
          title="Personalized Nurse with Heart Stethoscope, CNA, RN, LPN Tote Bag with Mesh Pockets, Custom Printed"
          brandName="Simply Custom Life"
          rating={5}
          rateNumber={"1,456"}
          shipping={"Free Shipping"}
          price={26.66}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41YXoKfsk9L.jpg"}
          title="Personalized Nurse with Heart Stethoscope, CNA, RN, LPN Tote Bag with Mesh Pockets, Custom Printed"
          brandName="Simply Custom Life"
          rating={5}
          rateNumber={"1,456"}
          shipping={"Free Shipping"}
          price={26.66}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41YXoKfsk9L.jpg"}
          title="Personalized Nurse with Heart Stethoscope, CNA, RN, LPN Tote Bag with Mesh Pockets, Custom Printed"
          brandName="Simply Custom Life"
          rating={5}
          rateNumber={"1,456"}
          shipping={"Free Shipping"}
          price={26.66}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41YXoKfsk9L.jpg"}
          title="Personalized Nurse with Heart Stethoscope, CNA, RN, LPN Tote Bag with Mesh Pockets, Custom Printed"
          brandName="Simply Custom Life"
          rating={5}
          rateNumber={"1,456"}
          shipping={"Free Shipping"}
          price={26.66}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41YXoKfsk9L.jpg"}
          title="Personalized Nurse with Heart Stethoscope, CNA, RN, LPN Tote Bag with Mesh Pockets, Custom Printed"
          brandName="Simply Custom Life"
          rating={5}
          rateNumber={"1,456"}
          shipping={"Free Shipping"}
          price={26.66}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41YXoKfsk9L.jpg"}
          title="Personalized Nurse with Heart Stethoscope, CNA, RN, LPN Tote Bag with Mesh Pockets, Custom Printed"
          brandName="Simply Custom Life"
          rating={5}
          rateNumber={"1,456"}
          shipping={"Free Shipping"}
          price={26.66}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41YXoKfsk9L.jpg"}
          title="Personalized Nurse with Heart Stethoscope, CNA, RN, LPN Tote Bag with Mesh Pockets, Custom Printed"
          brandName="Simply Custom Life"
          rating={5}
          rateNumber={"1,456"}
          shipping={"Free Shipping"}
          price={26.66}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41YXoKfsk9L.jpg"}
          title="Personalized Nurse with Heart Stethoscope, CNA, RN, LPN Tote Bag with Mesh Pockets, Custom Printed"
          brandName="Simply Custom Life"
          rating={5}
          rateNumber={"1,456"}
          shipping={"Free Shipping"}
          price={26.66}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41YXoKfsk9L.jpg"}
          title="Personalized Nurse with Heart Stethoscope, CNA, RN, LPN Tote Bag with Mesh Pockets, Custom Printed"
          brandName="Simply Custom Life"
          rating={5}
          rateNumber={"1,456"}
          shipping={"Free Shipping"}
          price={26.66}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41YXoKfsk9L.jpg"}
          title="Personalized Nurse with Heart Stethoscope, CNA, RN, LPN Tote Bag with Mesh Pockets, Custom Printed"
          brandName="Simply Custom Life"
          rating={5}
          rateNumber={"1,456"}
          shipping={"Free Shipping"}
          price={26.66}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41YXoKfsk9L.jpg"}
          title="Personalized Nurse with Heart Stethoscope, CNA, RN, LPN Tote Bag with Mesh Pockets, Custom Printed"
          brandName="Simply Custom Life"
          rating={5}
          rateNumber={"1,456"}
          shipping={"Free Shipping"}
          price={26.66}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41YXoKfsk9L.jpg"}
          title="Personalized Nurse with Heart Stethoscope, CNA, RN, LPN Tote Bag with Mesh Pockets, Custom Printed"
          brandName="Simply Custom Life"
          rating={5}
          rateNumber={"1,456"}
          shipping={"Free Shipping"}
          price={26.66}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41YXoKfsk9L.jpg"}
          title="Personalized Nurse with Heart Stethoscope, CNA, RN, LPN Tote Bag with Mesh Pockets, Custom Printed"
          brandName="Simply Custom Life"
          rating={5}
          rateNumber={"1,456"}
          shipping={"Free Shipping"}
          price={26.66}
          arrivalEst={"Friday, Mar 1"}
        />
      </div>
    </div>
  )
}

export default HandbagsAccessories
