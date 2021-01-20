import React from 'react';
import '../ComputerStyles/ComputerTablet.scss';

function ComputerTablet() {
  return (
    <div className="computer-tablet__container">
      <div className="computer-tablet__box-one-container">
        <div className="computer-tablet__box-one-one">
          <div className="computer-tablet__box-one-img">
            <img className="responsive" src="https://images-na.ssl-images-amazon.com/images/I/71k45hZkLmL._AC._SR360,460.jpg" alt="product-image" />
          </div>
          <div className="computer-tablet__span">
            <span>Laptops</span>
          </div>
        </div>
        <div className="computer-tablet__box-one-two">
          <div className="computer-tablet__box-one-img">
            <img src="https://images-na.ssl-images-amazon.com/images/I/81PeBrTfhnL._AC_SL1500_.jpg" alt="product-image" />
          </div>
          <div className="computer-tablet__span">
            <span>Dektops</span>
          </div>
        </div>
        <div className="computer-tablet__box-one-three">
          <div className="computer-tablet__box-one-img">
            <img src="https://images-na.ssl-images-amazon.com/images/I/71S31CWSs3L._AC._SR360,460.jpg" alt="product-image" />
          </div>
          <div className="computer-tablet__span">
            <span>CPU</span>
          </div>
        </div>
        <div className="computer-tablet__box-one-four">
          <div className="computer-tablet__box-one-img">
            <img src="https://images-na.ssl-images-amazon.com/images/I/81l9Y%2BQKyRL._AC_SL1500_.jpg" alt="product-image" />
          </div>
          <div className="computer-tablet__span">
            <span>Monitors</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComputerTablet;
