import React from 'react';
import { Link } from 'react-router-dom';
import '../FoodGroceryStyles/Fresh.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building';

function Fresh() {
  return (
    <div className="fresh__container">
      <div className="fresh__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/food&grocery">
          <p>
            /food&grocery
          </p>
        </Link>
        <p>/fresh</p>
      </div>
      <Building />
      {/* <ComingSoon /> */}
    </div>
  )
}

export default Fresh
