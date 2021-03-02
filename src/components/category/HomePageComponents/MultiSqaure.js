import React from 'react';
import { Link } from 'react-router-dom';
import './styles/HomePageStyles.scss';

function MultiSqaure() {
  return (
    <div className="multi-sqaure__container">
        <div className="multi-sqaure__box-one">
          <div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/311EleaXm+L.jpg" alt="multi-sqaure-categories" />
          </div>
          <div>
            <p>Ear Buds</p>
          </div>
        </div>
        <div className="multi-sqaure__box-one">
          <div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/41q2y264P6L.jpg" alt="multi-sqaure-categories" />
          </div>
          <div>
            <p>XBOX</p>
          </div>
        </div>
        <div className="multi-sqaure__box-one">
          <div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/41LRXyDut2L.jpg" alt="multi-sqaure-categories" />
          </div>
          <div>
            <p>Tablets</p>
          </div>
        </div>
        <div className="multi-sqaure__box-one">
          <div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/41179QBQAXL.jpg" alt="multi-sqaure-categories" />
          </div>
          <div>
            <p>Smart Phones</p>
          </div>
        </div>
    </div>
  )
}

export default MultiSqaure
