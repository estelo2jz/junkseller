import React from 'react';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/PetSupplies.scss';
import HandmadeProductTemplate from './HandmadeProductTemplate';
import JumpTo from './JumpTo';

function PetSupplies() {
  return (
    <div className="handmade-pet-supplies__container">
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
          path15 = "/handmade/beauty&grooming"
          link15 = "beauty&grooming"
          path16 = "/handmade/allhandmade"
          link16 = "all-handmade"
        />
      <div className="handmade-pet-supplies__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
          </p>
        </Link>
        <p>/petsupplies</p>
      </div>
      <div className="handmade-pet-supplies__heading">
        <p>Pet Supplies</p>
        <p></p>
      </div>
      {/* <div className="handmade-pet-supplies__header">
        <p>Shop by category</p>
      </div>
      <div className="handmade-pet-supplies__section-outer">
        <div className="handmade-pet-supplies__section-links">
          <Link to="/handmade/handbags&accessories">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_bags_B07MPSLV1N._CB464710730_.jpg" alt="handmade-pet-supplies" />
          </Link>
          <p>Cross-body Bags</p>
        </div>
        <div className="handmade-pet-supplies__section-links">
          <Link to="/handmade/handbags&accessories">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_totes_B07BWF7966.jpg" alt="handmade-pet-supplies" />
          </Link>
          <p>Totes</p>
        </div>
        <div className="handmade-pet-supplies__section-links">
          <Link to="/handmade/handbags&accessories">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_wallet_clutches_B07DGGP68K._CB463561182_.jpg" alt="handmade-pet-supplies" />
          </Link>
          <p>Wallets & Clutches</p>
        </div>
        <div className="handmade-pet-supplies__section-links">
          <Link to="/handmade/handbags&accessories">
            <img src="https://images-na.ssl-images-amazon.com/images/I/91Uh4o-JXxL._SL1500_.jpg" alt="handmade-pet-supplies" />
          </Link>
          <p>Backpacks</p>
        </div>
      </div> */}
      {/* <div className="handmade-pet-supplies__header">
          <p>Collections we love</p>
      </div> */}
      <div className="handmade-pet-supplies__products">
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

export default PetSupplies
