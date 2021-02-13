import React from 'react';
import { Link } from 'react-router-dom';
import '../FoodGroceryStyles/WholeFoods.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building';

function WholeFoods() {
  return (
    <div className="whole-foods__container">
      <div className="whole-foods__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/food&grocery">
          <p>
            /food&grocery
          </p>
        </Link>
        <p>/wholefoods</p>
      </div>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default WholeFoods
