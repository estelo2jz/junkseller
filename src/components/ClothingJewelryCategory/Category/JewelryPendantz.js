import React from 'react';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { useStateValue } from '../../StateProvider';
import '../ClothingJewelryStyles/JewelryPendantz.scss';

import Pendantz1 from './JewelryImg/pendantz/pendantz1.jpg';
import Pendantz2 from './JewelryImg/pendantz/pendantz2.jpg';
import Pendantz3 from './JewelryImg/pendantz/pendantz3.jpg';
import Pendantz4 from './JewelryImg/pendantz/pendantz4.jpg';
import Pendantz5 from './JewelryImg/pendantz/pendantz5.jpg';
import Pendantz6 from './JewelryImg/pendantz/pendantz6.jpg';
import Pendantz7 from './JewelryImg/pendantz/pendantz7.jpg';
import Pendantz8 from './JewelryImg/pendantz/pendantz8.jpg';
import Pendantz9 from './JewelryImg/pendantz/pendantz9.jpg';
import Pendantz10 from './JewelryImg/pendantz/pendantz10.jpg';
import Pendantz11 from './JewelryImg/pendantz/pendantz11.jpg';
import Pendantz12 from './JewelryImg/pendantz/pendantz12.jpg';
import Pendantz13 from './JewelryImg/pendantz/pendantz13.jpg';
import Pendantz14 from './JewelryImg/pendantz/pendantz14.jpg';
import Pendantz15 from './JewelryImg/pendantz/pendantz15.jpg';


function PendantzTemplate({ id, title, image, price, rating, rateNumber, listPrice }) {
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
    <div className="pendantz-template__container">
      <div className="pendantz-template__img">
        <img src={image} alt="pendantz-product-img" />
      </div>
      <div className="pendantz-template__info">
        <div className="pendantz-template__price">
          <span>
            <p>$</p>
            <p>{price}</p>
          </span>
          <span>
            <p>{listPrice}</p>
          </span>
        </div>
        <div className="pendantz-template__title">
          <p>{title}</p>
        </div>
        <div className="pendantz-template__rating">
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
      <div className="pendantz-template__btn">
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  )
}



function Pendantz() {
  return (
    <div className="pendantz__container">
      <div className="pendantz__heading">
        <p>Accessories</p>
      </div>
      {/* <div className="pendantz__ads-one">
        <img src="" alt="ads-image" />
      </div> */}
      <div className="pendantz__category">
        <Link to="/" className="pendantz__category-img">
          <img src="" alt="monitor-category" />
        </Link>
      </div>
      <div className="pendantz__sub-heading">
        <p>Top rated</p>
        <p>See more</p>
      </div>
      <div className="pendantz__product-container">
      <PendantzTemplate
          id={uuid()}
          title=""
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={Pendantz1}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image={Pendantz2}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={549.99}
          rateNumber={"1,997"}
          rating={4}
          listPrice={"759.99"}
          image={Pendantz3}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={124.99}
          rateNumber={"19,140"}
          rating={4}
          listPrice="239.99"
          image={Pendantz4}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={199.99}
          rateNumber={"313,962"}
          rating={5}
          listPrice={"299.99"}
          image={Pendantz5}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={340.99}
          rateNumber={"567"}
          rating={4}
          listPrice={""}
          image={Pendantz6}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={329.99}
          rateNumber={"1,886"}
          rating={4}
          listPrice={"449.99"}
          image={Pendantz7}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={1944.99}
          rateNumber={"1,988"}
          rating={4}
          listPrice="2349.99"
          image={Pendantz8}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={24.88}
          rateNumber={"771"}
          rating={4}
          listPrice={"35.99"}
          image={Pendantz9}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={21.32}
          rateNumber={"71"}
          rating={5}
          listPrice={"30.89"}
          image={Pendantz10}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={11.99}
          rateNumber={"128"}
          rating={4}
          listPrice={"15.99"}
          image={Pendantz11}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Pendantz12}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Pendantz13}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Pendantz14}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Pendantz15}
        />
              <PendantzTemplate
          id={uuid()}
          title=""
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={Pendantz1}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image={Pendantz2}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={549.99}
          rateNumber={"1,997"}
          rating={4}
          listPrice={"759.99"}
          image={Pendantz3}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={124.99}
          rateNumber={"19,140"}
          rating={4}
          listPrice="239.99"
          image={Pendantz4}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={199.99}
          rateNumber={"313,962"}
          rating={5}
          listPrice={"299.99"}
          image={Pendantz5}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={340.99}
          rateNumber={"567"}
          rating={4}
          listPrice={""}
          image={Pendantz6}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={329.99}
          rateNumber={"1,886"}
          rating={4}
          listPrice={"449.99"}
          image={Pendantz7}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={1944.99}
          rateNumber={"1,988"}
          rating={4}
          listPrice="2349.99"
          image={Pendantz8}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={24.88}
          rateNumber={"771"}
          rating={4}
          listPrice={"35.99"}
          image={Pendantz9}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={21.32}
          rateNumber={"71"}
          rating={5}
          listPrice={"30.89"}
          image={Pendantz10}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={11.99}
          rateNumber={"128"}
          rating={4}
          listPrice={"15.99"}
          image={Pendantz11}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Pendantz12}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Pendantz13}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Pendantz14}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Pendantz15}
        />
              <PendantzTemplate
          id={uuid()}
          title=""
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={Pendantz1}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image={Pendantz2}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={549.99}
          rateNumber={"1,997"}
          rating={4}
          listPrice={"759.99"}
          image={Pendantz3}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={124.99}
          rateNumber={"19,140"}
          rating={4}
          listPrice="239.99"
          image={Pendantz4}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={199.99}
          rateNumber={"313,962"}
          rating={5}
          listPrice={"299.99"}
          image={Pendantz5}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={340.99}
          rateNumber={"567"}
          rating={4}
          listPrice={""}
          image={Pendantz6}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={329.99}
          rateNumber={"1,886"}
          rating={4}
          listPrice={"449.99"}
          image={Pendantz7}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={1944.99}
          rateNumber={"1,988"}
          rating={4}
          listPrice="2349.99"
          image={Pendantz8}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={24.88}
          rateNumber={"771"}
          rating={4}
          listPrice={"35.99"}
          image={Pendantz9}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={21.32}
          rateNumber={"71"}
          rating={5}
          listPrice={"30.89"}
          image={Pendantz10}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={11.99}
          rateNumber={"128"}
          rating={4}
          listPrice={"15.99"}
          image={Pendantz11}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Pendantz12}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Pendantz13}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Pendantz14}
        />
        <PendantzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Pendantz15}
        />
      </div>
    </div>
  )
}

export default Pendantz;
