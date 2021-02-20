import React from 'react';
import { Link } from 'react-router-dom';
import '../BeautyHealthStyles/FeaturedTemplate.scss';

function FeaturedTemplate({image, title, sub1, sub2, sub3}) {
  return (
    <Link to="/beauty&health/allbeauty" className="beauty-featured__outer">
      <div className="beauty-featured__container">
        <div className="beauty-featured__img">
          <img src={image} alt="featured-product" />
        </div>
        <div className="beauty-featured__title">
          <p>{title}</p>
        </div>
        <div className="beauty-featured__subs">
          <Link to="/beauty&health/allbeauty"><p>{sub1}</p></Link>
          <Link to="/beauty&health/allbeauty"><p>{sub2}</p></Link>
          <Link to="/beauty&health/allbeauty"><p>{sub3}</p></Link>
        </div>
      </div>
    </Link>
  )
}

export default FeaturedTemplate
