import React from 'react';
import { Link } from 'react-router-dom';
import '../FoodGroceryStyles/WholeFoods.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building';
import JumpTo from './JumpTo';

function WholeFoods() {
  return (
    <div className="whole-foods__container">
      <JumpTo 
        path1 = "/food&grocery/grocery&gourmet"
        link1 = "grocery&gourmet"
        path2 = "/food&grocery/pantry"
        link2 = "pantry"
        path3 = "/food&grocery/fresh"
        link3 = "fresh"
      />
      <div className="whole-foods__history-path">
      <Link to="/food&grocery">
          <p>
            go back
          </p>
        </Link>
      </div>
      <Building />
      {/* <ComingSoon /> */}
    </div>
  )
}

export default WholeFoods
