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


function PendantzTemplate({ id, title, image, price, nameID, rating, rateNumber, listPrice }) {
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
          <div className="pendantz-template__id">
            <p>
              {nameID}
            </p>
          </div>
          <span>
            <p>{listPrice}</p>
          </span>
        </div>
        <div className="pendantz-template__title">
          <p>{title}</p>
        </div>
        {/* <div className="pendantz-template__rating">
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
        </div> */}
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
        <p>Pendantz</p>
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
          nameID = {"Nazareth"}
          title="Jesus Of Nazareth Pendant 14k Yellow Gold"
          price={25000}
          image={Pendantz1}
        />
        <PendantzTemplate
          id={uuid()}
          nameID = {"Lion"}
          title="Striped Mane Lion Pendant - 14k Yellow Gold"
          price={20000}
          image={Pendantz2}
        />
        <PendantzTemplate
          id={uuid()}
          nameID = {"WhiteJesus"}
          title="Jesus Piece Pendant 14k White Gold"
          price={16000}
          image={Pendantz3}
        />
        <PendantzTemplate
          id={uuid()}
          nameID = {"RoseJesus"}
          title="Jesus Piece Pendant 14k Rose Gold"
          price={16000}
          image={Pendantz4}
        />
        <PendantzTemplate
          id={uuid()}
          nameID = {"GoldJesus"}
          title="Jesus Piece Lg Pendant 14k Yellow Gold"
          price={16000}
          image={Pendantz5}
        />
        <PendantzTemplate
          id={uuid()}
          nameID = {"Ghost"}
          title="Ghost Pendant 14k White Gold"
          price={15000}
          image={Pendantz6}
        />
        <PendantzTemplate
          id={uuid()}
          nameID = {"Hamsa"}
          title="Hamsa Pendant 14k Yellow Gold"
          price={15000}
          image={Pendantz7}
        />
        <PendantzTemplate
          id={uuid()}
          nameID = {"Panther"}
          title="Full Body Black Panther Pendant 14k White Gold"
          price={12500}
          image={Pendantz8}
        />
        <PendantzTemplate
          id={uuid()}
          nameID = {"Hands"}
          title="Prayer Hands Pendant 14k Yellow Gold"
          price={12000}
          image={Pendantz9}
        />
        <PendantzTemplate
          id={uuid()}
          nameID = {"Snowboarder"}
          title="Snowboarder Pendant 14k White Gold"
          price={14000}
          image={Pendantz10}
        />
        <PendantzTemplate
          id={uuid()}
          nameID = {"Evil"}
          title="Diamond Evil Cat Pendant - 14k White Gold"
          price={12000}
          image={Pendantz11}
        />
        <PendantzTemplate
          id={uuid()}
          nameID = {"Bear"}
          title="Grizzly Bear Pendant 14k White Gold"
          price={15000}
          image={Pendantz12}
        />
        <PendantzTemplate
          id={uuid()}
          nameID = {"Africa"}
          title="Africa Pendant 14k Yellow Gold"
          price={11000}
          image={Pendantz13}
        />
        <PendantzTemplate
          id={uuid()}
          nameID = {"Crown"}
          title="King Crown Lion Pendant 14k White Gold"
          price={13000}
          image={Pendantz14}
        />
        <PendantzTemplate
          id={uuid()}
          nameID = {"Bubbly"}
          title="Bubbly 3 Row Cross Pendant 14k Yellow Gold"
          price={17000}
          image={Pendantz15}
        />
      </div>
    </div>
  )
}

export default Pendantz;
