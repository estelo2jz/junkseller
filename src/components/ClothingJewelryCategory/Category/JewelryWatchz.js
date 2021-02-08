import React from 'react';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { useStateValue } from '../../StateProvider';
import '../ClothingJewelryStyles/JewelryWatchz.scss';

import Watchz1 from './JewelryImg/watchz/watch1/watch1.jpg'
import Watchz2 from './JewelryImg/watchz/watch2/watch1.jpg'
import Watchz3 from './JewelryImg/watchz/watch3/watch1.jpg'
import Watchz4 from './JewelryImg/watchz/watch4/watch1.jpg'
import Watchz5 from './JewelryImg/watchz/watch5/watch1.jpg'
import Watchz6 from './JewelryImg/watchz/watch6/watch1.jpg'
import Watchz7 from './JewelryImg/watchz/watch7/watch1.jpg'
import Watchz8 from './JewelryImg/watchz/watch8/watch1.jpg'
import Watchz9 from './JewelryImg/watchz/watch9/watch1.jpg'
import Watchz10 from './JewelryImg/watchz/watch10/watch1.jpg'
import Watchz11 from './JewelryImg/watchz/watch11/watch1.jpg'
import Watchz12 from './JewelryImg/watchz/watch12/watch1.jpg'
import Watchz13 from './JewelryImg/watchz/watch13/watch1.jpg'
import Watchz14 from './JewelryImg/watchz/watch14/watch1.jpg'
import Watchz15 from './JewelryImg/watchz/watch15/watch1.jpg'
import Watchz16 from './JewelryImg/watchz/watch16/watch1.jpg'
import Watchz17 from './JewelryImg/watchz/watch17/watch1.jpg'
import Watchz18 from './JewelryImg/watchz/watch18/watch1.jpg'
import Watchz19 from './JewelryImg/watchz/watch19/watch1.jpg'


function WatchzTemplate({ id, title, image, price, rating, rateNumber, listPrice }) {
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
    <div className="watchz-template__container">
      <div className="watchz-template__img">
        <img src={image} alt="watchz-product-img" />
      </div>
      <div className="watchz-template__info">
        <div className="watchz-template__price">
          <span>
            <p>$</p>
            <p>{price}</p>
          </span>
          <span>
            <p>{listPrice}</p>
          </span>
        </div>
        <div className="watchz-template__title">
          <p>{title}</p>
        </div>
        <div className="watchz-template__rating">
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
      <div className="watchz-template__btn">
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  )
}



function Watchz() {
  return (
    <div className="watchz__container">
      <div className="watchz__heading">
        <p>Accessories</p>
      </div>
      {/* <div className="watchz__ads-one">
        <img src="" alt="ads-image" />
      </div> */}
      <div className="watchz__category">
        <Link to="/" className="watchz__category-img">
          <img src="" alt="monitor-category" />
        </Link>
      </div>
      <div className="watchz__sub-heading">
        <p>Top rated</p>
        <p>See more</p>
      </div>
      <div className="watchz__product-container">
      <WatchzTemplate
          id={uuid()}
          title=""
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={Watchz1}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image={Watchz2}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={549.99}
          rateNumber={"1,997"}
          rating={4}
          listPrice={"759.99"}
          image={Watchz3}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={124.99}
          rateNumber={"19,140"}
          rating={4}
          listPrice="239.99"
          image={Watchz4}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={199.99}
          rateNumber={"313,962"}
          rating={5}
          listPrice={"299.99"}
          image={Watchz5}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={340.99}
          rateNumber={"567"}
          rating={4}
          listPrice={""}
          image={Watchz6}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={329.99}
          rateNumber={"1,886"}
          rating={4}
          listPrice={"449.99"}
          image={Watchz7}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={1944.99}
          rateNumber={"1,988"}
          rating={4}
          listPrice="2349.99"
          image={Watchz8}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={24.88}
          rateNumber={"771"}
          rating={4}
          listPrice={"35.99"}
          image={Watchz9}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={21.32}
          rateNumber={"71"}
          rating={5}
          listPrice={"30.89"}
          image={Watchz10}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={11.99}
          rateNumber={"128"}
          rating={4}
          listPrice={"15.99"}
          image={Watchz11}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Watchz12}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Watchz13}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Watchz14}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Watchz15}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Watchz16}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Watchz17}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Watchz18}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Watchz18}
        />
              <WatchzTemplate
          id={uuid()}
          title=""
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={Watchz1}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image={Watchz2}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={549.99}
          rateNumber={"1,997"}
          rating={4}
          listPrice={"759.99"}
          image={Watchz3}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={124.99}
          rateNumber={"19,140"}
          rating={4}
          listPrice="239.99"
          image={Watchz4}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={199.99}
          rateNumber={"313,962"}
          rating={5}
          listPrice={"299.99"}
          image={Watchz5}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={340.99}
          rateNumber={"567"}
          rating={4}
          listPrice={""}
          image={Watchz6}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={329.99}
          rateNumber={"1,886"}
          rating={4}
          listPrice={"449.99"}
          image={Watchz7}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={1944.99}
          rateNumber={"1,988"}
          rating={4}
          listPrice="2349.99"
          image={Watchz8}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={24.88}
          rateNumber={"771"}
          rating={4}
          listPrice={"35.99"}
          image={Watchz9}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={21.32}
          rateNumber={"71"}
          rating={5}
          listPrice={"30.89"}
          image={Watchz10}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={11.99}
          rateNumber={"128"}
          rating={4}
          listPrice={"15.99"}
          image={Watchz11}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Watchz12}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Watchz13}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Watchz14}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Watchz15}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Watchz16}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Watchz17}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Watchz18}
        />
        <WatchzTemplate
          id={uuid()}
          title=""
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image={Watchz18}
        />
      </div>
    </div>
  )
}

export default Watchz;
