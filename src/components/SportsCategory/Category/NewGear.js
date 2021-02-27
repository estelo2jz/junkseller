import React from 'react';
import Building from '../../Building'; 
import '../SportsStyles/NewGear.scss';
import { Link } from 'react-router-dom';
import JumpTo from './JumpTo';

function NewGear() {
  return (
  <div className="new-gear__container">
          <JumpTo 
          path1 = "/sports/fanshop"
          link1 = "fan-shop"
          path2 = "/sports/exercise&fitness"
          link2 = "exercise&fitness"
          path3 = "/sports/sports&collectibles"
          link3 = "sports&collectibles"
          path4 = "/sports/allsports&fitness"
          link4 = "all-sports&fitness"
          path5 = "/sports/athleticclothing"
          link5 = "athletic-clothing"
          path6 = "/sports/hunting&fishing"
          link6 = "hunting&fishing"
          path7 = "/sports/golf"
          link7 = "golf"
          path8 = "/sports/leisure&game"
          link8 = "leisure&game"
        />
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
