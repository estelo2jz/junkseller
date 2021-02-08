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


function GrillzTemplate({ id, title, image, price, rating, nameID,rateNumber, listPrice }) {
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
          <div className="grillz-template__id">
            <p>
              {nameID}
            </p>
          </div>
          <span>
            <p>{listPrice}</p>
          </span>
        </div>
        <div className="grillz-template__title">
          <p>{title}</p>
        </div>
        {/* <div className="grillz-template__rating">
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
        <p>Grillz</p>
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
          nameID= {"S505"}
          title="INVISIBLE SET EMERALD"
          price={4000}
          image={Grillz1}
        />
        <GrillzTemplate
          id={uuid()}
          nameID= {"S161506-3A"}
          title="SKY BLUE"
          price={24000}
          image={Grillz2}
        />
        <GrillzTemplate
          id={uuid()}
          nameID= {"JDG73-ICE"}
          title="SKATE 8 PIECE"
          price={5162}
          image={Grillz3}
        />
        <GrillzTemplate
          id={uuid()}
          nameID= {"JDG65-BLUE"}
          title="MAGIC 4 ROW"
          price={11200}
          image={Grillz4}
        />
        <GrillzTemplate
          id={uuid()}
          nameID= {"S161506-1B"}
          title="INVISIBLE"
          price={6400}
          image={Grillz5}
        />
        <GrillzTemplate
          id={uuid()}
          nameID= {"S2530032-A"}
          title="16 GOLD TEETH"
          price={6000}
          image={Grillz6}
        />
        <GrillzTemplate
          id={uuid()}
          nameID= {"S105B"}
          title="6 PIECE INVISIBLE"
          price={6050}
          image={Grillz7}
        />
        <GrillzTemplate
          id={uuid()}
          nameID= {"C1532-1"}
          title="16 TEETH PRONG"
          price={1944.99}
          image={Grillz8}
        />
        <GrillzTemplate
          id={uuid()}
          nameID= {"JDG69-4TH"}
          title="14K PRINCESS CUT"
          price={2742}
          image={Grillz9}
        />
        <GrillzTemplate
          id={uuid()}
          nameID= {"JDG36"}
          title="Shiny Diesel"
          price={78000}
          image={Grillz10}
        />
        <GrillzTemplate
          id={uuid()}
          nameID= {"JD103"}
          title="Spikey Egde"
          price={8800}
          image={Grillz11}
        />
        <GrillzTemplate
          id={uuid()}
          nameID= {"JD102"}
          title="Santa's Grillz"
          price={78000}
          image={Grillz12}
        />
        <GrillzTemplate
          id={uuid()}
          nameID= {"JD101"}
          title="Slick Golden"
          price={98000}
          image={Grillz13}
        />
        <GrillzTemplate
          id={uuid()}
          nameID= {"JD104"}
          title="Diamond Ruby Piece"
          price={10000}
          image={Grillz14}
        />
      </div>
    </div>
  )
}

export default Grillz;
