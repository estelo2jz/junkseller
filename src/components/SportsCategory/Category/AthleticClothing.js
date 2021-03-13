import React from 'react';
import Building from '../../Building'; 
import '../SportsStyles/AthleticClothing.scss';
import { Link } from 'react-router-dom';
import JumpTo from './JumpTo';

function AthleticClothing() {
  return (
  <div className="athletic-clothing__container">
          <JumpTo 
          path1 = "/sports/fanshop"
          link1 = "fan-shop"
          path2 = "/sports/exercise&fitness"
          link2 = "exercise&fitness"
          path3 = "/sports/sports&collectibles"
          link3 = "sports&collectibles"
          path4 = "/sports/newgearinnovations"
          link4 = "new-gear-innovations"
          path5 = "/sports/allsports&fitness"
          link5 = "all-sports&fitness"
          path6 = "/sports/hunting&fishing"
          link6 = "hunting&fishing"
          path7 = "/sports/golf"
          link7 = "golf"
          path8 = "/sports/leisure&game"
          link8 = "leisure&game"
        />
      <div className="athletic-clothing__history-path">
        <Link to="/sports">
          <p>
            go back
          </p>
        </Link>
      </div>
      <Building />
    </div>
  )
}

export default AthleticClothing
