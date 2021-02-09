import React from 'react';
import '../JewelryStyles/JewelryProductTemplate.scss';
import { useStateValue } from '../../StateProvider';

function JewelryProductTemplate({ id, title, image, price, rating, rateNumber }) {
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
        rateNumber: rateNumber
      }
    })
  };
  return (
    <div key={id} className="jewelry-product">
      <div className="jewelry-product__image">
        <img src={image} alt="jewelry-product-template-img" />
      </div>
      <div className="jewelry-product__info">
        <p className="jewelry-product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="jewelry-product__title">
          <p>{title}</p>
        </div>
        {/* <div className="jewelry-product__rating">
          {
            Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))
          }
          <span>{rateNumber}</span>
        </div> */}
      </div>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default JewelryProductTemplate
