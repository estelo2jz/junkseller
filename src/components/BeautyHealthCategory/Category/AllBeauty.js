import React from 'react';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';
import '../BeautyHealthStyles/AllBeauty.scss';
import HandmadeProductTemplate from '../../HandmadeCategory/Category/HandmadeProductTemplate';
import FeaturedTemplate from './FeaturedTemplate';
import JumpTo from './JumpTo';


function AllBeauty() {
  return (
    <div className="all-beauty__container">
      <JumpTo 
        path1 = "/beauty&health/salon&spa"
        link1 = "salon&spa"
        path2 = "/beauty&health/health&household&baby"
        link2 = "health&household&baby"
        path3 = "/beauty&health/mensgrooming"
        link3 = "mens-grooming"
        path4 = "/beauty&health/skincare"
        link4 = "skin-care"
        path5 = "/beauty&health/vitamins&diet"
        link5 = "vitamins&diet"
        path6 = "/beauty&health/premiumbeauty"
        link6 = "premium-beauty"
      />
      <div className="all-beauty__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/beauty&health">
          <p>
            /beauty&health
          </p>
        </Link>
        <p>/allbeauty</p>
      </div>
      <div className="all-beauty__heading">
        <p>Beauty</p>
        <p></p>
      </div>
      <div className="all-beauty__header">
        <p>Shop by category</p>
      </div>
      <div className="all-beauty__section-outer">
        <FeaturedTemplate
          title = "Personal Care"
          image = "https://images-na.ssl-images-amazon.com/images/I/61S7BrCBj7L._AC._SR360,460.jpg"
          sub1 = "Skin Care"
          sub2 = "Hair Care"
          sub3 = "Bath & Bathing Accessories"
        />
        <FeaturedTemplate
          title = "Skin Care"
          image = "https://images-na.ssl-images-amazon.com/images/I/51flyLJHWtL._AC._SR360,460.jpg"
          sub1 = "Face"
          sub2 = "Body"
          sub3 = "Eyes"
        />
        <FeaturedTemplate
          title = "Tools & Accessories"
          image = "https://images-na.ssl-images-amazon.com/images/I/6126gM3rZfL._AC._SR360,460.jpg"
          sub1 = "Bags & Cases"
          sub2 = "Makeup Brushes & Tools"
          sub3 = "Hair Cutting Tools"
        />
        <FeaturedTemplate
          title = "Hair Care"
          image = "https://images-na.ssl-images-amazon.com/images/I/615AiiiHAUL._AC._SR360,460.jpg"
          sub1 = "Extensions, Wigs & Accessories"
          sub2 = "Hair Cutting Tools"
          sub3 = "Hair Coloring Products"
        />
        <FeaturedTemplate
          title = "Foot, Hand & Nail Care"
          image = "https://m.media-amazon.com/images/I/71HceafolGL._AC_UL320_.jpg"
          sub1 = "Nail Art & Polish"
          sub2 = "Tools & Accessories"
          sub3 = "Foot & Hand Care"
        />
        <FeaturedTemplate
          title = "Makeup"
          image = "https://images-na.ssl-images-amazon.com/images/I/71aPOVjcHpL._AC._SR360,460.jpg"
          sub1 = "Lips"
          sub2 = "Face"
          sub3 = "Eyes"
        />
        <FeaturedTemplate
          title = "Shave & Hair Removal"
          image = "https://images-na.ssl-images-amazon.com/images/I/71ScihSKY3L._AC._SR360,460.jpg"
          sub1 = "Men's"
          sub2 = "Women's"
        />
        <FeaturedTemplate
          title = "Fragrance"
          image = "https://images-na.ssl-images-amazon.com/images/I/81Vm5fEZAlL._AC._SR360,460.jpg"
          sub1 = "Women's"
          sub2 = "Men's"
          sub3 = "Sets"
        />
      </div>
      <div className="all-beauty__header">
          <p>Collections we love</p>
      </div>
      <div className="all-beauty__products">
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/51iqVxW8xKL.jpg"}
          title="Energy Generator Orgone Pyramid for Emf Protection & Healing- meditation orgonite"
          brandName="Orgonite Crystal"
          rating={4}
          rateNumber={"2,183"}
          shipping={"Free Shipping"}
          price={35.95}
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
          price={35.95}
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
          price={35.95}
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
          price={35.95}
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
          price={35.95}
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
          price={35.95}
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
          price={35.95}
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
          price={35.95}
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
          price={35.95}
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
          price={35.95}
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
          price={35.95}
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
          price={35.95}
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
          price={35.95}
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
          price={35.95}
          arrivalEst={"Friday, Fed 26"}
        />
      </div>
    </div>
  )
}

export default AllBeauty
