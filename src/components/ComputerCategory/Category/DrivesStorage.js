import React from 'react';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { useStateValue } from '../../StateProvider';
import '../ComputerStyles/DrivesStorage.scss';
import JumpTo from './JumpTo';


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
      <JumpTo 
        path1 = "/computers/accessories"
        link1 = "accessories"
        path2 = "/computers/parts&components"
        link2 = "parts&components"
        path3 = "/computers/tablet"
        link3 = "computers&tablets&PC"
        path4 = "/computers/networking"
        link4 = "networking"
        path5 = "/computers/monitors"
        link5 = "monitors"
      />
      <div className="drives-storage__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/computers">
          <p>
            /computers
          </p>
        </Link>
        <p>/harddrives&storage</p>
      </div>
      <div className="drives-storage__heading">
        <p>Hard Drives & Storage</p>
      </div>
      {/* <div className="drives-storage__ads-one">
        <img src="" alt="ads-image" />
      </div> */}
      {/* <div className="drives-storage__category">
        <Link to="/" className="drives-storage__category-img">
          <img src="" alt="monitor-category" />
        </Link>
      </div> */}
      <div className="drives-storage__sub-heading">
        <p>Top rated</p>
        <p>See more</p>
      </div>
      <div className="drives-storage__product-container">
        <DrivesStorageTemplate
          id={uuid()}
          title="SAMSUNG 870 EVO 500GB 2.5 Inch SATA III Internal SSD (MZ-77E500B/AM)"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://webobjects2.cdw.com/is/image/CDW/4934137?$product-main$"
        />
        <DrivesStorageTemplate
          id={uuid()}
          title="SAMSUNG 870 EVO 500GB 2.5 Inch SATA III Internal SSD (MZ-77E500B/AM)"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://webobjects2.cdw.com/is/image/CDW/4934137?$product-main$"
        />
        <DrivesStorageTemplate
          id={uuid()}
          title="SAMSUNG 870 EVO 500GB 2.5 Inch SATA III Internal SSD (MZ-77E500B/AM)"
          price={549.99}
          rateNumber={"1,997"}
          rating={4}
          listPrice={"759.99"}
          image="https://webobjects2.cdw.com/is/image/CDW/4934137?$product-main$"
        />
        <DrivesStorageTemplate
          id={uuid()}
          title="SAMSUNG 870 EVO 500GB 2.5 Inch SATA III Internal SSD (MZ-77E500B/AM)"
          price={124.99}
          rateNumber={"19,140"}
          rating={4}
          listPrice="239.99"
          image="https://webobjects2.cdw.com/is/image/CDW/4934137?$product-main$"
        />
        <DrivesStorageTemplate
          id={uuid()}
          title="SAMSUNG 870 EVO 500GB 2.5 Inch SATA III Internal SSD (MZ-77E500B/AM)"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://webobjects2.cdw.com/is/image/CDW/4934137?$product-main$"
        />
        <DrivesStorageTemplate
          id={uuid()}
          title="SAMSUNG 870 EVO 500GB 2.5 Inch SATA III Internal SSD (MZ-77E500B/AM)"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://webobjects2.cdw.com/is/image/CDW/4934137?$product-main$"
        />
        <DrivesStorageTemplate
          id={uuid()}
          title="SAMSUNG 870 EVO 500GB 2.5 Inch SATA III Internal SSD (MZ-77E500B/AM)"
          price={549.99}
          rateNumber={"1,997"}
          rating={4}
          listPrice={"759.99"}
          image="https://webobjects2.cdw.com/is/image/CDW/4934137?$product-main$"
        />
        <DrivesStorageTemplate
          id={uuid()}
          title="SAMSUNG 870 EVO 500GB 2.5 Inch SATA III Internal SSD (MZ-77E500B/AM)"
          price={124.99}
          rateNumber={"19,140"}
          rating={4}
          listPrice="239.99"
          image="https://webobjects2.cdw.com/is/image/CDW/4934137?$product-main$"
        />
      </div>
    </div>
  )
}

export default DrivesStorage;
