import React from 'react';
import { Link } from 'react-router-dom';
import '../FoodGroceryStyles/Pantry.scss'
import ComingSoon from '../../ComingSoon';
import Building from '../../Building';

function Pantry() {
  return (
    <div className="pantry__container">
      <div className="pantry__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/food&grocery">
          <p>
            /food&grocery
          </p>
        </Link>
        <p>/pantry</p>
      </div>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default Pantry
