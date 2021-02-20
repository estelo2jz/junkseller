import React from 'react';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/HomeDecor.scss';
import HandmadeProductTemplate from './HandmadeProductTemplate';


function HomeDecor() {
  return (
    <div className="home-decor__container">
      <div className="home-decor__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
          </p>
        </Link>
        <p>/homedecor</p>
      </div>
      <div className="home-decor__heading">
        <p>Home Decor</p>
        <p></p>
      </div>
      <div className="home-decor__header">
        <p>Shop by category</p>
      </div>
      <div className="home-decor__section-outer">
        <div className="home-decor__section-links">
          <Link to="/handmade/homedecor">
            <img src="https://images-na.ssl-images-amazon.com/images/I/71pz%2Bg7IVbL._SY500_.jpg" alt="home-decor" />
          </Link>
          <p>Furniture</p>
        </div>
        <div className="home-decor__section-links">
          <Link to="/handmade/homedecor">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_homedecor_B07N5WZN7Y._CB464707801_.jpg" alt="home-decor" />
          </Link>
          <p>Artwork</p>
        </div>
        <div className="home-decor__section-links">
          <Link to="/handmade/homedecor">
            <img src="https://images-na.ssl-images-amazon.com/images/I/5156xe%2BasqL.jpg" alt="home-decor" />
          </Link>
          <p>Lighting</p>
        </div>
        <div className="home-decor__section-links">
          <Link to="/handmade/homedecor">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_candle_B07GH7V7Q8._CB465496920_.jpg" alt="home-decor" />
          </Link>
          <p>Candles & Holders</p>
        </div>
        <div className="home-decor__section-links">
          <Link to="/handmade/homedecor">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_bath._CB463969644_.jpg" alt="home-decor" />
          </Link>
          <p>Bath</p>
        </div>
        <div className="home-decor__section-links">
          <Link to="/handmade/homedecor">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_bedding_B074DLP12G._CB465474630_.jpg" alt="home-decor" />
          </Link>
          <p>Bedding</p>
        </div>
        <div className="home-decor__section-links">
          <Link to="/handmade/homedecor">
            <img src="https://images-na.ssl-images-amazon.com/images/I/91HjiBXd4OL._SY500_.jpg" alt="home-decor" />
          </Link>
          <p>Throw Pillows</p>
        </div>
        <div className="home-decor__section-links">
          <Link to="/handmade/homedecor">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_childrendecor_B07DR8KPJ2._CB465475296_.jpg" alt="home-decor" />
          </Link>
          <p>Children's Room Decor</p>
        </div>
      </div>
      <div className="home-decor__header">
          <p>Collections we love</p>
      </div>
      <div className="home-decor__products">
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41AUUQQzGyL.jpg"}
          title="Name or Word Decal - Personalized - Solid and Glitter Color Choices - Custom - Choose Size, Font"
          brandName="Designs by Blackburn"
          rating={5}
          rateNumber={"990"}
          shipping={"Free Shipping"}
          price={5.99}
          arrivalEst={"Sunday, Mar 23"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41AUUQQzGyL.jpg"}
          title="Name or Word Decal - Personalized - Solid and Glitter Color Choices - Custom - Choose Size, Font"
          brandName="Designs by Blackburn"
          rating={5}
          rateNumber={"990"}
          shipping={"Free Shipping"}
          price={5.99}
          arrivalEst={"Sunday, Mar 23"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41AUUQQzGyL.jpg"}
          title="Name or Word Decal - Personalized - Solid and Glitter Color Choices - Custom - Choose Size, Font"
          brandName="Designs by Blackburn"
          rating={5}
          rateNumber={"990"}
          shipping={"Free Shipping"}
          price={5.99}
          arrivalEst={"Sunday, Mar 23"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41AUUQQzGyL.jpg"}
          title="Name or Word Decal - Personalized - Solid and Glitter Color Choices - Custom - Choose Size, Font"
          brandName="Designs by Blackburn"
          rating={5}
          rateNumber={"990"}
          shipping={"Free Shipping"}
          price={5.99}
          arrivalEst={"Sunday, Mar 23"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41AUUQQzGyL.jpg"}
          title="Name or Word Decal - Personalized - Solid and Glitter Color Choices - Custom - Choose Size, Font"
          brandName="Designs by Blackburn"
          rating={5}
          rateNumber={"990"}
          shipping={"Free Shipping"}
          price={5.99}
          arrivalEst={"Sunday, Mar 23"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41AUUQQzGyL.jpg"}
          title="Name or Word Decal - Personalized - Solid and Glitter Color Choices - Custom - Choose Size, Font"
          brandName="Designs by Blackburn"
          rating={5}
          rateNumber={"990"}
          shipping={"Free Shipping"}
          price={5.99}
          arrivalEst={"Sunday, Mar 23"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41AUUQQzGyL.jpg"}
          title="Name or Word Decal - Personalized - Solid and Glitter Color Choices - Custom - Choose Size, Font"
          brandName="Designs by Blackburn"
          rating={5}
          rateNumber={"990"}
          shipping={"Free Shipping"}
          price={5.99}
          arrivalEst={"Sunday, Mar 23"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41AUUQQzGyL.jpg"}
          title="Name or Word Decal - Personalized - Solid and Glitter Color Choices - Custom - Choose Size, Font"
          brandName="Designs by Blackburn"
          rating={5}
          rateNumber={"990"}
          shipping={"Free Shipping"}
          price={5.99}
          arrivalEst={"Sunday, Mar 23"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41AUUQQzGyL.jpg"}
          title="Name or Word Decal - Personalized - Solid and Glitter Color Choices - Custom - Choose Size, Font"
          brandName="Designs by Blackburn"
          rating={5}
          rateNumber={"990"}
          shipping={"Free Shipping"}
          price={5.99}
          arrivalEst={"Sunday, Mar 23"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41AUUQQzGyL.jpg"}
          title="Name or Word Decal - Personalized - Solid and Glitter Color Choices - Custom - Choose Size, Font"
          brandName="Designs by Blackburn"
          rating={5}
          rateNumber={"990"}
          shipping={"Free Shipping"}
          price={5.99}
          arrivalEst={"Sunday, Mar 23"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41AUUQQzGyL.jpg"}
          title="Name or Word Decal - Personalized - Solid and Glitter Color Choices - Custom - Choose Size, Font"
          brandName="Designs by Blackburn"
          rating={5}
          rateNumber={"990"}
          shipping={"Free Shipping"}
          price={5.99}
          arrivalEst={"Sunday, Mar 23"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41AUUQQzGyL.jpg"}
          title="Name or Word Decal - Personalized - Solid and Glitter Color Choices - Custom - Choose Size, Font"
          brandName="Designs by Blackburn"
          rating={5}
          rateNumber={"990"}
          shipping={"Free Shipping"}
          price={5.99}
          arrivalEst={"Sunday, Mar 23"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41AUUQQzGyL.jpg"}
          title="Name or Word Decal - Personalized - Solid and Glitter Color Choices - Custom - Choose Size, Font"
          brandName="Designs by Blackburn"
          rating={5}
          rateNumber={"990"}
          shipping={"Free Shipping"}
          price={5.99}
          arrivalEst={"Sunday, Mar 23"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41AUUQQzGyL.jpg"}
          title="Name or Word Decal - Personalized - Solid and Glitter Color Choices - Custom - Choose Size, Font"
          brandName="Designs by Blackburn"
          rating={5}
          rateNumber={"990"}
          shipping={"Free Shipping"}
          price={5.99}
          arrivalEst={"Sunday, Mar 23"}
        />
      </div>
    </div>
  )
}

export default HomeDecor
