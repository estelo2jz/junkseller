import React from 'react';
import '../HandmadeStyles/JewelryProductTemplate.scss';
import { useStateValue } from '../../StateProvider';

function JewelryProductTemplate({id, title, image, price, rating, rateNumber, shipping, brandName, arrivalEst}) {
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
    <div className="jewelry-product-template">
      <div id={id} className="jewelry-product-template__container">
        <div className="jewelry-product-template__img">
          <img src={image} alt="jewelry-product" />
        </div>
        <div className="jewelry-product-template__title">
          <p>{title}</p>
          <p>by {brandName}</p>
        </div>
        <div className="jewelry-product-template__rating">
          {
            Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))
          }
          <p className="rating-rate">{rateNumber}</p>
        </div>
        <div className="jewelry-product-template__price">
          <p>{price}</p>
          <p>& {shipping}</p>
        </div>
        <div className="jewelry-product-template__arrival">
          <p>{arrivalEst}</p>
          <p>Details</p>
        </div>
        <div className="jewelry-product-template__btn">
          <button onClick={addToBasket}>Add to basket</button>
        </div>
      </div>
    </div>
  )
}

export default JewelryProductTemplate
