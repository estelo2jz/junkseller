import React from 'react';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/StationaryParty.scss';
import HandmadeProductTemplate from './HandmadeProductTemplate';
import JumpTo from './JumpTo';

function StationaryParty() {
  return (
    <div className="stationary-party__container">
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
          path10 = "/handmade/allhandmade"
          link10 = "all-handmade"
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
      <div className="stationary-party__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
          </p>
        </Link>
        <p>/stationary&partysupplies</p>
      </div>
      <div className="stationary-party__heading">
        <p>Stationery & Party Supplies</p>
        <p>Unique, personalized stationery and party supplies for special events and everyday occassions.</p>
      </div>
      <div className="stationary-party__header">
        <p>Shop by category</p>
      </div>
      <div className="stationary-party__section-outer">
        <div className="stationary-party__section-links">
          <Link to="/handmade/stationary&partysupplies">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_invitations_B01MZHUPTC._CB463552485_.jpg" alt="stationary-party" />
          </Link>
          <p>Invitations</p>
        </div>
        <div className="stationary-party__section-links">
          <Link to="/handmade/stationary&partysupplies">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_greeting_B07KF2ZY3K._CB463552227_.jpg" alt="stationary-party" />
          </Link>
          <p>Notecards & Greeting Cards</p>
        </div>
        <div className="stationary-party__section-links">
          <Link to="/handmade/stationary&partysupplies">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_cal_plannner_B07QX964M2._CB463867886_.jpg" alt="stationary-party" />
          </Link>
          <p>Calendars & Planners</p>
        </div>
        <div className="stationary-party__section-links">
          <Link to="/handmade/stationary&partysupplies">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_decorations_B07DPB6D1Z._CB463549101_.jpg" alt="stationary-party" />
          </Link>
          <p>Decorations</p>
        </div>
        <div className="stationary-party__section-links">
          <Link to="/handmade/stationary&partysupplies">
            <img src="https://images-na.ssl-images-amazon.com/images/I/71zwR05haYL._SL1000_.jpg" alt="stationary-party" />
          </Link>
          <p>Party Favors</p>
        </div>
        <div className="stationary-party__section-links">
          <Link to="/handmade/stationary&partysupplies">
            <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_personalized_cards_B07FQW7XX7._CB463865988_.jpg" alt="stationary-party" />
          </Link>
          <p>Personalized Stationary</p>
        </div>
      </div>
      <div className="stationary-party__header">
          <p>Collections we love</p>
      </div>
      <div className="stationary-party__products">
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41JfuLRDgPL.jpg"}
          title="Flower Girl Gifts Flower Girl Proposal Puzzle"
          brandName="BoutiqueEclipse"
          rating={4}
          rateNumber={"511"}
          shipping={"Free Shipping"}
          price={8.95}
          arrivalEst={"Saturday, Apr 11"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41JfuLRDgPL.jpg"}
          title="Flower Girl Gifts Flower Girl Proposal Puzzle"
          brandName="BoutiqueEclipse"
          rating={4}
          rateNumber={"511"}
          shipping={"Free Shipping"}
          price={8.95}
          arrivalEst={"Saturday, Apr 11"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41JfuLRDgPL.jpg"}
          title="Flower Girl Gifts Flower Girl Proposal Puzzle"
          brandName="BoutiqueEclipse"
          rating={4}
          rateNumber={"511"}
          shipping={"Free Shipping"}
          price={8.95}
          arrivalEst={"Saturday, Apr 11"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41JfuLRDgPL.jpg"}
          title="Flower Girl Gifts Flower Girl Proposal Puzzle"
          brandName="BoutiqueEclipse"
          rating={4}
          rateNumber={"511"}
          shipping={"Free Shipping"}
          price={8.95}
          arrivalEst={"Saturday, Apr 11"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41JfuLRDgPL.jpg"}
          title="Flower Girl Gifts Flower Girl Proposal Puzzle"
          brandName="BoutiqueEclipse"
          rating={4}
          rateNumber={"511"}
          shipping={"Free Shipping"}
          price={8.95}
          arrivalEst={"Saturday, Apr 11"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41JfuLRDgPL.jpg"}
          title="Flower Girl Gifts Flower Girl Proposal Puzzle"
          brandName="BoutiqueEclipse"
          rating={4}
          rateNumber={"511"}
          shipping={"Free Shipping"}
          price={8.95}
          arrivalEst={"Saturday, Apr 11"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41JfuLRDgPL.jpg"}
          title="Flower Girl Gifts Flower Girl Proposal Puzzle"
          brandName="BoutiqueEclipse"
          rating={4}
          rateNumber={"511"}
          shipping={"Free Shipping"}
          price={8.95}
          arrivalEst={"Saturday, Apr 11"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41JfuLRDgPL.jpg"}
          title="Flower Girl Gifts Flower Girl Proposal Puzzle"
          brandName="BoutiqueEclipse"
          rating={4}
          rateNumber={"511"}
          shipping={"Free Shipping"}
          price={8.95}
          arrivalEst={"Saturday, Apr 11"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41JfuLRDgPL.jpg"}
          title="Flower Girl Gifts Flower Girl Proposal Puzzle"
          brandName="BoutiqueEclipse"
          rating={4}
          rateNumber={"511"}
          shipping={"Free Shipping"}
          price={8.95}
          arrivalEst={"Saturday, Apr 11"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41JfuLRDgPL.jpg"}
          title="Flower Girl Gifts Flower Girl Proposal Puzzle"
          brandName="BoutiqueEclipse"
          rating={4}
          rateNumber={"511"}
          shipping={"Free Shipping"}
          price={8.95}
          arrivalEst={"Saturday, Apr 11"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41JfuLRDgPL.jpg"}
          title="Flower Girl Gifts Flower Girl Proposal Puzzle"
          brandName="BoutiqueEclipse"
          rating={4}
          rateNumber={"511"}
          shipping={"Free Shipping"}
          price={8.95}
          arrivalEst={"Saturday, Apr 11"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41JfuLRDgPL.jpg"}
          title="Flower Girl Gifts Flower Girl Proposal Puzzle"
          brandName="BoutiqueEclipse"
          rating={4}
          rateNumber={"511"}
          shipping={"Free Shipping"}
          price={8.95}
          arrivalEst={"Saturday, Apr 11"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41JfuLRDgPL.jpg"}
          title="Flower Girl Gifts Flower Girl Proposal Puzzle"
          brandName="BoutiqueEclipse"
          rating={4}
          rateNumber={"511"}
          shipping={"Free Shipping"}
          price={8.95}
          arrivalEst={"Saturday, Apr 11"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41JfuLRDgPL.jpg"}
          title="Flower Girl Gifts Flower Girl Proposal Puzzle"
          brandName="BoutiqueEclipse"
          rating={4}
          rateNumber={"511"}
          shipping={"Free Shipping"}
          price={8.95}
          arrivalEst={"Saturday, Apr 11"}
        />
      </div>
    </div>
  )
}

export default StationaryParty
