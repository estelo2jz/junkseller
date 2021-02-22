import React from 'react';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/ToysGames.scss';
import HandmadeProductTemplate from './HandmadeProductTemplate';
import JumpTo from '../../JumpTo';

function ToysGames() {
  return (
    <div className="toys-games__container">
              <JumpTo 
          path1 = "/handmade/kitchen&dining"
          link1 = "/kitchen&dining"
          path2 = "/handmade/wedding"
          link2 = "/wedding"
          path3 = "/handmade/artwork"
          link3 = "/artwork"
          path4 = "/handmade/homedecor"
          link4 = "/homedecor"
          path5 = "/handmade/jewelry"
          link5 = "/jewelry"
          path6 = "/handmade/handbags&accessories"
          link6 = "/handbags&accessories"
          path7 = "/handmade/gifts"
          link7 = "/gifts"
          path8 = "/handmade/sellon"
          link8 = "/sellon"
          path9 = "/handmade/clothing&shoes"
          link9 = "/clothing&shoes"
          path10 = "/handmade/stationary&partysupplies"
          link10 = "/stationary&partysupplies"
          path11 = "/handmade/baby"
          link11 = "/baby"
          path12 = "/handmade/allhandmade"
          link12 = "/allhandmade"
          path13 = "/handmade/home&kitchen"
          link13 = "/home&kitchen"
          path14 = "/handmade/furniture"
          link14 = "/furniture"
          path15 = "/handmade/beauty&grooming"
          link15 = "/beauty&grooming"
          path16 = "/handmade/petsupplies"
          link16 = "/petsupplies"
        />
      <div className="toys-games__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
          </p>
        </Link>
        <p>/toys&games</p>
      </div>
      <div className="toys-games__heading">
        <p>Toys & Games</p>
        <p></p>
      </div>
      <div className="toys-games__header">
        <p>Shop by category</p>
      </div>
      <div className="toys-games__section-outer">
        <div className="toys-games__section-links">
          <Link to="/handmade/toys&games">
            <img src="https://images-na.ssl-images-amazon.com/images/I/51lx9qVqcbL.jpg" alt="toys-games" />
          </Link>
          <p>Baby & Toddler Toys</p>
        </div>
        <div className="toys-games__section-links">
          <Link to="/handmade/toys&games">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_stuffedanimals_B07M5XH54L._CB463878346_.jpg" alt="toys-games" />
          </Link>
          <p>Stuffed Animals</p>
        </div>
        <div className="toys-games__section-links">
          <Link to="/handmade/toys&games">
            <img src="https://images-na.ssl-images-amazon.com/images/I/71pGBHUkYqL._AC_UY800_CR140,0,800,800_.jpg" alt="toys-games" />
          </Link>
          <p>Puppets</p>
        </div>
        <div className="toys-games__section-links">
          <Link to="/handmade/toys&games">
            <img src="https://images-na.ssl-images-amazon.com/images/I/A1kKovmr4WL._AC_UY800_CR120,0,800,800_.jpg" alt="toys-games" />
          </Link>
          <p>Puzzles</p>
        </div>
        <div className="toys-games__section-links">
          <Link to="/handmade/toys&games">
            <img src="https://images-na.ssl-images-amazon.com/images/I/61BIhEhwlsL._SY500_.jpg" alt="toys-games" />
          </Link>
          <p>Pretend Play</p>
        </div>
        <div className="toys-games__section-links">
          <Link to="/handmade/toys&games">
            <img src="https://images-na.ssl-images-amazon.com/images/I/61rmFu1nwFL._SY500_.jpg" alt="toys-games" />
          </Link>
          <p>Novelty Toys</p>
        </div>
        <div className="toys-games__section-links">
          <Link to="/handmade/toys&games">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_dolls_B07JMB75QG._CB463879059_.jpg" alt="toys-games" />
          </Link>
          <p>Dolls & Accessories</p>
        </div>
        <div className="toys-games__section-links">
          <Link to="/handmade/toys&games">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_lawngames_B07MX3PGS9._CB463878914_.jpg" alt="toys-games" />
          </Link>
          <p>Lawn Games</p>
        </div>
      </div>
      <div className="toys-games__header">
          <p>Collections we love</p>
      </div>
      <div className="toys-games__products">
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/514Hzr1yyKL.jpg"}
          title="Wooden Personalized Name Puzzle Personalized Engraved Text Greetings on Back Gift for Baby"
          brandName="WOOD LAND"
          rating={4}
          rateNumber={"844"}
          shipping={"Free Shipping"}
          price={17.99}
          arrivalEst={"Tuesday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/514Hzr1yyKL.jpg"}
          title="Wooden Personalized Name Puzzle Personalized Engraved Text Greetings on Back Gift for Baby"
          brandName="WOOD LAND"
          rating={4}
          rateNumber={"844"}
          shipping={"Free Shipping"}
          price={17.99}
          arrivalEst={"Tuesday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/514Hzr1yyKL.jpg"}
          title="Wooden Personalized Name Puzzle Personalized Engraved Text Greetings on Back Gift for Baby"
          brandName="WOOD LAND"
          rating={4}
          rateNumber={"844"}
          shipping={"Free Shipping"}
          price={17.99}
          arrivalEst={"Tuesday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/514Hzr1yyKL.jpg"}
          title="Wooden Personalized Name Puzzle Personalized Engraved Text Greetings on Back Gift for Baby"
          brandName="WOOD LAND"
          rating={4}
          rateNumber={"844"}
          shipping={"Free Shipping"}
          price={17.99}
          arrivalEst={"Tuesday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/514Hzr1yyKL.jpg"}
          title="Wooden Personalized Name Puzzle Personalized Engraved Text Greetings on Back Gift for Baby"
          brandName="WOOD LAND"
          rating={4}
          rateNumber={"844"}
          shipping={"Free Shipping"}
          price={17.99}
          arrivalEst={"Tuesday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/514Hzr1yyKL.jpg"}
          title="Wooden Personalized Name Puzzle Personalized Engraved Text Greetings on Back Gift for Baby"
          brandName="WOOD LAND"
          rating={4}
          rateNumber={"844"}
          shipping={"Free Shipping"}
          price={17.99}
          arrivalEst={"Tuesday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/514Hzr1yyKL.jpg"}
          title="Wooden Personalized Name Puzzle Personalized Engraved Text Greetings on Back Gift for Baby"
          brandName="WOOD LAND"
          rating={4}
          rateNumber={"844"}
          shipping={"Free Shipping"}
          price={17.99}
          arrivalEst={"Tuesday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/514Hzr1yyKL.jpg"}
          title="Wooden Personalized Name Puzzle Personalized Engraved Text Greetings on Back Gift for Baby"
          brandName="WOOD LAND"
          rating={4}
          rateNumber={"844"}
          shipping={"Free Shipping"}
          price={17.99}
          arrivalEst={"Tuesday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/514Hzr1yyKL.jpg"}
          title="Wooden Personalized Name Puzzle Personalized Engraved Text Greetings on Back Gift for Baby"
          brandName="WOOD LAND"
          rating={4}
          rateNumber={"844"}
          shipping={"Free Shipping"}
          price={17.99}
          arrivalEst={"Tuesday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/514Hzr1yyKL.jpg"}
          title="Wooden Personalized Name Puzzle Personalized Engraved Text Greetings on Back Gift for Baby"
          brandName="WOOD LAND"
          rating={4}
          rateNumber={"844"}
          shipping={"Free Shipping"}
          price={17.99}
          arrivalEst={"Tuesday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/514Hzr1yyKL.jpg"}
          title="Wooden Personalized Name Puzzle Personalized Engraved Text Greetings on Back Gift for Baby"
          brandName="WOOD LAND"
          rating={4}
          rateNumber={"844"}
          shipping={"Free Shipping"}
          price={17.99}
          arrivalEst={"Tuesday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/514Hzr1yyKL.jpg"}
          title="Wooden Personalized Name Puzzle Personalized Engraved Text Greetings on Back Gift for Baby"
          brandName="WOOD LAND"
          rating={4}
          rateNumber={"844"}
          shipping={"Free Shipping"}
          price={17.99}
          arrivalEst={"Tuesday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/514Hzr1yyKL.jpg"}
          title="Wooden Personalized Name Puzzle Personalized Engraved Text Greetings on Back Gift for Baby"
          brandName="WOOD LAND"
          rating={4}
          rateNumber={"844"}
          shipping={"Free Shipping"}
          price={17.99}
          arrivalEst={"Tuesday, Mar 1"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/514Hzr1yyKL.jpg"}
          title="Wooden Personalized Name Puzzle Personalized Engraved Text Greetings on Back Gift for Baby"
          brandName="WOOD LAND"
          rating={4}
          rateNumber={"844"}
          shipping={"Free Shipping"}
          price={17.99}
          arrivalEst={"Tuesday, Mar 1"}
        />
      </div>
    </div>
  )
}

export default ToysGames
