import React from 'react';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/ArtWork.scss';
import HandmadeProductTemplate from './HandmadeProductTemplate';


function Artwork() {
  return (
    <div className="art-work__container">
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
          price={"35.95"}
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
          price={"35.95"}
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
          price={"35.95"}
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
          price={"35.95"}
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
          price={"35.95"}
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
          price={"35.95"}
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
          price={"35.95"}
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
          price={"35.95"}
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
          price={"35.95"}
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
          price={"35.95"}
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
          price={"35.95"}
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
          price={"35.95"}
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
          price={"35.95"}
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
          price={"35.95"}
          arrivalEst={"Friday, Fed 26"}
        />
      </div>
    </div>
  )
}

export default Artwork
