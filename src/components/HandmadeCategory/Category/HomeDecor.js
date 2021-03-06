import React from 'react';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/HomeDecor.scss';
import HandmadeProductTemplate from './HandmadeProductTemplate';
import JumpTo from './JumpTo';

function HomeDecor() {
  return (
    <div className="home-decor__container">
              <JumpTo 
          path1 = "/handmade/kitchen&dining"
          link1 = "kitchen&dining"
          path2 = "/handmade/wedding"
          link2 = "wedding"
          path3 = "/handmade/artwork"
          link3 = "art-work"
          path4 = "/handmade/allhandmade"
          link4 = "all-handmade"
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
          path16 = "/handmade/petsupplies"
          link16 = "pet&supplies"
        />
      <div className="home-decor__history-path">
      <Link to="/handmade">
          <p>
            go back
          </p>
        </Link>
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
