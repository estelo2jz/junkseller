import React from 'react';
import '../ClothingStyles/ClothingProductTemplate.scss';
import { useStateValue } from '../../StateProvider';

function ClothingProductTemplate({ id, title, image, price, rating, rateNumber }) {
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
    <div key={id} className="clothing-product">
      <div className="clothing-product__image">
        <img src={image} alt="electronics-product-template-img" />
      </div>
      <div className="clothing-product__info">
        <p className="clothing-product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="clothing-product__title">
          <p>{title}</p>
        </div>
      </div>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default ClothingProductTemplate
