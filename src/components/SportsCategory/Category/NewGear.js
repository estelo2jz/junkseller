import React from 'react';
import Building from '../../Building'; 
import '../SportsStyles/NewGear.scss';
import { Link } from 'react-router-dom';

function NewGear() {
  return (
  <div className="new-gear__container">
    <div className="new-gear__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/sports">
        <p>
          /sports
            </p>
      </Link>
      <p>/new-gear-innovations</p>
    </div>
      <Building />
    </div>
  )
}

export default NewGear
