import React from 'react';
import '../ComputerStyles/ComputerProductTemplate.scss';
import { useStateValue } from '../../StateProvider';

function ComputerProductTemplate({id, title, image, price, rating, rateNumber, shipping, brandName, arrivalEst}) {
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
    <div className="computer-product-template">
      <div id={id} className="computer-product-template__container">
        <div className="computer-product-template__img">
          <img src={image} alt="computer-product" />
        </div>
        <div className="computer-product-template__title">
          <p>{title}</p>
          <p>by {brandName}</p>
        </div>
        <div className="computer-product-template__rating">
          {
            Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))
          }
          <p className="rating-rate">{rateNumber}</p>
        </div>
        <div className="computer-product-template__price">
          <p>$</p>
          <p>{price}</p>
          <p>{shipping}</p>
        </div>
        <div className="computer-product-template__arrival">
          <p>{arrivalEst}</p>
          <p>Details</p>
        </div>
        <div className="computer-product-template__btn">
          <button onClick={addToBasket}>Add to basket</button>
        </div>
      </div>
    </div>
  )
}

export default ComputerProductTemplate
