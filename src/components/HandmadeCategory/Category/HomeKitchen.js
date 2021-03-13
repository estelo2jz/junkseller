import React from 'react';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/HomeKitchen.scss';
import HandmadeProductTemplate from './HandmadeProductTemplate';
import JumpTo from './JumpTo';

function HomeKitchen() {
  return (
    <div className="home-kitchen__container">
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
          path13 = "/handmade/allhandmade"
          link13 = "all-handmade"
          path14 = "/handmade/furniture"
          link14 = "furniture"
          path15 = "/handmade/beauty&grooming"
          link15 = "beauty&grooming"
          path16 = "/handmade/petsupplies"
          link16 = "pet&supplies"
        />
      <div className="home-kitchen__history-path">
      <Link to="/handmade">
          <p>
            go back
          </p>
        </Link>
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
