import React from 'react';
import '../HandmadeStyles/JewelryProductTemplate.scss';

function JewelryProductTemplate({id, title, productImage, price, rating, rateNum, brandName, arrivalEst}) {
  return (
    <div>
      <div id={id}>
        <div>
          <img src={productImage} alt="jewelry-product" />
        </div>
        <div>
          <p>{title}</p>
          <p>by {brandName}</p>
        </div>
        <div>
          {
            Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))
          }
          <p>{rateNum}</p>
        </div>
        <div>
          <p>{price}</p> & FREE Shipping
        </div>
        <div>
          <p>{arrivalEst}</p>
          <p>Details</p>
        </div>
      </div>
    </div>
  )
}

export default JewelryProductTemplate
