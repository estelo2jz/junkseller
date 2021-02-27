import React from 'react';
import Building from '../../Building'; 
import '../ToysKidsBabyStyle/Teen.scss';
import { Link } from 'react-router-dom';
import JumpTo from './JumpTo';

function Teen() {
  return (
  <div className="teen__container">
          <JumpTo 
          path1 = "/toys&kids&baby/diapering"
          link1 = "diapering"
          path2 = "/toys&kids&baby/kidsbirthdays"
          link2 = "kids-birthdays"
          path3 = "/toys&kids&baby/toys&games"
          link3 = "toys&games"
          path4 = "/toys&kids&baby/babyregistry"
          link4 = "baby-registry"
          path5 = "/toys&kids&baby/baby"
          link5 = "baby"
          path6 = "/toys&kids&baby/family"
          link6 = "family"
          path7 = "/toys&kids&baby/videogamekids"
          link7 = "video-game-kids"
        />
    <div className="teen__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/toys&kids&baby">
        <p>
          /toys&kids&baby
            </p>
      </Link>
      <p>/teen</p>
    </div>
      <Building />
    </div>
  )
}

export default Teen
