import React from 'react';
import Building from '../../Building'; 
import '../SportsStyles/LeisureGame.scss';
import { Link } from 'react-router-dom';

function LeisureGame() {
  return (
  <div className="leisure-game__container">
    <div className="leisure-game__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/sports">
        <p>
          /sports
            </p>
      </Link>
      <p>/leisure-sports&game-room</p>
    </div>
      <Building />
    </div>
  )
}

export default LeisureGame
