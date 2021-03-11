import React from 'react';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { useStateValue } from '../../StateProvider';
import '../ComputerStyles/Networking.scss';
import ComputerProductTemplate from './ComputerProductTemplate';
import JumpTo from './JumpTo';

function NetworkingTemplate({ id, title, image, price, rating, rateNumber, listPrice }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // add item to basket...
    // to manipulate the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        rateNumber: rateNumber,
        listPrice: listPrice
      }
    })
  };
  return (
    <div className="networking-template__container">
      <div className="networking-template__img">
        <img src={image} alt="computer-components-product-img" />
      </div>
      <div className="networking-template__info">
        <div className="networking-template__price">
          <span>
            <p>$</p>
            <p>{price}</p>
          </span>
          <span>
            <p>{listPrice}</p>
          </span>
        </div>
        <div className="networking-template__rating">
          <p>
            {
              Array(rating)
                .fill()
                .map((_, i) => (
                  <p>⭐</p>
                ))
            }
          </p>
          <p>{rateNumber}</p>
        </div>
        <div className="networking-template__title">
          <p>{title}</p>
        </div>
      </div>
      <div className="networking-template__btn">
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  )
}



function Networking() {
  return (
    <div className="networking__container">
      <JumpTo 
        path1 = "/computers/harddrives&storage"
        link1 = "hard-drives&storage"
        path2 = "/computers/parts&components"
        link2 = "parts&components"
        path3 = "/computers/tablet"
        link3 = "computers&tablets&PC"
        path4 = "/computers/accessories"
        link4 = "accessories"
        path5 = "/computers/monitors"
        link5 = "monitors"
      />
      <div className="networking__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/computers">
          <p>
            /computers
          </p>
        </Link>
        <p>/networking</p>
      </div>
      <div className="networking__heading">
        <p>Networking</p>
      </div>
      {/* <div className="networking__ads-one">
        <img src="" alt="ads-image" />
      </div> */}
      {/* <div className="networking__category">
        <Link to="/" className="networking__category-img">
          <img src="" alt="monitor-category" />
        </Link>
      </div> */}
      <div className="networking__sub-heading">
        <p>Top rated</p>
        <p>See more</p>
      </div>
      <div className="networking__product-container">
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={118.89}
          rateNumber={"8,576"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Mon, Mar 27"}
          rating={5}
          listPrice={""}
          image=""
        />
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={118.89}
          rateNumber={"8,576"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Mon, Mar 27"}
          rating={5}
          listPrice={""}
          image=""
        />
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={118.89}
          rateNumber={"8,576"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Mon, Mar 27"}
          rating={5}
          listPrice={""}
          image=""
        />
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={118.89}
          rateNumber={"8,576"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Mon, Mar 27"}
          rating={5}
          listPrice={""}
          image=""
        />
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={118.89}
          rateNumber={"8,576"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Mon, Mar 27"}
          rating={5}
          listPrice={""}
          image=""
        />
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={118.89}
          rateNumber={"8,576"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Mon, Mar 27"}
          rating={5}
          listPrice={""}
          image=""
        />
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={118.89}
          rateNumber={"8,576"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Mon, Mar 27"}
          rating={5}
          listPrice={""}
          image=""
        />
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={118.89}
          rateNumber={"8,576"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Mon, Mar 27"}
          rating={5}
          listPrice={""}
          image=""
        />
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={118.89}
          rateNumber={"8,576"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Mon, Mar 27"}
          rating={5}
          listPrice={""}
          image=""
        />
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={118.89}
          rateNumber={"8,576"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Mon, Mar 27"}
          rating={5}
          listPrice={""}
          image=""
        />
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={118.89}
          rateNumber={"8,576"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Mon, Mar 27"}
          rating={5}
          listPrice={""}
          image=""
        />
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={118.89}
          rateNumber={"8,576"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Mon, Mar 27"}
          rating={5}
          listPrice={""}
          image=""
        />
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={118.89}
          rateNumber={"8,576"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Mon, Mar 27"}
          rating={5}
          listPrice={""}
          image=""
        />
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={118.89}
          rateNumber={"8,576"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Mon, Mar 27"}
          rating={5}
          listPrice={""}
          image=""
        />
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={118.89}
          rateNumber={"8,576"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Mon, Mar 27"}
          rating={5}
          listPrice={""}
          image=""
        />
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={118.89}
          rateNumber={"8,576"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Mon, Mar 27"}
          rating={5}
          listPrice={""}
          image=""
        />
      </div>
    </div>
  )
}

export default Networking;
