import React from 'react';
import Building from '../../Building'; 
import '../SportsStyles/golf.scss';
import { Link } from 'react-router-dom';
import JumpTo from '../../JumpTo';

function Golf() {
  return (
  <div className="golf__container">
          <JumpTo 
          path1 = "/sports/fanshop"
          link1 = "/fanshop"
          path2 = "/sports/exercise&fitness"
          link2 = "/exercise&fitness"
          path3 = "/sports/sports&collectibles"
          link3 = "/sports&collectibles"
          path4 = "/sports/newgearinnovations"
          link4 = "/newgearinnovations"
          path5 = "/sports/athleticclothing"
          link5 = "/athleticclothing"
          path6 = "/sports/hunting&fishing"
          link6 = "/hunting&fishing"
          path7 = "/sports/allsports&fitness"
          link7 = "/allsports&fitness"
          path8 = "/sports/leisure&game"
          link8 = "/leisure&game"
        />
    <div className="golf__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/sports">
        <p>
          /sports
            </p>
      </Link>
      <p>/golf</p>
    </div>
      <Building />
    </div>
  )
}

export default Golf
