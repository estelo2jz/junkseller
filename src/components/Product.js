import React from 'react';
import '../styles/Product.css';
import { useStateValue } from './StateProvider';


function Product({ id, title, image, price, rating, rateNumber }) {
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
    <div className="product">
      <div className="product__info">
        <div className="product__title">
          <p>{title}</p>
        </div>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {
            Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐ {rateNumber}</p>
            ))
          }
        </div>
      </div>
      <img src={image} alt="product-image"/>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product
