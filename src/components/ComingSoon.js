import React from 'react';
import { Link } from 'react-router-dom';
import { ComingSoonData } from './ComingSooonData';
import '../styles/ComingSoon.scss';

function ComingSoon() {
  return (
    <div className="coming-soon__container">
      <div className="coming-soon__category-heading">
        <p>explore</p>
        <p>our</p>
        <p>products</p>
      </div>
      <div className="coming-soon-card-container">
          <div className="coming-soon__outer">
            {ComingSoonData.map((item, index) => {
              return (
                <div key={index} className="coming-soon__container">
                  <Link to={item.path} className="coming-soon__link" >
                    <div className="coming-soon__img">
                      <img src={item.image} alt="coming-soon" />
                    </div>
                    <div className="coming-soon__title">
                        <p>{item.title}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
    </div>
  )
}

export default ComingSoon
