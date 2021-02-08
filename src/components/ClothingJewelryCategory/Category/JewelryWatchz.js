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


function WatchzTemplate({ id, title, image, price, nameID,rating, rateNumber, listPrice }) {
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
          <div className="watchz-template__id">
            <p>
              {nameID}
            </p>
          </div>
          <span>
            <p>{listPrice}</p>
          </span>
        </div>
        <div className="watchz-template__title">
          <p>{title}</p>
        </div>
        {/* <div className="watchz-template__rating">
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
        <p>Watchz</p>
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
          nameID = {"CW0001"}
          title="Custom Watch 0001"
          price={38000}
          image={Watchz1}
        />
        <WatchzTemplate
          id={uuid()}
          nameID = {"CW0002"}
          title="Custom Watch 0002"
          price={12000}
          image={Watchz2}
        />
        <WatchzTemplate
          id={uuid()}
          nameID = {"CW0003"}
          title="Custom Watch 0003"
          price={27000}
          image={Watchz3}
        />
        <WatchzTemplate
          id={uuid()}
          nameID = {"CW0004"}
          title="Custom Watch 0004"
          price={24000}
          image={Watchz4}
        />
        <WatchzTemplate
          id={uuid()}
          nameID = {"CW0005"}
          title="Custom Watch 0005"
          price={9000}
          image={Watchz5}
        />
        <WatchzTemplate
          id={uuid()}
          nameID = {"CW0006"}
          title="Custom Watch 0006"
          price={12000}
          image={Watchz6}
        />
        <WatchzTemplate
          id={uuid()}
          nameID = {"CW0007"}
          title="Custom Watch 0007"
          price={15000}
          image={Watchz7}
        />
        <WatchzTemplate
          id={uuid()}
          nameID = {"CW0008"}
          title="Custom Watch 0008"
          price={25000}
          image={Watchz8}
        />
        <WatchzTemplate
          id={uuid()}
          nameID = {"CW0009"}
          title="Custom Watch 0009"
          price={9000}
          image={Watchz9}
        />
        <WatchzTemplate
          id={uuid()}
          nameID = {"CW0010"}
          title="Custom Watch 0010"
          price={22990}
          image={Watchz10}
        />
        <WatchzTemplate
          id={uuid()}
          nameID = {"CW0011"}
          title="Custom Watch 0011"
          price={26400}
          image={Watchz11}
        />
        <WatchzTemplate
          id={uuid()}
          nameID = {"CW0012"}
          title="Custom Watch 0012"
          price={22990}
          image={Watchz12}
        />
        <WatchzTemplate
          id={uuid()}
          nameID = {"CW0013"}
          title="Custom Watch 0013"
          price={18500}
          image={Watchz13}
        />
        <WatchzTemplate
          id={uuid()}
          nameID = {"CW0014"}
          title="Custom Watch 0014"
          price={29990}
          image={Watchz14}
        />
        <WatchzTemplate
          id={uuid()}
          nameID = {"CW0015"}
          title="Custom Watch 0015"
          price={16940}
          image={Watchz15}
        />
        <WatchzTemplate
          id={uuid()}
          nameID = {"CW0016"}
          title="Custom Watch 0016"
          price={18600}
          image={Watchz16}
        />
        <WatchzTemplate
          id={uuid()}
          nameID = {"CW0017"}
          title="Custom Watch 0017"
          price={18000}
          image={Watchz17}
        />
        <WatchzTemplate
          id={uuid()}
          nameID = {"CW0018"}
          title="Custom Watch 0018"
          price={19800}
          image={Watchz18}
        />
        <WatchzTemplate
          id={uuid()}
          nameID = {"CW0019"}
          title="Custom Watch 0019"
          price={22500}
          image={Watchz19}
        />
      </div>
    </div>
  )
}

export default Watchz;
