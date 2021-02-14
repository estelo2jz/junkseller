import React from 'react';
import { Link } from 'react-router-dom';
import '../FoodGroceryStyles/GroceryGourmet.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building';

function GroceryGourmet() {
  return (
    <div className="grocery-gourmet__container">
      <div className="grocery-gourmet__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/food&grocery">
          <p>
            /food&grocery
          </p>
        </Link>
        <p>/grocery&gourmet</p>
      </div>
      <Building />
      {/* <ComingSoon /> */}
    </div>
  )
}

export default GroceryGourmet
