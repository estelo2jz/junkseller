import React from 'react';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/HandbagAccessories.scss';
import HandmadeProductTemplate from './HandmadeProductTemplate';

function HandbagsAccessories() {
  return (
    <div className="handbag-accessories__container">
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
          <Link to="/handbags&accessories">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_bags_B07MPSLV1N._CB464710730_.jpg" alt="handbag-accessories" />
          </Link>
          <p>Cross-body Bags</p>
        </div>
        <div className="handbag-accessories__section-links">
          <Link to="/handbags&accessories">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_totes_B07BWF7966.jpg" alt="handbag-accessories" />
          </Link>
          <p>Totes</p>
        </div>
        <div className="handbag-accessories__section-links">
          <Link to="/handbags&accessories">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_wallet_clutches_B07DGGP68K._CB463561182_.jpg" alt="handbag-accessories" />
          </Link>
          <p>Wallets & Clutches</p>
        </div>
        <div className="handbag-accessories__section-links">
          <Link to="/handbags&accessories">
            <img src="https://images-na.ssl-images-amazon.com/images/I/91Uh4o-JXxL._SL1500_.jpg" alt="handbag-accessories" />
          </Link>
          <p>Backpacks</p>
        </div>
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
          price={"26.66"}
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
          price={"26.66"}
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
          price={"26.66"}
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
          price={"26.66"}
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
          price={"26.66"}
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
          price={"26.66"}
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
          price={"26.66"}
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
          price={"26.66"}
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
          price={"26.66"}
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
          price={"26.66"}
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
          price={"26.66"}
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
          price={"26.66"}
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
          price={"26.66"}
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
          price={"26.66"}
          arrivalEst={"Friday, Mar 1"}
        />
      </div>
    </div>
  )
}

export default HandbagsAccessories
