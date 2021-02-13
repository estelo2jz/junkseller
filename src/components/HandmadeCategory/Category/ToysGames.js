import React from 'react';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/ToysGames.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building'; 

function ToysGames() {
  return (
    <div className="toys-games__container">
      <div className="toys-games__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
          </p>
        </Link>
        <p>/toys&games</p>
      </div>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default ToysGames
