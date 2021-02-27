import React from 'react';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/ArtWork.scss';
import HandmadeProductTemplate from './HandmadeProductTemplate';
import JumpTo from './JumpTo';

function Artwork() {
  return (
    <div className="art-work__container">
              <JumpTo 
          path1 = "/handmade/kitchen&dining"
          link1 = "kitchen&dining"
          path2 = "/handmade/wedding"
          link2 = "wedding"
          path3 = "/handmade/allhandmade"
          link3 = "all-handmade"
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
      <div className="art-work__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
          </p>
        </Link>
        <p>/artwork</p>
      </div>
      <div className="art-work__heading">
        <p>Artwork</p>
        <p></p>
      </div>
      {/* <div className="art-work__header">
        <p>Shop by category</p>
      </div> */}
      <div className="art-work__section-outer">
        <div className="art-work__section-links">
          <Link to="/handmade/artwork">
            <img src="https://images-na.ssl-images-amazon.com/images/I/51EciHJakGL.jpg" alt="art-work" />
          </Link>
          <p>Prints</p>
        </div>
        <div className="art-work__section-links">
          <Link to="/handmade/artwork">
            <img src="https://images-na.ssl-images-amazon.com/images/I/815HUzphpuL._SY500_.jpg" alt="art-work" />
          </Link>
          <p>Photographs</p>
        </div>
        <div className="art-work__section-links">
          <Link to="/handmade/artwork">
            <img src="https://images-na.ssl-images-amazon.com/images/I/61chHfEzowL._SY500_.jpg" alt="art-work" />
          </Link>
          <p>Paintings</p>
        </div>
      </div>
      <div className="art-work__header">
          <p>Collections we love</p>
      </div>
      <div className="art-work__products">
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/51iqVxW8xKL.jpg"}
          title="Energy Generator Orgone Pyramid for Emf Protection & Healing- meditation orgonite"
          brandName="Orgonite Crystal"
          rating={4}
          rateNumber={"2,183"}
          shipping={"Free Shipping"}
          price={35.75}
          arrivalEst={"Friday, Fed 26"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/51iqVxW8xKL.jpg"}
          title="Energy Generator Orgone Pyramid for Emf Protection & Healing- meditation orgonite"
          brandName="Orgonite Crystal"
          rating={4}
          rateNumber={"2,183"}
          shipping={"Free Shipping"}
          price={35.75}
          arrivalEst={"Friday, Fed 26"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/51iqVxW8xKL.jpg"}
          title="Energy Generator Orgone Pyramid for Emf Protection & Healing- meditation orgonite"
          brandName="Orgonite Crystal"
          rating={4}
          rateNumber={"2,183"}
          shipping={"Free Shipping"}
          price={35.75}
          arrivalEst={"Friday, Fed 26"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/51iqVxW8xKL.jpg"}
          title="Energy Generator Orgone Pyramid for Emf Protection & Healing- meditation orgonite"
          brandName="Orgonite Crystal"
          rating={4}
          rateNumber={"2,183"}
          shipping={"Free Shipping"}
          price={35.75}
          arrivalEst={"Friday, Fed 26"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/51iqVxW8xKL.jpg"}
          title="Energy Generator Orgone Pyramid for Emf Protection & Healing- meditation orgonite"
          brandName="Orgonite Crystal"
          rating={4}
          rateNumber={"2,183"}
          shipping={"Free Shipping"}
          price={35.75}
          arrivalEst={"Friday, Fed 26"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/51iqVxW8xKL.jpg"}
          title="Energy Generator Orgone Pyramid for Emf Protection & Healing- meditation orgonite"
          brandName="Orgonite Crystal"
          rating={4}
          rateNumber={"2,183"}
          shipping={"Free Shipping"}
          price={35.75}
          arrivalEst={"Friday, Fed 26"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/51iqVxW8xKL.jpg"}
          title="Energy Generator Orgone Pyramid for Emf Protection & Healing- meditation orgonite"
          brandName="Orgonite Crystal"
          rating={4}
          rateNumber={"2,183"}
          shipping={"Free Shipping"}
          price={35.75}
          arrivalEst={"Friday, Fed 26"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/51iqVxW8xKL.jpg"}
          title="Energy Generator Orgone Pyramid for Emf Protection & Healing- meditation orgonite"
          brandName="Orgonite Crystal"
          rating={4}
          rateNumber={"2,183"}
          shipping={"Free Shipping"}
          price={35.75}
          arrivalEst={"Friday, Fed 26"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/51iqVxW8xKL.jpg"}
          title="Energy Generator Orgone Pyramid for Emf Protection & Healing- meditation orgonite"
          brandName="Orgonite Crystal"
          rating={4}
          rateNumber={"2,183"}
          shipping={"Free Shipping"}
          price={35.75}
          arrivalEst={"Friday, Fed 26"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/51iqVxW8xKL.jpg"}
          title="Energy Generator Orgone Pyramid for Emf Protection & Healing- meditation orgonite"
          brandName="Orgonite Crystal"
          rating={4}
          rateNumber={"2,183"}
          shipping={"Free Shipping"}
          price={35.75}
          arrivalEst={"Friday, Fed 26"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/51iqVxW8xKL.jpg"}
          title="Energy Generator Orgone Pyramid for Emf Protection & Healing- meditation orgonite"
          brandName="Orgonite Crystal"
          rating={4}
          rateNumber={"2,183"}
          shipping={"Free Shipping"}
          price={35.75}
          arrivalEst={"Friday, Fed 26"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/51iqVxW8xKL.jpg"}
          title="Energy Generator Orgone Pyramid for Emf Protection & Healing- meditation orgonite"
          brandName="Orgonite Crystal"
          rating={4}
          rateNumber={"2,183"}
          shipping={"Free Shipping"}
          price={35.75}
          arrivalEst={"Friday, Fed 26"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/51iqVxW8xKL.jpg"}
          title="Energy Generator Orgone Pyramid for Emf Protection & Healing- meditation orgonite"
          brandName="Orgonite Crystal"
          rating={4}
          rateNumber={"2,183"}
          shipping={"Free Shipping"}
          price={35.75}
          arrivalEst={"Friday, Fed 26"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/51iqVxW8xKL.jpg"}
          title="Energy Generator Orgone Pyramid for Emf Protection & Healing- meditation orgonite"
          brandName="Orgonite Crystal"
          rating={4}
          rateNumber={"2,183"}
          shipping={"Free Shipping"}
          price={35.75}
          arrivalEst={"Friday, Fed 26"}
        />
      </div>
    </div>
  )
}

export default Artwork
