import React from 'react';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/HomeKitchen.scss';
import HandmadeProductTemplate from './HandmadeProductTemplate';

function HomeKitchen() {
  return (
    <div className="home-kitchen__container">
      <div className="home-kitchen__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
          </p>
        </Link>
        <p>/home&kitchen</p>
      </div>
      <div className="home-kitchen__section">
        <div className="home-kitchen__heading">
          <p>Home & Kitchen</p>
          <p>Unique, handcrafted home decor, artwork, kitchen accessories & more.</p>
        </div>
        <div className="home-kitchen__header">
          <p>Shop by Category</p>
        </div>
        <div className="home-kitchen__section-outer">
          <div className="home-kitchen__section-categories">
            <Link to="/handmade/home&kitchen" className="home-kitchen__links">
              <p>home decor</p>
            </Link>
            <Link to="/handmade/home&kitchen" className="home-kitchen__links">
              <p>artwork</p>
            </Link>
            <Link to="/handmade/home&kitchen" className="home-kitchen__links">
              <p>kitchen & dining</p>
            </Link>
            <Link to="/handmade/home&kitchen" className="home-kitchen__links">
              <p>furniture</p>
            </Link>
            <Link to="/handmade/home&kitchen" className="home-kitchen__links">
              <p>lighting</p>
            </Link>
            <Link to="/handmade/home&kitchen" className="home-kitchen__links">
              <p>bath</p>
            </Link>
            <Link to="/handmade/home&kitchen" className="home-kitchen__links">
              <p>pet bowls & feeders</p>
            </Link>
            <Link to="/handmade/home&kitchen" className="home-kitchen__links">
              <p>bedding</p>
            </Link>
          </div>
        </div>
        <div className="home-kitchen__header">
          <p>Featured Collections</p>
        </div>
        <div className="home-kitchen__products">
          <HandmadeProductTemplate
            id={uuid()}
            image={"https://images-na.ssl-images-amazon.com/images/I/41-glSugekL.jpg"}
            title="The Original BenShot Bullet Rocks Glass with Real 0.308 Bullet Made in the USA"
            brandName="BenShot USA"
            rating={5}
            rateNumber={"792"}
            shipping={"Free Shipping"}
            price={22.99}
            arrivalEst={"Thursday, Feb 12"}
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
            arrivalEst={"Thursday, Feb 12"}
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
            arrivalEst={"Thursday, Feb 12"}
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
            arrivalEst={"Thursday, Feb 12"}
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
            arrivalEst={"Thursday, Feb 12"}
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
            arrivalEst={"Thursday, Feb 12"}
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
            arrivalEst={"Thursday, Feb 12"}
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
            arrivalEst={"Thursday, Feb 12"}
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
            arrivalEst={"Thursday, Feb 12"}
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
            arrivalEst={"Thursday, Feb 12"}
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
            arrivalEst={"Thursday, Feb 12"}
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
            arrivalEst={"Thursday, Feb 12"}
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
            arrivalEst={"Thursday, Feb 12"}
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
            arrivalEst={"Thursday, Feb 12"}
          />
        </div>
      </div>
    </div>
  )
}

export default HomeKitchen
