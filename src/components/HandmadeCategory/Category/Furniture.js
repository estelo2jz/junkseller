import React from 'react';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/Furniture.scss';
import HandmadeProductTemplate from './HandmadeProductTemplate';


function Furniture() {
  return (
    <div className="furniture__container">
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
