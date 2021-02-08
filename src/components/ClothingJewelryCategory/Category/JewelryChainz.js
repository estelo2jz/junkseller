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

function ChainzTemplate({ id, title, image, price, nameID,rating, rateNumber, listPrice }) {
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
          <div className="chainz-template__id">
            <p>
              {nameID}
            </p>
          </div>
          <span>
            <p>{listPrice}</p>
          </span>
        </div>
        <div className="chainz-template__title">
          <p>{title}</p>
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
        <p>Chainz</p>
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
          title="DIAMOND STAR CHAIN"
          price={9128.00}
          image={Chain1}
          nameID={'JDN090517'}
        />
        <ChainzTemplate
          id={uuid()}
          title="DIAMOND CHAIN"
          price={12580.00}
          nameID = {"JDN1611291"}
          image={Chain2}
        />
        <ChainzTemplate
          id={uuid()}
          title="DIAMOND CHAIN"
          price={15027}
          nameID = {"JDN170119"}
          image={Chain3}
        />
        <ChainzTemplate
          id={uuid()}
          title="BLACK DIAMOND CHAIN"
          price={9600}
          nameID = {"JDN1701148"}
          image={Chain4}
        />
        <ChainzTemplate
          id={uuid()}
          title="DIAMOND CHAIN"
          price={4475}
          nameID = {"JDN40407"}
          image={Chain5}
        />
        <ChainzTemplate
          id={uuid()}
          title="BLUE DIAMOND CHAIN"
          price={14220}
          nameID = {"JDN6897"}
          image={Chain6}
        />
        <ChainzTemplate
          id={uuid()}
          title="DIAMOND CHAIN"
          price={15725}
          nameID = {"JDN8721"}
          image={Chain7}
        />
        <ChainzTemplate
          id={uuid()}
          title="BLUE DIAMOND CHAIN"
          price={12920}
          nameID = {"JDN9505"}
          image={Chain8}
        />
        <ChainzTemplate
          id={uuid()}
          title="DIAMOND CHAIN"
          price={8940}
          nameID = {"JDN40206"}
          image={Chain9}
        />
        <ChainzTemplate
          id={uuid()}
          title="DIAMOND CHAIN"
          price={4750}
          nameID = {"N15116"}
          image={Chain10}
        />
        <ChainzTemplate
          id={uuid()}
          title="LADY DIAMOND CHAIN"
          price={8544}
          nameID = {"N170530"}
          image={Chain11}
        />
        <ChainzTemplate
          id={uuid()}
          title="DIAMOND CHAIN"
          price={12500}
          nameID = {"N170703"}
          image={Chain12}
        />
      </div>
    </div>
  )
}

export default Chainz;
