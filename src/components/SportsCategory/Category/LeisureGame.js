import React from 'react';
import Building from '../../Building'; 
import '../SportsStyles/LeisureGame.scss';
import { Link } from 'react-router-dom';
import JumpTo from './JumpTo';

function LeisureGame() {
  return (
  <div className="leisure-game__container">
          <JumpTo 
          path1 = "/sports/fanshop"
          link1 = "fan-shop"
          path2 = "/sports/exercise&fitness"
          link2 = "exercise&fitness"
          path3 = "/sports/sports&collectibles"
          link3 = "sports&collectibles"
          path4 = "/sports/newgearinnovations"
          link4 = "new-gear-innovations"
          path5 = "/sports/athleticclothing"
          link5 = "athletic-clothing"
          path6 = "/sports/hunting&fishing"
          link6 = "hunting&fishing"
          path7 = "/sports/golf"
          link7 = "golf"
          path8 = "/sports/allsports&fitness"
          link8 = "allsports&fitness"
        />
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
