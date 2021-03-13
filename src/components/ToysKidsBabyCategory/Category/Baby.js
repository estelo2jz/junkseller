import React from 'react';
import Building from '../../Building'; 
import '../ToysKidsBabyStyle/Baby.scss';
import { Link} from 'react-router-dom';
import JumpTo from './JumpTo';

function Baby() {
  return (
    <div className="baby__container">
        <JumpTo 
          path1 = "/toys&kids&baby/diapering"
          link1 = "diapering"
          path2 = "/toys&kids&baby/kidsbirthdays"
          link2 = "kids-birthdays"
          path3 = "/toys&kids&baby/toys&games"
          link3 = "toys&games"
          path4 = "/toys&kids&baby/babyregistry"
          link4 = "baby-registry"
          path5 = "/toys&kids&baby/teen"
          link5 = "teen"
          path6 = "/toys&kids&baby/family"
          link6 = "family"
          path7 = "/toys&kids&baby/videogamekids"
          link7 = "video-game-kids"
        />
        <div className="baby__history-path">
            <Link to="/toys&kids&baby">
              <p>
              go back
              </p>
            </Link>
        </div>
      <Building />
    </div>
  )
}

export default Baby
