import React from 'react';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { useStateValue } from '../../StateProvider';
import '../ComputerStyles/DrivesStorage.scss';

function DrivesStorageTemplate({ id, title, image, price, rating, rateNumber, listPrice }) {
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
    <div className="drives-storage-template__container">
      <div className="drives-storage-template__img">
        <img src={image} alt="computer-components-product-img" />
      </div>
      <div className="drives-storage-template__info">
        <div className="drives-storage-template__price">
          <span>
            <p>$</p>
            <p>{price}</p>
          </span>
          <span>
            <p>{listPrice}</p>
          </span>
        </div>
        <div className="drives-storage-template__title">
          <p>{title}</p>
        </div>
        <div className="drives-storage-template__rating">
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
      </div>
      <div className="drives-storage-template__btn">
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  )
}



function DrivesStorage() {
  return (
    <div className="drives-storage__container">
      <div className="drives-storage__heading">
        <p>Hard Drives & Storage</p>
      </div>
      {/* <div className="drives-storage__ads-one">
        <img src="" alt="ads-image" />
      </div> */}
      <div className="drives-storage__category">
        <Link to="/" className="drives-storage__category-img">
          <img src="" alt="monitor-category" />
        </Link>
      </div>
      <div className="drives-storage__sub-heading">
        <p>Top rated</p>
        <p>See more</p>
      </div>
      <div className="drives-storage__product-container">
        <DrivesStorageTemplate
          id={uuid()}
          title=""
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image=""
        />
        <DrivesStorageTemplate
          id={uuid()}
          title=""
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image=""
        />
        <DrivesStorageTemplate
          id={uuid()}
          title=""
          price={549.99}
          rateNumber={"1,997"}
          rating={4}
          listPrice={"759.99"}
          image=""
        />
        <DrivesStorageTemplate
          id={uuid()}
          title=""
          price={124.99}
          rateNumber={"19,140"}
          rating={4}
          listPrice="239.99"
          image=""
        />
      </div>
      <div className="drives-storage__sub-heading">
        <p>Hot new releases</p>
        <p>See more</p>
      </div>
      <div className="drives-storage__product-container">
        <DrivesStorageTemplate
          id={uuid()}
          title=""
          price={199.99}
          rateNumber={"313,962"}
          rating={5}
          listPrice={"299.99"}
          image=""
        />
        <DrivesStorageTemplate
          id={uuid()}
          title=""
          price={340.99}
          rateNumber={"567"}
          rating={4}
          listPrice={""}
          image=" "
        />
        <DrivesStorageTemplate
          id={uuid()}
          title=""
          price={329.99}
          rateNumber={"1,886"}
          rating={4}
          listPrice={"449.99"}
          image=""
        />
        <DrivesStorageTemplate
          id={uuid()}
          title=""
          price={1944.99}
          rateNumber={"1,988"}
          rating={4}
          listPrice="2349.99"
          image=""
        />
      </div>
      <div className="drives-storage__sub-heading">
        <p>Under $25</p>
        <p>See more</p>
      </div>
      <div className="drives-storage__product-container">
        <DrivesStorageTemplate
          id={uuid()}
          title=""
          price={24.88}
          rateNumber={"771"}
          rating={4}
          listPrice={"35.99"}
          image=""
        />
        <DrivesStorageTemplate
          id={uuid()}
          title=""
          price={21.32}
          rateNumber={"71"}
          rating={5}
          listPrice={"30.89"}
          image=""
        />
        <DrivesStorageTemplate
          id={uuid()}
          title=""
          price={11.99}
          rateNumber={"128"}
          rating={4}
          listPrice={"15.99"}
          image=""
        />
        <DrivesStorageTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image=""
        />
      </div>
      <div className="drives-storage__sub-heading">
        <p>Best Sellers</p>
        <p>See more</p>
      </div>
      <div className="drives-storage__product-container">
        <DrivesStorageTemplate
          id={uuid()}
          title=""
          price={139.99}
          rateNumber={"1,432"}
          rating={5}
          listPrice={"209.99"}
          image=""
        />
        <DrivesStorageTemplate
          id={uuid()}
          title=""
          price={119.99}
          rateNumber={"11,712"}
          rating={4}
          listPrice={"259.99"}
          image=""
        />
        <DrivesStorageTemplate
          id={uuid()}
          title=""
          price={129.99}
          rateNumber={"3,586"}
          rating={4}
          listPrice={"209.99"}
          image=""
        />
        <DrivesStorageTemplate
          id={uuid()}
          title=""
          price={89.99}
          rateNumber={"9,656"}
          rating={4}
          listPrice="99.99"
          image=""
        />
      </div>
      <div className="drives-storage__sub-heading">
        <p>Lightning deals</p>
        {/* <p>See more</p> */}
      </div>
      <div className="drives-storage__product-container">
        <div className="drives-storage__lightning-container">
          <div className="drives-storage__lightning-img">
            <img src="" alt="lightning-deals-img" />
          </div>
          <div className="drives-storage__lightning-info">
            <ul>
              <p>Upcoming Deal</p>
              <p>Starts for you in 03:42:28</p>
            </ul>
            <p>
            </p>
          </div>
        </div>
        <div className="drives-storage__lightning-container">
          <div className="drives-storage__lightning-img">
            <img src="" alt="lightning-deals-img" />
          </div>
          <div className="drives-storage__lightning-info">
            <ul>
              <p>Upcoming Deal</p>
              <p>Starts for you in 01:12:08</p>
            </ul>
            <p>
            </p>
          </div>
        </div>
        <div className="drives-storage__lightning-container">
          <div className="drives-storage__lightning-img">
            <img src="" alt="lightning-deals-img" />
          </div>
          <div className="drives-storage__lightning-info">
            <ul>
              <p>Upcoming Deal</p>
              <p>Starts for you in 09:53:31</p>
            </ul>
            <p>
            </p>
          </div>
        </div>
        <div className="drives-storage__lightning-container">
          <div className="drives-storage__lightning-img">
            <img src="" alt="lightning-deals-img" />
          </div>
          <div className="drives-storage__lightning-info">
            <ul>
              <p>Upcoming Deal</p>
              <p>Starts for you in 10:15:45</p>
            </ul>
            <p>
            </p>
          </div>
        </div>
      </div>
      <div className="drives-storage__sub-heading">
        <p>Most wished for</p>
        <p>See more</p>
      </div>
      <div className="drives-storage__product-container">
        <DrivesStorageTemplate
          id={uuid()}
          title=""
          price={179.99}
          rateNumber={"791"}
          rating={5}
          listPrice={""}
          image=""
        />
        <DrivesStorageTemplate
          id={uuid()}
          title=""
          price={379.99}
          rateNumber={"6,475"}
          rating={5}
          listPrice={""}
          image=""
        />
        <DrivesStorageTemplate
          id={uuid()}
          title=""
          price={188.98}
          rateNumber={"7,520"}
          rating={5}
          listPrice={"269.99"}
          image=""
        />
        <DrivesStorageTemplate
          id={uuid()}
          title=""
          price={278.99}
          rateNumber={"5,432"}
          rating={4}
          listPrice="269.99"
          image=""
        />
      </div>
      <div className="drives-storage__sub-heading">
        <p>Most gifted</p>
        <p>See more</p>
      </div>
      <div className="drives-storage__product-container">
        <DrivesStorageTemplate
          id={uuid()}
          title=""
          price={299.99}
          rateNumber={"444"}
          rating={4}
          listPrice={"449.99"}
          image=""
        />
        <DrivesStorageTemplate
          id={uuid()}
          title=""
          price={349.99}
          rateNumber={"1,249"}
          rating={4}
          listPrice={"369.99"}
          image=""
        />
        <DrivesStorageTemplate
          id={uuid()}
          title=""
          price={129.99}
          rateNumber={"12,101"}
          rating={4}
          listPrice={"369.99"}
          image=""
        />
        <DrivesStorageTemplate
          id={uuid()}
          title=""
          price={79.97}
          rateNumber={"12,190"}
          rating={4}
          listPrice="369.99"
          image=""
        />
      </div>
    </div>
  )
}

export default DrivesStorage;
