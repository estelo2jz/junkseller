import React from 'react';
import Building from '../../Building'; 
import '../ToysKidsBabyStyle/KidsBirthdays.scss';
import { Link } from 'react-router-dom';

function KidsBirthdays() {
  return (
  <div className="kids-birthdays__container">
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
