import React from 'react';
import Building from '../../Building'; 
import '../SportsStyles/HuntingFishing.scss';
import { Link } from 'react-router-dom';

function HuntingFishing() {
  return (
  <div className="hunting-fishing__container">
    <div className="hunting-fishing__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/sports">
        <p>
          /sports
            </p>
      </Link>
      <p>/hunting&fishing</p>
    </div>
      <Building />
    </div>
  )
}

export default HuntingFishing
