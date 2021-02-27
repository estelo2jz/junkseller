import React from 'react';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/Furniture.scss';
import HandmadeProductTemplate from './HandmadeProductTemplate';
import JumpTo from './JumpTo';

function Furniture() {
  return (
    <div className="furniture__container">
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
          path14 = "/handmade/allhandmade"
          link14 = "all-handmade"
          path15 = "/handmade/beauty&grooming"
          link15 = "beauty&grooming"
          path16 = "/handmade/petsupplies"
          link16 = "pet&supplies"
        />
      <div className="furniture__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
          </p>
        </Link>
        <p>/furniture</p>
      </div>
      <div className="furniture__heading">
        <p>Furniture</p>
        <p></p>
      </div>
      {/* <div className="furniture__header">
        <p>Shop by category</p>
      </div> */}
      <div className="furniture__section-outer">
        <div className="furniture__section-links">
          <Link to="/handmade/furniture">
            <img src="https://images-na.ssl-images-amazon.com/images/I/51FcMLg9IQL.jpg" alt="furniture" />
          </Link>
          <p>Bedroom</p>
        </div>
        <div className="furniture__section-links">
          <Link to="/handmade/furniture">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_diningroom._CB464490169_.jpg" alt="furniture" />
          </Link>
          <p>Dining Room</p>
        </div>
        <div className="furniture__section-links">
          <Link to="/handmade/furniture">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_livingroom3._CB464489434_.jpg" alt="furniture" />
          </Link>
          <p>Living Room</p>
        </div>
        <div className="furniture__section-links">
          <Link to="/handmade/furniture">
            <img src="https://images-na.ssl-images-amazon.com/images/I/91lTXHFDJBL._SY500_.jpg" alt="furniture" />
          </Link>
          <p>Patio Furniture</p>
        </div>
      </div>
      {/* <div className="furniture__header">
          <p>Collections we love</p>
      </div> */}
      <div className="furniture__products">
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41P7WJ9MGvL.jpg"}
          title="House Bed Frame Full Size PREMIUM WOOD"
          brandName="Purveyor"
          rating={4}
          rateNumber={"104"}
          shipping={"+ $4.99 shipping"}
          price={299.99}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41P7WJ9MGvL.jpg"}
          title="House Bed Frame Full Size PREMIUM WOOD"
          brandName="Purveyor"
          rating={4}
          rateNumber={"104"}
          shipping={"+ $4.99 shipping"}
          price={299.99}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41P7WJ9MGvL.jpg"}
          title="House Bed Frame Full Size PREMIUM WOOD"
          brandName="Purveyor"
          rating={4}
          rateNumber={"104"}
          shipping={"+ $4.99 shipping"}
          price={299.99}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41P7WJ9MGvL.jpg"}
          title="House Bed Frame Full Size PREMIUM WOOD"
          brandName="Purveyor"
          rating={4}
          rateNumber={"104"}
          shipping={"+ $4.99 shipping"}
          price={299.99}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41P7WJ9MGvL.jpg"}
          title="House Bed Frame Full Size PREMIUM WOOD"
          brandName="Purveyor"
          rating={4}
          rateNumber={"104"}
          shipping={"+ $4.99 shipping"}
          price={299.99}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41P7WJ9MGvL.jpg"}
          title="House Bed Frame Full Size PREMIUM WOOD"
          brandName="Purveyor"
          rating={4}
          rateNumber={"104"}
          shipping={"+ $4.99 shipping"}
          price={299.99}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41P7WJ9MGvL.jpg"}
          title="House Bed Frame Full Size PREMIUM WOOD"
          brandName="Purveyor"
          rating={4}
          rateNumber={"104"}
          shipping={"+ $4.99 shipping"}
          price={299.99}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41P7WJ9MGvL.jpg"}
          title="House Bed Frame Full Size PREMIUM WOOD"
          brandName="Purveyor"
          rating={4}
          rateNumber={"104"}
          shipping={"+ $4.99 shipping"}
          price={299.99}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41P7WJ9MGvL.jpg"}
          title="House Bed Frame Full Size PREMIUM WOOD"
          brandName="Purveyor"
          rating={4}
          rateNumber={"104"}
          shipping={"+ $4.99 shipping"}
          price={299.99}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41P7WJ9MGvL.jpg"}
          title="House Bed Frame Full Size PREMIUM WOOD"
          brandName="Purveyor"
          rating={4}
          rateNumber={"104"}
          shipping={"+ $4.99 shipping"}
          price={299.99}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41P7WJ9MGvL.jpg"}
          title="House Bed Frame Full Size PREMIUM WOOD"
          brandName="Purveyor"
          rating={4}
          rateNumber={"104"}
          shipping={"+ $4.99 shipping"}
          price={299.99}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41P7WJ9MGvL.jpg"}
          title="House Bed Frame Full Size PREMIUM WOOD"
          brandName="Purveyor"
          rating={4}
          rateNumber={"104"}
          shipping={"+ $4.99 shipping"}
          price={299.99}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41P7WJ9MGvL.jpg"}
          title="House Bed Frame Full Size PREMIUM WOOD"
          brandName="Purveyor"
          rating={4}
          rateNumber={"104"}
          shipping={"+ $4.99 shipping"}
          price={299.99}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41P7WJ9MGvL.jpg"}
          title="House Bed Frame Full Size PREMIUM WOOD"
          brandName="Purveyor"
          rating={4}
          rateNumber={"104"}
          shipping={"+ $4.99 shipping"}
          price={299.99}
          arrivalEst={"Friday, Mar 1"}
        />
      </div>
    </div>
  )
}

export default Furniture
