import React from 'react';
import Building from '../../Building'; 
import '../ToysKidsBabyStyle/ToysGames.scss';
import { Link } from 'react-router-dom';

function ToysGames() {
  return (
  <div className="toys-games__container">
    <div className="toys-games__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/toys&kids&baby">
        <p>
          /toys&kids&baby
            </p>
      </Link>
      <p>/toys&games</p>
    </div>
      <Building />
    </div>
  )
}

export default ToysGames
