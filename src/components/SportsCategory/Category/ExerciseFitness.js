import React from 'react';
import Building from '../../Building'; 
import '../SportsStyles/ExerciseFitness.scss';
import { Link } from 'react-router-dom';
import JumpTo from './JumpTo';

function ExerciseFitness() {
  return (
  <div className="exercise-fitness__container">
          <JumpTo 
          path1 = "/sports/fanshop"
          link1 = "fan-shop"
          path2 = "/sports/allsports&fitness"
          link2 = "all-sports&fitness"
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
          path8 = "/sports/leisure&game"
          link8 = "leisure&game"
        />
    <div className="exercise-fitness__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/sports">
        <p>
          /sports
            </p>
      </Link>
      <p>/exercise&fitness</p>
    </div>
      <Building />
    </div>
  )
}

export default ExerciseFitness
