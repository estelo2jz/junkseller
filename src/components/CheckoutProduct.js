import React from 'react';
import '../styles/CheckoutProduct.scss';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating}) {
  const [{basket}, dispatch] = useStateValue();

  // console.log(id, title, image, price, rating);
  const removeFromBasket = () => {
    // remove item from basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    }) 
  }

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__img-box">
        <img className="checkoutProduct__image" src={image} alt="image" />
      </div>
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <p>{price}</p>
        </p>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct;
