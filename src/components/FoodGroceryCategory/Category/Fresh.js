import React from 'react';
import { Link } from 'react-router-dom';
import '../FoodGroceryStyles/Fresh.scss';
import Building from '../../Building';
import JumpTo from '../../JumpTo';

function Fresh() {
  return (
    <div className="fresh__container">
      <JumpTo 
        path1 = "/food&grocery/grocery&gourmet"
        link1 = "/grocery&gourmet"
        path2 = "/food&grocery/pantry"
        link2 = "/pantry"
        path3 = "/food&grocery/wholefoods"
        link3 = "/wholefoods"
      />
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
    </div>
  )
}

export default Fresh
