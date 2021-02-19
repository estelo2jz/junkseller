import React from 'react';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/Wedding.scss';
import HandmadeProductTemplate from './HandmadeProductTemplate';

function Wedding() {
  return (
    <div className="wedding__container">
      <div className="wedding__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
          </p>
        </Link>
        <p>/wedding</p>
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
            price={"22.99"}
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
            price={"22.99"}
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
            price={"22.99"}
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
            price={"22.99"}
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
            price={"22.99"}
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
            price={"22.99"}
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
            price={"22.99"}
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
            price={"22.99"}
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
            price={"22.99"}
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
            price={"22.99"}
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
            price={"22.99"}
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
            price={"22.99"}
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
            price={"22.99"}
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
            price={"22.99"}
            arrivalEst={"Tuesday, Feb 12"}
          />
        </div>
      </div>
    </div>
  )
}

export default Wedding
