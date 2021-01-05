import React from 'react';
import '../ElectronicStyles/ElectronicsProductTemplate.scss';
import { useStateValue } from '../../StateProvider';

function ElectronicsProductTemplate({ id, title, image, price, rating }) {
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
        rating: rating
      }
    }) 
  };
  return (
    <div className="electronics-product">
      <img src={image} />
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
        </div>
      </div>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default ElectronicsProductTemplate
