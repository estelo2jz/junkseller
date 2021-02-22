import React from 'react';
import Building from '../../Building'; 
import '../SportsStyles/SportsCollectibles.scss';
import { Link } from 'react-router-dom';
import JumpTo from '../../JumpTo';

function SportsCollectibles() {
  return (
  <div className="sports-collectibles__container">
          <JumpTo 
          path1 = "/sports/fanshop"
          link1 = "/fanshop"
          path2 = "/sports/exercise&fitness"
          link2 = "/exercise&fitness"
          path3 = "/sports/allsports&fitness"
          link3 = "/allsports&fitness"
          path4 = "/sports/newgearinnovations"
          link4 = "/newgearinnovations"
          path5 = "/sports/athleticclothing"
          link5 = "/athleticclothing"
          path6 = "/sports/hunting&fishing"
          link6 = "/hunting&fishing"
          path7 = "/sports/golf"
          link7 = "/golf"
          path8 = "/sports/leisure&game"
          link8 = "/leisure&game"
        />
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
