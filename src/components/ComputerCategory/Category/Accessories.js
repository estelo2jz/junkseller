import React from 'react';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { useStateValue } from '../../StateProvider';
import '../ComputerStyles/ComputerAccessories.scss';
import ComputerProductTemplate from './ComputerProductTemplate';
import JumpTo from './JumpTo';

function ComputerAccessoriesTemplate({ id, title, image, price, rating, rateNumber, listPrice }) {
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
    <div className="computer-accessories-template__container">
      <div className="computer-accessories-template__img">
        <img src={image} alt="computer-accessories-product-img" />
      </div>
      <div className="computer-accessories-template__info">
        <div className="computer-accessories-template__price">
          <span>
            <p>$</p>
            <p>{price}</p>
          </span>
          <span>
            <p>{listPrice}</p>
          </span>
        </div>
        <div className="computer-accessories-template__rating">
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
        <div className="computer-accessories-template__title">
          <p>{title}</p>
        </div>
      </div>
      <div className="computer-accessories-template__btn">
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  )
}



function ComputerAccessories() {
  return (
    <div className="computer-accessories__container">
      <JumpTo 
        path1 = "/computers/harddrives&storage"
        link1 = "hard-drives&storage"
        path2 = "/computers/parts&components"
        link2 = "parts&components"
        path3 = "/computers/tablet"
        link3 = "computers&tablets&PC"
        path4 = "/computers/networking"
        link4 = "networking"
        path5 = "/computers/monitors"
        link5 = "monitors"
      />
      <div className="computer-accessories__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/computers">
          <p>
            /computers
          </p>
        </Link>
        <p>/accessories</p>
      </div>
      <div className="computer-accessories__heading">
        <p>Accessories</p>
      </div>
      {/* <div className="computer-accessories__ads-one">
        <img src="" />
      </div> */}
      {/* <div className="computer-accessories__category">
        <Link to="/" className="computer-accessories__category-img">
          <img src="" alt="monitor-category" />
        </Link>
      </div> */}
      {/* <div className="computer-accessories__sub-heading">
        <p>Top rated</p>
        <p>See more</p>
      </div> */}
       <div className="computer-accessories__product-container">
       <ComputerProductTemplate
          id={uuid()}
          title=""
          price={248.01}
          rateNumber={"345"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Sun, Apr 10"}
          rating={5}
          listPrice={""}
          image=""
        />
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={248.01}
          rateNumber={"345"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Sun, Apr 10"}
          rating={5}
          listPrice={""}
          image=""
        />
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={248.01}
          rateNumber={"345"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Sun, Apr 10"}
          rating={5}
          listPrice={""}
          image=""
        />
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={248.01}
          rateNumber={"345"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Sun, Apr 10"}
          rating={5}
          listPrice={""}
          image=""
        />
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={248.01}
          rateNumber={"345"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Sun, Apr 10"}
          rating={5}
          listPrice={""}
          image=""
        />
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={248.01}
          rateNumber={"345"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Sun, Apr 10"}
          rating={5}
          listPrice={""}
          image=""
        />
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={248.01}
          rateNumber={"345"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Sun, Apr 10"}
          rating={5}
          listPrice={""}
          image=""
        />
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={248.01}
          rateNumber={"345"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Sun, Apr 10"}
          rating={5}
          listPrice={""}
          image=""
        />
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={248.01}
          rateNumber={"345"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Sun, Apr 10"}
          rating={5}
          listPrice={""}
          image=""
        />
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={248.01}
          rateNumber={"345"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Sun, Apr 10"}
          rating={5}
          listPrice={""}
          image=""
        />
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={248.01}
          rateNumber={"345"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Sun, Apr 10"}
          rating={5}
          listPrice={""}
          image=""
        />
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={248.01}
          rateNumber={"345"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Sun, Apr 10"}
          rating={5}
          listPrice={""}
          image=""
        />
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={248.01}
          rateNumber={"345"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Sun, Apr 10"}
          rating={5}
          listPrice={""}
          image=""
        />
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={248.01}
          rateNumber={"345"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Sun, Apr 10"}
          rating={5}
          listPrice={""}
          image=""
        />
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={248.01}
          rateNumber={"345"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Sun, Apr 10"}
          rating={5}
          listPrice={""}
          image=""
        />
        <ComputerProductTemplate
          id={uuid()}
          title=""
          price={248.01}
          rateNumber={"345"}
          shipping={"Free Shipping"}
          brandName={""}
          arrivalEst={"Get it as soon as Sun, Apr 10"}
          rating={5}
          listPrice={""}
          image=""
        />
      </div>
    </div>
  )
}

export default ComputerAccessories;
