import React from 'react';
import { Link } from 'react-router-dom';
import '../FoodGroceryStyles/GroceryGourmet.scss';
import Building from '../../Building';
import JumpTo from './JumpTo';

function GroceryGourmet() {
  return (
    <div className="grocery-gourmet__container">
      <JumpTo 
        path1 = "/food&grocery/fresh"
        link1 = "fresh"
        path2 = "/food&grocery/pantry"
        link2 = "pantry"
        path3 = "/food&grocery/wholefoods"
        link3 = "whole-foods"
      />
      <div className="grocery-gourmet__history-path">
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

export default GroceryGourmet
