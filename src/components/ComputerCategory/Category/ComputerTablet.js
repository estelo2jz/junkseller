import React from 'react';
import '../ComputerStyles/ComputerTablet.scss';

function ComputerTablet() {
  return (
    <div className="computer-tablet__container">
      <div className="computer-tablet__box-one-container">
        <div className="computer-tablet__box-one-one">
          <div className="computer-tablet__box-one-img">
            <img className="responsive" src="https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL._AC_SX184_.jpg" alt="product-image" />
          </div>
          <span>Jackets & coats</span>
        </div>
        <div className="computer-tablet__box-one-two">
          <div className="computer-tablet__box-one-img">
            <img src="https://images-na.ssl-images-amazon.com/images/I/41jSuUHT8eL._AC_SX184_.jpg" alt="product-image" />
          </div>
          <span>Watches</span>
        </div>
        <div className="computer-tablet__box-one-three">
          <div className="computer-tablet__box-one-img">
            <img src="https://images-na.ssl-images-amazon.com/images/I/51rGP3HU3HL._AC_SX184_.jpg" alt="product-image" />
          </div>
          <span>Sunglasses</span>
        </div>
        <div className="computer-tablet__box-one-four">
          <div className="computer-tablet__box-one-img">
            <img src="https://images-na.ssl-images-amazon.com/images/I/41Qf7+v71YL._AC_SX184_.jpg" alt="product-image" />
          </div>
          <span>Sweaters</span>
        </div>
      </div>
    </div>
  )
}

export default ComputerTablet;
