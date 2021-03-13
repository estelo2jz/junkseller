import React from 'react';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/KitchenDining.scss';
import HandmadeProductTemplate from './HandmadeProductTemplate';
import JumpTo from './JumpTo';

function KitchenDining() {
  return (
    <div className="kitchen-dining__container">
              <JumpTo 
          path1 = "/handmade/allhandmade"
          link1 = "allhandmade"
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
          path16 = "/handmade/petsupplies"
          link16 = "pet&supplies"
        />
      <div className="kitchen-dining__history-path">
      <Link to="/handmade">
          <p>
            go back
          </p>
        </Link>
      </div>
      <div className="kitchen-dining__heading">
        <p>Kitchen & Dining</p>
        <p></p>
      </div>
      <div className="kitchen-dining__header">
        <p>Shop by category</p>
      </div>
      <div className="kitchen-dining__section-outer">
        <div className="kitchen-dining__section-links">
          <Link to="/handmade/kitchen&dining">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_bakeware_B01AK8J6FQ._CB1556927193_.jpg" alt="kitchen-dining" />
          </Link>
          <p>Bakeware</p>
        </div>
        <div className="kitchen-dining__section-links">
          <Link to="/handmade/kitchen&dining">
            <img src="https://images-na.ssl-images-amazon.com/images/I/81%2BW39zvgYL._SY500_.jpg" alt="kitchen-dining" />
          </Link>
          <p>Cups & Mugs</p>
        </div>
        <div className="kitchen-dining__section-links">
          <Link to="/handmade/kitchen&dining">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_kitchen_B01L7IVCZK._CB465476478_.jpg" alt="kitchen-dining" />
          </Link>
          <p>Cookware</p>
        </div>
        <div className="kitchen-dining__section-links">
          <Link to="/handmade/kitchen&dining">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_clothtowels_BO7Q44RWHS_2._CB1556927323_.jpg" alt="kitchen-dining" />
          </Link>
          <p>Kitchen Linen</p>
        </div>
        <div className="kitchen-dining__section-links">
          <Link to="/handmade/kitchen&dining">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_tableware_B07N5BQJRT._CB1556927643_.jpg" alt="kitchen-dining" />
          </Link>
          <p>Tableware</p>
        </div>
        <div className="kitchen-dining__section-links">
          <Link to="/handmade/kitchen&dining">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_cuttingboards_B07J2TS65F._CB463924042_.jpg" alt="kitchen-dining" />
          </Link>
          <p>Cutting Boards</p>
        </div>
        <div className="kitchen-dining__section-links">
          <Link to="/handmade/kitchen&dining">
            <img src="https://images-na.ssl-images-amazon.com/images/I/51VzxBylDQL.jpg" alt="kitchen-dining" />
          </Link>
          <p>Containers & Storage</p>
        </div>
        <div className="kitchen-dining__section-links">
          <Link to="/handmade/kitchen&dining">
            <img src="https://images-na.ssl-images-amazon.com/images/I/61Xx%2BRcAONL._SY500_.jpg" alt="kitchen-dining" />
          </Link>
          <p>Barware</p>
        </div>
      </div>
      <div className="kitchen-dining__header">
          <p>Collections we love</p>
      </div>
      <div className="kitchen-dining__products">
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41xIxtFd20L.jpg"}
          title="[set of 2] The Original BenShot Bullet Rocks Glass with Real 0.308 Bullet Made in the USA"
          brandName="BenShot USA"
          rating={5}
          rateNumber={"1,664"}
          shipping={"Free Shipping"}
          price={34.99}
          arrivalEst={"Thursday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41xIxtFd20L.jpg"}
          title="[set of 2] The Original BenShot Bullet Rocks Glass with Real 0.308 Bullet Made in the USA"
          brandName="BenShot USA"
          rating={5}
          rateNumber={"1,664"}
          shipping={"Free Shipping"}
          price={34.99}
          arrivalEst={"Thursday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41xIxtFd20L.jpg"}
          title="[set of 2] The Original BenShot Bullet Rocks Glass with Real 0.308 Bullet Made in the USA"
          brandName="BenShot USA"
          rating={5}
          rateNumber={"1,664"}
          shipping={"Free Shipping"}
          price={34.99}
          arrivalEst={"Thursday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41xIxtFd20L.jpg"}
          title="[set of 2] The Original BenShot Bullet Rocks Glass with Real 0.308 Bullet Made in the USA"
          brandName="BenShot USA"
          rating={5}
          rateNumber={"1,664"}
          shipping={"Free Shipping"}
          price={34.99}
          arrivalEst={"Thursday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41xIxtFd20L.jpg"}
          title="[set of 2] The Original BenShot Bullet Rocks Glass with Real 0.308 Bullet Made in the USA"
          brandName="BenShot USA"
          rating={5}
          rateNumber={"1,664"}
          shipping={"Free Shipping"}
          price={34.99}
          arrivalEst={"Thursday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41xIxtFd20L.jpg"}
          title="[set of 2] The Original BenShot Bullet Rocks Glass with Real 0.308 Bullet Made in the USA"
          brandName="BenShot USA"
          rating={5}
          rateNumber={"1,664"}
          shipping={"Free Shipping"}
          price={34.99}
          arrivalEst={"Thursday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41xIxtFd20L.jpg"}
          title="[set of 2] The Original BenShot Bullet Rocks Glass with Real 0.308 Bullet Made in the USA"
          brandName="BenShot USA"
          rating={5}
          rateNumber={"1,664"}
          shipping={"Free Shipping"}
          price={34.99}
          arrivalEst={"Thursday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41xIxtFd20L.jpg"}
          title="[set of 2] The Original BenShot Bullet Rocks Glass with Real 0.308 Bullet Made in the USA"
          brandName="BenShot USA"
          rating={5}
          rateNumber={"1,664"}
          shipping={"Free Shipping"}
          price={34.99}
          arrivalEst={"Thursday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41xIxtFd20L.jpg"}
          title="[set of 2] The Original BenShot Bullet Rocks Glass with Real 0.308 Bullet Made in the USA"
          brandName="BenShot USA"
          rating={5}
          rateNumber={"1,664"}
          shipping={"Free Shipping"}
          price={34.99}
          arrivalEst={"Thursday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41xIxtFd20L.jpg"}
          title="[set of 2] The Original BenShot Bullet Rocks Glass with Real 0.308 Bullet Made in the USA"
          brandName="BenShot USA"
          rating={5}
          rateNumber={"1,664"}
          shipping={"Free Shipping"}
          price={34.99}
          arrivalEst={"Thursday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41xIxtFd20L.jpg"}
          title="[set of 2] The Original BenShot Bullet Rocks Glass with Real 0.308 Bullet Made in the USA"
          brandName="BenShot USA"
          rating={5}
          rateNumber={"1,664"}
          shipping={"Free Shipping"}
          price={34.99}
          arrivalEst={"Thursday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41xIxtFd20L.jpg"}
          title="[set of 2] The Original BenShot Bullet Rocks Glass with Real 0.308 Bullet Made in the USA"
          brandName="BenShot USA"
          rating={5}
          rateNumber={"1,664"}
          shipping={"Free Shipping"}
          price={34.99}
          arrivalEst={"Thursday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41xIxtFd20L.jpg"}
          title="[set of 2] The Original BenShot Bullet Rocks Glass with Real 0.308 Bullet Made in the USA"
          brandName="BenShot USA"
          rating={5}
          rateNumber={"1,664"}
          shipping={"Free Shipping"}
          price={34.99}
          arrivalEst={"Thursday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41xIxtFd20L.jpg"}
          title="[set of 2] The Original BenShot Bullet Rocks Glass with Real 0.308 Bullet Made in the USA"
          brandName="BenShot USA"
          rating={5}
          rateNumber={"1,664"}
          shipping={"Free Shipping"}
          price={34.99}
          arrivalEst={"Thursday, Mar 1"}
        />
      </div>
    </div>
  )
}

export default KitchenDining
