import React from 'react';
import Building from '../../Building'; 
import '../SportsStyles/SportsCollectibles.scss';
import { Link } from 'react-router-dom';

function SportsCollectibles() {
  return (
  <div className="sports-collectibles__container">
    <div className="sports-collectibles__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/sports">
        <p>
          /sports
            </p>
      </Link>
      <p>/sports&collectibles</p>
    </div>
      <Building />
    </div>
  )
}

export default SportsCollectibles
