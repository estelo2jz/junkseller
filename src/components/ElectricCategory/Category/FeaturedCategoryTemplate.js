import React from 'react';
import '../ElectronicStyles/FeaturedCategory.scss';

function FeaturedCategoryTemplate(props) {
  return (
    <div className="featured-category__container">
      <div className="featured-category__image">
        <div className="featured-category__image-box">
         <img src={props.img} alt="category-featured"/>
        </div>
      </div>
      <div className="featured-category__heading">
        <p>
          <h4>{props.featured}</h4>
        </p>
      </div>
    </div>
  )
}

export default FeaturedCategoryTemplate
