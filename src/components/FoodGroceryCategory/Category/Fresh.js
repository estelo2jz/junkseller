import React from 'react';
import { Link } from 'react-router-dom';
import '../FoodGroceryStyles/Fresh.scss';
import Building from '../../Building';
import JumpTo from './JumpTo';

function Fresh() {
  return (
    <div className="fresh__container">
      <JumpTo 
        path1 = "/food&grocery/grocery&gourmet"
        link1 = "grocery&gourmet"
        path2 = "/food&grocery/pantry"
        link2 = "pantry"
        path3 = "/food&grocery/wholefoods"
        link3 = "whole-foods"
      />
      <div className="fresh__history-path">
      <Link to="/food&grocery">
          <p>
            go back
          </p>
        </Link>
      </div>
      <Building />
    </div>
  )
}

export default Fresh
