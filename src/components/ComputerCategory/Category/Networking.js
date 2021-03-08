import React from 'react';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { useStateValue } from '../../StateProvider';
import '../ComputerStyles/Networking.scss';
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
      {/* <div className="networking__sub-heading">
        <p>Top rated</p>
        <p>See more</p>
      </div>
      <div className="networking__product-container">
        <NetworkingTemplate
          id={uuid()}
          title="Linksys MR8300 Mesh Wi-Fi Router"
          price={255.79}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HNKN2_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1591028069000"
        />
        <NetworkingTemplate
          id={uuid()}
          title="Linksys MR8300 Mesh Wi-Fi Router"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HNKN2_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1591028069000"
        />
        <NetworkingTemplate
          id={uuid()}
          title="Linksys MR8300 Mesh Wi-Fi Router"
          price={549.99}
          rateNumber={"1,997"}
          rating={4}
          listPrice={"759.99"}
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HNKN2_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1591028069000"
        />
        <NetworkingTemplate
          id={uuid()}
          title="Linksys MR8300 Mesh Wi-Fi Router"
          price={124.99}
          rateNumber={"19,140"}
          rating={4}
          listPrice="239.99"
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HNKN2_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1591028069000"
        />
        <NetworkingTemplate
          id={uuid()}
          title="Linksys MR8300 Mesh Wi-Fi Router"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HNKN2_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1591028069000"
        />
        <NetworkingTemplate
          id={uuid()}
          title="Linksys MR8300 Mesh Wi-Fi Router"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HNKN2_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1591028069000"
        />
        <NetworkingTemplate
          id={uuid()}
          title="Linksys MR8300 Mesh Wi-Fi Router"
          price={549.99}
          rateNumber={"1,997"}
          rating={4}
          listPrice={"759.99"}
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HNKN2_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1591028069000"
        />
        <NetworkingTemplate
          id={uuid()}
          title="Linksys MR8300 Mesh Wi-Fi Router"
          price={124.99}
          rateNumber={"19,140"}
          rating={4}
          listPrice="239.99"
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HNKN2_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1591028069000"
        />
      </div> */}
    </div>
  )
}

export default Networking;
