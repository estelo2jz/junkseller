import React from 'react';
import { Link } from 'react-router-dom';
import '../FoodGroceryStyles/Pantry.scss'
import ComingSoon from '../../ComingSoon';
import Building from '../../Building';
import JumpTo from './JumpTo';

function Pantry() {
  return (
    <div className="pantry__container">
      <JumpTo 
        path1 = "/food&grocery/grocery&gourmet"
        link1 = "grocery&gourmet"
        path2 = "/food&grocery/fresh"
        link2 = "fresh"
        path3 = "/food&grocery/wholefoods"
        link3 = "whole-foods"
      />
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
      {/* <ComingSoon /> */}
    </div>
  )
}

export default Pantry
