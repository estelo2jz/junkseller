import React from 'react';
import '../ElectronicStyles/ElectronicsProductTemplate.scss';
import { useStateValue } from '../../StateProvider';

function ElectronicsProductTemplate({ id, title, image, price, rating, rateNumber }) {
  const [{basket}, dispatch] = useStateValue();

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
    <div className="electronics-product">
      <div className="electronics-product__image">
        <img src={image} />
      </div>
      <div className="electronics-product__info">
        <p className="electronics-product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="electronics-product__title">
          <p>{title}</p>
        </div>
        <div className="electronics-product__rating">
          {
            Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))
          }
          <span>{rateNumber}</span>
        </div>
      </div>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default ElectronicsProductTemplate
