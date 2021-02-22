import React from 'react';
import Building from '../../Building'; 
import '../ToysKidsBabyStyle/KidsBirthdays.scss';
import { Link } from 'react-router-dom';
import JumpTo from '../../JumpTo';

function KidsBirthdays() {
  return (
  <div className="kids-birthdays__container">
          <JumpTo 
          path1 = "/toys&kids&baby/diapering"
          link1 = "/diapering"
          path2 = "/toys&kids&baby/baby"
          link2 = "/baby"
          path3 = "/toys&kids&baby/toys&games"
          link3 = "/toys&games"
          path4 = "/toys&kids&baby/babyregistry"
          link4 = "/babyregistry"
          path5 = "/toys&kids&baby/teen"
          link5 = "/teen"
          path6 = "/toys&kids&baby/family"
          link6 = "/family"
          path7 = "/toys&kids&baby/videogamekids"
          link7 = "/videogamekids"
        />
    <div className="kids-birthdays__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/toys&kids&baby">
        <p>
          /toys&kids&baby
            </p>
      </Link>
      <p>/kidsbirthday</p>
    </div>
      <Building />
    </div>
  )
}

export default KidsBirthdays
