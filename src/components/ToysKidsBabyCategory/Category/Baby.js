import React from 'react';
import Building from '../../Building'; 
import '../ToysKidsBabyStyle/Baby.scss';
import { Link} from 'react-router-dom';

function Baby() {
  return (
    <div className="baby__container">
        <div className="baby__history-path">
          {/* <p>you are in :</p> */}
          <Link to="/toys&kids&baby">
            <p>
              /toys&kids&baby
            </p>
          </Link>
          <p>/baby</p>
        </div>
      <Building />
    </div>
  )
}

export default Baby
