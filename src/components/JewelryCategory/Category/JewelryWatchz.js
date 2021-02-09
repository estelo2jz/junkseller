import React from 'react';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { useStateValue } from '../../StateProvider';
import '../JewelryStyles/JewelryWatchz.scss';

// import Watchz1 from './JewelryImg/watchz/watch1/watch1.jpg'
// import Watchz2 from './JewelryImg/watchz/watch2/watch1.jpg'
// import Watchz3 from './JewelryImg/watchz/watch3/watch1.jpg'
// import Watchz4 from './JewelryImg/watchz/watch4/watch1.jpg'
// import Watchz5 from './JewelryImg/watchz/watch5/watch1.jpg'
// import Watchz6 from './JewelryImg/watchz/watch6/watch1.jpg'
// import Watchz7 from './JewelryImg/watchz/watch7/watch1.jpg'
// import Watchz8 from './JewelryImg/watchz/watch8/watch1.jpg'
// import Watchz9 from './JewelryImg/watchz/watch9/watch1.jpg'
// import Watchz10 from './JewelryImg/watchz/watch10/watch1.jpg'
// import Watchz11 from './JewelryImg/watchz/watch11/watch1.jpg'
// import Watchz12 from './JewelryImg/watchz/watch12/watch1.jpg'
// import Watchz13 from './JewelryImg/watchz/watch13/watch1.jpg'
// import Watchz14 from './JewelryImg/watchz/watch14/watch1.jpg'
// import Watchz15 from './JewelryImg/watchz/watch15/watch1.jpg'
// import Watchz16 from './JewelryImg/watchz/watch16/watch1.jpg'
// import Watchz17 from './JewelryImg/watchz/watch17/watch1.jpg'
// import Watchz18 from './JewelryImg/watchz/watch18/watch1.jpg'
// import Watchz19 from './JewelryImg/watchz/watch19/watch1.jpg'


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
        <p>Watch's</p>
      </div>
      {/* <div className="watchz__ads-one">
        <img src="" alt="ads-image" />
      </div> */}
      <div className="watchz__category">
        <Link to="/" className="watchz__category-img">
          <img src="https://media.gq.com/photos/5e8c9a7cc21b8b00087a00f1/3:2/w_1686,h_1124,c_limit/watches-fix.jpg" alt="monitor-category" />
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
          image={"https://cdn.shopify.com/s/files/1/0627/5517/products/ChronoSBlue_Brown_1000x.jpg?v=1611165666"}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="Custom Watch 0001"
          price={38000}
          image={"https://cdn.shopify.com/s/files/1/0627/5517/products/ChronoSBlue_Brown_1000x.jpg?v=1611165666"}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="Custom Watch 0001"
          price={38000}
          image={"https://cdn.shopify.com/s/files/1/0627/5517/products/ChronoSBlue_Brown_1000x.jpg?v=1611165666"}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="Custom Watch 0001"
          price={38000}
          image={"https://cdn.shopify.com/s/files/1/0627/5517/products/ChronoSBlue_Brown_1000x.jpg?v=1611165666"}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="Custom Watch 0001"
          price={38000}
          image={"https://cdn.shopify.com/s/files/1/0627/5517/products/ChronoSBlue_Brown_1000x.jpg?v=1611165666"}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="Custom Watch 0001"
          price={38000}
          image={"https://cdn.shopify.com/s/files/1/0627/5517/products/ChronoSBlue_Brown_1000x.jpg?v=1611165666"}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="Custom Watch 0001"
          price={38000}
          image={"https://cdn.shopify.com/s/files/1/0627/5517/products/ChronoSBlue_Brown_1000x.jpg?v=1611165666"}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="Custom Watch 0001"
          price={38000}
          image={"https://cdn.shopify.com/s/files/1/0627/5517/products/ChronoSBlue_Brown_1000x.jpg?v=1611165666"}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="Custom Watch 0001"
          price={38000}
          image={"https://cdn.shopify.com/s/files/1/0627/5517/products/ChronoSBlue_Brown_1000x.jpg?v=1611165666"}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="Custom Watch 0001"
          price={38000}
          image={"https://cdn.shopify.com/s/files/1/0627/5517/products/ChronoSBlue_Brown_1000x.jpg?v=1611165666"}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="Custom Watch 0001"
          price={38000}
          image={"https://cdn.shopify.com/s/files/1/0627/5517/products/ChronoSBlue_Brown_1000x.jpg?v=1611165666"}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="Custom Watch 0001"
          price={38000}
          image={"https://cdn.shopify.com/s/files/1/0627/5517/products/ChronoSBlue_Brown_1000x.jpg?v=1611165666"}
        />
      </div>
    </div>
  )
}

export default Watchz;
