import React from 'react';
import Building from '../../Building'; 
import '../ToysKidsBabyStyle/ToysGames.scss';
import { Link } from 'react-router-dom';
import JumpTo from '../../JumpTo';

function ToysGames() {
  return (
  <div className="toys-games__container">
          <JumpTo 
          path1 = "/toys&kids&baby/diapering"
          link1 = "/diapering"
          path2 = "/toys&kids&baby/kidsbirthdays"
          link2 = "/kidsbirthdays"
          path3 = "/toys&kids&baby/baby"
          link3 = "/baby"
          path4 = "/toys&kids&baby/babyregistry"
          link4 = "/babyregistry"
          path5 = "/toys&kids&baby/teen"
          link5 = "/teen"
          path6 = "/toys&kids&baby/family"
          link6 = "/family"
          path7 = "/toys&kids&baby/videogamekids"
          link7 = "/videogamekids"
        />
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
