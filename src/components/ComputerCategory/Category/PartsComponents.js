import React from 'react';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { useStateValue } from '../../StateProvider';
import '../ComputerStyles/ComputerComponents.scss';
import StarRateIcon from '@material-ui/icons/StarRate';
import JumpTo from './JumpTo';

function ComputerComponentsTemplate({ id, title, image, price, rating, rateNumber, listPrice }) {
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
    <div className="computer-components-template__container">
      <div className="computer-components-template__img">
        <img src={image} alt="computer-components-product-img" />
      </div>
      <div className="computer-components-template__info">
        <div className="computer-components-template__price">
          <span>
            <p>$</p>
            <p>{price}</p>
          </span>
          <span>
            <p>{listPrice}</p>
          </span>
        </div>
        <div className="computer-components-template__rating">
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
        <div className="computer-components-template__title">
          <p>{title}</p>
        </div>
      </div>
      <div className="computer-components-template__btn">
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  )
}

function ComputerComponents() {
  return (
    <div className="computer-components__container">
      <JumpTo 
        path1 = "/computers/harddrives&storage"
        link1 = "hard-drives&storage"
        path2 = "/computers/accessories"
        link2 = "accessories"
        path3 = "/computers/tablet"
        link3 = "computers&tablets&PC"
        path4 = "/computers/networking"
        link4 = "networking"
        path5 = "/computers/monitors"
        link5 = "monitors"
      />
      <div className="computer-components__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/computers">
          <p>
            /computers
          </p>
        </Link>
        <p>/parts&components</p>
      </div>
      <div className="computer-components__heading">
        <p>Computer Parts & Components</p>
      </div>
      {/* <div className="computer-components__ads-one">
        <img src="" alt="ads-image" />
      </div> */}
      {/* <div className="computer-components__category">
        <Link to="/" className="computer-components__category-img">
          <img src="" alt="monitor-category" />
        </Link>
      </div> */}
      {/* <div className="computer-components__sub-heading">
        <p>Top rated</p>
        <p>See more</p>
      </div>
      <div className="computer-components__product-container">
        <ComputerComponentsTemplate
          id={uuid()}
          title="NVIDIA GeForce RTX 2070 Super Founders Edition Graphics Card (900-1G180-2515-000)"
          price={499.99}
          rateNumber={"8,576"}
          rating={5}
          listPrice={"799.99"}
          image="https://prosettings.net/wp-content/uploads/2018/11/rtx2080ti.png"
        />
        <ComputerComponentsTemplate
          id={uuid()}
          title="NVIDIA GeForce RTX 2070 Super Founders Edition Graphics Card (900-1G180-2515-000)"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://prosettings.net/wp-content/uploads/2018/11/rtx2080ti.png"
        />
        <ComputerComponentsTemplate
          id={uuid()}
          title="NVIDIA GeForce RTX 2070 Super Founders Edition Graphics Card (900-1G180-2515-000)"
          price={549.99}
          rateNumber={"1,997"}
          rating={4}
          listPrice={"759.99"}
          image="https://prosettings.net/wp-content/uploads/2018/11/rtx2080ti.png"
        />
        <ComputerComponentsTemplate
          id={uuid()}
          title="NVIDIA GeForce RTX 2070 Super Founders Edition Graphics Card (900-1G180-2515-000)"
          price={124.99}
          rateNumber={"19,140"}
          rating={4}
          listPrice="239.99"
          image="https://prosettings.net/wp-content/uploads/2018/11/rtx2080ti.png"
        />
        <ComputerComponentsTemplate
          id={uuid()}
          title="NVIDIA GeForce RTX 2070 Super Founders Edition Graphics Card (900-1G180-2515-000)"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://prosettings.net/wp-content/uploads/2018/11/rtx2080ti.png"
        />
        <ComputerComponentsTemplate
          id={uuid()}
          title="NVIDIA GeForce RTX 2070 Super Founders Edition Graphics Card (900-1G180-2515-000)"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://prosettings.net/wp-content/uploads/2018/11/rtx2080ti.png"
        />
        <ComputerComponentsTemplate
          id={uuid()}
          title="NVIDIA GeForce RTX 2070 Super Founders Edition Graphics Card (900-1G180-2515-000)"
          price={549.99}
          rateNumber={"1,997"}
          rating={4}
          listPrice={"759.99"}
          image="https://prosettings.net/wp-content/uploads/2018/11/rtx2080ti.png"
        />
        <ComputerComponentsTemplate
          id={uuid()}
          title="NVIDIA GeForce RTX 2070 Super Founders Edition Graphics Card (900-1G180-2515-000)"
          price={124.99}
          rateNumber={"19,140"}
          rating={4}
          listPrice="239.99"
          image="https://prosettings.net/wp-content/uploads/2018/11/rtx2080ti.png"
        />
      </div> */}
    </div>
  )
}

export default ComputerComponents;
