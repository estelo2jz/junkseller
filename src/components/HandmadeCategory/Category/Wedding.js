import React from 'react';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/Wedding.scss';
import HandmadeProductTemplate from './HandmadeProductTemplate';
import JumpTo from './JumpTo';


function Wedding() {
  return (
    <div className="wedding__container">
              <JumpTo 
          path1 = "/handmade/kitchen&dining"
          link1 = "kitchen&dining"
          path2 = "/handmade/allhandmade"
          link2 = "all-handmade"
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
          path16 = "/handmade/petsupplies"
          link16 = "pet&supplies"
        />
      <div className="wedding__history-path">
      <Link to="/handmade">
          <p>
            go back
          </p>
        </Link>
      </div>
      <div className="wedding__section">
        <div className="wedding__heading">
          <p>The Wedding Shop</p>
          <p>Unique, handcrafted home decor, artwork, kitchen accessories & more.</p>
        </div>
        <div className="wedding__header">
          <p>Shop by category</p>
        </div>
        <div className="wedding__section-outer">
          <div className="wedding__section-category">
            <div className="wedding__section-links">
              <Link to="/handmade/wedding" className="wedding__section-link">
                <img src="https://images-na.ssl-images-amazon.com/images/I/51VIK8aBx0L.jpg" alt="wedding" />
              </Link>
              <p>Invites & Stationary</p>
            </div>
            <div className="wedding__section-links">
              <Link to="/handmade/wedding" className="wedding__section-link">
                <img src="https://images-na.ssl-images-amazon.com/images/I/81qCplvl6LL._SY500_.jpg" alt="wedding" />
              </Link>
              <p>Jewelry & Ring Boxes</p>
            </div>
            <div className="wedding__section-links">
              <Link to="/handmade/wedding" className="wedding__section-link">
                <img src="https://images-na.ssl-images-amazon.com/images/I/91vowXGXa8L._SY500_.jpg" alt="wedding" />
              </Link>
              <p>Bridal Fashion Accessories</p>
            </div>
            <div className="wedding__section-links">
              <Link to="/handmade/wedding" className="wedding__section-link">
                <img src="https://images-na.ssl-images-amazon.com/images/I/81smthlH-UL._SY500_.jpg" alt="wedding" />
              </Link>
              <p>Venue & Reception Decor</p>
            </div>
            <div className="wedding__section-links">
              <Link to="/handmade/wedding" className="wedding__section-link">
                <img src="https://images-na.ssl-images-amazon.com/images/I/51Q-4l7Da4L.jpg" alt="wedding" />
              </Link>
              <p>Card & Gift Boxes</p>
            </div>
            <div className="wedding__section-links">
              <Link to="/handmade/wedding" className="wedding__section-link">
                <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_artifical_flowers_B07PH45141._CB463559782_.jpg" alt="wedding" />
              </Link>
              <p>Artificial Flowers</p>
            </div>
            <div className="wedding__section-links">
              <Link to="/handmade/wedding" className="wedding__section-link">
                <img src="https://images-na.ssl-images-amazon.com/images/I/51cw7F2dAcL.jpg" alt="wedding" />
              </Link>
              <p>Wedding Signs</p>
            </div>
            <div className="wedding__section-links">
              <Link to="/handmade/wedding" className="wedding__section-link">
                <img src="https://images-na.ssl-images-amazon.com/images/I/A1jlgEA2KtL._SY500_.jpg" alt="wedding" />
              </Link>
              <p>Honeymoon Trevel Accessories</p>
            </div>
          </div>
        </div>
        <div className="wedding__header">
          <p>Collections we love</p>
        </div>
        <div className="wedding__products">
          <HandmadeProductTemplate
            id={uuid()}
            image={"https://images-na.ssl-images-amazon.com/images/I/41-glSugekL.jpg"}
            title="The Original BenShot Bullet Rocks Glass with Real 0.308 Bullet Made in the USA"
            brandName="BenShot USA"
            rating={5}
            rateNumber={"792"}
            shipping={"Free Shipping"}
            price={22.99}
            arrivalEst={"Tuesday, Feb 12"}
          />
          <HandmadeProductTemplate
            id={uuid()}
            image={"https://images-na.ssl-images-amazon.com/images/I/41-glSugekL.jpg"}
            title="The Original BenShot Bullet Rocks Glass with Real 0.308 Bullet Made in the USA"
            brandName="BenShot USA"
            rating={5}
            rateNumber={"792"}
            shipping={"Free Shipping"}
            price={22.99}
            arrivalEst={"Tuesday, Feb 12"}
          />
          <HandmadeProductTemplate
            id={uuid()}
            image={"https://images-na.ssl-images-amazon.com/images/I/41-glSugekL.jpg"}
            title="The Original BenShot Bullet Rocks Glass with Real 0.308 Bullet Made in the USA"
            brandName="BenShot USA"
            rating={5}
            rateNumber={"792"}
            shipping={"Free Shipping"}
            price={22.99}
            arrivalEst={"Tuesday, Feb 12"}
          />
          <HandmadeProductTemplate
            id={uuid()}
            image={"https://images-na.ssl-images-amazon.com/images/I/41-glSugekL.jpg"}
            title="The Original BenShot Bullet Rocks Glass with Real 0.308 Bullet Made in the USA"
            brandName="BenShot USA"
            rating={5}
            rateNumber={"792"}
            shipping={"Free Shipping"}
            price={22.99}
            arrivalEst={"Tuesday, Feb 12"}
          />
          <HandmadeProductTemplate
            id={uuid()}
            image={"https://images-na.ssl-images-amazon.com/images/I/41-glSugekL.jpg"}
            title="The Original BenShot Bullet Rocks Glass with Real 0.308 Bullet Made in the USA"
            brandName="BenShot USA"
            rating={5}
            rateNumber={"792"}
            shipping={"Free Shipping"}
            price={22.99}
            arrivalEst={"Tuesday, Feb 12"}
          />
          <HandmadeProductTemplate
            id={uuid()}
            image={"https://images-na.ssl-images-amazon.com/images/I/41-glSugekL.jpg"}
            title="The Original BenShot Bullet Rocks Glass with Real 0.308 Bullet Made in the USA"
            brandName="BenShot USA"
            rating={5}
            rateNumber={"792"}
            shipping={"Free Shipping"}
            price={22.99}
            arrivalEst={"Tuesday, Feb 12"}
          />
          <HandmadeProductTemplate
            id={uuid()}
            image={"https://images-na.ssl-images-amazon.com/images/I/41-glSugekL.jpg"}
            title="The Original BenShot Bullet Rocks Glass with Real 0.308 Bullet Made in the USA"
            brandName="BenShot USA"
            rating={5}
            rateNumber={"792"}
            shipping={"Free Shipping"}
            price={22.99}
            arrivalEst={"Tuesday, Feb 12"}
          />
          <HandmadeProductTemplate
            id={uuid()}
            image={"https://images-na.ssl-images-amazon.com/images/I/41-glSugekL.jpg"}
            title="The Original BenShot Bullet Rocks Glass with Real 0.308 Bullet Made in the USA"
            brandName="BenShot USA"
            rating={5}
            rateNumber={"792"}
            shipping={"Free Shipping"}
            price={22.99}
            arrivalEst={"Tuesday, Feb 12"}
          />
          <HandmadeProductTemplate
            id={uuid()}
            image={"https://images-na.ssl-images-amazon.com/images/I/41-glSugekL.jpg"}
            title="The Original BenShot Bullet Rocks Glass with Real 0.308 Bullet Made in the USA"
            brandName="BenShot USA"
            rating={5}
            rateNumber={"792"}
            shipping={"Free Shipping"}
            price={22.99}
            arrivalEst={"Tuesday, Feb 12"}
          />
          <HandmadeProductTemplate
            id={uuid()}
            image={"https://images-na.ssl-images-amazon.com/images/I/41-glSugekL.jpg"}
            title="The Original BenShot Bullet Rocks Glass with Real 0.308 Bullet Made in the USA"
            brandName="BenShot USA"
            rating={5}
            rateNumber={"792"}
            shipping={"Free Shipping"}
            price={22.99}
            arrivalEst={"Tuesday, Feb 12"}
          />
          <HandmadeProductTemplate
            id={uuid()}
            image={"https://images-na.ssl-images-amazon.com/images/I/41-glSugekL.jpg"}
            title="The Original BenShot Bullet Rocks Glass with Real 0.308 Bullet Made in the USA"
            brandName="BenShot USA"
            rating={5}
            rateNumber={"792"}
            shipping={"Free Shipping"}
            price={22.99}
            arrivalEst={"Tuesday, Feb 12"}
          />
          <HandmadeProductTemplate
            id={uuid()}
            image={"https://images-na.ssl-images-amazon.com/images/I/41-glSugekL.jpg"}
            title="The Original BenShot Bullet Rocks Glass with Real 0.308 Bullet Made in the USA"
            brandName="BenShot USA"
            rating={5}
            rateNumber={"792"}
            shipping={"Free Shipping"}
            price={22.99}
            arrivalEst={"Tuesday, Feb 12"}
          />
          <HandmadeProductTemplate
            id={uuid()}
            image={"https://images-na.ssl-images-amazon.com/images/I/41-glSugekL.jpg"}
            title="The Original BenShot Bullet Rocks Glass with Real 0.308 Bullet Made in the USA"
            brandName="BenShot USA"
            rating={5}
            rateNumber={"792"}
            shipping={"Free Shipping"}
            price={22.99}
            arrivalEst={"Tuesday, Feb 12"}
          />
          <HandmadeProductTemplate
            id={uuid()}
            image={"https://images-na.ssl-images-amazon.com/images/I/41-glSugekL.jpg"}
            title="The Original BenShot Bullet Rocks Glass with Real 0.308 Bullet Made in the USA"
            brandName="BenShot USA"
            rating={5}
            rateNumber={"792"}
            shipping={"Free Shipping"}
            price={22.99}
            arrivalEst={"Tuesday, Feb 12"}
          />
        </div>
      </div>
    </div>
  )
}

export default Wedding
