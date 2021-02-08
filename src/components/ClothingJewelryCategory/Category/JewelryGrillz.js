import React from 'react';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { useStateValue } from '../../StateProvider';
import '../ClothingJewelryStyles/JewelryGrillz.scss';

import Grillz1 from './JewelryImg/grills/grill1/grill1.jpg';
import Grillz2 from './JewelryImg/grills/grill2/grill1.jpg';
import Grillz3 from './JewelryImg/grills/grill3/grill1.jpg';
import Grillz4 from './JewelryImg/grills/grill4/grill1.jpg';
import Grillz5 from './JewelryImg/grills/grill5/grill1.jpg';
import Grillz6 from './JewelryImg/grills/grill6/grill1.jpg';
import Grillz7 from './JewelryImg/grills/grill7/grill1.jpg';
import Grillz8 from './JewelryImg/grills/grill8/grill1.jpg';
import Grillz9 from './JewelryImg/grills/grill9/grill1.jpg';
import Grillz10 from './JewelryImg/grills/grill10/grill1.jpg';
import Grillz11 from './JewelryImg/grills/grill11/grill1.jpg';
import Grillz12 from './JewelryImg/grills/grill12/grill1.jpg';
import Grillz13 from './JewelryImg/grills/grill13/grill1.jpg';
import Grillz14 from './JewelryImg/grills/grill14/grill1.jpg';


function GrillzTemplate({ id, title, image, price, rating, rateNumber, listPrice }) {
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
    <div className="grillz-template__container">
      <div className="grillz-template__img">
        <img src={image} alt="grillz-product-img" />
      </div>
      <div className="grillz-template__info">
        <div className="grillz-template__price">
          <span>
            <p>$</p>
            <p>{price}</p>
          </span>
          <span>
            <p>{listPrice}</p>
          </span>
        </div>
        <div className="grillz-template__title">
          <p>{title}</p>
        </div>
        <div className="grillz-template__rating">
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
      <div className="grillz-template__btn">
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  )
}



function Grillz() {
  return (
    <div className="grillz__container">
      <div className="grillz__heading">
        <p>Accessories</p>
      </div>
      {/* <div className="grillz__ads-one">
        <img src="" alt="ads-image" />
      </div> */}
      <div className="grillz__category">
        <Link to="/" className="grillz__category-img">
          <img src="" alt="monitor-category" />
        </Link>
      </div>
      <div className="grillz__sub-heading">
        <p>Top rated</p>
        <p>See more</p>
      </div>
      <div className="grillz__product-container">
        <GrillzTemplate
          id={uuid()}
          title=""
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={Grillz1}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image={Grillz2}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={549.99}
          rateNumber={"1,997"}
          rating={4}
          listPrice={"759.99"}
          image={Grillz3}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={124.99}
          rateNumber={"19,140"}
          rating={4}
          listPrice="239.99"
          image={Grillz4}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={199.99}
          rateNumber={"313,962"}
          rating={5}
          listPrice={"299.99"}
          image={Grillz5}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={340.99}
          rateNumber={"567"}
          rating={4}
          listPrice={""}
          image={Grillz6}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={329.99}
          rateNumber={"1,886"}
          rating={4}
          listPrice={"449.99"}
          image={Grillz7}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={1944.99}
          rateNumber={"1,988"}
          rating={4}
          listPrice="2349.99"
          image={Grillz8}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={24.88}
          rateNumber={"771"}
          rating={4}
          listPrice={"35.99"}
          image={Grillz9}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={21.32}
          rateNumber={"71"}
          rating={5}
          listPrice={"30.89"}
          image={Grillz10}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={11.99}
          rateNumber={"128"}
          rating={4}
          listPrice={"15.99"}
          image={Grillz11}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Grillz12}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Grillz13}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Grillz14}
        />
                <GrillzTemplate
          id={uuid()}
          title=""
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={Grillz1}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image={Grillz2}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={549.99}
          rateNumber={"1,997"}
          rating={4}
          listPrice={"759.99"}
          image={Grillz3}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={124.99}
          rateNumber={"19,140"}
          rating={4}
          listPrice="239.99"
          image={Grillz4}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={199.99}
          rateNumber={"313,962"}
          rating={5}
          listPrice={"299.99"}
          image={Grillz5}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={340.99}
          rateNumber={"567"}
          rating={4}
          listPrice={""}
          image={Grillz6}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={329.99}
          rateNumber={"1,886"}
          rating={4}
          listPrice={"449.99"}
          image={Grillz7}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={1944.99}
          rateNumber={"1,988"}
          rating={4}
          listPrice="2349.99"
          image={Grillz8}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={24.88}
          rateNumber={"771"}
          rating={4}
          listPrice={"35.99"}
          image={Grillz9}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={21.32}
          rateNumber={"71"}
          rating={5}
          listPrice={"30.89"}
          image={Grillz10}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={11.99}
          rateNumber={"128"}
          rating={4}
          listPrice={"15.99"}
          image={Grillz11}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Grillz12}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Grillz13}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Grillz14}
        />
                <GrillzTemplate
          id={uuid()}
          title=""
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={Grillz1}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image={Grillz2}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={549.99}
          rateNumber={"1,997"}
          rating={4}
          listPrice={"759.99"}
          image={Grillz3}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={124.99}
          rateNumber={"19,140"}
          rating={4}
          listPrice="239.99"
          image={Grillz4}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={199.99}
          rateNumber={"313,962"}
          rating={5}
          listPrice={"299.99"}
          image={Grillz5}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={340.99}
          rateNumber={"567"}
          rating={4}
          listPrice={""}
          image={Grillz6}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={329.99}
          rateNumber={"1,886"}
          rating={4}
          listPrice={"449.99"}
          image={Grillz7}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={1944.99}
          rateNumber={"1,988"}
          rating={4}
          listPrice="2349.99"
          image={Grillz8}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={24.88}
          rateNumber={"771"}
          rating={4}
          listPrice={"35.99"}
          image={Grillz9}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={21.32}
          rateNumber={"71"}
          rating={5}
          listPrice={"30.89"}
          image={Grillz10}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={11.99}
          rateNumber={"128"}
          rating={4}
          listPrice={"15.99"}
          image={Grillz11}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Grillz12}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Grillz13}
        />
        <GrillzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Grillz14}
        />
      </div>
    </div>
  )
}

export default Grillz;
