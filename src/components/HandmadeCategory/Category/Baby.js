import React from 'react';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/Baby.scss';
import HandmadeProductTemplate from './HandmadeProductTemplate';
import JumpTo from './JumpTo';

function Baby() {
  return (
    <div className="baby__container">
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
          path11 = "/handmade/allhandmade"
          link11 = "all-handmade"
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
      <div className="baby__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
          </p>
        </Link>
        <p>/baby</p>
      </div>
      <div className="baby__heading">
        <p>The Baby Shop</p>
        <p>Welcome them to your family with unique, quality nursery decorations, toys, adorbale clothing & more.</p>
      </div>
      <div className="baby__header">
        <p>Shop by category</p>
      </div>
      <div className="baby__section-outer">
        <div className="baby__section-links">
          <Link to="/handmade/baby">
            <img src="https://images-na.ssl-images-amazon.com/images/I/51e-Md%2BeFPL.jpg" alt="baby" />
          </Link>
          <p>Nursery Bedding</p>
        </div>
        <div className="baby__section-links">
          <Link to="/handmade/baby">
            <img src="https://images-na.ssl-images-amazon.com/images/I/91dxujEYrSL._SY500_.jpg" alt="baby" />
          </Link>
          <p>Nursery Décor</p>
        </div>
        <div className="baby__section-links">
          <Link to="/handmade/baby">
            <img src="https://images-na.ssl-images-amazon.com/images/I/71cTNLeHPDL._SY500_.jpg" alt="baby" />
          </Link>
          <p>Nursery Furniture</p>
        </div>
        <div className="baby__section-links">
          <Link to="/handmade/baby">
            <img src="https://images-na.ssl-images-amazon.com/images/I/81MBE57dEkL._SY500_.jpg" alt="baby" />
          </Link>
          <p>Nursing & Feeding</p>
        </div>
        <div className="baby__section-links">
          <Link to="/handmade/baby">
            <img src="https://images-na.ssl-images-amazon.com/images/I/61TIcxboR9L._SY500_.jpg" alt="baby" />
          </Link>
          <p>Baby & Toddler Toys</p>
        </div>
        <div className="baby__section-links">
          <Link to="/handmade/baby">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_blanket._CB463977222_.jpg" alt="baby" />
          </Link>
          <p>Blankets & Swaddling</p>
        </div>
      </div>
      <div className="baby__header">
          <p>Collections we love</p>
      </div>
      <div className="baby__products">
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41y2LsenKkL.jpg"}
          title="Baby announcement husband Pregnancy reveal boyfriend Hi daddy"
          brandName="Penduins & Pineapples"
          rating={5}
          rateNumber={"174"}
          shipping={"Free Shipping"}
          price={14.95}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41y2LsenKkL.jpg"}
          title="Baby announcement husband Pregnancy reveal boyfriend Hi daddy"
          brandName="Penduins & Pineapples"
          rating={5}
          rateNumber={"174"}
          shipping={"Free Shipping"}
          price={14.95}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41y2LsenKkL.jpg"}
          title="Baby announcement husband Pregnancy reveal boyfriend Hi daddy"
          brandName="Penduins & Pineapples"
          rating={5}
          rateNumber={"174"}
          shipping={"Free Shipping"}
          price={14.95}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41y2LsenKkL.jpg"}
          title="Baby announcement husband Pregnancy reveal boyfriend Hi daddy"
          brandName="Penduins & Pineapples"
          rating={5}
          rateNumber={"174"}
          shipping={"Free Shipping"}
          price={14.95}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41y2LsenKkL.jpg"}
          title="Baby announcement husband Pregnancy reveal boyfriend Hi daddy"
          brandName="Penduins & Pineapples"
          rating={5}
          rateNumber={"174"}
          shipping={"Free Shipping"}
          price={14.95}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41y2LsenKkL.jpg"}
          title="Baby announcement husband Pregnancy reveal boyfriend Hi daddy"
          brandName="Penduins & Pineapples"
          rating={5}
          rateNumber={"174"}
          shipping={"Free Shipping"}
          price={14.95}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41y2LsenKkL.jpg"}
          title="Baby announcement husband Pregnancy reveal boyfriend Hi daddy"
          brandName="Penduins & Pineapples"
          rating={5}
          rateNumber={"174"}
          shipping={"Free Shipping"}
          price={14.95}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41y2LsenKkL.jpg"}
          title="Baby announcement husband Pregnancy reveal boyfriend Hi daddy"
          brandName="Penduins & Pineapples"
          rating={5}
          rateNumber={"174"}
          shipping={"Free Shipping"}
          price={14.95}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41y2LsenKkL.jpg"}
          title="Baby announcement husband Pregnancy reveal boyfriend Hi daddy"
          brandName="Penduins & Pineapples"
          rating={5}
          rateNumber={"174"}
          shipping={"Free Shipping"}
          price={14.95}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41y2LsenKkL.jpg"}
          title="Baby announcement husband Pregnancy reveal boyfriend Hi daddy"
          brandName="Penduins & Pineapples"
          rating={5}
          rateNumber={"174"}
          shipping={"Free Shipping"}
          price={14.95}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41y2LsenKkL.jpg"}
          title="Baby announcement husband Pregnancy reveal boyfriend Hi daddy"
          brandName="Penduins & Pineapples"
          rating={5}
          rateNumber={"174"}
          shipping={"Free Shipping"}
          price={14.95}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41y2LsenKkL.jpg"}
          title="Baby announcement husband Pregnancy reveal boyfriend Hi daddy"
          brandName="Penduins & Pineapples"
          rating={5}
          rateNumber={"174"}
          shipping={"Free Shipping"}
          price={14.95}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41y2LsenKkL.jpg"}
          title="Baby announcement husband Pregnancy reveal boyfriend Hi daddy"
          brandName="Penduins & Pineapples"
          rating={5}
          rateNumber={"174"}
          shipping={"Free Shipping"}
          price={14.95}
          arrivalEst={"Friday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41y2LsenKkL.jpg"}
          title="Baby announcement husband Pregnancy reveal boyfriend Hi daddy"
          brandName="Penduins & Pineapples"
          rating={5}
          rateNumber={"174"}
          shipping={"Free Shipping"}
          price={14.95}
          arrivalEst={"Friday, Mar 1"}
        />
      </div>
    </div>
  )
}

export default Baby
