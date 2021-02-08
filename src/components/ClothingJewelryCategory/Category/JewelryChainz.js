import React from 'react';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { useStateValue } from '../../StateProvider';
import '../ClothingJewelryStyles/JewelryChainz.scss';

import Chain1 from './JewelryImg/chainz/chain1/chain1.jpg'
import Chain2 from './JewelryImg/chainz/chain2/chain1.jpg'
import Chain3 from './JewelryImg/chainz/chain3/chain1.jpg'
import Chain4 from './JewelryImg/chainz/chain4/chain1.jpg'
import Chain5 from './JewelryImg/chainz/chain5/chain1.jpg'
import Chain6 from './JewelryImg/chainz/chain6/chain1.jpg'
import Chain7 from './JewelryImg/chainz/chain7/chain1.jpg'
import Chain8 from './JewelryImg/chainz/chain8/chain1.jpg'
import Chain9 from './JewelryImg/chainz/chain9/chain1.jpg'
import Chain10 from './JewelryImg/chainz/chain10/chain1.jpg'
import Chain11 from './JewelryImg/chainz/chain11/chain1.jpg'
import Chain12 from './JewelryImg/chainz/chain12/chain1.jpg'

function ChainzTemplate({ id, title, image, price, rating, rateNumber, listPrice }) {
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
    <div className="chainz-template__container">
      <div className="chainz-template__img">
        <img src={image} alt="chainz-product-img" />
      </div>
      <div className="chainz-template__info">
        <div className="chainz-template__price">
          <span>
            <p>$</p>
            <p>{price}</p>
          </span>
          <span>
            <p>{listPrice}</p>
          </span>
        </div>
        <div className="chainz-template__title">
          <p>{title}</p>
        </div>
        <div className="chainz-template__rating">
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
      <div className="chainz-template__btn">
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  )
}



function Chainz() {
  return (
    <div className="chainz__container">
      <div className="chainz__heading">
        <p>Accessories</p>
      </div>
      {/* <div className="chainz__ads-one">
        <img src="" alt="ads-image" />
      </div> */}
      <div className="chainz__category">
        <Link to="/" className="chainz__category-img">
          <img src="" alt="monitor-category" />
        </Link>
      </div>
      <div className="chainz__sub-heading">
        <p>Top rated</p>
        <p>See more</p>
      </div>
      <div className="chainz__product-container">
        <ChainzTemplate
          id={uuid()}
          title=""
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={Chain1}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image={Chain2}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={549.99}
          rateNumber={"1,997"}
          rating={4}
          listPrice={"759.99"}
          image={Chain3}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={124.99}
          rateNumber={"19,140"}
          rating={4}
          listPrice="239.99"
          image={Chain4}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={199.99}
          rateNumber={"313,962"}
          rating={5}
          listPrice={"299.99"}
          image={Chain5}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={340.99}
          rateNumber={"567"}
          rating={4}
          listPrice={""}
          image={Chain6}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={329.99}
          rateNumber={"1,886"}
          rating={4}
          listPrice={"449.99"}
          image={Chain7}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={1944.99}
          rateNumber={"1,988"}
          rating={4}
          listPrice="2349.99"
          image={Chain8}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={24.88}
          rateNumber={"771"}
          rating={4}
          listPrice={"35.99"}
          image={Chain9}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={21.32}
          rateNumber={"71"}
          rating={5}
          listPrice={"30.89"}
          image={Chain10}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={11.99}
          rateNumber={"128"}
          rating={4}
          listPrice={"15.99"}
          image={Chain11}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Chain12}
        />
                <ChainzTemplate
          id={uuid()}
          title=""
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={Chain1}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image={Chain2}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={549.99}
          rateNumber={"1,997"}
          rating={4}
          listPrice={"759.99"}
          image={Chain3}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={124.99}
          rateNumber={"19,140"}
          rating={4}
          listPrice="239.99"
          image={Chain4}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={199.99}
          rateNumber={"313,962"}
          rating={5}
          listPrice={"299.99"}
          image={Chain5}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={340.99}
          rateNumber={"567"}
          rating={4}
          listPrice={""}
          image={Chain6}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={329.99}
          rateNumber={"1,886"}
          rating={4}
          listPrice={"449.99"}
          image={Chain7}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={1944.99}
          rateNumber={"1,988"}
          rating={4}
          listPrice="2349.99"
          image={Chain8}
        />
                <ChainzTemplate
          id={uuid()}
          title=""
          price={24.88}
          rateNumber={"771"}
          rating={4}
          listPrice={"35.99"}
          image={Chain9}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={21.32}
          rateNumber={"71"}
          rating={5}
          listPrice={"30.89"}
          image={Chain10}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={11.99}
          rateNumber={"128"}
          rating={4}
          listPrice={"15.99"}
          image={Chain11}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Chain12}
        />
                <ChainzTemplate
          id={uuid()}
          title=""
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={Chain1}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image={Chain2}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={549.99}
          rateNumber={"1,997"}
          rating={4}
          listPrice={"759.99"}
          image={Chain3}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={124.99}
          rateNumber={"19,140"}
          rating={4}
          listPrice="239.99"
          image={Chain4}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={199.99}
          rateNumber={"313,962"}
          rating={5}
          listPrice={"299.99"}
          image={Chain5}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={340.99}
          rateNumber={"567"}
          rating={4}
          listPrice={""}
          image={Chain6}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={329.99}
          rateNumber={"1,886"}
          rating={4}
          listPrice={"449.99"}
          image={Chain7}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={1944.99}
          rateNumber={"1,988"}
          rating={4}
          listPrice="2349.99"
          image={Chain8}
        />
                <ChainzTemplate
          id={uuid()}
          title=""
          price={24.88}
          rateNumber={"771"}
          rating={4}
          listPrice={"35.99"}
          image={Chain9}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={21.32}
          rateNumber={"71"}
          rating={5}
          listPrice={"30.89"}
          image={Chain10}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={11.99}
          rateNumber={"128"}
          rating={4}
          listPrice={"15.99"}
          image={Chain11}
        />
        <ChainzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Chain12}
        />
      </div>
    </div>
  )
}

export default Chainz;
