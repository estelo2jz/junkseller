import React from 'react';
import { Link } from 'react-router-dom';
import ComingSoon from '../../ComingSoon';
import '../BeautyHealthStyles/AllBeauty.scss';
import Building from '../../Building';

function AllBeauty() {
  return (
    <div className="all-beauty__container">
      <div className="all-beauty__container">
        {/* <p>you are in :</p> */}
        <Link to="/beauty&health">
          <p>
            /beauty&health
          </p>
        </Link>
        <p>/allbeauty</p>
      </div>
      <div className="all-beauty__inner">
        <Building />
      </div>
      <div className="all-beauty__category-container">
        {/* <div className="all-beauty__category-heading">
          <p>explore</p>
          <p>our</p>
          <p>products</p>
        </div> */}
      </div>
      <ComingSoon />
    </div>
  )
}

export default AllBeauty
