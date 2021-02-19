import React from 'react';
import '../HandmadeStyles/HandmadeProductTemplate.scss';
import { useStateValue } from '../../StateProvider';
import HandmadeProductTemplate from './HandmadeProductTemplate';

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
    <div className="handmade-template">
      <div id={id} className="handmade-template__container">
        <div className="handmade-template__img">
          <img src={image} alt="handmade" />
        </div>
        <div className="handmade-template__title">
          <p>{title}</p>
          <p>by {brandName}</p>
        </div>
        <div className="handmade-template__rating">
          {
            Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))
          }
          <p className="rating-rate">{rateNumber}</p>
        </div>
        <div className="handmade-template__price">
          <p>$</p>
          <p>{price}</p>
          <p>{shipping}</p>
        </div>
        <div className="handmade-template__arrival">
          <p>{arrivalEst}</p>
          <p>Details</p>
        </div>
        <div className="handmade-template__btn">
          <button onClick={addToBasket}>Add to basket</button>
        </div>
      </div>
    </div>
  )
}

export default JewelryProductTemplate
